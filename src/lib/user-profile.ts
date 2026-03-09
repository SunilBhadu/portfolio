/**
 * User Profile Data
 *
 * This file stores Sunil Bhadu's professional and personal details.
 * It is used to generate context/system prompts for AI model API calls.
 * Designed to be model-agnostic — works with OpenAI, Anthropic, Gemini, etc.
 */

export const userProfile = {
    personal: {
        name: "Sunil Bhadu",
        address: "501 Sky View, Opp. Dr World, Parvat Patiya, Surat",
        contact: "7600318720",
        email: "sunilbhadu155@gmail.com",
        linkedin: "https://www.linkedin.com/in/sunil-bhadu-xx",
        github: "https://github.com/SunilBhadu",
    },

    education: [
        {
            level: "10th (SSC)",
            institution: "Radiant English Academy, Surat",
            board: "CBSE",
            year: "2015–2016",
            result: "7.6 CGPA",
        },
        {
            level: "12th (HSC)",
            institution: "Radiant English Academy, Surat",
            board: "CBSE",
            year: "2017–2018",
            result: "59%",
        },
        {
            level: "B.Tech – Information Technology",
            institution: "Dhole Patil College of Engineering, Pune",
            university: "Savitribai Phule Pune University (SPPU)",
            year: "August 2018 – July 2022",
            result: "8.4 CGPA",
        },
    ],

    skills: {
        languages: ["JavaScript", "TypeScript", "Python"],
        frontend: ["Next.js", "React", "Angular"],
        backend: ["Node.js", "NestJS", "Express.js"],
        databases: ["MongoDB", "PostgreSQL"],
        cloud_and_devops: ["AWS S3", "AWS SES", "Azure Blob Storage", "Docker"],
        integrations: [
            "Stripe",
            "Razorpay",
            "Agora (Video Call)",
            "Twilio (SMS)",
            "Mailgun",
            "SMTP",
            "Anthropic API",
            "OpenAI API",
            "Google Calendar",
            "Outlook Calendar",
        ],
        auth_and_security: ["JWT", "Role-Based Access Control (RBAC)"],
        tools_and_practices: [
            "Git",
            "Monorepo",
            "npm packages",
            "REST APIs",
            "Multi-tenant Architecture",
        ],
        ai_tools_used: [
            "Claude",
            "Windsurf",
            "Antigravity",
            "CodeRabbit",
            "Gemini",
            "ChatGPT"
        ],
    },

    experience: [
        {
            company: "PiSyst Pvt Ltd",
            location: "Pune",
            role: "Python Developer Intern",
            period: "December 2021 – ~June 2022",
            details: [
                "4 months training + 2 months unpaid internship",
                "Learned HTML, CSS, Django, Python",
            ],
        },
        {
            company: "Global PayEx",
            location: "Remote/Pune",
            role: "Full Stack Developer",
            period: "August 7, 2022 – April 7, 2023",
            product: "https://globalpayex.com/",
            details: [
                "Worked on frontend using Angular",
                "Built automation scripts for testing login and signup pages",
                "Laid off after 8 months",
            ],
        },
        {
            company: "Knovator Technologies Pvt Ltd",
            location: "Surat",
            role: "Full Stack Developer",
            period: "April 2023 – Present",
            projects: [

                {
                    name: "Neem Health",
                    client: true,
                    url: "https://neemhealth.ai/",
                    type: "AI-Powered Healthcare Platform",
                    techStack: [
                        "Node.js", "Express.js", "MongoDB", "React", "Next.js",
                        "OpenAI", "LangChain", "Azure AI Services", "Redis", "Bull",
                        "Socket.io", "Twilio", "Mailgun"
                    ],
                    details: [
                        "Comprehensive healthcare platform connecting patients with providers and centralizing medical records",
                        "Built AI symptom checker chatbot using OpenAI and LangChain for personalized health guidance",
                        "Developed REST APIs and frontend features for doctor discovery, appointment scheduling, and dashboards",
                        "Implemented real-time notifications and messaging using Socket.io and Redis-backed Bull queues",
                        "Integrated Google Calendar and Outlook for provider availability synchronization",
                        "Developed telehealth video consultation features and secure healthcare data handling",
                        "Managed solo from planning to development, including client requirement gathering",
                    ],
                },
                {
                    name: "SubOS (Payment Gateway)",
                    internal: true,
                    type: "Subscription Operating System",
                    techStack: ["NestJS", "PostgreSQL", "TypeScript", "Node.js", "TypeORM", "Redis", "BullMQ"],
                    details: [
                        "Scalable subscription management platform handling complex billing workflows, recurring payments, and usage-based pricing",
                        "Subscription lifecycle management (trial, renewal, upgrade, downgrade, cancellation)",
                        "Multi-payment gateway integration including Stripe and Razorpay",
                        "Tiered and usage-based billing with automated invoice generation",
                        "Usage event tracking for metered billing and coupon/discount management",
                        "Background jobs using Redis and BullMQ for billing cycles and renewals",
                        "Created a reusable npm package (SubOS) for seamless integration across products",
                        "Managed solo from development to planning and deployment",
                    ],
                },
                {
                    name: "Impler",
                    product: true,
                    url: "https://impler.io/",
                    github: "https://github.com/implerhq/impler.io",
                    type: "Open Source Data Import Platform (Monorepo)",
                    techStack: ["Node.js", "React.js", "TypeScript", "MongoDB", "NestJS", "Docker", "REST APIs"],
                    details: [
                        "Open-source platform providing a ready-to-use data import solution for developers",
                        "Embeddable data import widget for seamless user data onboarding",
                        "Excel template generation with validation rules (static and dynamic)",
                        "Built-in data cleaning and validation engine during import",
                        "Webhook integration to send imported data to destination applications",
                        "Developer-friendly SDK for easy integration",
                        "Managed solo from development to planning and community-driven development",
                    ],
                },

                {
                    name: "Omniva Telehealth",
                    product: true,
                    url: "https://omnivatelehealth.com",
                    type: "Telemedicine Platform (Multi-tenant)",
                    techStack: [
                        "Node.js", "Express.js", "MongoDB", "Agora SDK",
                        "Stripe", "Razorpay", "Fax API", "AWS SES", "Twilio"
                    ],
                    details: [
                        "Full-stack telemedicine platform enabling remote consultations and digital healthcare management",
                        "Implemented secure real-time video and chat consultations using Agora SDK",
                        "Developed Digital Patient Records (DPR) and E-Prescription systems for secure data management",
                        "Built integrated Wallet System using Stripe and Razorpay for seamless consultation payments",
                        "Implemented Fax integration for sending medical documents to providers and pharmacies",
                        "Multi-tenant architecture with master DB and separate client-specific databases",
                        "Integrated AWS SES, SMTP, and Mailgun for automated email communications",
                    ],
                },
                {
                    name: "EaseCARE",
                    client: true,
                    url: "https://easecare.ca",
                    type: "Telehealth Mental Health Platform",
                    techStack: ["Node.js", "Express.js", "MongoDB", "React", "Next.js", "WebRTC", "JWT"],
                    details: [
                        "Telemedicine platform providing secure access to licensed physicians, psychiatrists, and therapists",
                        "Focused on mental health care via virtual appointments, assessments, and treatment plans",
                        "Built robust appointment booking and scheduling systems for streamlined care access",
                        "Developed secure APIs for managing consultations, user data, and clinical workflows",
                        "Implemented granular role-based access control and JWT authentication",
                        "Developed comprehensive admin tools for managing medical staff, patient records, and appointments",
                        "Optimized platform performance and API response handling for better user experience",
                    ],
                },
                {
                    name: "WonderMD",
                    client: true,
                    url: "https://wondermd.ca/",
                    type: "Pediatric Telemedicine Platform",
                    techStack: ["Node.js", "Express.js", "MongoDB", "React", "Next.js", "Agora RTC SDK"],
                    details: [
                        "Canadian telemedicine platform connecting families with pediatricians and child healthcare specialists",
                        "Developed referral-based specialist consultation workflows and secure health record management",
                        "Implemented unique group appointment booking system supporting up to 50 patients per session",
                        "Integrated Agora RTC SDK for multi-participant video consultations between patients and providers",
                        "Managed real-time participant joining, session handling, and appointment status synchronization",
                        "Optimized backend APIs for scalable concurrent participant and session management",
                        "Full-stack development of appointment booking and referral management modules",
                    ],
                },
            ],
        },
    ],

    summary: `Sunil Bhadu is a Full Stack Developer from Surat, India, with around 3+ years of professional experience. 
He holds a B.Tech in Information Technology from Dhole Patil College of Engineering, Pune (SPPU) with 8.4 CGPA.
He specializes in the MERN stack (MongoDB, Express.js, React.js, Node.js), along with NestJS, TypeScript, Angular, and Next.js.
He has extensive experience in building healthcare SaaS platforms including multi-tenant architectures, subscription/payment systems (Stripe, Razorpay), video call integrations (Agora), email/SMS services, AI chatbots (OpenAI API), and calendar integrations.
He has taken solo ownership of multiple projects (Neem Health, SubOS, Impler) — from requirement gathering through planning to full development.
He is proficient with modern AI development tools and actively uses them to accelerate development.`,
} as const;

export type UserProfile = typeof userProfile;

/**
 * Generates a plain-text system prompt string from the user profile.
 * This can be used directly as a system message in any AI model API call.
 *
 * @param options - Optional configuration to include/exclude sections
 */
export function generateSystemPrompt(options?: {
    includeSummary?: boolean;
    includePersonal?: boolean;
    includeEducation?: boolean;
    includeSkills?: boolean;
    includeExperience?: boolean;
}): string {
    const {
        includeSummary = true,
        includePersonal = true,
        includeEducation = true,
        includeSkills = true,
        includeExperience = true,
    } = options ?? {};

    const sections: string[] = [];

    if (includeSummary) {
        sections.push(`## About Me\n${userProfile.summary}`);
    }

    if (includePersonal) {
        const p = userProfile.personal;
        sections.push(
            `## Personal Details\n- Name: ${p.name}\n- Email: ${p.email}\n- Contact: ${p.contact}\n- Location: ${p.address}\n- LinkedIn: ${p.linkedin}\n- GitHub: ${p.github}`
        );
    }

    if (includeEducation) {
        const edu = userProfile.education
            .map(
                (e) =>
                    `- ${e.level} | ${e.institution}${'board' in e ? ` (${e.board})` : ""} | ${e.year} | ${e.result}`
            )
            .join("\n");
        sections.push(`## Education\n${edu}`);
    }

    if (includeSkills) {
        const s = userProfile.skills;
        sections.push(
            `## Skills\n- Languages: ${s.languages.join(", ")}\n- Frontend: ${s.frontend.join(", ")}\n- Backend: ${s.backend.join(", ")}\n- Databases: ${s.databases.join(", ")}\n- Cloud & DevOps: ${s.cloud_and_devops.join(", ")}\n- Integrations: ${s.integrations.join(", ")}\n- Auth: ${s.auth_and_security.join(", ")}`
        );
    }

    if (includeExperience) {
        const exp = userProfile.experience
            .map((job) => {
                let text = `### ${job.company} — ${job.role} (${job.period})`;
                if ("projects" in job && job.projects) {
                    const projList = job.projects
                        .map(
                            (p) =>
                                `  - **${p.name}** (${p.type}): ${p.details.join("; ")}`
                        )
                        .join("\n");
                    text += `\n${projList}`;
                } else if ("details" in job) {
                    text += `\n  ${job.details.join("; ")}`;
                }
                return text;
            })
            .join("\n\n");
        sections.push(`## Work Experience\n${exp}`);
    }

    return sections.join("\n\n");
}
