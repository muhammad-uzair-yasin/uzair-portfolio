"use client";
import React, { useState } from "react";
import TextEffect from "./textEffects";
import Image from "next/image";
import { motion } from "framer-motion";
import { downloadCV } from "@/utils/downloadCV";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      await downloadCV();
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Failed to download CV. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    // ✅ only ONE main container with id="home"
    <div
      id="home"
      className="relative bg-[#070615f8] bg-center bg-cover pt-[12vh]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 py-16">
        {/* ✅ Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:max-w-[50%]"
        >
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Muhammad Uzair
            </span>
          </h1>

          {/* Animated Text Effect */}
          <div className="mt-2">
            <TextEffect />
          </div>

          {/* Description */}
          <p className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
            Welcome to my portfolio! I&apos;m{" "}
            <span className="font-semibold">Muhammad Uzair</span>, a{" "}
            <span className="font-semibold">Generative AI Expert</span> and{" "}
            <span className="font-semibold">Full-Stack Developer</span> specializing in building{" "}
            <span className="font-semibold">AI-driven applications</span> and scalable solutions using{" "}
            <span className="font-semibold">Python</span>, <span className="font-semibold">FastAPI</span>,{" "}
            <span className="font-semibold">Next.js</span>, and modern AI frameworks.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating PDF...
                </>
              ) : (
                'Download CV'
              )}
            </button>
            
          </div>
        </motion.div>

        {/* ✅ Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[400px] relative flex justify-center items-center"
        >
          <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_25px_#3b82f6] hover:shadow-[0_0_45px_#06b6d4] transition duration-300">
            <Image
              src="/images/uzair11.png"
              alt="Muhammad Uzair"
              layout="responsive"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
