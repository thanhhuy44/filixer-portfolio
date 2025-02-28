"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  separateTime?: number;
  once?: boolean;
}

function TypingText({ text, separateTime = 0.02, once = false }: Props) {
  return (
    <>
      {text.split("").map((item, index) => {
        return (
          <motion.span
            key={item}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
              delay: separateTime * index,
            }}
            viewport={{
              once,
            }}
          >
            {item}
          </motion.span>
        );
      })}
    </>
  );
}

export default TypingText;
