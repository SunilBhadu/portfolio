"use client";
import { Card, Carousel } from "@/components/projects/apple-cards-carousel";
import { data } from "@/components/projects/Data";

const PROJECT_SUMMARIES = [
  { name: 'EaseCARE', desc: 'Secure mental health platform with virtual consultations, licensed provider access, and clinical workflows.' },
  { name: 'WonderMD', desc: 'Pediatric platform featuring referral-based specialist workflows and group video sessions for up to 50 patients.' },
  { name: 'Omniva Telehealth', desc: 'Comprehensive telemedicine suite with secure video/chat, E-Prescriptions, and Fax API integration.' },
  { name: 'Neem Health', desc: 'AI-driven coordination platform with a symptom checker chatbot (OpenAI) and automated calendar synchronization.' },
  { name: 'SubOS', desc: 'Scalable billing infrastructure (Subscription OS) supporting metered usage, tiered pricing, and automated renewals.' },
  { name: 'Impler', desc: 'Open-source data import platform with an embeddable widget, dynamic Excel validation, and SDK integration.' },
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
