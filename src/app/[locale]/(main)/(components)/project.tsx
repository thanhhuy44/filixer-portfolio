import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

const Card = () => {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-gray shadow-xl">
      <div className="bg-gray-50 p-12">
        <Link href="#" target="_blank">
          <Image
            src="https://upload.wikimedia.org/wikipedia/vi/f/f8/JokerTheDarkKnight.jpg"
            width={1000}
            height={1000}
            alt=""
            className="aspect-[4/3] rounded-xl"
          />
        </Link>
      </div>
      <div className="space-y-6 p-12">
        <h5 className="text-subtitle font-semibold">Fiskil</h5>
        <p className="text-body-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-gray-200 px-5 py-1 leading-none">
            <span className="text-body-3 leading-none text-gray-600">
              React
            </span>
          </span>
        </div>
        <div className="space-x-3">
          <Link href="#" target="_blank">
            <Button className="" variant="ghost" size="icon">
              <SquareArrowOutUpRight className="!size-5" />
            </Button>
          </Link>
        </div>
      </div>
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
        <Card />
      </div>
    </Section>
  );
}

export default Projects;
