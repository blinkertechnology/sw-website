import { ComponentProps } from "react";

export const HamburgarIcon: React.FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="5"
        y="14"
        width="32.4805"
        height="2.4"
        rx="1.2"
        fill="currentColor"
      />
      <rect
        x="20.4805"
        y="20"
        width="17"
        height="2"
        rx="1"
        fill="currentColor"
      />
      <rect
        x="8.35938"
        y="25.2012"
        width="29.1204"
        height="2.4"
        rx="1.2"
        fill="currentColor"
      />
    </svg>
  );
};
