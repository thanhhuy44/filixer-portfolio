"use client";

import { useTranslations } from "next-intl";

import { navs } from "@/constants";
import { Link } from "@/navigation";

import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
} from "../ui/sidebar";
import DownloadCV from "./download-cv";
import Logo from "./logo";
import ThemeSwitch from "./theme-switch";

function AppSidebar() {
  const t = useTranslations();
  return (
    <Sidebar>
      <SidebarHeader className="">
        <div className="mx-auto py-3">
          <Logo />
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          {navs.map((nav, index) => (
            <Link className="w-full" key={index} href={nav.link}>
              <Button className="w-full" variant="ghost">
                {t(nav.label)}
              </Button>
            </Link>
          ))}
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup className="text-body-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="flex-1">{t("Switch Theme")}</span>
            <ThemeSwitch />
          </div>
          <DownloadCV />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
