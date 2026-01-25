import { Plus } from "lucide-react";

export default function AccentSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-y bg-secondary px-4">
      <div className="relative mx-auto w-full max-w-2xl border-x border-dashed">
        <div className="flex flex-col gap-4 px-4 py-12">
          {title && (
            <h2
              id={title.toLowerCase()}
              className="relative scroll-mt-[calc(61px+3rem)] text-3xl font-medium first-letter:uppercase before:absolute before:-left-4 before:h-full before:w-1 before:bg-blue-600 before:content-['']"
            >
              {title}
            </h2>
          )}
          {children}
        </div>
        <Plus
          size={20}
          strokeWidth={1}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        />
        <Plus
          size={20}
          strokeWidth={1}
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
        />
        <Plus
          size={20}
          strokeWidth={1}
          className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
        />
        <Plus
          size={20}
          strokeWidth={1}
          className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2"
        />
      </div>
    </div>
  );
}
