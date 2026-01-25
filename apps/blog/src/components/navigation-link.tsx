"use client";

import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

type NavigationLink = {
  href: string;
  title: string;
  external?: boolean;
};

type NavigationProps = ComponentProps<"nav"> & {
  link: NavigationLink;
};

export default function NavigationLink({ link }: NavigationProps) {
  return (
    <Button
      asChild
      size="sm"
      variant="link"
      className={cn(link.external && "gap-0 has-[>svg]:px-2")}
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
  );
}
