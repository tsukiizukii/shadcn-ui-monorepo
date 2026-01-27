import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { Send } from "lucide-react";
// type BaseButtonProps = Parameters<typeof Button>[0];
// type ButtonProps = Omit<BaseButtonProps, "asChild">;

type ContactButtonProps = {
  contact?: boolean;
  themeToggle?: boolean;
};

export default function ContactButton({ ...props }: ContactButtonProps) {
  return (
    <Button
      {...props}
      asChild
      size="sm"
      className={cn(
        "gap-0.5 rounded-full py-1 text-white shadow-xs ring-2 has-[>svg]:pr-2 has-[>svg]:pl-1.5",
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
  );
}
