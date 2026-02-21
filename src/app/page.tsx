"use client";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import React, { useState } from "react";

import Skills from "@/components/Services";

import Projects from "@/components/projects";
import N8nWorkflows from "@/components/N8nWorkflows";
import Contact from "@/components/contact";
import Certificates from "@/components/certificates";
import Footer from "@/components/footer";

import Education from "@/components/MyJourney";
import AboutMe from "@/components/aboutme";

const Homepage = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/*Hero section  */}

        <Hero />

        <AboutMe />
        <Skills />

        <Projects />
        <N8nWorkflows />
        <Certificates />
        <Education />

        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
