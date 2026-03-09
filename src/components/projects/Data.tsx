import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PROJECT_CONTENT = [
  {
    title: 'EaseCare',
    category: 'Healthcare Platform',
    description:
      'A healthcare platform where patients can book appointments with doctors via video call and offline. Integrated Stripe for payments, AWS SES for emails, and Agora for video calls. Built with role-based access control and JWT authentication.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Stripe', 'AWS SES', 'Agora', 'JWT'],
    date: '2023',
    links: [{ name: 'Website', url: 'https://easecare.ca' }],
    images: [{ src: '/sunil.jpg', alt: 'EaseCare Healthcare Platform' }],
  },
  {
    title: 'WonderMD',
    category: 'Healthcare Platform',
    description:
      'Healthcare platform with a multi-user video call feature using Agora (multiple patients in one appointment). Focused on backend development to enable scalable telehealth sessions.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Agora'],
    date: '2023',
    links: [{ name: 'Website', url: 'https://wondermd.ca/' }],
    images: [{ src: '/sunil.jpg', alt: 'WonderMD Healthcare Platform' }],
  },
  {
    title: 'Omniva Telehealth',
    category: 'Healthcare SaaS (Multi-tenant)',
    description:
      'A multi-tenant healthcare SaaS platform with one master DB for client info and separate DB per client. Features wallet system (Stripe/Razorpay), AWS SES, SMTP, Mailgun for email, Twilio for SMS, AWS S3 for file uploads, and RBAC.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Razorpay', 'Twilio', 'AWS S3', 'AWS SES', 'Mailgun'],
    date: '2023–2024',
    links: [{ name: 'Website', url: 'https://omnivatelehealth.com' }],
    images: [{ src: '/sunil.jpg', alt: 'Omniva Telehealth SaaS' }],
  },
  {
    title: 'Neem Health',
    category: 'Healthcare Platform',
    description:
      'Full-stack healthcare platform built solo from planning to deployment. Features AI symptom checker chatbot (OpenAI API), Mailgun for emails, Azure Blob Storage for file uploads, and Google/Outlook Calendar integrations for appointments.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'OpenAI API', 'Azure Blob Storage', 'Mailgun', 'Google Calendar'],
    date: '2024',
    links: [{ name: 'Website', url: 'https://neemhealth.ai/' }],
    images: [{ src: '/sunil.jpg', alt: 'Neem Health Platform' }],
  },
  {
    title: 'SubOs',
    category: 'Subscription Management',
    description:
      'Internal subscription management system handling subscriptions for two company products (Artha and Impler). Built a reusable npm package for integration across products. Sole developer — managed from planning to deployment.',
    techStack: ['NestJS', 'PostgreSQL', 'TypeScript', 'Next.js', 'Stripe'],
    date: '2024',
    links: [],
    images: [{ src: '/sunil.jpg', alt: 'SubOs Subscription System' }],
  },
  {
    title: 'Impler',
    category: 'Open Source Data Import',
    description:
      "Knovator's open-source data import tool built as a monorepo. Managed solo from planning to deployment. Uses Docker for containerization and is publicly available for developers to integrate data import into their products.",
    techStack: ['Next.js', 'NestJS', 'MongoDB', 'TypeScript', 'Docker'],
    date: '2024',
    links: [{ name: 'Website', url: 'https://impler.io/' }],
    images: [{ src: '/sunil.jpg', alt: 'Impler Data Import Tool' }],
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
