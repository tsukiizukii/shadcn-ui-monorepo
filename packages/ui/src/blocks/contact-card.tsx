import TsukiizukiiStack from "@workspace/ui/logos/tsukiizuki-stack";
import { Send } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="mx-4 mb-12">
      <a
        href="https://contact.tsukiizukii.com"
        rel="noopener noreferrer"
        target="_blank"
        className="relative mx-auto block w-full max-w-4xl cursor-pointer overflow-hidden rounded-lg bg-linear-to-r from-blue-600 to-blue-300 shadow-sm ring ring-black/10"
      >
        <div className="pointer-events-none absolute top-0 left-0 w-xl -translate-x-1/3 mask-linear-150 mask-linear-from-10% mask-linear-to-65%">
          <TsukiizukiiStack
            className="aspect-874/380 size-full"
            stroke="white"
          />
        </div>

        <div className="@container mx-auto w-[min(100%,var(--container-xs))] px-4 py-14 text-white">
          <div className="mx-auto flex w-fit items-center gap-1.5">
            <div className="aspect-square">
              <Send strokeWidth={1} className="size-[17cqw]" />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="mx-auto w-fit text-[calc(100cqw/6)] leading-none font-medium">
                CONTACT
              </h2>
              <p className="mx-auto w-fit text-[calc(100cqw/19)] leading-none">
                お気軽にお問い合わせください☺
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
