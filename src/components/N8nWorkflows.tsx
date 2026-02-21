"use client";
import React from "react";
import { motion } from "framer-motion";
import { Workflow, Zap } from "lucide-react";

const n8nWorkflows = [
  { name: "LinkedIn AI Content Generator", description: "AI-powered LinkedIn post generation with persona and content tuning.", nodes: 49, active: true },
  { name: "Post Generator", description: "Generate and manage social posts with AI, scheduling, and publishing.", nodes: 52, active: true },
  { name: "Social Media Post Creation (Updated)", description: "End-to-end social media post creation with AI and multi-platform support.", nodes: 61, active: true },
  { name: "Calan Newsletter Generator", description: "Automated newsletter generation and distribution with custom links.", nodes: 44, active: true },
  { name: "Calan Newsletter gen", description: "Newsletter content generation and delivery automation.", nodes: 35, active: true },
  { name: "Article Scraper Parent Workflow", description: "Parent workflow for scraping and processing articles at scale.", nodes: 19, active: true },
  { name: "Competitor Analysis", description: "Analyze competitor content and performance with AI insights.", nodes: 33, active: true },
  { name: "Email Delivery with Brevo", description: "Transactional and marketing email delivery via Brevo (Sendinblue).", nodes: 12, active: true },
  { name: "Writing Style Analyzer", description: "Analyze and extract writing style patterns from content.", nodes: 9, active: true },
  { name: "Content Pattern Analyzer", description: "Detect content patterns and themes for strategy and optimization.", nodes: 9, active: true },
  { name: "Topics Keywords Extractor", description: "Extract topics and keywords from text for SEO and content planning.", nodes: 9, active: true },
  { name: "Page Info Analyzer", description: "Analyze page metadata and structure for content and SEO.", nodes: 9, active: true },
  { name: "Emoji Usage Analyzer", description: "Analyze emoji usage and engagement patterns in content.", nodes: 9, active: true },
  { name: "Discription Gen", description: "AI-generated descriptions for videos and social content.", nodes: 10, active: true },
  { name: "Title Gen", description: "Generate optimized titles for videos and posts.", nodes: 9, active: true },
  { name: "Timestamps Gen", description: "Auto-generate timestamps for video content.", nodes: 9, active: true },
  { name: "Thumbnail Gen", description: "Generate and optimize thumbnails for video and social.", nodes: 11, active: true },
  { name: "Comment Gen", description: "AI-generated comments and replies for engagement.", nodes: 9, active: true },
  { name: "Get/ Update/Delete Generated posts", description: "CRUD operations for generated posts and content storage.", nodes: 9, active: true },
  { name: "Add Competitors", description: "Add and manage competitor profiles for analysis workflows.", nodes: 10, active: true },
  { name: "Article Scrapping Subworkflow", description: "Subworkflow for article scraping and parsing.", nodes: 10, active: true },
  { name: "firecrawl", description: "Web scraping and extraction using Firecrawl integration.", nodes: 14, active: true },
  { name: "Video Analysis", description: "Analyze video content and extract insights with AI.", nodes: 4, active: true },
  { name: "Social Media", description: "Large-scale social media automation and orchestration.", nodes: 106, active: false },
  { name: "SEO Monthly Reporting Automation", description: "Automated SEO reports and performance dashboards.", nodes: 14, active: false },
  { name: "Hope Immigration - End of Call", description: "Call handling and follow-up automation for Hope Immigration.", nodes: 27, active: false },
];

const N8nWorkflows = () => {
  return (
    <section id="n8n" className="bg-[#070615f8] text-white py-16 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="w-8 h-8 text-cyan-400" />
          <p className="text-cyan-400/90 text-sm font-semibold tracking-widest uppercase">n8n Automation</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 uppercase">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            n8n Workflows
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm">
          Workflow automations built with n8n — content generation, analytics, scraping, email, and social media pipelines.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {n8nWorkflows.map((wf, index) => (
            <motion.div
              key={wf.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group rounded-xl bg-[#0b0816] border border-blue-800/50 hover:border-cyan-500/50 p-5 hover:shadow-[0_0_20px_#06b6d4] transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <Workflow className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${wf.active ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                  {wf.active ? "Active" : "Inactive"}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 line-clamp-2">{wf.name}</h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">{wf.description}</p>
              <p className="text-xs text-cyan-400/80">{wf.nodes} nodes</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default N8nWorkflows;
