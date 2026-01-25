import { cn } from "@workspace/ui/lib/utils";
import Cloudflare from "@workspace/ui/logos/cloudflare";
import Japan from "@workspace/ui/logos/japan";
import Tsukiizukii from "@workspace/ui/logos/tsukiizukii";
import Vercel from "@workspace/ui/logos/vercel";
import { cva, VariantProps } from "class-variance-authority";

const heroVariants = cva(
  "relative -z-20 h-[calc(100svh-110px)] overflow-hidden bg-radial-[at_0%_0%] from-background to-secondary",
  {
    variants: {
      variant: {
        default: "dark:bg-linear-to-br dark:from-blue-600 dark:to-blue-800",
        blog: "dark:bg-linear-to-br dark:from-background dark:via-blue-700/30 dark:to-background",
        conatact: "dark:bg-linear-to-br dark:from-blue-600 dark:to-blue-800",
        registry: "dark:bg-linear-to-br dark:from-blue-600 dark:to-blue-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export default function Hero({
  className,
  title,
  variant,
}: React.ComponentProps<"div"> &
  VariantProps<typeof heroVariants> & {
    title?: string;
  }) {
  return (
    <div className={cn(heroVariants({ variant, className }))}>
      <div className="relative mx-auto h-full max-w-2xl">
        <div className="grid size-full place-items-center overflow-hidden border-x bg-background dark:bg-blue-700">
          <div className="@container relative aspect-3/4 w-full max-w-[550px] text-secondary-foreground">
            <FirstLine />
            <SecondLine title={title} />
            <ThirdLine className="absolute right-[16%] bottom-0 origin-bottom-right translate-y-full rotate-30 skew-x-30" />
          </div>
        </div>
        <div className="absolute inset-0 m-auto aspect-3/4 w-full max-w-[550px]">
          <FirstUnderLine className="" />
          <SecondUnderLine className="" />
          <ThirdUnderLine className="absolute right-[14%] bottom-0 origin-bottom-right rotate-30" />
        </div>
      </div>
    </div>
  );
}

function FirstLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute left-[25%] flex w-full origin-top-left rotate-30 skew-x-30 flex-col",
        className,
      )}
    >
      <span
        className={cn(
          "[--adjust-length:42cqw]",
          "absolute -ml-(--adjust-length) h-px w-[calc(100vw*2)] border-b border-dashed border-foreground",
        )}
      />
      <span
        className={cn(
          "relative ml-[15%] text-[6.3cqw] leading-none font-semibold",
          "before:absolute before:translate-x-[12%] before:-translate-y-[103%] before:-skew-x-50 before:text-[6.7cqw] before:content-['TOMOHIRO']",
          "after:absolute after:block after:-translate-x-[11%] after:scale-y-[-1] after:skew-x-50 after:opacity-40 after:blur-xs after:content-['YAMASHINA']",
        )}
      >
        YAMASHINA
      </span>
    </div>
  );
}

function FirstUnderLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute left-[25%] -z-10 w-full origin-top-left rotate-30",
        className,
      )}
    >
      <span
        className={cn(
          "[--adjust-length:100vw]",
          "0 absolute -ml-(--adjust-length) h-px w-[200vw] border-b",
        )}
      />
    </div>
  );
}

function SecondLine({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "absolute top-[46%] left-1/2 ml-[5cqw] flex w-full -translate-x-1/2 -translate-y-1/2 -rotate-30 skew-x-30 flex-col",
        className,
      )}
    >
      <div className="relative mx-auto flex w-fit flex-col">
        <div className="flex items-center gap-[1cqw]">
          <span className="text-[4cqw] font-medium">Frontend Engineer</span>
          <Japan />
        </div>
        <span className="text-[2.2cqw]">
          This site uses the following tech stack.
        </span>
        <div className="mt-[2cqw] flex justify-center gap-[2cqw]">
          <Cloudflare />
          <Vercel />
        </div>
      </div>

      <div className="mt-[12cqw] flex flex-col">
        <div className="w-full">
          <span
            data-text={title}
            className={cn(
              "relative mx-auto block w-fit text-[7cqw] leading-none font-semibold",
              "before:absolute before:origin-top-left before:translate-y-full before:-skew-x-52 before:whitespace-nowrap before:content-[attr(data-text)]",
              "after:absolute after:left-0 after:content-[attr(data-text)]",
              "after:origin-bottom-left after:-translate-x-[17%] after:translate-y-full after:scale-y-[-1]",
              "after:whitespace-nowrap after:opacity-40 after:blur-xs",
            )}
          >
            {title}
          </span>
        </div>
        <span
          className={cn(
            "[--adjust-length:27cqw]",
            "-mx-(--adjust-length) h-px w-screen border-b border-dashed border-foreground",
          )}
        />
      </div>

      <div className="relative mt-[20cqw] flex flex-col">
        <div className="ml-[25%] w-fit">
          <Tsukiizukii className="mx-auto size-[15cqw]" />
          <span className="inline-block text-[2.75cqw]">
            www.tsukiizukii.com
          </span>
        </div>
      </div>
    </div>
  );
}

function SecondUnderLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute top-[46%] left-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 -rotate-30",
        className,
      )}
    >
      <span
        className={cn(
          "[--adjust-length:100vw]",
          "-ml-(--adjust-length) inline-block h-px w-[200vw] border-b",
        )}
      />
    </div>
  );
}

function ThirdLine({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      <span
        className={cn(
          "-ml-[10cqw] h-px w-screen border-b border-dashed border-foreground",
        )}
      />
      <span
        data-text="TSUKIIZUKII"
        className={cn(
          "relative mx-auto w-fit text-[8cqw] leading-none font-semibold",
          "before:absolute before:translate-x-[10%] before:-translate-y-[103%] before:-skew-x-48 before:content-[attr(data-text)]",
          "after:absolute after:block after:-translate-x-[11%] after:scale-y-[-1] after:skew-x-48 after:opacity-40 after:blur-xs after:content-[attr(data-text)]",
        )}
      >
        TSUKIIZUKII
      </span>
    </div>
  );
}

function ThirdUnderLine({ className }: { className?: string }) {
  return (
    <div className={cn("-z-10", className)}>
      <span
        className={cn(
          "[--adjust-length:100vw]",
          "absolute -ml-(--adjust-length) h-px w-[200vw] border-b",
        )}
      />
    </div>
  );
}
