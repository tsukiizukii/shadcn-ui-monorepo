"use client";

import { Toggle } from "@workspace/ui/components/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { useMounted } from "@workspace/ui/hooks/use-mounted";
import { cn } from "@workspace/ui/lib/utils";
import Theme from "@workspace/ui/logos/theme";
import { useTheme } from "next-themes";

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted || resolvedTheme === undefined) {
    return (
      <span
        className={cn(
          "ml-3 flex size-7.5 items-center justify-center rounded-full",
          className,
        )}
      >
        <Theme className="size-5" />
        <span className="sr-only">Toggle theme</span>
      </span>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          defaultPressed={resolvedTheme === "dark"}
          onPressedChange={(checked) => setTheme(checked ? "dark" : "light")}
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
