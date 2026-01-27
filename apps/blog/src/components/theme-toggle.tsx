import { withoutThemeTransition } from "@/utils/withoutThemeTransition";
import { Toggle } from "@workspace/ui/components/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";
import Theme from "@workspace/ui/logos/theme";
import { useState } from "react";

export default function ThemeToggle({ className }: { className?: string }) {
  const [isTheme, setIsTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark",
  );

  const handleToggleClick = (checked: boolean) => {
    withoutThemeTransition(() => {
      const theme = checked ? "dark" : "light";
      const element = document.documentElement;

      if (theme === "dark") {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
      setIsTheme(theme);
    });
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
