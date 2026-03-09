import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PROJECT_CONTENT = [
  {
    title: 'Neem Health',
    category: 'AI-Powered Healthcare Platform',
    description:
      'Neem Health is a comprehensive healthcare platform designed to connect patients with providers while centralizing medical records. Featuring an AI-powered symptom checker chatbot for personalized health guidance, it enables doctor discovery, online appointment scheduling, and multi-calendar synchronization (Google/Outlook). Built with real-time notifications (Socket.io) and background processing (Redis/Bull), the platform streamlines healthcare access through a secure, unified coordination system.',
    techStack: [
      'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 
      'OpenAI', 'LangChain', 'Azure AI Services', 'Redis', 'Bull', 'Socket.io', 
      'Twilio', 'Mailgun'
    ],
    date: '2025-2026',
    links: [{ name: 'Website', url: 'https://neemhealth.ai/' }],
    images: [{ src: '/neemhealth.jpg', alt: 'Neem Health Healthcare Platform' }],
  },
  {
    title: 'SubOS',
    category: 'Subscription Management Platform',
    description:
      'SubOS is a scalable subscription management platform (Subscription Operating System) designed to handle complex billing workflows, recurring payments, and usage-based pricing for SaaS applications. It provides a unified system for managing subscription lifecycles (trial, renewal, upgrade, downgrade, cancellation), multi-gateway integration (Stripe and Razorpay), and automated billing cycles. It features tiered and usage-based billing, automated invoice generation, and usage event tracking for metered billing, managed via background jobs with Redis and BullMQ.',
    techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeORM', 'TypeScript', 'Redis', 'BullMQ', 'Stripe', 'Razorpay', 'Sentry'],
    date: '2025-2026',
    links: [],
    images: [{ src: '/subos.jpg', alt: 'SubOS Subscription Management Platform' }],
  },
   {
    title: 'Impler',
    category: 'Open Source Data Import Platform',
    description:
      'Impler is an open-source platform providing a ready-to-use data import solution for developers. It features an embeddable widget for seamless CSV/Excel data onboarding, supporting both static and dynamic validation rules, Excel template generation, and built-in data cleaning. Integrated with webhooks to push data to applications, it streamlines customer data onboarding with a developer-friendly SDK. Managed as a monorepo, it uses Docker for containerization and supports community-driven development.',
    techStack: ['Node.js', 'React.js', 'TypeScript', 'MongoDB', 'NestJS', 'Docker', 'REST APIs'],
    date: '2025-2026',
    links: [
      { name: 'Website', url: 'https://impler.io/' },
      { name: 'GitHub', url: 'https://github.com/implerhq/impler.io' }
    ],
    images: [{ src: '/impler.jpg', alt: 'Impler Data Import Platform' }],
  },
  {
    title: 'Omniva Telehealth',
    category: 'Telemedicine Platform',
    description:
      'A full-stack telemedicine platform enabling remote consultations and digital healthcare management. Features secure video/chat via Agora SDK, a Digital Patient Records system, and E-Prescription functionality. Built with a multi-tenant architecture and an integrated Wallet System (Stripe/Razorpay), it also includes Fax integration for document sharing with pharmacies and providers.',
    techStack: [
      'Node.js', 'Express.js', 'MongoDB', 'Agora SDK', 'Stripe', 'Razorpay', 
      'Fax API', 'AWS SES', 'Twilio', 'AWS S3'
    ],
    date: '2023–2024',
    links: [{ name: 'Website', url: 'https://omnivatelehealth.com' }],
    images: [{ src: '/omniva.jpg', alt: 'Omniva Telemedicine Platform' }],
  },
  {
    title: 'EaseCARE',
    category: 'Telehealth Mental Health Platform',
    description:
      'A telemedicine platform enabling secure access to licensed physicians, psychiatrists, and therapists. Focused on mental health care, it features virtual appointments, assessments, and treatment plans. Built with a robust scheduling system, role-based access control, and comprehensive admin tools for managing medical staff and patient records.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Next.js', 'WebRTC', 'JWT'],
    date: '2023-2025',
    links: [{ name: 'Website', url: 'https://easecare.ca' }],
    images: [{ src: '/easecare.jpg', alt: 'EaseCARE Healthcare Platform' }],
  },
  {
    title: 'WonderMD',
    category: 'Pediatric Telemedicine Platform',
    description:
      'A specialized Canadian telemedicine platform connecting families with pediatricians and specialists. Featuring integrated multi-participant video consultations via Agora SDK and a unique group booking system supporting up to 50 patients, it streamlines complex referral workflows and digital health record management for pediatric care.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Next.js', 'Agora RTC SDK'],
    date: '2023-2025',
    links: [{ name: 'Website', url: 'https://wondermd.ca/' }],
    images: [{ src: '/wondermd.jpg', alt: 'WonderMD Pediatric Platform' }],
  },
  
  
  
 
];

interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image) => (
              <div
                key={image.alt}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const data = PROJECT_CONTENT.map((project) => ({
  category: project.category,
  title: project.title,
  src: project.images[0]?.src || '/sunil.jpg',
  content: <ProjectContent project={{ title: project.title }} />,
}));
