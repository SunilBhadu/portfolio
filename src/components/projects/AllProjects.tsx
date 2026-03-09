"use client";
import { Card, Carousel } from "@/components/projects/apple-cards-carousel";
import { data } from "@/components/projects/Data";

const PROJECT_SUMMARIES = [
  { name: 'EaseCare', desc: 'Healthcare platform with video appointments, Stripe payments, and Agora video calls.' },
  { name: 'WonderMD', desc: 'Multi-user video call telehealth platform — multiple patients in one appointment.' },
  { name: 'Omniva Telehealth', desc: 'Multi-tenant healthcare SaaS with wallet system, Stripe/Razorpay, and SMS/email services.' },
  { name: 'Neem Health', desc: 'Solo-built platform with AI symptom checker (OpenAI API) and calendar integrations.' },
  { name: 'SubOs', desc: 'Internal subscription management system with reusable npm package and Stripe integration.' },
  { name: 'Impler', desc: 'Open-source data import tool (monorepo) — managed solo from planning to deployment.' },
];

export default function AllProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.src + index} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full pt-8">
      <h2 className="max-w-7xl mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />

      {/* Project summary list below carousel */}
      <div className="mt-2 space-y-3 px-1">
        {PROJECT_SUMMARIES.map((p, i) => (
          <div key={p.name} className="flex gap-3">
            <span className="text-muted-foreground shrink-0 text-sm font-medium">{i + 1}.</span>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">{p.name}</span>
              {' — '}{p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
