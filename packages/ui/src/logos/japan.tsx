import { cn } from "@workspace/ui/lib/utils";

export default function Japan({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 101 67"
      fill="none"
      className={cn("w-[4cqw]", className)}
      {...props}
    >
      <rect
        x="0.249913"
        y="-0.25"
        width="99.5"
        height="66.5"
        transform="matrix(1 0 -0.000349066 -1 0.0233502 66.5)"
        fill="white"
        stroke="#333"
        strokeWidth="1"
      />
      <path
        d="M72.6632 33.9932C72.6593 22.9512 63.7049 14 52.663 14C41.6211 14 32.673 22.9512 32.6769 33.9932C32.6807 45.0351 41.6351 53.9863 52.677 53.9863C63.7189 53.9863 72.667 45.0351 72.6632 33.9932Z"
        fill="#BC002D"
      />
    </svg>
  );
}
