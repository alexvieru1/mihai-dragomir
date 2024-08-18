'use client';
import styles from './style.module.scss';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      if (window.innerWidth <= 480) {
        document.body.style.overflow = 'hidden'; // Disable scroll
      }
    } else {
      document.body.style.overflow = ''; // Re-enable scroll
    }

    return () => {
      document.body.style.overflow = ''; // Ensure scroll is re-enabled on component unmount
    };
  }, [isActive]);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    if (buttonRef.current) {
      // Hide the button initially
      gsap.set(buttonRef.current, { scale: 0 });

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top+=300 top",
        onEnter: () => {
          gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: 'power1.out' });
        },
        onLeaveBack: () => {
          gsap.to(buttonRef.current, { scale: 0, duration: 0.3, ease: 'power1.out' });
        },
      });
    }
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            ref={buttonRef}
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}
