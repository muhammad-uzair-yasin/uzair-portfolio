"use client";

import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 92 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "LLMs", level: 88 },
      { name: "Agentic AI", level: 85 },
      { name: "OpenAI SDK", level: 87 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 92 },
      { name: "React", level: 90 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "CI/CD", level: 88 },
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div variants={itemVariants} className="group">
      <div className="flex items-center justify-between mb-1">
        <span className="text-gray-200 font-medium text-xs sm:text-sm">
          {name}
        </span>
        <span className="text-cyan-400 font-semibold text-xs tabular-nums min-w-[2rem] text-right">
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: index * 0.02, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"
        />
      </div>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#070615f8] pt-12 sm:pt-16 pb-12 sm:pb-16 px-6 overflow-hidden scroll-mt-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="text-cyan-500/90 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            Technical Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Core{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Competencies
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            Backend systems, AI solutions, and production-ready apps.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-4 sm:p-5 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <h3 className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 pb-2 border-b border-blue-500/30">
                {group.title}
              </h3>
              <div className="space-y-2.5">
                {group.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={groupIndex * 10 + index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
