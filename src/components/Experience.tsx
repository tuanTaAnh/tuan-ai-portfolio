import { MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";
import AnimatedCard from "@/components/AnimatedCard";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader
        label="Career"
        title="Experience across AI products, data systems, and cloud delivery."
      />

      <div className="relative space-y-6">
        {experiences.map((experience, index) => (
          <AnimatedCard key={experience.company} delay={index * 0.06}>
            <div className="grid gap-6 rounded-[28px] border-[1.5px] border-[#151515] bg-[#fffdf7] p-6 md:p-8 lg:grid-cols-[0.33fr_0.67fr]">
              <div>
                <div className="inline-flex rounded-full border-[1.5px] border-[#151515] bg-[#ff6b35] px-4 py-2 text-xs font-black uppercase tracking-[0.2em]">
                  {experience.time}
                </div>

                <h3 className="mt-5 text-3xl font-black">
                  {experience.company}
                </h3>

                <p className="mt-2 font-bold text-[#514b45]">{experience.role}</p>

                <p className="mt-3 flex items-center gap-2 text-sm font-bold text-[#6b645c]">
                  <MapPin size={15} />
                  {experience.location}
                </p>
              </div>

              <div className="space-y-3">
                {experience.points.map((point) => (
                  <div
                    key={point}
                    className="grid grid-cols-[2rem_1fr] gap-3 rounded-2xl border-[1.5px] border-[#151515] bg-white p-4"
                  >
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-[#2454ff] text-sm font-black text-white">
                      →
                    </div>
                    <p className="leading-7 text-[#514b45]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}