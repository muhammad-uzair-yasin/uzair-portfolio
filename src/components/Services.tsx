"use client";

import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 87 },
      { name: "Mongoose", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Django", level: 86 },
      { name: "FastAPI", level: 92 },
      { name: "Flask", level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "HTML", level: 75 },
      { name: "CSS", level: 72 },
      { name: "TypeScript", level: 68 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Bootstrap", level: 62 },
      { name: "Next.js", level: 65 },
    ],
  },
  {
    title: "AI & Gen AI",
    skills: [
      { name: "LLMs", level: 88 },
      { name: "LangChain", level: 87 },
      { name: "LangGraph", level: 85 },
      { name: "CrewAI", level: 85 },
      { name: "SDK", level: 86 },
      { name: "Gemini", level: 84 },
      { name: "Custom GPTs", level: 86 },
      { name: "Numpy", level: 88 },
      { name: "Pandas", level: 87 },
      { name: "Matplotlib", level: 85 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 86 },
      { name: "Jenkins", level: 85 },
      { name: "Nginx", level: 85 },
      { name: "Amazon Cloud", level: 84 },
      { name: "Oracle Cloud", level: 82 },
      { name: "VPS", level: 86 },
      { name: "Web Hosting", level: 88 },
      { name: "GitHub Actions", level: 85 },
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
