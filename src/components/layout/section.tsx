"use client";

import { ClassValue } from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import TypingText from "../ui/typing-text";

interface Props {
  heading?: {
    title?: string;
    subTitle?: string;
  };
  children?: ReactNode;
  className?: ClassValue;
}

function Section({ heading, className = "", children }: Props) {
  return (
    <div className={cn(className)}>
      <section className="space-y-6 md:space-y-9 xl:space-y-12">
        {heading ? (
          <div className="space-y-2 text-center lg:space-y-4">
            {heading.title ? (
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: 360,
                }}
                whileInView={{
                  rotate: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="mx-auto w-fit rounded-full bg-gray-200 px-5 py-1"
              >
                <h3 className="text-body-3 text-gray-600">{heading?.title}</h3>
              </motion.div>
            ) : null}
            {heading.subTitle ? (
              <motion.p
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="mx-auto max-w-xl"
              >
                <TypingText text={heading?.subTitle} once />
              </motion.p>
            ) : null}
          </div>
        ) : null}
        <div>{children}</div>
      </section>
    </div>
  );
}

export default Section;
