"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to FastAPI framework",
      issuer: "Duke University",
      year: "January 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/6SQCYK51ATQ3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
      image: "/images/WhatsApp Image 2026-02-11 at 2.38.37 AM.jpeg",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft/LinkedIn",
      year: "March 2024",
      link: "https://www.linkedin.com/learning/certificates/29caa359109f170aa647f3d3d33f706d7dc310963c54bd1659cb9e16fce8b9a9?trk=share_certificate",
      image: "/images/WhatsApp Image 2026-02-11 at 2.38.01 AM.jpeg",
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      year: "2024",
      link: null,
      image: "/images/WhatsApp Image 2026-02-11 at 2.37.04 AM.jpeg",
    },
    {
      title: "AI & Machine Learning",
      issuer: "UET",
      year: "2024",
      link: null,
      image: "/images/WhatsApp Image 2026-02-11 at 2.36.30 AM.jpeg",
    },
    {
      title: "T3 Stack Certification",
      issuer: "T3 Stack",
      year: "2024",
      link: null,
      image: "/images/WhatsApp Image 2026-02-11 at 2.36.04 AM.jpeg",
    },
    {
      title: "Additional Certification",
      issuer: "Various",
      year: "2024",
      link: null,
      image: "/images/WhatsApp Image 2026-02-11 at 2.35.41 AM.jpeg",
    },
  ];

  return (
    // ✅ Section with ID for navbar smooth scroll
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#0b0816] border border-blue-800 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_#3b82f6] transition transform hover:-translate-y-2"
            >
              <div className="relative w-full h-56 bg-black flex items-center justify-center">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold">{cert.title}</h4>
                <p className="text-gray-300">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition"
                  >
                    View Certificate
                  </a>
                ) : (
                  <span className="mt-3 inline-block text-gray-500 border border-gray-500 px-4 py-2 rounded-lg cursor-not-allowed">
                    Certificate
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
