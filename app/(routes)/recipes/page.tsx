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
              "Recipes", // English
              "Recettes", // French
              "Ricette", // Italian
              "Receitas", // Portuguese
              "レシピ", // Japanese
              "Rezepte", // German
              "Rețete", // Romanian
            ]}
          />
        )}
      </AnimatePresence>
      <div className="h-[3000px] w-full justify-center items-center text-center font-bold text-6xl">Recipes</div>
    </div>
  );
};

export default page;
