import bg from "@/assets/hero-bg.jpeg";
import { cn } from "@/lib/utils";

export const HeroBackdrop: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-50 bg-no-repeat bg-cover bg-right-top rounded-b-3xl desktop:rounded-b-[120px]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(25, 74, 254, 0.3), rgba(25, 74, 254, 0.3)), url(${bg.src})`,
      }}
    />
  );
};
