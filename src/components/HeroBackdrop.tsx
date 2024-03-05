import bg from "@/assets/hero-bg.jpeg";

export const HeroBackdrop: React.FC = () => {
  return (
    <div
      className="absolute inset-0 -z-50 bg-no-repeat bg-cover rounded-b-[120px]"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(25, 74, 254, 0.3), rgba(25, 74, 254, 0.3)), url(${bg.src})`,
      }}
    />
  );
};
