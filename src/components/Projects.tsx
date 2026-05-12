"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ExternalLink } from "lucide-react";
import {
  ProjectCategory,
  projectCategories,
  projects,
} from "@/data/portfolio";
import AnimatedCard from "@/components/AnimatedCard";
import SectionHeader from "@/components/SectionHeader";

const INITIAL_PROJECT_COUNT = 3;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_PROJECT_COUNT);

  const hiddenProjectCount = filteredProjects.length - visibleProjects.length;
  const hasMoreProjects = filteredProjects.length > INITIAL_PROJECT_COUNT;

  useEffect(() => {
    setShowAllProjects(false);
  }, [activeCategory]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeader
          label="Selected Work"
          title="Project stories with clear engineering context."
          description="A focused selection of GenAI, RAG, backend, data science, and cloud projects. Start with the highlighted projects, then expand the full list if needed."
        />

        <div className="flex max-w-2xl flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "rounded-full border-[1.5px] border-[#151515] bg-[#151515] px-4 py-2 text-sm font-black text-white"
                  : "rounded-full border-[1.5px] border-[#151515] bg-[#fffdf7] px-4 py-2 text-sm font-black transition hover:bg-[#ff6b35]"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl border-[1.5px] border-[#151515] bg-[#fffdf7] px-5 py-4">
        <p className="text-sm font-bold text-[#514b45]">
          Showing{" "}
          <span className="font-black text-[#151515]">
            {visibleProjects.length}
          </span>{" "}
          of{" "}
          <span className="font-black text-[#151515]">
            {filteredProjects.length}
          </span>{" "}
          projects
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {hasMoreProjects ? (
          <button
            onClick={() => setShowAllProjects((value) => !value)}
            className="hidden rounded-full border-[1.5px] border-[#151515] bg-[#ff6b35] px-4 py-2 text-sm font-black transition hover:bg-[#151515] hover:text-white sm:inline-flex"
          >
            {showAllProjects ? "Show less" : `Show ${hiddenProjectCount} more`}
          </button>
        ) : null}
      </div>

      <div className="grid gap-6">
        {visibleProjects.map((project, index) => (
          <AnimatedCard
            key={project.title}
            delay={index * 0.04}
            className="lab-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-[0.28fr_0.72fr]">
              <div className="border-b-[1.5px] border-[#151515] bg-[#151515] p-6 text-white lg:border-b-0 lg:border-r-[1.5px]">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ffb199]">
                  {project.category}
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  {project.subtitle}
                </p>
              </div>

              <div className="bg-[#fffdf7] p-6 md:p-8">
                <p className="max-w-4xl text-lg leading-8 text-[#514b45]">
                  {project.description}
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {project.impact.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border-[1.5px] border-[#151515] bg-white p-4 text-sm font-bold leading-6"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border-[1.5px] border-[#151515] bg-[#efe7d7] px-3 py-1 text-xs font-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links ? (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#151515] bg-[#2454ff] px-4 py-2 text-sm font-black text-white transition hover:bg-[#151515]"
                      >
                        {link.label} <ExternalLink size={15} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {hasMoreProjects ? (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAllProjects((value) => !value)}
            className={
              showAllProjects
                ? "inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#151515] bg-[#fffdf7] px-6 py-3 font-black transition hover:bg-[#efe7d7]"
                : "inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#151515] bg-[#ff6b35] px-6 py-3 font-black shadow-[4px_4px_0_#151515] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_#151515]"
            }
          >
            {showAllProjects ? (
              <>
                Show less <ArrowUp size={18} />
              </>
            ) : (
              <>
                Show {hiddenProjectCount} more projects <ArrowDown size={18} />
              </>
            )}
          </button>
        </div>
      ) : null}
    </section>
  );
}