"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Agentia (AI base website)",
    description:
      "A complete website featuring my AI tools and other projects. Built with modern web technologies including GeminiAI integration, Python backend, and responsive design using Tailwind CSS. Features AI tools integration and a portfolio of additional projects.",
    link: "https://github.com/Uzair-DeVops/Agentia",
    demo: "https://uzair-devops.github.io/Agentia/",
    images: ["/images/agentia.png"],
    tags: ["GeminiAI", "Python", "HTML", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Complete Multipage Website (Tailwind CSS)",
    description:
      "Developed using HTML, CSS, Tailwind CSS, and JavaScript, focusing on modern UI/UX with a responsive design. Features responsive multi-page layout, Tailwind-based styling, and modern UI/UX design principles.",
    link: "https://github.com/Uzair-DeVops/Complete_Website_no_1",
    demo: "https://complete-website-no-1.vercel.app/",
    images: ["/images/tailwind_website.png"],
    tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Complete AI Application with Multiple Features",
    description:
      "Developed agentic AI applications using LangChain and LLMs, making AI more interactive and context-aware. Features context-aware AI responses, agent-based architecture, and seamless integration with external APIs.",
    link: "https://github.com/Uzair-DeVops/Complete_AI_Application",
    demo: "https://completeaiapplication-ctrwnjvn2lqdtzkbgndjoc.streamlit.app/",
    images: ["/images/ai.png"],
    tags: ["LangChain", "Python", "Gemini"],
  },
  {
    id: 4,
    title: "Postsiva",
    description:
      "A comprehensive social automation tool designed to streamline social media management workflows. Built as a collaborative team project where I served as the Backend Developer, architecting and implementing the entire backend infrastructure using FastAPI. The platform includes advanced AI features for intelligent content automation, scheduling, and analytics. The frontend, developed by a teammate using Next.js, seamlessly integrates with the robust API I built, delivering a powerful and scalable solution for social media automation.",
    link: null,
    demo: "https://postsiva.com/",
    images: ["/images/image.png"],
    tags: ["FastAPI", "Python", "Next.js", "AI", "Backend Development", "REST API", "Social Automation"],
  },
  {
    id: 5,
    title: "Postsiva – Facebook Automation",
    description:
      "Next-generation Facebook automation platform for faster, smarter growth. Scale reach, automate engagement, and close more deals on Facebook. Features smart automation with human-like behavior, precision targeting, advanced analytics, engagement booster, team collaboration, and enterprise-grade safety with proxy rotation. Built with the same FastAPI backend I architected; the frontend delivers real-time automation and campaign management for modern founders and high-performing teams.",
    link: null,
    demo: "https://facebook.postsiva.com/",
    images: ["/images/WhatsApp Image 2026-02-10 at 3.20.36 PM (1).jpeg"],
    tags: ["FastAPI", "Python", "Next.js", "AI", "Backend Development", "REST API", "Facebook Automation"],
  },
  {
    id: 6,
    title: "Postsiva – YouTube Automation",
    description:
      "YouTube automation platform that streamlines content creation and channel growth. Users upload videos and the platform automatically generates AI-powered titles, descriptions, thumbnails, and timestamps based on channel persona. Features include smart scheduling, auto-publishing, channel analytics with growth trends, and an AI Comment Replier that engages with viewers 24/7 using your channel voice. Built with FastAPI backend integrating YouTube Data API and YouTube Analytics API for seamless automation.",
    link: "https://github.com/Uzair-DevOps",
    demo: "https://youtube.postsiva.com/",
    images: ["/images/WhatsApp Image 2026-02-10 at 3.28.54 PM.jpeg"],
    tags: ["FastAPI", "Python", "Next.js", "AI", "Backend Development", "REST API", "YouTube Automation"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#070615f8] p-8 scroll-mt-24">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My{" "}
        <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Projects
        </span>
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {/* First 3 projects (before Postsiva) */}
        {projects.slice(0, 3).map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-full rounded-xl bg-[#111827]/60 backdrop-blur-md overflow-hidden shadow-lg border border-blue-500 hover:shadow-[0_0_25px_#3b82f6] transition"
          >
            {/* Image container - show full image without cropping */}
            <div className="relative min-h-[200px] h-64 w-full bg-[#0f172a]/80 flex items-center justify-center overflow-hidden p-1">
              <Image
                className="object-contain transition duration-500 group-hover:scale-[1.02]"
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Category - first tag as label */}
            <h2 className="pt-3 px-4 text-xs font-semibold text-red-300 uppercase tracking-widest">
              {project.tags[0]}
            </h2>

            {/* Title & Description */}
            <div className="py-2 px-6">
              <h3 className="mb-2 text-xl font-extrabold text-gray-100 tracking-wide">
                {project.title}
              </h3>
              <p className="line-clamp-4 mb-3 text-gray-300">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-900/40 text-blue-300 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pb-4 px-6 flex justify-between items-center">
              <div className="flex space-x-4">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.31-1.28-1.66-1.28-1.66-1.05-.71.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.56.23 2.72.12 3.01.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.05.77 2.13v3.16c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition hover:scale-110"
                    title="Visit Live Site"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Postsiva projects */}
        {projects.slice(3).map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-full rounded-xl bg-[#111827]/60 backdrop-blur-md overflow-hidden shadow-lg border border-blue-500 hover:shadow-[0_0_25px_#3b82f6] transition"
          >
            {/* Image container - show full image without cropping */}
            <div className="relative min-h-[200px] h-64 w-full bg-[#0f172a]/80 flex items-center justify-center overflow-hidden p-1">
              <Image
                className="object-contain transition duration-500 group-hover:scale-[1.02]"
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Category - first tag as label */}
            <h2 className="pt-3 px-4 text-xs font-semibold text-red-300 uppercase tracking-widest">
              {project.tags[0]}
            </h2>

            {/* Title & Description */}
            <div className="py-2 px-6">
              <h3 className="mb-2 text-xl font-extrabold text-gray-100 tracking-wide">
                {project.title}
              </h3>
              <p className="line-clamp-4 mb-3 text-gray-300">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-900/40 text-blue-300 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pb-4 px-6 flex justify-between items-center">
              <div className="flex space-x-4">
                {/* GitHub - only show if link exists */}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.31-1.28-1.66-1.28-1.66-1.05-.71.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.56.23 2.72.12 3.01.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.05.77 2.13v3.16c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                  </Link>
                )}
                
                {/* Live Site / Demo - only show if demo exists */}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition hover:scale-110"
                    title="Visit Live Site"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* See More Projects Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="https://github.com/Uzair-DevOps"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 font-semibold text-lg rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 hover:scale-105 transition-all duration-300 text-white"
        >
          See More Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
