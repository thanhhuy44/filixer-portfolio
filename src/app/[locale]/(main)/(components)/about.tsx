import Image from "next/image";
import { useTranslations } from "next-intl";

import Section from "@/components/layout/section";

function About() {
  const t = useTranslations();
  return (
    <Section
      heading={{
        title: t("About me"),
      }}
      className="bg-gray-50"
    >
      <div className="grid gap-y-4 md:grid-cols-3 md:gap-x-12 xl:gap-x-20">
        <div>
          <Image
            src="https://s.yimg.com/ny/api/res/1.2/GsFpocadXuUN1VIyEtQWxg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkzNA--/https://media.zenfs.com/en-GB/blogs/ukiemovies/bat-3.jpg"
            alt=""
            className="h-auto w-full"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 space-y-6">
          <h4 className="heading-3 font-semibold">
            Curious about me? Here you have it:
          </h4>
          <article className="text-body-2 space-y-3 text-gray-600">
            <p>
              {
                "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me."
              }
            </p>
            <p>
              {
                "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more."
              }
            </p>
            <p>
              {
                "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development."
              }
            </p>
            <p>
              {
                "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub."
              }
            </p>
            <p>
              {
                "One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉"
              }
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}

export default About;
