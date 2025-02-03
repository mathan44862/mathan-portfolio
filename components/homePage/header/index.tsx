"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const welcomeText = [
  { title: "H", highlight: true },
  { title: "e", highlight: true },
  { title: "y", highlight: true },
  { title: " ", highlight: false },
  { title: "t", highlight: false },
  { title: "h", highlight: false },
  { title: "e", highlight: false },
  { title: "r", highlight: false },
  { title: "e", highlight: false },
  { title: "!", highlight: false },
  { title: " ", highlight: false },
  { title: "W", highlight: true },
  { title: "e", highlight: true },
  { title: "l", highlight: true },
  { title: "c", highlight: true },
  { title: "o", highlight: true },
  { title: "m", highlight: true },
  { title: "e", highlight: true },
  { title: " ", highlight: false },
  { title: "t", highlight: false },
  { title: "o", highlight: false },
  { title: " ", highlight: false },
  { title: "m", highlight: false },
  { title: "y", highlight: false },
  { title: " ", highlight: false },
  { title: "w", highlight: false },
  { title: "o", highlight: false },
  { title: "r", highlight: false },
  { title: "l", highlight: false },
  { title: "d", highlight: false },
  { title: ".", highlight: false },
];
export default function Header() {
  const [animationDone, setAnimationDone] = useState<boolean>(false);

  const handleAnimationComplete = () => {
    setAnimationDone(true);
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-black text-white text-[40px] flex items-center justify-center px-4 top-0 absolute"
      animate={{
        y: animationDone ? "-100vh" : "0",
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <p className="text-wrap">
        {welcomeText.map((text, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className={`${text.highlight ? "text-red-400" : ""}`}
            onAnimationComplete={
              index === welcomeText.length - 1
                ? handleAnimationComplete
                : undefined
            }
          >
            {text.title}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
