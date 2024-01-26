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
    <header className="flex md:hidden justify-between h-12 items-center">
      <div className="flex items-center justify-center">
        <Button
          onClick={() => setOpen(!open)}
          variant="ghost"
          className="flex flex-col mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <div className="flex-col relative justify-center items-center">
            <div
              className={cn(
                "h-0.5 w-5 mb-1.5 bg-foreground rounded-sm transition-all duration-300 ease-out",
                open ? "translate-y-2 rotate-45" : ""
              )}
            />
            <div
              className={cn(
                "h-0.5 w-5 mb-1.5 bg-foreground rounded-sm transition-all duration-300 ease-out",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <div
              className={cn(
                "h-0.5 w-5 bg-foreground rounded-sm transition-all duration-300 ease-out",
                open ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </div>
        </Button>
        {open ? (
          <nav
            className={cn(
              "fixed inset-0 z-20 hidden w-full mt-12 md:hidden",
              open && "block"
            )}
          >
            <ScrollArea className="container py-6">
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
      <ThemeSwitch />
    </header>
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
