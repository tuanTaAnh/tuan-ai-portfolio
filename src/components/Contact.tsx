import { Mail, MapPin, Workflow } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import AnimatedCard from "@/components/AnimatedCard";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <AnimatedCard>
          <SectionHeader
            label="Contact"
            title="Let’s build something useful with AI."
            description="I am open to AI Engineer, GenAI/RAG, backend automation, data science, and working student opportunities in Germany or remote-friendly teams."
          />

          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={20} /> {profile.email}
            </a>

            <div className="contact-link">
              <MapPin size={20} /> {profile.location}
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaLinkedin size={20} /> linkedin.com/in/ta-anh-tuan-ai-engineer
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaGithub size={20} /> github.com/tuanTaAnh
            </a>
          </div>
        </AnimatedCard>

        <AnimatedCard className="lab-card bg-[#fffdf7] p-6 md:p-8">
          <Workflow className="mb-5 text-[#2454ff]" size={40} />

          <h3 className="text-4xl font-black leading-tight">
            More than a portfolio — a proof of engineering structure.
          </h3>

          <p className="mt-5 leading-8 text-[#514b45]">
            This portfolio is designed to show clean React architecture, typed
            data, reusable sections, animation, responsive layout, and project
            storytelling for AI/ML roles.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "GenAI product thinking",
              "RAG system architecture",
              "Backend API delivery",
              "Data science impact",
              "Cloud deployment mindset",
              "Clean React structure",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border-[1.5px] border-[#151515] bg-white p-4 text-sm font-black"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Email Me
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}