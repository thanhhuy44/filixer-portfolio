"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Smartphone,
  Twitter,
} from "lucide-react";

import AvatarMe from "@/assets/images/me/hero.jpg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import TypingText from "@/components/ui/typing-text";
import { Link } from "@/navigation";

function Hero() {
  const socials = [
    {
      icon: Facebook,
      link: "#",
    },
    {
      icon: Github,
      link: "#",
    },
    {
      icon: Instagram,
      link: "#",
    },
    {
      icon: Twitter,
      link: "#",
    },
  ];

  return (
    <section className="flex flex-col-reverse items-center gap-x-16 gap-y-10 md:flex-row">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h1 className="heading-1 font-bold">
            <TypingText text="Hi, I'm Thanh Huy" />{" "}
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                delay: 5,
              }}
            >
              <motion.span
                className="inline-block origin-bottom-right"
                animate={{
                  rotate: [0, 30, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                👋
              </motion.span>
            </motion.span>
          </h1>
          <motion.p
            transition={{
              delay: 1,
            }}
            className="text-body-2 text-gray-600"
          >
            <TypingText
              separateTime={0.005}
              text={
                "I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new."
              }
              once
            />
          </motion.p>
        </div>
        <div className="text-body-2 space-y-1 text-gray-600">
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <Mail className="mr-2 inline" /> huy44.work@gmail.com
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            <Smartphone className="mr-2 inline" /> +840394674181
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <MapPin className="mr-2 inline" /> Thu Duc, HCMC
          </motion.p>
        </div>
        <div className="flex items-center gap-x-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  x: [200, 200, 0],
                }}
                transition={{
                  delay: index * 0.25,
                }}
              >
                <Link href={social.link} target="_blank">
                  <Button variant="outline" size="icon">
                    <Icon />
                  </Button>
                </Link>
              </motion.span>
            );
          })}
        </div>
        <div className="space-x-4">
          <motion.span
            className="inline-block"
            initial={{
              opacity: 0,
            }}
            animate={{
              y: [1000, 1000, 0],
              opacity: [0, 1],
            }}
          >
            <Link href="#get-in-touch">
              <Button variant="outline">Get in touch</Button>
            </Link>
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{
              opacity: 0,
            }}
            animate={{
              y: [1000, 1000, 0],
              opacity: [0, 1],
            }}
            transition={{
              delay: 0.5,
            }}
          >
            <Button>Download CV</Button>
          </motion.span>
        </div>
      </div>
      <div className="relative overflow-visible rounded-full after:absolute after:inset-0 after:size-full after:translate-x-[5%] after:translate-y-[5%] after:rounded-full after:bg-secondary">
        <Avatar className="relative z-[1] size-44 rounded-full sm:size-60 xl:size-[320px]">
          <AvatarImage
            src={AvatarMe.src}
            alt=""
            className="object-cover object-center"
          />
        </Avatar>
      </div>
    </section>
  );
}

export default Hero;
