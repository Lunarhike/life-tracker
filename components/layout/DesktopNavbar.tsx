"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "./ThemeSwitch";
import { navbarConfig } from "@/config/navbar";

export function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <header className="hidden md:flex justify-between h-16 items-center">
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="mr-12 font-thin text-heading text-lg font-code tracking-tight"
        >
          <span className="">{siteConfig.name}</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          {navbarConfig.main?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-heading",
                pathname === item.href ? "text-heading" : "text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  );
}
