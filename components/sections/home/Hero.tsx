import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@/components/ui/button";
import { ImagesSlider } from "@/components/ui/images-slider";

const slideUp = {
  initial: {
    y: 300,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: 2.5,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.33, 1, 0.68, 1],
      delay: 3,
    },
  },
};

const Hero: React.FC = () => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const images = [
    "/images/mihai-dragomir.jpg",
    "/images/pasta.jpg",
    "/images/seafood.jpg",
  ];

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="relative flex h-screen overflow-hidden"
      >
        <ImagesSlider images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Chef Mihai Dragomir
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-[#f7e1a7] text-white mx-auto text-center rounded-full relative mt-4">
              <span>Afla mai mult</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      </motion.main>
    </div>
  );
};

export default Hero;
