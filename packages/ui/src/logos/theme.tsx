import { cn } from "@workspace/ui/lib/utils";

export default function Theme({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 3l0 18"></path>
      <path d="M12 9l4.65 -4.65"></path>
      <path d="M12 14.3l7.37 -7.37"></path>
      <path d="M12 19.6l8.85 -8.85"></path>
    </svg>
  );
}
