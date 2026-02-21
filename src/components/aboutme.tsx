"use client";

import { useState, useEffect } from "react";
import { Users, Cpu, Rocket } from "lucide-react";

const AboutMe = [
  {
    id: 1,
    title: "Full-Stack & AI Expert",
    icon: Users,
    description:
      "I specialize in building end-to-end solutions combining frontend and backend technologies with cutting-edge AI. From Next.js applications to FastAPI backends, I create seamless, intelligent systems.",
  },
  {
    id: 2,
    title: "Generative AI & Modern Frameworks",
    icon: Cpu,
    description:
      "I leverage LangChain, LangGraph, and modern AI frameworks to build intelligent applications. My expertise spans from AI-powered tools to scalable backend systems using Python and FastAPI.",
  },
  {
    id: 3,
    title: "Innovation & Continuous Learning",
    icon: Rocket,
    description:
      "Passionate about staying at the forefront of technology, I continuously explore new AI capabilities and development practices to deliver efficient, scalable, and impactful solutions.",
  },
];

export default function About() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisible((prev) => Array.from(new Set([...prev, id])));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll("[data-id]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-[12vh] py-16 px-4 sm:px-6 lg:px-8 bg-[#070615f8] overflow-hidden "
    >
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-600/30 via-cyan-600/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/30 via-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-5xl mx-auto relative z-10 text-center mb-10">
        <h2 className="text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
          WHY{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            ME
          </span>
        </h2>
        <p className="text-white max-w-2xl mx-auto sm:text-[18px] leading-relaxed mt-4">
          Full-Stack Developer and Generative AI Expert with expertise in Python, FastAPI, Next.js, and TypeScript. Specialized in developing AI-powered applications, backend systems, and full-stack solutions. Passionate about leveraging cutting-edge technologies like LangChain, LangGraph, and CrewAI to create efficient and scalable products.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto relative z-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {AboutMe.map((skill, index) => {
          const Icon = skill.icon;
          const isVisible = visible.includes(skill.id);
          return (
            <div
              key={skill.id}
              data-id={skill.id}
              className={`${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-black/30 backdrop-blur-md border border-blue-600/30 rounded-xl p-6 min-h-[230px] flex flex-col justify-between hover:bg-black/50 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 p-2 flex items-center justify-center shadow-lg shadow-blue-600/50 group-hover:shadow-cyan-500/70 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-600 to-transparent opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
