/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";

const page = () => {
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
              "About me", // English
              "À propos de moi", // French
              "Chi sono", // Italian
              "Sobre mim", // Portuguese
              "私について", // Japanese
              "Über mich", // German
              "Despre mine", // Romanian
              "Despre mine", // Romanian (for "Salut")
            ]}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default page;
