"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  count: number;
  classNameText: string;
  classNameDiv: string;
  classNameSup: string;
  delayAmount: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  count,
  classNameText,
  classNameDiv,
  classNameSup,
  delayAmount,
}) => {
  const countValue = useMotionValue(0);
  const rounded = useTransform(countValue, Math.round);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const animation = animate(countValue, count, {
        duration: 2,
        delay: delayAmount,
      });

      return () => {
        animation.stop();
      };
    }
  }, [count, countValue, delayAmount, isInView]);

  return (
    <div ref={ref} className={classNameDiv}>
      <motion.h1 className={classNameText}>
        {rounded}
      </motion.h1>
      <sup className={classNameSup}>+</sup>
    </div>
  );
};

export default AnimatedCounter;
