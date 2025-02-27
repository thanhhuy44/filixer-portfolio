import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Smartphone,
  Twitter,
} from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
          <h1 className="heading-1 font-bold">{"Hi, I'm Batman"} 👋</h1>
          <p className="text-body-2 text-gray-600">
            {
              "I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new."
            }
          </p>
        </div>
        <div className="text-body-2 space-y-1 text-gray-600">
          <p>
            <Mail className="mr-2 inline" /> gmail.com
          </p>
          <p>
            <Smartphone className="mr-2 inline" /> +84113
          </p>
          <p>
            <MapPin className="mr-2 inline" /> Thu Duc, HCMC
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link key={index} href={social.link} target="_blank">
                <Button variant="outline" size="icon">
                  <Icon />
                </Button>
              </Link>
            );
          })}
        </div>
        <div className="space-x-4">
          <Button variant="outline">Get in touch</Button>
          <Button>Download CV</Button>
        </div>
      </div>
      <div className="relative overflow-visible rounded-full after:absolute after:inset-0 after:size-full after:translate-x-[5%] after:translate-y-[5%] after:rounded-full after:bg-secondary">
        <Avatar className="relative z-[1] size-44 rounded-full sm:size-60 xl:size-[320px]">
          <AvatarImage
            src="https://genk.mediacdn.vn/139269124445442048/2022/7/28/4-1658977766624698888494.jpg"
            alt=""
            className="object-cover object-center"
          />
        </Avatar>
      </div>
    </section>
  );
}

export default Hero;
