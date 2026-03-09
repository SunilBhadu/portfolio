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
                    type: "Healthcare Platform",
                    techStack: ["Node.js", "Express.js", "MongoDB", "React.js"],
                    details: [
                        "Mailgun for email integration",
                        "Azure Blob Storage for file uploads",
                        "Built AI symptom checker chatbot using OpenAI API",
                        "Integrated Google Calendar and Outlook Calendar for appointment visibility",
                        "Handled client meetings independently to gather feature requirements",
                        "Managed the entire project solo from planning to development",
                    ],
                },
                {
                    name: "SubOs (Payment Gateway)",
                    internal: true,
                    type: "Internal Subscription Management System",
                    techStack: ["NestJS", "PostgreSQL", "TypeScript", "Next.js"],
                    details: [
                        "Handles subscriptions for Artha and Impler (two company products)",
                        "Stripe subscription integration",
                        "Created a reusable npm package (SubOs) for integration across products",
                        "Managed solo from development to planning — chosen for responsibility and ownership",
                    ],
                },
                {
                    name: "Impler",
                    product: true,
                    url: "https://impler.io/",
                    type: "Open Source Data Import Tool (Monorepo)",
                    techStack: ["Next.js", "NestJS", "MongoDB", "TypeScript", "Docker"],
                    details: [
                        "Open source product by Knovator",
                        "Monorepo architecture",
                        "Used Docker for containerization",
                        "Managed solo from development to planning",
                    ],
                },

                {
                    name: "Omniva Telehealth",
                    product: true,
                    url: "https://omnivatelehealth.com",
                    type: "Healthcare SaaS (Multi-tenant)",
                    techStack: ["Node.js", "Express.js", "MongoDB"],
                    details: [
                        "Multi-tenant database architecture: one master DB for client info + separate DB per client",
                        "Integrated Stripe and Razorpay for patient payments",
                        "Built wallet system: patients add money via Stripe/Razorpay, use it to book appointments",
                        "Integrated AWS SES, SMTP, Mailgun for email",
                        "Twilio for SMS notifications",
                        "AWS S3 for file uploads",
                        "Role-based access control, JWT authentication",
                    ],
                },
                {
                    name: "EaseCare",
                    client: true,
                    url: "https://easecare.ca",
                    type: "Healthcare Platform",
                    techStack: ["Node.js", "Express.js", "MongoDB"],
                    details: [
                        "Patients can book appointments with doctors via video call and offline",
                        "Integrated Stripe for payments",
                        "Integrated AWS SES for emails",
                        "Integrated Agora for video calls",
                        "Role-based access control, JWT authentication",
                    ],
                },
                {
                    name: "WonderMD",
                    client: true,
                    url: "https://wondermd.ca/",
                    type: "Healthcare Platform",
                    techStack: ["Node.js", "Express.js", "MongoDB"],
                    details: [
                        "Developed multi-user video call feature using Agora (multiple patients in one appointment)",
                        "Backend development",
                    ],
                },
            ],
        },
    ],

    summary: `Sunil Bhadu is a Full Stack Developer from Surat, India, with around 3+ years of professional experience. 
He holds a B.Tech in Information Technology from Dhole Patil College of Engineering, Pune (SPPU) with 8.4 CGPA.
He specializes in the MERN stack (MongoDB, Express.js, React.js, Node.js), along with NestJS, TypeScript, Angular, and Next.js.
He has extensive experience in building healthcare SaaS platforms including multi-tenant architectures, subscription/payment systems (Stripe, Razorpay), video call integrations (Agora), email/SMS services, AI chatbots (OpenAI API), and calendar integrations.
He has taken solo ownership of multiple projects (Neem Health, SubOs, Impler) — from requirement gathering through planning to full development.
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
