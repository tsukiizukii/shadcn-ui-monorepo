"use client";

import { useMediaQuery } from "@workspace/ui/hooks/use-match-query";
import { cn, getCssVariable } from "@workspace/ui/lib/utils";
import Tsukiizukii from "@workspace/ui/logos/tsukiizukii";
import { motion, useScroll, useSpring } from "motion/react";

type HeaderProps = React.ComponentProps<typeof motion.header> & {
  title: string;
  children: React.ReactNode;
};

export default function Header({
  className,
  title,
  children,
  ...props
}: HeaderProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });

  const isMobile = useMediaQuery(
    `(width < ${getCssVariable("--breakpoint-md")})`,
  );

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-100 border-b border-border bg-background/75 px-4 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex h-15 max-w-5xl items-center justify-between">
        <Title title={title} />
        {children}
      </div>
      {isMobile && (
        <motion.div
          className={cn(
            "absolute inset-0 top-full origin-left",
            "h-0.5 bg-muted-foreground",
          )}
          style={{
            scaleX,
            translate: "0 -25%",
          }}
        />
      )}
    </motion.header>
  );
}

function Title({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <Tsukiizukii className="size-9" />
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
}
