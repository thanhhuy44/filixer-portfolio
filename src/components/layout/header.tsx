"use client";

import { AlignJustify } from "lucide-react";
import { useTranslations } from "next-intl";

import { navs } from "@/constants";
import { Link } from "@/navigation";

import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import DownloadCV from "./download-cv";
import Logo from "./logo";
import ThemeSwitch from "./theme-switch";

const Navbar = () => {
  const t = useTranslations();
  return (
    <div className="flex">
      {navs.map((nav, index) => (
        <Link key={index} href={nav.link} className="text-body-2 px-3 py-1">
          {t(nav.label)}
        </Link>
      ))}
    </div>
  );
};

function Header() {
  const { setOpenMobile } = useSidebar();
  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-gray">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden items-center gap-x-6 md:flex">
          <Navbar />
          <span className="block h-6 w-px bg-secondary"></span>
          <ThemeSwitch />
          <DownloadCV />
        </div>
        <div className="md:hidden">
          <Button
            onClick={() => setOpenMobile(true)}
            variant="ghost"
            size="icon"
          >
            <AlignJustify className="!size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
