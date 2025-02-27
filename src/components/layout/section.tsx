import { ClassValue } from "clsx";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  heading?: {
    title?: string;
    subTitle?: string;
  };
  children?: ReactNode;
  className?: ClassValue;
}

function Section({ heading, className = "", children }: Props) {
  return (
    <div className={cn(className)}>
      <section className="space-y-6 md:space-y-9 xl:space-y-12">
        {heading ? (
          <div className="space-y-2 text-center lg:space-y-4">
            {heading.title ? (
              <div className="mx-auto w-fit rounded-full bg-gray-200 px-5 py-1">
                <h3 className="text-body-3 text-gray-600">{heading?.title}</h3>
              </div>
            ) : null}
            {heading.subTitle ? (
              <p className="mx-auto max-w-xl">{heading?.subTitle}</p>
            ) : null}
          </div>
        ) : null}
        <div>{children}</div>
      </section>
    </div>
  );
}

export default Section;
