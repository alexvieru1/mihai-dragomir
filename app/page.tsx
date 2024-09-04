"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "@/components/sections/home/Hero";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/sections/home/About";
import Recipes from "@/components/sections/home/Recipes";
import Contact from "@/components/sections/home/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            words={[
              "Hello",
              "Bonjour",
              "Ciao",
              "Olà",
              "やあ",
              "Hallo",
              "Guten tag",
              "Salut",
            ]}
          />
        )}
      </AnimatePresence>
      <Hero />
      <About/>
      <Recipes/>
      <Contact/>
    </div>
  );
}
