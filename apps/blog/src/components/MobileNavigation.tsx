"use client";

import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@workspace/ui/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { MenuIcon } from "@workspace/ui/icons/menu";
import { ArrowUpRight, Send } from "lucide-react";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";

import { cn } from "@workspace/ui/lib/utils";

type NavigationLinks = Array<{
  href: string;
  title: string;
  external?: boolean;
}>;

type NavigationProps = ComponentProps<"nav"> & {
  links: NavigationLinks;
  contact?: boolean;
  themeToggle?: boolean;
};

export default function MobileNavigation({
  className,
  links,
  contact = true,
  themeToggle = true,
  ...props
}: NavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <Popover onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <MenuIcon isOpen={open} />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={(61 - 36) / 2}
        className="inset-0 top-4 h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-hidden rounded-none bg-background/75 backdrop-blur-sm"
      >
        <nav className={cn("flex flex-col items-center")} {...props}>
          <ul className={cn("flex flex-col", className)}>
            {links.map((link) => (
              <li key={link.href}>
                <Button
                  size="sm"
                  variant="link"
                  asChild
                  className={cn(
                    "px-0 text-lg",
                    link.external && "gap-0 has-[>svg]:px-0",
                  )}
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.title}
                    {link.external && <ArrowUpRight size={16} />}
                  </a>
                </Button>
              </li>
            ))}

            {contact && (
              <li className="mt-2">
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "gap-0.5 rounded-full py-1 text-lg text-white shadow-xs ring-2 has-[>svg]:pr-3 has-[>svg]:pl-2",
                    "ring-black/45 hover:ring-blue-700/50 dark:ring-white/30 dark:hover:ring-blue-200/50",
                    "bg-neutral-400 hover:bg-blue-500 dark:bg-neutral-800 dark:hover:bg-blue-600",
                    "transition-all duration-150",
                  )}
                >
                  <a
                    href="https://contact.tsukiizukii.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send size={16} className="translate-y-[5%]" />
                    <span className="leading-none">contact</span>
                  </a>
                </Button>
              </li>
            )}
          </ul>

          {themeToggle && <ThemeToggle className="mt-2" />}
        </nav>
      </PopoverContent>
    </Popover>
  );
}
