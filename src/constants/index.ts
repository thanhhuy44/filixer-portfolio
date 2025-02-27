import { StaticImageData } from "next/image";

import CypressIcon from "@/assets/images/skills/icon-cypress.svg";
import ExpressIcon from "@/assets/images/skills/icon-express.svg";
import FigmaIcon from "@/assets/images/skills/icon-figma.svg";
import GitIcon from "@/assets/images/skills/icon-git.svg";
import JavascriptIcon from "@/assets/images/skills/icon-javscript.svg";
import MongoIcon from "@/assets/images/skills/icon-mongodb.svg";
import NestjsIcon from "@/assets/images/skills/icon-nest.svg";
import NextjsIcon from "@/assets/images/skills/icon-nextjs.svg";
import NodejsIcon from "@/assets/images/skills/icon-nodejs.svg";
import PostgreIcon from "@/assets/images/skills/icon-postgresql.svg";
import ReactIcon from "@/assets/images/skills/icon-react.svg";
import SassIcon from "@/assets/images/skills/icon-sass.svg";
import SocketIcon from "@/assets/images/skills/icon-socket.svg";
import TailwindIcon from "@/assets/images/skills/icon-tailwindcss.svg";
import TypescriptIcon from "@/assets/images/skills/icon-typescript.svg";

export const navs = [
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Experience",
    link: "#experience",
  },
  {
    label: "Projects",
    link: "#projects",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

export const skills: Array<{
  icon: StaticImageData;
  name: string;
}> = [
  {
    icon: JavascriptIcon,
    name: "Javascript",
  },
  {
    icon: TypescriptIcon,
    name: "Typescript",
  },
  {
    icon: ReactIcon,
    name: "React",
  },
  {
    icon: NextjsIcon,
    name: "Next.js",
  },
  {
    icon: NodejsIcon,
    name: "Node.js",
  },
  {
    icon: ExpressIcon,
    name: "Express.js",
  },
  {
    icon: NestjsIcon,
    name: "Nest.js",
  },
  {
    icon: SocketIcon,
    name: "Socket.io",
  },
  {
    icon: PostgreIcon,
    name: "PostgreSQL",
  },
  {
    icon: MongoIcon,
    name: "MongoDB",
  },
  {
    icon: SassIcon,
    name: "Sass/Scss",
  },
  {
    icon: TailwindIcon,
    name: "Tailwindcss",
  },
  {
    icon: FigmaIcon,
    name: "Figma",
  },
  {
    icon: CypressIcon,
    name: "Cypress",
  },
  {
    icon: GitIcon,
    name: "Git",
  },
];
