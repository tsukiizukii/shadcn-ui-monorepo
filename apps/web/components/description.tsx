import { AuroraBackground } from "@workspace/ui/blocks/aurora-background";
import { cn } from "@workspace/ui/lib/utils";

export default function Description() {
  return (
    <AuroraBackground className="bg-background px-4 py-16">
      <div className="mx-auto w-full max-w-4xl rounded-lg bg-secondary p-1 shadow-sm ring ring-black/10">
        <div
          className={cn(
            "grid grid-cols-2 grid-rows-2 rounded-[8px] bg-background shadow-sm ring ring-black/10",
            "max-sm:grid-cols-1 max-sm:grid-rows-3",
          )}
        >
          <div className="col-span-1 row-span-2 border-r-2 p-4 max-sm:row-span-1 max-sm:border-r-0 max-sm:border-b-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="border-b-2 p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
