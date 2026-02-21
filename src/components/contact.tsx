"use client";

import React, { useState } from "react";
import { Mail, User, MessageSquare, SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Failed to send");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#070615f8] text-white flex flex-col items-center justify-center p-6 scroll-mt-20 overflow-hidden"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase text-center mb-12"
      >
        CONTACT{" "}
        <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          ME
        </span>
      </motion.h1>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl flex flex-col lg:flex-row rounded-2xl shadow-xl border border-blue-500/30 overflow-hidden backdrop-blur-md bg-[#0b0816]/60 "
      >
        {/* Left Side: Contact Info */}
        <div className="lg:w-1/2 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-800/10 p-8 flex flex-col justify-center gap-6 relative">
          {/* Animated Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8B5CF6]/40 via-[#EC4899]/30 to-[#9606d4ee]/20 opacity-30 animate-pulse-slow"></div>
          <h2 className="text-2xl sm:text-3xl font-bold z-10">
            Let’s Connect!
          </h2>
          <p className="text-white/70 z-10">
            I’m always open for collaboration, project creation, or new
            opportunities. Feel free to reach out and let’s build something
            amazing together!
          </p>
          <div className="flex items-center gap-3 z-10">
            <Mail className="text-blue-400 w-6 h-6" />
            <a
              href="mailto:uzairyasin395@gmail.com"
              className="text-white font-semibold underline hover:text-blue-400 transition"
            >
              uzairyasin395@gmail.com
            </a>
          </div>
        </div>

        {/* Connector Line */}
        <div className="hidden lg:block w-0.5 bg-blue-500/30 mx-0" />

        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 p-8 z-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {status === "success" && (
              <p className="text-green-400 font-medium text-center py-2">Message sent. I&apos;ll get back to you soon.</p>
            )}
            {status === "error" && errorMessage && (
              <p className="text-red-400 font-medium text-center py-2">{errorMessage}</p>
            )}
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <div className="flex items-center bg-gray-800 rounded-lg border border-gray-600 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 transition">
                <User className="text-blue-400 w-5 h-5 ml-3" />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-transparent outline-none rounded-lg text-gray-200"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <div className="flex items-center bg-gray-800 rounded-lg border border-gray-600 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 transition">
                <Mail className="text-blue-400 w-5 h-5 ml-3" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-transparent outline-none rounded-lg text-gray-200"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <div className="flex items-start bg-gray-800 rounded-lg border border-gray-600 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 transition">
                <MessageSquare className="text-blue-400 w-5 h-5 ml-3 mt-3" />
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-transparent outline-none rounded-lg text-gray-200 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-lg shadow-md hover:opacity-90 transition hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <SendHorizonal className="w-5 h-5" />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
