import { Button } from "@workspace/ui/components/button";
import Discord from "@workspace/ui/logos/discord";
import Github from "@workspace/ui/logos/github";
import Tsukiizukii from "@workspace/ui/logos/tsukiizukii";
import X from "@workspace/ui/logos/x";

type FooterProps = {
  ref?: React.RefObject<HTMLElement | null>;
  title: string;
  children: React.ReactNode;
};

export default function Footer({ ref, title, children }: FooterProps) {
  return (
    <footer className="sticky top-full z-100 border-t px-4" ref={ref}>
      <div className="mx-auto flex max-w-2xl items-center justify-between py-2">
        <Title title={title} />
        {children}
      </div>
      <div className="mx-auto flex max-w-2xl items-center justify-between border-t pt-2">
        <Copyright />
        <SnsList />
      </div>
    </footer>
  );
}

function Title({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Tsukiizukii className="size-10" />
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}

function Copyright() {
  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  return (
    <small>
      Copyright ©{" "}
      {currentYear === startYear ? startYear : `${startYear}-${currentYear}`}{" "}
      tuskiizukii
    </small>
  );
}

function SnsList() {
  return (
    <div className="flex">
      <Button size="icon" variant="ghost">
        <Github className="size-4" />
      </Button>
      <Button size="icon" variant="ghost">
        <X className="size-4" />
      </Button>
      <Button size="icon" variant="ghost">
        <Discord className="size-5" />
      </Button>
    </div>
  );
}
