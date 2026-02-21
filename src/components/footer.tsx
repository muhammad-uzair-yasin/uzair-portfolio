"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Github, Mail, MessageCircle, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I'm Uzair's assistant. Ask me about him!" },
  ]);
  const [input, setInput] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  const responses: Record<string, string> = {
    hello: "Hello there! I'm Muhammad Uzair's personal chatbot. 😊",
    who: "Muhammad Uzair is a Full-Stack Developer and Generative AI Expert specializing in Python, FastAPI, Next.js, and modern AI frameworks. He is currently pursuing a Bachelor of Business and Information Technology at University of Engineering and Technology, Lahore.",
    skills:
      "Uzair's skills include Python, FastAPI, Next.js, TypeScript, LangChain, HTML, CSS, JavaScript, Django, and SQL. He specializes in building AI-driven applications and scalable solutions.",
    projects:
      "He builds full-stack applications, AI-powered tools, and scalable backend systems. Check out his Projects section for repos and demos!",
    goals:
      "Uzair's goal is to create efficient and scalable products leveraging cutting-edge technologies like LangChain, LangGraph, and CrewAI, combining full-stack development with Generative AI.",
    contact: "You can connect with Uzair on GitHub (github.com/Uzair-DevOps) or email (uzair@muhammad-uzair.com)! 💼",
  };

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsgLower = userText.toLowerCase();

    const matchedKey =
      Object.keys(responses).find((k) => userMsgLower.includes(k)) || "default";

    const reply =
      matchedKey === "default"
        ? "🤖 I can tell you about Uzair's skills, projects, or goals! Try asking about them."
        : responses[matchedKey];

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "bot", text: reply },
    ]);

    setInput("");
    setIsOpen(true);
  };

  return (
    <>
      {/* 🌈 FOOTER */}
      <footer className="relative bg-[#070615] text-gray-300 overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700 animate-gradient-x" />

        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Muhammad Uzair" width={64} height={64} className="rounded-lg object-contain shrink-0" />
            <div>
              <h2 className="text-2xl font-extrabold tracking-wide text-white">
                Muhammad{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Uzair
                </span>
              </h2>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Full-Stack Developer • Generative AI Expert & Modern Frameworks ✨
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center">
            <h3 className="text-white font-semibold mb-3 tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm">
              {["Home", "Skills", "Projects", "Contact"].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="relative group"
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-medium text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 transition-all group-hover:w-full"></span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 px-3 py-1 rounded-full mb-3 inline-block tracking-wider">
              Connect
            </h3>
            <div className="flex items-center space-x-5 mb-4">
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  link: "https://github.com/Uzair-DevOps",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  link: "mailto:uzair@muhammad-uzair.com",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  className="hover:text-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500 relative z-10">
          © {new Date().getFullYear()} Muhammad Uzair • All Rights Reserved
        </div>

        {/* Glowing animated background circles */}
        <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-700 opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 opacity-20 blur-3xl animate-pulse-slow"></div>
      </footer>

      {/* 🌟 Floating Chat Button */}
      <motion.button
        aria-label="Open Uzair chatbot"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:block font-medium text-sm">Ask Uzair</span>
      </motion.button>

      {/* 💬 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-8 w-80 h-96 bg-[#0c0b18] text-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-blue-500/30 z-[60]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 flex justify-between items-center">
              <h3 className="font-semibold text-sm">Muhammad Uzair Chatbot 🤖</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-300 p-1 rounded"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={messagesRef}
              className="flex-1 p-3 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/40 scrollbar-track-transparent"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.sender === "bot" ? -12 : 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "bot"
                      ? "bg-blue-600/20 text-blue-300 self-start"
                      : "bg-blue-500/80 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 flex items-center gap-2 border-t border-blue-500/20">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Uzair..."
                className="flex-1 bg-transparent border border-blue-500/40 rounded-lg px-3 py-1 text-sm focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-95 p-2 rounded-lg"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
