"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import Section from "@/components/layout/section";

interface IExperience {
  company: {
    name: string;
  };
  position: string;
  descriptions: string[];
  time: {
    from: string;
    to: string;
  };
}

const Card = ({ company, position, descriptions, time }: IExperience) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.25,
        y: 200,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="rounded-xl bg-gray p-8 shadow-lg dark:bg-gray-100"
    >
      <div className="grid grid-cols-4 gap-x-10">
        <div className="space-y-2 lg:space-y-3">
          <h5 className="text-subtitle font-bold text-[#14A800]">
            {company.name}
          </h5>
          <p className="text-body-3 text-gray-700">
            {time.from} - {time.to}
          </p>
        </div>
        <div className="col-span-3 space-y-4">
          <h6 className="text-subtitle font-semibold text-gray-900">
            {position}
          </h6>
          <ul className="text-body-2 list-disc pl-6 text-gray-600">
            {descriptions.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

function Experience() {
  const t = useTranslations();
  const experiences: IExperience[] = [
    {
      company: {
        name: "FRIENDIFY AI",
      },
      position: "Full Stack Developer",
      descriptions: [
        "Developed user interfaces using modern front-end technologies like React and Nextjs, ensuring responsive design and optimal user experiences. Worked closely with UI/UX designers to implement dynamic, visually appealing interfaces.",
        "Built and maintained back-end services and APIs using Expressjs, Nestjs. Integrated third-party services and APIs to enhance application functionality",
        "Ensured code quality through testing, debugging, and optimizing both client and server-side components",
        "Implemented blockchain Web3 solutions to enable decentralized application features and interactions",
        "Integrated decentralized applications with the Telegram mini app platform to provide seamless user experiences",
        "Working with QA teams and other stakeholder to implement new features and fix bugs",
      ],
      time: {
        from: "5/2023",
        to: "Present",
      },
    },
    {
      company: {
        name: "DEEIN",
      },
      position: "Frontend Developer",
      descriptions: [
        "Designed and developed web application (using Go Template), creating dynamic and efficient server-side rendering web pages optimized performance",
        "Develop mobile applications (with Flutter), delivering a cross-platform solution with seamless user experiences",
        "Partnered with cross-functional teams in consulting with clients to provide asset management risk strategy and mitigation, which increased AUM by 50%",
      ],
      time: {
        from: "Dec 2022",
        to: "May 2023",
      },
    },
    {
      company: {
        name: "TMA Solutions",
      },
      position: "Frontend Developer",
      descriptions: [
        "Developing and maintaining web applications, focusing on both front-end and back-end task",
        "Collaborated with the team to troubleshoot and debug code, ensuring optimal functionality and performance",
        "Contributed to code reviews and learned best practices for clean, maintainable code",
      ],
      time: {
        from: "5/2023",
        to: "Present",
      },
    },
  ];
  return (
    <Section
      heading={{
        title: t("Experience"),
        subTitle: t("Here is a quick summary of my most recent experiences:"),
      }}
      className="bg-gray-50"
    >
      <div className="mx-auto w-full max-w-4xl space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} {...exp} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
