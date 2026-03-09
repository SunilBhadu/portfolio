// src/components/chat/tool-renderer.tsx
import { Contact } from '../contact';
import Crazy from '../crazy';
import { Presentation } from '../presentation';
import AllProjects from '../projects/AllProjects';
import Resume from '../resume';
import Skills from '../skills';

interface ToolRendererProps {
  toolInvocations: any[];
  messageId: string;
}

export default function ToolRenderer({
  toolInvocations,
}: ToolRendererProps) {
  return (
    <div className="w-full transition-all duration-300">
      {toolInvocations.map((tool) => {
        const { toolCallId, toolName } = tool;

        switch (toolName) {
          case 'getProjects':
            return (
              <div key={toolCallId} className="w-full overflow-hidden rounded-lg">
                <AllProjects />
              </div>
            );

          case 'getPresentation':
            return (
              <div key={toolCallId} className="w-full overflow-hidden rounded-lg">
                <Presentation />
              </div>
            );

          case 'getResume':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Resume />
              </div>
            );

          case 'getContact':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Contact />
              </div>
            );

          case 'getSkills':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Skills />
              </div>
            );

          case 'getCrazy':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Crazy />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
