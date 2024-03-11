import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

export const PlayFillIcon: FC<ComponentProps<"svg">> = ({
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={cn("lucide lucide-play", className)}
    {...props}
  >
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);
