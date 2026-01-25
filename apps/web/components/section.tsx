import { Plus } from "lucide-react";

export default function Section({ title }: { title?: string }) {
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
