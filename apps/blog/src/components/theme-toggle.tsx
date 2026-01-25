"use client";

import { Toggle } from "@workspace/ui/components/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";
import Theme from "@workspace/ui/logos/theme";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className }: { className?: string }) {
  const [isTheme, setIsTheme] = useState<string>("light");

  useEffect(() => {
    const theme = (() => {
      if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
      ) {
        return localStorage.getItem("theme"); // 既存の値を使う
      }

      // localStorage に値がない場合のみ
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }

      return "light";
    })();

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    // 初回のみ localStorage に保存（既存の値がない場合）
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", theme as string);
    }

    setIsTheme(theme as string);
  }, []);

  const handleToggleClick = (checked: boolean) => {
    const theme = checked ? "dark" : "light";
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
    setIsTheme(theme);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          pressed={isTheme === "dark"}
          onPressedChange={handleToggleClick}
          className={cn(
            "ml-3 size-7.5 min-w-7.5 cursor-pointer rounded-full hover:bg-muted hover:text-foreground data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted",
            className,
          )}
        >
          <Theme className="size-5" />
          <span className="sr-only">Toggle theme</span>
        </Toggle>
      </TooltipTrigger>
      <TooltipContent className="z-100">
        <p>Toggle theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
