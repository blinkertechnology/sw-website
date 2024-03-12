import { cn } from "@/lib/utils";

export const PlusMinusIcon: React.FC<React.ComponentProps<"svg">> = ({
  className,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("rotate-45", className)}
      strokeWidth={4}
      {...props}
    >
      <line
        x1="15.7071"
        y1="14.2929"
        x2="48.7071"
        y2="47.2929"
        stroke="currentColor"
        className={cn("origin-center transition-transform")}
      />
      <line
        x1="14.2929"
        y1="47.2929"
        x2="47.2929"
        y2="14.2929"
        stroke="currentColor"
      />
    </svg>
  );
};
