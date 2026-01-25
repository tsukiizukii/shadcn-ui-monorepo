"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { ComponentProps } from "react";
import { useEffect } from "react";

import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

type MenuIconProps = ComponentProps<"button"> & {
  isOpen: boolean;
  size?: number;
};

const lineVariants: Variants = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1,
  },

  animate: (custom: number) => ({
    rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
    y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
    opacity: custom === 2 ? 0 : 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
};

const MenuIcon = ({
  isOpen,
  className,
  size = 28,
  ...props
}: MenuIconProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start("animate");
    } else {
      controls.start("normal");
    }
  }, [isOpen, controls]);

  return (
    <Button
      className={cn("px-0 [&_svg:not([class*='size-'])]:size-6", className)}
      variant={"ghost"}
      size={"icon"}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.line
          x1="4"
          x2="20"
          y1="6"
          y2="6"
          variants={lineVariants}
          animate={controls}
          custom={1}
        />
        <motion.line
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          variants={lineVariants}
          animate={controls}
          custom={2}
        />
        <motion.line
          x1="4"
          x2="20"
          y1="18"
          y2="18"
          variants={lineVariants}
          animate={controls}
          custom={3}
        />
      </svg>
    </Button>
  );
};

MenuIcon.displayName = "MenuIcon";

export { MenuIcon };
