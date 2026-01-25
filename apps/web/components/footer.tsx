"use client";

import Navigation from "@/components/navigation";
import { ScrollContext } from "@/components/providers";
import CommonFotter from "@workspace/ui/blocks/footer";
import { useInView } from "motion/react";
import { useContext, useEffect, useRef } from "react";

const links = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "blog",
    href: "blog.tsukiizukii.com",
    external: true,
  },
  {
    title: "registry",
    href: "registry.tuskiizukii.com",
    external: true,
  },
];

export default function Footer({ title }: { title: string }) {
  const { setIsFooterInView } = useContext(ScrollContext);
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setIsFooterInView(isInView);
  }, [isInView, setIsFooterInView]);

  return (
    <CommonFotter title={title} ref={ref}>
      <Navigation
        className="flex-col items-start"
        links={links}
        contact={false}
        themeToggle={false}
      />
    </CommonFotter>
  );
}
