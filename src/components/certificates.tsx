"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function pdfToImageSlug(pdfFilename: string): string {
  const title = pdfFilename.replace(/\.pdf$/i, "").trim();
  const explicitSlug: Record<string, string> = {
    "Introduction to HTML, CSS, & JavaScript": "introduction-to-html-css--javascript",
    "Prompt and Context Engg ": "prompt-and-context-engg-",
    "Prompt and Context Engg": "prompt-and-context-engg-",
  };
  if (explicitSlug[title]) return explicitSlug[title];
  return title
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/&/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "");
}

const backendCertificates = [
  "Introduction to FastAPI framework.pdf",
  "Crash Course on Python.pdf",
  "Python Programming Fundamentals.pdf",
];

const aiCertificates = [
  "Agentic AI level 1.pdf",
  "Agentic Ai Level 2.pdf",
  "AI Agents: From Prompts to Multi-Agent Systems.pdf",
  "AI For Everyone.pdf",
  "Generative AI Application Developer Certificate.pdf",
  "Introduction to Generative AI.pdf",
  "Introduction to Large Language Models.pdf",
  "Introduction to Responsible AI.pdf",
  "Microsoft Certified: Azure AI Fundamentals.pdf",
  "Responsible AI: Applying AI Principles with Google Cloud.pdf",
  "Prompt and Context Engg .pdf",
];

const frontendCertificates = [
  "HTML and CSS in depth.pdf",
  "Introduction to HTML, CSS, & JavaScript.pdf",
  "Introduction to Next.js.pdf",
  "Tailwind CSS Basics.pdf",
  "Tailwind CSS Practice Project: Build a Product Card.pdf",
  "Tailwind CSS Practice Projects.pdf",
];

const issuerByTitle: Record<string, string> = {
  "Crash Course on Python": "Google",
  "Introduction to FastAPI framework": "Duke University",
  "Python Programming Fundamentals": "Coursera",
  "AI For Everyone": "DeepLearning.AI",
  "Introduction to HTML, CSS, & JavaScript": "IBM",
  "Introduction to Generative AI": "Google",
  "Introduction to Large Language Models": "Google",
  "Introduction to Responsible AI": "Google",
  "Microsoft Certified: Azure AI Fundamentals": "Microsoft",
  "Responsible AI: Applying AI Principles with Google Cloud": "Google Cloud",
  "HTML and CSS in depth": "Meta / Coursera",
  "Introduction to Next.js": "Vercel",
  "Generative AI Application Developer Certificate": "Google Cloud",
  "AI Agents: From Prompts to Multi-Agent Systems": "Coursera",
  "Agentic AI level 1": "Presidential Initiative for AI & Computing",
  "Agentic Ai Level 2": "Presidential Initiative for AI & Computing",
  "Prompt and Context Engg ": "—",
  "Prompt and Context Engg": "—",
};

const titleOverrides: Record<string, string> = {
  "Agentic AI level 1": "Agentic AI Level One",
  "Agentic Ai Level 2": "Agentic AI Level Two",
  "Prompt and Context Engg ": "Prompt and Context Engineering",
  "Prompt and Context Engg": "Prompt and Context Engineering",
};

function CertCard({
  file,
  index,
}: {
  file: string;
  index: number;
}) {
  const title = file.replace(/\.pdf$/i, "").trim();
  const displayTitle = titleOverrides[title] ?? title;
  const issuer = issuerByTitle[title] ?? "—";
  const pdfUrl = `/certificates/${encodeURIComponent(file)}`;
  const imageSlug = pdfToImageSlug(file);
  const image = `/images/certificates/${imageSlug}.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#0b0816] border border-blue-800 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_#3b82f6] transition transform hover:-translate-y-2"
    >
      <div className="relative w-full h-56 bg-black flex items-center justify-center">
        <Image
          src={image}
          alt={displayTitle}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">{displayTitle}</h4>
        <p className="text-gray-300">{issuer}</p>
        <p className="text-gray-400 text-sm">—</p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition"
        >
          View Certificate
        </a>
      </div>
    </motion.div>
  );
}

const Certificates = () => {
  const sections = [
    { id: "ai", title: "AI Related Certificates", files: aiCertificates },
    { id: "backend", title: "Backend Related Certificates", files: backendCertificates },
    { id: "frontend", title: "Frontend Related Certificates", files: frontendCertificates },
  ];

  return (
    <section
      id="certificates"
      className="bg-[#070615f8] text-white py-16 px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>

        {sections.map((section) => (
          <div key={section.id} className="mb-16 last:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 border-b border-blue-800 pb-2">
              {section.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.files.map((file, index) => (
                <CertCard key={file} file={file} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
