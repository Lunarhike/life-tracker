"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { navbarConfig } from "@/config/navbar";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeSwitch } from "./ThemeSwitch";

export function MobileNavbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <header className="flex justify-between items-center md:hidden h-12">
        <MobileLink href="/" className="" onOpenChange={setOpen}>
          <span className="font-bold font-code text-heading text-lg tracking-tight">
            {siteConfig.name}
          </span>
        </MobileLink>
        <div className="flex justify-center items-center space-x-3">
          <ThemeSwitch />
          <Button
            onClick={() => setOpen(!open)}
            variant="ghost"
            className={cn(
              "flex flex-col mr-4 h-8 w-8 items-center justify-center px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden",
              open && "bg-card"
            )}
          >
            <div
              className={cn(
                "h-[1px] w-3 mb-[3px] bg-foreground rounded-sm transition-all duration-300 ease-out",
                open ? "translate-y-[4px] rotate-45" : ""
              )}
            />
            <div
              className={cn(
                "h-[1px] w-3 mb-[3px] bg-foreground rounded-sm transition-all duration-300 ease-out",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <div
              className={cn(
                "h-[1px] w-3 bg-foreground rounded-sm transition-all duration-300 ease-out",
                open ? "-rotate-45 -translate-y-[4px]" : ""
              )}
            />
          </Button>
        </div>
      </header>
      <div className="flex items-center justify-center">
        {open ? (
          <nav
            className={cn(
              "fixed inset-0 z-20 w-full mt-12 bg-background md:hidden border-t container py-6",
              open && "block"
            )}
          >
            <ScrollArea className="">
              <div className="flex flex-col space-y-3">
                {navbarConfig.main?.map(
                  (item) =>
                    item.href && (
                      <MobileLink
                        key={item.href}
                        href={item.href}
                        onOpenChange={setOpen}
                      >
                        {item.title}
                      </MobileLink>
                    )
                )}
              </div>
            </ScrollArea>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
