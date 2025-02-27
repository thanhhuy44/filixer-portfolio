import { useTranslations } from "next-intl";

import Section from "@/components/layout/section";

const Card = () => {
  return (
    <div className="rounded-xl bg-gray p-8 shadow-lg dark:bg-gray-100">
      <div className="grid grid-cols-4 gap-x-10">
        <div>
          <h5 className="text-subtitle font-bold text-[#14A800]">Gotham</h5>
        </div>
        <div className="col-span-2 space-y-4">
          <h6 className="text-subtitle font-semibold text-gray-900">Batman</h6>
          <ul className="text-body-2 list-disc pl-6 text-gray-600">
            <li>KAka</li>
          </ul>
        </div>
        <div>
          <p className="text-body-2 text-gray-700">Nov 2021 - Present</p>
        </div>
      </div>
    </div>
  );
};

function Experience() {
  const t = useTranslations();
  return (
    <Section
      heading={{
        title: t("Experience"),
        subTitle: t("Here is a quick summary of my most recent experiences:"),
      }}
      className="bg-gray-50"
    >
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
}

export default Experience;
