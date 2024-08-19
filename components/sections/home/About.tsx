"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const About = () => {
  return (
    <div className="flex 4xs:flex-col lg:flex-row justify-around 4xs:mt-10 md:mt-20 lg:mt-32 overflow-hidden">
      <div className="flex 4xs:flex-col lg:flex-row justify-around 4xs:w-full lg:w-[80%] mt-4 overflow-hidden">
        <div className="min-h-[70vh] lg:w-[50vw] lg:ml-5 flex flex-col p-10 z-[-20]">
          <h6 className="text-lg font-signature text-[#bb835e]">
            Despre mine
          </h6>
          <h2 className="text-xl text-center font-semibold mt-4">TEXT</h2>
          <div className="gap-y-2 text-md text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore e
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore e
            </p>
          </div>
          <div className="flex justify-between mt-6 items-center">
            <motion.div
              className="p-2 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <AnimatedCounter
                count={100000}
                classNameText="4xs:text-4xl md:text-2xl text-[#bb835e] font-semibold"
                classNameDiv="flex flex-row justify-end items-end"
                delayAmount={3}
                classNameSup="my-auto text-lg text-[#bb835e] font-semibold"
              />
              <h1 className="4xs:text-lg 4xs:text-center md:text-start md:text-base font-semibold">
                dish-uri preparate
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }} // Reduced the initial x offset
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 2 },
              }}
              viewport={{ once: true }}
              className="overflow-hidden" // Added overflow-hidden to contain the image within bounds
            >
              <Image
                className="4xs:hidden md:block"
                src="/images/pasta.jpg"
                width={300}
                height={150}
                alt="img"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-end items-center min-h-[70vh] lg:w-[50vw] lg:mr-5 overflow-hidden">
          <div className="flex-col justify-start items-start text-end px-5 z-[-20]">
            <motion.div
              className="border-[#f7e1a7] border-8 z-[-19]"
              initial={{ opacity: 0, x: -100 }} // Reduced the initial x offset
              whileInView={{
                opacity: 1,
                x: 20,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/seafood.jpg"
                width={600}
                height={600}
                alt="img"
              />
            </motion.div>
            <motion.div
              className="p-2 z-[-20]"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <AnimatedCounter
                count={10}
                classNameText="text-2xl text-[#bb835e] font-semibold"
                classNameDiv="flex flex-row justify-end items-end"
                delayAmount={3}
                classNameSup="my-auto text-lg text-[#bb835e] font-semibold"
              />
              <h1 className="font-semibold"> ani de experiență</h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Reduced the initial x offset
            whileInView={{
              opacity: 1,
              x: -10,
              transition: { duration: 1, delay: 2 },
            }}
            viewport={{ once: true }}
            className="overflow-hidden" // Added overflow-hidden to contain the image within bounds
          >
            <Image
              src="/images/tomahawk.webp"
              width={1000}
              height={1000}
              alt="img"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
