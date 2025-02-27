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
          <div key={index} className="flex flex-col items-center gap-y-2">
            <Image src={skill.icon} alt={skill.name} />
            <p className="text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skill;
