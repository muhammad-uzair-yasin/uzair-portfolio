"use client";
import React from "react";

const CV = () => {
  return (
    <div id="cv-content" className="bg-white text-black p-8 max-w-4xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-blue-600 pb-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Muhammad Uzair</h1>
        <p className="text-xl text-gray-700 mb-3">Full-Stack Developer & Generative AI Expert</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span>📧 uzair@muhammad-uzair.com</span>
          <span>💻 github.com/Uzair-DevOps</span>
          <span>📍 Toba Tek Singh, Pakistan</span>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Full-Stack Developer and Generative AI Expert with expertise in Python, FastAPI, Next.js, and TypeScript. 
          Specialized in developing AI-powered applications, backend systems, and full-stack solutions. Passionate about 
          leveraging cutting-edge technologies like LangChain, LangGraph, and CrewAI to create efficient and scalable 
          products. Experienced in building AI-driven applications and scalable solutions using modern frameworks.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Backend Development</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Python</li>
              <li>FastAPI</li>
              <li>Django</li>
              <li>SQL</li>
              <li>RESTful API Design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">AI & Machine Learning</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>LangChain</li>
              <li>LangGraph</li>
              <li>CrewAI</li>
              <li>GeminiAI</li>
              <li>Generative AI</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Other Technologies</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Git & Version Control</li>
              <li>Streamlit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Key Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Postsiva – Facebook Automation</h3>
            <p className="text-sm text-gray-600 mb-1">Live: facebook.postsiva.com</p>
            <p className="text-gray-700 text-sm">
              Next-generation Facebook automation platform featuring smart automation with human-like behavior, 
              precision targeting, advanced analytics, and enterprise-grade safety. Built FastAPI backend architecture 
              for real-time automation and campaign management.
            </p>
            <p className="text-xs text-gray-600 mt-1">Tech: FastAPI, Python, Next.js, AI, REST API</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Postsiva – YouTube Automation</h3>
            <p className="text-sm text-gray-600 mb-1">Live: youtube.postsiva.com</p>
            <p className="text-gray-700 text-sm">
              YouTube automation platform that generates AI-powered titles, descriptions, thumbnails, and timestamps. 
              Features smart scheduling, auto-publishing, channel analytics, and AI Comment Replier. Integrated 
              YouTube Data API and YouTube Analytics API.
            </p>
            <p className="text-xs text-gray-600 mt-1">Tech: FastAPI, Python, Next.js, AI, YouTube APIs</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Postsiva</h3>
            <p className="text-sm text-gray-600 mb-1">Live: postsiva.com</p>
            <p className="text-gray-700 text-sm">
              Comprehensive social automation tool for streamlining social media management workflows. Architected and 
              implemented entire backend infrastructure using FastAPI with advanced AI features for intelligent content 
              automation, scheduling, and analytics.
            </p>
            <p className="text-xs text-gray-600 mt-1">Tech: FastAPI, Python, Next.js, AI, REST API</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Agentia (AI base website)</h3>
            <p className="text-sm text-gray-600 mb-1">GitHub: github.com/Uzair-DeVops/Agentia</p>
            <p className="text-gray-700 text-sm">
              A complete website featuring AI tools and other projects. Built with GeminiAI, Python, HTML, JavaScript, and Tailwind CSS.
            </p>
            <p className="text-xs text-gray-600 mt-1">Tech: GeminiAI, Python, HTML, JavaScript, Tailwind CSS</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Complete AI Application</h3>
            <p className="text-sm text-gray-600 mb-1">GitHub: github.com/Uzair-DeVops/Complete_AI_Application</p>
            <p className="text-gray-700 text-sm">
              Developed agentic AI applications using LangChain and LLMs, making AI more interactive and context-aware.
            </p>
            <p className="text-xs text-gray-600 mt-1">Tech: LangChain, Python, Gemini</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">AI Image Generator</h3>
            <p className="text-sm text-gray-600 mb-1">GitHub: github.com/Uzair-DevOps/AI-Image-Generator</p>
            <p className="text-gray-700 text-sm">
              AI-powered image generator with real-time generation, customizable parameters, and gallery view. 
              Built with Next.js, TypeScript, Prisma, and Neon for robust data management.
            </p>
            <p className="text-xs text-gray-600 mt-1">Tech: Next.js, TypeScript, ShadCN, Prisma, Neon</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Certifications</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex justify-between">
            <span><strong>Crash Course on Python</strong> - Google</span>
            <span className="text-gray-600">2024</span>
          </li>
          <li className="flex justify-between">
            <span><strong>AI & Machine Learning</strong> - UET</span>
            <span className="text-gray-600">2024</span>
          </li>
          <li className="flex justify-between">
            <span><strong>Career Essentials in Generative AI</strong> - Microsoft/LinkedIn</span>
            <span className="text-gray-600">2024</span>
          </li>
          <li className="flex justify-between">
            <span><strong>FastAPI Framework</strong> - Duke University</span>
            <span className="text-gray-600">2024</span>
          </li>
          <li className="flex justify-between">
            <span><strong>T3 Stack Certification</strong> - T3 Stack</span>
            <span className="text-gray-600">2024</span>
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Education</h2>
        <div>
          <p className="font-semibold text-gray-800">Bachelor of Business and Information Technology</p>
          <p className="text-gray-700 text-sm">University of Engineering and Technology, Lahore (2022-Present) - 3.5 CGPA</p>
        </div>
        <div className="mt-2">
          <p className="font-semibold text-gray-800">FSC Pre-Engineering</p>
          <p className="text-gray-700 text-sm">Barrett Hodgson International College (2020-2022) - A+ Grade</p>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-8 pt-4 border-t border-gray-300">
        <p>Generated from Portfolio - Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default CV;
