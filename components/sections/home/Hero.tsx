import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
        className="relative flex h-screen overflow-hidden z-[-20]"
      >
        <Image
          src="/images/mihai-dragomir.jpg"
          layout="fill"
          objectFit="cover"
          alt="background"
          className="absolute inset-0 z-0"
        />
      </motion.main>

      <motion.div
        className="relative mx-auto text-center 4xs:mt-[-430px] md:mt-[-400px] lg:mt-[-300px] w-[80%] bg-white bg-opacity-90 text-black p-8 border-4 border-[#f7e1a7] z-[-20]"
        variants={textReveal}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-signature mb-4">Chef Mihai Dragomir</h2>
        <p className="text-lg mb-4">
          Celebrated Culinary Maestro - Award-Winning Chef and Gourmet Specialist
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
