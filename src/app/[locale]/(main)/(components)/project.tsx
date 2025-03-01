"use client";

import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

import FilixerMovie from "@/assets/images/projects/filixer-movie.png";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

interface IProject {
  thumbnail: StaticImageData;
  name: string;
  description: string;
  techs: string[];
  link: string;
}

const projects: IProject[] = [
  {
    thumbnail: FilixerMovie,
    name: "Filixer Movie",
    description:
      'An online platform for movie and TV show enthusiasts, offering a seamless way to explore the latest films and trending series. Users can browse categories like "Now Playing," "Popular," and "Top Rated," with detailed information on each title, including release year, ratings, and genre. ',
    techs: ["Nextjs", "TheMovieDB"],
    link: "https://filix-new.vercel.app/",
  },
];

const Card = ({ thumbnail, name, description, techs, link }: IProject) => {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-gray shadow-xl">
      <motion.div
        initial={{
          opacity: 0,
          y: "-100%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
        }}
        viewport={{
          once: true,
        }}
        className="bg-gray-50 p-12"
      >
        <Link href={link} target="_blank">
          <Image
            src={thumbnail}
            width={1000}
            height={1000}
            alt=""
            className="aspect-[4/3] rounded-xl"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "100%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 1,
        }}
        className="space-y-6 p-12"
      >
        <h5 className="text-subtitle font-semibold">{name}</h5>
        <p className="text-body-2 text-gray-600">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {techs.map((text, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-200 px-5 py-1 leading-none"
            >
              <span className="text-body-3 leading-none text-gray-600">
                {text}
              </span>
            </span>
          ))}
        </div>
        <div className="space-x-3">
          <Link href={link} target="_blank">
            <Button className="" variant="ghost" size="icon">
              <SquareArrowOutUpRight className="!size-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

function Projects() {
  const t = useTranslations();
  return (
    <Section
      className=""
      heading={{
        title: t("Projects"),
        subTitle: t("Some of the noteworthy projects I have built:"),
      }}
    >
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
