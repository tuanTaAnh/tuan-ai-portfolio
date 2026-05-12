import { BrainCircuit, Code2, Database, Workflow } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import SectionHeader from "@/components/SectionHeader";

const expertiseItems = [
  {
    icon: BrainCircuit,
    title: "GenAI & RAG Systems",
    text: "Knowledge assistants, document extraction, retrieval pipelines, embeddings, vector databases, and grounded generation.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    text: "Call summaries, sentiment analysis, follow-up generation, auto-tagging, legal drafting, and workflow orchestration.",
  },
  {
    icon: Database,
    title: "Data Science Products",
    text: "Churn prediction, fraud detection, segmentation, recommendations, forecasting, evaluation, and explainability.",
  },
  {
    icon: Code2,
    title: "Backend APIs & SaaS",
    text: "FastAPI, Node.js, webhooks, PostgreSQL, cloud APIs, Slack/Telnyx/Stripe/Twilio integrations, and Dockerized delivery.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader
        label="Expertise"
        title="I connect AI models with real software systems."
        description="My work is not only about model experiments. I focus on the full path from data and documents to APIs, automation, monitoring, and business-facing AI products."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {expertiseItems.map((item, index) => (
          <AnimatedCard key={item.title} delay={index * 0.07} className="lab-card p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] border-[#151515] bg-[#ff6b35]">
                <item.icon size={28} />
              </div>
              <span className="text-5xl font-black text-[#efe7d7]">
                0{index + 1}
              </span>
            </div>

            <h3 className="text-2xl font-black">{item.title}</h3>
            <p className="mt-4 leading-8 text-[#6b645c]">{item.text}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}