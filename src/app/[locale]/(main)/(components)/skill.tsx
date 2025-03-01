"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Section from "@/components/layout/section";
import { skills } from "@/constants";

function Skill() {
  return (
    <Section
      heading={{
        title: "Skills",
        subTitle: "The skills, tools and technologies I am really good at:",
      }}
    >
      <div className="grid grid-cols-8 gap-12">
        {skills.map((skill, index) => (
          <motion.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.05 * index,
            }}
            viewport={{
              once: true,
            }}
            key={index}
            className="flex flex-col items-center gap-y-2"
          >
            <Image src={skill.icon} alt={skill.name} />
            <p className="text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Skill;
