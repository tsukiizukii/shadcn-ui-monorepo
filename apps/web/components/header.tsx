"use client";

import Navigation from "@/components/navigation";
import { ScrollContext } from "@/components/providers";
import CommonHeader from "@workspace/ui/blocks/header";
import { useMounted } from "@workspace/ui/hooks/use-mounted";
import { useContext } from "react";

const links = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "blog",
    href: "https://blog.tsukiizukii.com",
    external: true,
  },
  {
    title: "registry",
    href: "https://registry.tsukiizukii.com",
    external: true,
  },
];

export default function Header({ title }: { title: string }) {
  const { isFooterInView } = useContext(ScrollContext);
  const mounted = useMounted();

  return (
    <CommonHeader
      title={title}
      animate={{
        y: isFooterInView ? -100 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {mounted && <Navigation links={links} />}
    </CommonHeader>
  );
}
