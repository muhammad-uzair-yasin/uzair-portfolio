"use client";

import { useState, useEffect } from "react";
import { BookOpen, Laptop, BrainCircuit, Briefcase } from "lucide-react";

const education = [
  {
    id: 1,
    title: "Agentic AI & Backend Developer | Cartlow",
    description:
      "Developing Agentic AI systems using LangChain, CrewAI, and LLMs to automate business processes and enhance decision-making workflows. Designing and optimizing backend APIs with FastAPI and Django, ensuring scalability, performance, and seamless integration with frontend systems. Building AI-powered features including data summarization, chatbot automation, and intelligent content generation. Implementing n8n workflows for business process automation and enterprise integration. Deploying applications with Docker and CI/CD pipelines for continuous integration and automated testing.",
    icon: Briefcase,
    year: "May 2025 – Present",
  },
  {
    id: 2,
    title: "Bachelor of Business and Information Technology | UET Lahore",
    description:
      "Currently pursuing my Bachelor's degree at University of Engineering and Technology, Lahore (2022-Present) with a 3.5 CGPA. Building a strong foundation in business and information technology, combining technical expertise with business acumen.",
    icon: BookOpen,
    year: "2022-Present",
  },
  {
    id: 3,
    title: "FSC Pre-Engineering | Barrett Hodgson International College",
    description:
      "Completed FSC Pre-Engineering from Barrett Hodgson International College (2020-2022) with an A+ Grade. This foundation prepared me for advanced studies in technology and engineering.",
    icon: Laptop,
    year: "2020-2022",
  },
  {
    id: 4,
    title: "Generative AI Expert | Full-Stack Developer",
    description:
      "Specializing in building AI-driven applications and scalable solutions using Python, FastAPI, Next.js, and modern AI frameworks. Passionate about leveraging cutting-edge technologies like LangChain, LangGraph, and CrewAI to create efficient and scalable products.",
    icon: BrainCircuit,
    year: "2024-Present",
  },
];

export default function EducationSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.getAttribute("data-step"));
            setVisibleSteps((prev) => Array.from(new Set([...prev, stepId])));
          }
        });
      },
      { threshold: 0.3 }
    );

    const steps = document.querySelectorAll("[data-step]");
    steps.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#070615f8] overflow-hidden "
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-radial from-blue-600/30 via-cyan-600/15 to-transparent rounded-full blur-[100px] animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/25 via-blue-600/15 to-transparent rounded-full blur-[80px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-[60px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto relative z-10 text-center mb-12">
        <h2 className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
          MY{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            JOURNEY
          </span>
        </h2>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden relative max-w-md mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-white/20 rounded-full"></div>

        <div className="space-y-6">
          {education.map((step, index) => {
            const Icon = step.icon;
            const visible = visibleSteps.includes(step.id);
            return (
              <div
                key={step.id}
                data-step={step.id}
                className={`relative flex items-start ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-600/50">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="ml-6 bg-black/30 backdrop-blur-md border border-blue-600/30 rounded-lg p-5 hover:bg-black/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-semibold">{step.title}</h3>
                    <span className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 px-2 py-1 rounded-full">
                      {step.year}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block relative max-w-6xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full rounded-full shadow-lg shadow-blue-500/50"></div>

        <div className="space-y-16">
          {education.map((step, index) => {
            const Icon = step.icon;
            const visible = visibleSteps.includes(step.id);
            const left = index % 2 === 0;
            return (
              <div
                key={step.id}
                data-step={step.id}
                className={`relative flex items-center ${
                  left ? "justify-start" : "justify-end"
                } ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-full sm:w-5/12 px-4 ${
                    left ? "sm:pr-8" : "sm:pl-8"
                  }`}
                >
                  <div className="bg-black/20 backdrop-blur-md border border-blue-600/30 rounded-lg p-6 hover:bg-black/40 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                    <span className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 px-2 py-1 rounded-full mb-2 inline-block">
                      {step.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 p-2 flex items-center justify-center shadow-lg shadow-blue-600/50 group-hover:shadow-cyan-500/70 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
