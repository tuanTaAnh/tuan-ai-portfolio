"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  Layers3,
  Server,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 md:px-8"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#151515] bg-[#fffdf7] px-4 py-2 text-sm font-black">
            <Sparkles size={16} className="text-[#ff6b35]" />
            {profile.headline}
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.08em] text-[#151515] sm:text-6xl lg:text-8xl">
            AI systems for{" "}
            <span className="text-accent-gradient">business workflows</span>,
            not just demos.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-[#514b45]">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </a>

            <a href={`mailto:${profile.email}`} className="btn-secondary">
              Contact Me
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="flat-card bg-[#fffdf7] p-4"
              >
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="mt-2 text-xs font-bold uppercase leading-5 text-[#6b645c]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -2, y: 24 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="lab-card relative p-5 md:p-7"
        >
          <div className="mb-6 flex items-center justify-between border-b-[1.5px] border-[#151515] pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#6b645c]">
                AI Engineering Map
              </p>
              <h2 className="mt-1 text-2xl font-black">From data to product</h2>
            </div>

            <div className="rounded-full border-[1.5px] border-[#151515] bg-[#2454ff] px-3 py-1 text-xs font-black text-white">
              LIVE
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Database,
                title: "Data & Documents",
                text: "PDFs, databases, transcripts, business events",
                color: "bg-[#ff6b35]",
              },
              {
                icon: BrainCircuit,
                title: "AI Layer",
                text: "RAG, embeddings, LLMs, prompt rules, evaluation",
                color: "bg-[#2454ff]",
              },
              {
                icon: Server,
                title: "Backend APIs",
                text: "FastAPI, Node.js, webhooks, auth, integrations",
                color: "bg-[#25c06d]",
              },
              {
                icon: Layers3,
                title: "Business Output",
                text: "Chatbots, dashboards, summaries, decisions",
                color: "bg-[#151515]",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.12 }}
                className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border-[1.5px] border-[#151515] bg-white p-4"
              >
                <div
                  className={`${item.color} grid h-12 w-12 place-items-center rounded-2xl border-[1.5px] border-[#151515] text-white`}
                >
                  <item.icon size={22} />
                </div>

                <div>
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6b645c]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border-[1.5px] border-[#151515] bg-[#151515] p-4 font-mono text-xs leading-6 text-[#fffdf7]">
            <p>
              <span className="text-[#ffb199]">role</span>: AI Engineer
            </p>
            <p>
              <span className="text-[#ffb199]">focus</span>: GenAI · RAG · APIs ·
              Data Science
            </p>
            <p>
              <span className="text-[#ffb199]">goal</span>: production-ready AI
              workflows
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}