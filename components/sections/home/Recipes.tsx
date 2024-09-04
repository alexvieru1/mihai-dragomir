import { FocusCards } from "@/components/ui/focus-cards";
import Link from "next/link";
import React from "react";

const Recipes = () => {
  const cards = [
    {
      title: "Paste",
      src: "/images/pasta.jpg",
    },
    {
      title: "Fructe de mare",
      src: "/images/seafood.jpg",
    },
    {
      title: "Tomahawk",
      src: "/images/tomahawk.webp",
    },
  ];
  return (
    <div className="4xs:my-10 md:my-20 lg:my-32 flex flex-col items-center p-4">
      <div className="flex flex-col lg:w-[60%]">
        <p className="text-lg md:text-4xl font-semibold mb-4 text-black dark:text-white max-w-4xl">
          Câteva rețete
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-10">
          Aruncă o privire peste câteva dintre rețetele mele
        </p>
      </div>
      <FocusCards cards={cards} />
      <div className="flex justify-center items-center my-10">
          <Link href="/recipes">
            <button className="px-4 py-2 backdrop-blur-sm border bg-[#f7e1a7] border-slate-700 text-slate-700 mx-auto text-center rounded-full relative mt-4">
              <span>Toate rețetele</span>
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Recipes;
