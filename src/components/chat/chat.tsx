'use client';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';


// Component imports
import ChatBottombar from '@/components/chat/chat-bottombar';
import ChatLanding from '@/components/chat/chat-landing';
import ChatMessageContent from '@/components/chat/chat-message-content';
import { SimplifiedChatView } from '@/components/chat/simple-chat-view';
import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import HelperBoost from './HelperBoost';

// ClientOnly component for client-side rendering
//@ts-ignore
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

// Define Avatar component props interface
interface AvatarProps {
  hasActiveTool: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isTalking: boolean;
}

// Dynamic import of Avatar component
const Avatar = dynamic<AvatarProps>(
  () =>
    Promise.resolve(({ hasActiveTool }: AvatarProps) => {
      return (
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${hasActiveTool ? 'h-20 w-20' : 'h-28 w-28'}`}
        >
          <div
            className="relative cursor-pointer overflow-hidden rounded-full"
            onClick={() => (window.location.href = '/')}
          >
            <img
              src="/avatar-landing.png"
              alt="AI Avatar"
              className={`object-cover object-center rounded-full ${hasActiveTool ? 'h-20 w-20' : 'h-28 w-28'}`}
            />
          </div>
        </div>
      );
    }),
  { ssr: false }
);

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

export type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  parts?: any[];
};

const Chat = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query');
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isTalking, setIsTalking] = useState(false);

  // Replaced useChat hook with standard state
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const stop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };

  // Dummy functions to keep existing props satisfied
  const reload = async () => null;
  const addToolResult = () => {};

  // Queries handled locally without API calls — map query text to tool name
  const LOCAL_TOOL_QUERIES: Record<string, string> = {
    "What are your projects? What are you working on right now?": "getProjects",
    "What are your skills? Give me a list of your soft and hard skills.": "getSkills",
    "How can I reach you? What kind of project would make you say \"yes\" immediately?": "getContact",
    "Who are you? I want to know more about you.": "getPresentation",
    "What are your hobbies and interests outside of work?": "getCrazy",
  };

  const LOCAL_TOOL_REPLIES: Record<string, string> = {
    getProjects: "Here are the projects I've worked on:",
    getSkills: "Here are my skills and areas of expertise:",
    getContact: "Here's how you can reach me:",
    getPresentation: "",
    getCrazy: "When I'm not coding, I'm usually into this:",
  };

  // Detect intent from free-form queries for fallback rendering
  const detectIntent = (query: string): string | null => {
    const q = query.toLowerCase();
    if (q.includes('fun') || q.includes('hobby') || q.includes('hobbies') || q.includes('interest')) return 'getCrazy';
    if (q.includes('project') || q.includes('built') || q.includes('portfolio') || (q.includes('work') && !q.includes('outside of work'))) return 'getProjects';
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('know')) return 'getSkills';
    if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('hire')) return 'getContact';
    if (q.includes('who are you') || q.includes('about you') || q.includes('introduce') || q.includes('yourself')) return 'getPresentation';
    return null;
  };

  // Fallback text used when the API is unavailable
  const FALLBACK_TEXTS: Record<string, string> = {
    getProjects: "Here are my projects! (AI is temporarily unavailable, but all the details are below 👇)",
    getSkills: "Here are my skills! (AI is temporarily unavailable, but the full list is below 👇)",
    getContact: "Here's how to reach me! (AI is temporarily unavailable, but the contact info is below 👇)",
    getPresentation: "Here's a quick intro about me! (AI is temporarily unavailable 👇)",
    getCrazy: "Here are my hobbies and interests! (AI is temporarily unavailable 👇)",
    default: "I'm having trouble connecting to the AI right now. You can still explore my portfolio using the **Me**, **Projects**, **Skills**, and **Contact** buttons below — they all work without any limit! 🚀",
    rateLimit: "You've reached the daily message limit (20 messages per day). Feel free to keep exploring using the quick buttons below — **Me**, **Projects**, **Skills**, and **Contact** all work without any limit! 👇",
  };

  const showFallbackMessage = (query: string, isRateLimit = false) => {
    if (isRateLimit) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: FALLBACK_TEXTS.rateLimit,
      }]);
      return;
    }

    const intent = detectIntent(query);
    if (intent) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: FALLBACK_TEXTS[intent],
        parts: [{
          type: 'tool-invocation',
          toolInvocation: {
            state: 'result',
            toolName: intent,
            toolCallId: `fallback-${Date.now()}`,
            result: {},
          },
        }],
      }]);
    } else {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: FALLBACK_TEXTS.default,
      }]);
    }
  };

  const append = async (message: { role: 'user', content: string }) => {
    setIsLoading(true);
    setLoadingSubmit(true);

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: message.role,
      content: message.content,
    };

    // Handle local tool queries without calling the API
    const toolName = LOCAL_TOOL_QUERIES[message.content];
    if (toolName) {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: LOCAL_TOOL_REPLIES[toolName],
        parts: [{
          type: 'tool-invocation',
          toolInvocation: {
            state: 'result',
            toolName,
            toolCallId: `local-${Date.now()}`,
            result: {},
          },
        }],
      };
      setMessages(prev => [...prev, newUserMessage, aiMessage]);
      setLoadingSubmit(false);
      setIsLoading(false);
      setIsTalking(true);
      setTimeout(() => setIsTalking(false), 1000);
      return;
    }

    const contextMessages = [...messages, newUserMessage];
    setMessages(contextMessages);

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: contextMessages }),
        signal: abortControllerRef.current.signal,
      });

      // Handle rate limiting gracefully
      if (response.status === 429) {
        showFallbackMessage(message.content, true);
        return;
      }

      const resJson = await response.json();

      if (!resJson.success) {
        showFallbackMessage(message.content);
        return;
      }

      const aiResponseContent = resJson.data;

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: aiResponseContent
        }
      ]);

      setLoadingSubmit(false);
      setIsTalking(true);

      setTimeout(() => {
        setIsTalking(false);
      }, Math.min(3000, Math.max(1000, aiResponseContent.length * 20)));

    } catch (error: any) {
      if (error.name === 'AbortError') return;
      console.error('Chat error:', error);
      showFallbackMessage(message.content);
    } finally {
      setLoadingSubmit(false);
      setIsLoading(false);
    }
  };

  const { currentAIMessage, latestUserMessage, hasActiveTool } = useMemo(() => {
    const latestAIMessageIndex = messages.findLastIndex(
      (m) => m.role === 'assistant'
    );
    const latestUserMessageIndex = messages.findLastIndex(
      (m) => m.role === 'user'
    );

    const result = {
      currentAIMessage:
        latestAIMessageIndex !== -1 ? messages[latestAIMessageIndex] : null,
      latestUserMessage:
        latestUserMessageIndex !== -1 ? messages[latestUserMessageIndex] : null,
      hasActiveTool: false,
    };

    if (result.currentAIMessage) {
      result.hasActiveTool =
        result.currentAIMessage.parts?.some(
          (part) =>
            part.type === 'tool-invocation' &&
            part.toolInvocation?.state === 'result'
        ) || false;
    }

    if (latestAIMessageIndex < latestUserMessageIndex) {
      result.currentAIMessage = null;
    }

    return result;
  }, [messages]);

  const isToolInProgress = messages.some(
    (m) =>
      m.role === 'assistant' &&
      m.parts?.some(
        (part) =>
          part.type === 'tool-invocation' &&
          part.toolInvocation?.state !== 'result'
      )
  );

  //@ts-ignore
  const submitQuery = (query) => {
    if (!query.trim() || isToolInProgress) return;

    setLoadingSubmit(true);
    append({
      role: 'user',
      content: query,
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.pause();
    }


    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      setInput('');
      submitQuery(initialQuery);
    }
  }, [initialQuery, autoSubmitted]);

  useEffect(() => {
    if (videoRef.current) {
      if (isTalking) {
        videoRef.current.play().catch((error) => {
          console.error('Failed to play video:', error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isTalking]);

  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isToolInProgress) return;
    submitQuery(input);
    setInput('');
  };

  const handleStop = () => {
    stop();
    setLoadingSubmit(false);
    setIsTalking(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Check if this is the initial empty state (no messages)
  const isEmptyState =
    !currentAIMessage && !latestUserMessage && !loadingSubmit;

  // Calculate header height based on hasActiveTool
  const headerHeight = hasActiveTool ? 100 : 180;

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Fixed Avatar Header with Gradient */}
      <div
        className="fixed top-0 right-0 left-0 z-50"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${hasActiveTool ? 'pt-6 pb-0' : 'py-6'}`}
        >
          <div className="flex justify-center">
            <ClientOnly>
              <Avatar
                hasActiveTool={hasActiveTool}
                videoRef={videoRef}
                isTalking={isTalking}
              />
            </ClientOnly>
          </div>

          <AnimatePresence>
            {latestUserMessage && !currentAIMessage && (
              <motion.div
                {...MOTION_CONFIG}
                className="mx-auto flex max-w-3xl px-4"
              >
                <ChatBubble variant="sent">
                  <ChatBubbleMessage>
                    <ChatMessageContent
                      message={latestUserMessage}
                      isLast={true}
                      isLoading={false}
                      reload={() => Promise.resolve(null)}
                    />
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto flex h-full max-w-3xl flex-col">
        {/* Scrollable Chat Content */}
        <div
          className="flex-1 overflow-y-auto px-2"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          <AnimatePresence mode="wait">
            {isEmptyState ? (
              <motion.div
                key="landing"
                className="flex min-h-full items-center justify-center"
                {...MOTION_CONFIG}
              >
                <ChatLanding submitQuery={submitQuery} />
              </motion.div>
            ) : currentAIMessage ? (
              <div className="pb-4">
                <SimplifiedChatView
                  message={currentAIMessage}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                />
              </div>
            ) : (
              loadingSubmit && (
                <motion.div
                  key="loading"
                  {...MOTION_CONFIG}
                  className="px-4 pt-18"
                >
                  <ChatBubble variant="received">
                    <ChatBubbleMessage isLoading />
                  </ChatBubble>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Fixed Bottom Bar */}
        <div className="sticky bottom-0 bg-white px-2 pt-3 md:px-0 md:pb-4">
          <div className="relative flex flex-col items-center gap-3">
            <HelperBoost submitQuery={submitQuery} setInput={setInput} />
            <ChatBottombar
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={onSubmit}
              isLoading={isLoading}
              stop={handleStop}
              isToolInProgress={isToolInProgress}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Chat;
