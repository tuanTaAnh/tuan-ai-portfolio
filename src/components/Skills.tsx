import {
  BadgeCheck,
  BrainCircuit,
  CalendarDays,
  Cloud,
  Database,
  GraduationCap,
  LucideIcon,
  MapPin,
  Server,
  Trophy,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import AnimatedCard from "@/components/AnimatedCard";
import SectionHeader from "@/components/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  brain: BrainCircuit,
  server: Server,
  database: Database,
  cloud: Cloud,
};

const educationItems = [
  {
    degree: "M.Sc. Data Science, AI & Digital Business",
    school: "GISMA University of Applied Sciences",
    location: "Potsdam, Germany",
    time: "2025 — 2027",
    note: "Focus on data science, machine learning, AI applications, and digital business transformation.",
  },
  {
    degree: "B.Eng. Software Engineering",
    school: "Posts and Telecommunications Institute of Technology",
    location: "Hanoi, Vietnam",
    time: "2016 — 2022",
    note: "Studied software development, algorithms, databases, data engineering, and machine learning fundamentals.",
  },
];

const certificationItems = [
  "Google Cloud Professional Machine Learning Engineer",
  "IELTS Academic 7.0",
];

const honorItems = [
  "Silver Medal — Vietnam Mathematical Olympiad",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader
        label="Skills"
        title="Technical stack for AI product engineering."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon];

          return (
            <AnimatedCard
              key={group.title}
              delay={index * 0.06}
              className="lab-card p-6 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between border-b-[1.5px] border-[#151515] pb-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] border-[#151515] bg-[#2454ff] text-white">
                  <Icon size={30} />
                </div>

                <span className="text-sm font-black uppercase tracking-[0.25em] text-[#6b645c]">
                  Stack
                </span>
              </div>

              <h3 className="text-2xl font-black">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border-[1.5px] border-[#151515] bg-white px-3 py-2 text-sm font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          );
        })}
      </div>

      <div className="mt-24">
        <SectionHeader
          label="Credentials"
          title="Education, certifications, and academic highlights."
          description="A quick overview of my academic background and professional credentials supporting my AI, data science, and cloud engineering profile."
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <AnimatedCard className="lab-card overflow-hidden">
            <div className="border-b-[1.5px] border-[#151515] bg-[#151515] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border-[1.5px] border-white/30 bg-[#ff6b35] text-[#151515]">
                  <GraduationCap size={26} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ffb199]">
                    Academic Background
                  </p>
                  <h3 className="mt-1 text-3xl font-black">Education</h3>
                </div>
              </div>
            </div>

            <div className="bg-[#fffdf7] p-6 md:p-8">
              <div className="space-y-5">
                {educationItems.map((item) => (
                  <div
                    key={item.degree}
                    className="rounded-2xl border-[1.5px] border-[#151515] bg-white p-5"
                  >
                    <h4 className="text-xl font-black">{item.degree}</h4>

                    <p className="mt-2 font-bold text-[#514b45]">
                      {item.school}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold text-[#6b645c]">
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={15} />
                        {item.location}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <CalendarDays size={15} />
                        {item.time}
                      </span>
                    </div>

                    <p className="mt-4 leading-7 text-[#514b45]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          <div className="grid gap-6">
            <AnimatedCard className="lab-card p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between border-b-[1.5px] border-[#151515] pb-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] border-[#151515] bg-[#2454ff] text-white">
                  <BadgeCheck size={28} />
                </div>

                <span className="text-sm font-black uppercase tracking-[0.25em] text-[#6b645c]">
                  Verified
                </span>
              </div>

              <h3 className="text-2xl font-black">Certifications</h3>

              <div className="mt-5 space-y-3">
                {certificationItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border-[1.5px] border-[#151515] bg-white p-4 text-sm font-black leading-6"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard className="rounded-[28px] border-[1.5px] border-[#151515] bg-[#151515] p-6 text-white md:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/20 pb-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/30 bg-[#ff6b35] text-[#151515]">
                  <Trophy size={28} />
                </div>

                <span className="text-sm font-black uppercase tracking-[0.25em] text-white/50">
                  Honors
                </span>
              </div>

              <h3 className="text-2xl font-black">Academic Highlight</h3>

              <div className="mt-5 space-y-3">
                {honorItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/20 bg-white/5 p-4 text-sm font-black leading-6"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}