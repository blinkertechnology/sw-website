import { ComponentProps } from "react";

export const CheckmarkIcon: React.FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.0026 0.333984C3.32927 0.333984 0.335938 3.32732 0.335938 7.00065C0.335938 10.674 3.32927 13.6673 7.0026 13.6673C10.6759 13.6673 13.6693 10.674 13.6693 7.00065C13.6693 3.32732 10.6759 0.333984 7.0026 0.333984ZM10.1893 5.46732L6.40927 9.24732C6.31594 9.34065 6.18927 9.39398 6.05594 9.39398C5.9226 9.39398 5.79594 9.34065 5.7026 9.24732L3.81594 7.36065C3.6226 7.16732 3.6226 6.84732 3.81594 6.65398C4.00927 6.46065 4.32927 6.46065 4.5226 6.65398L6.05594 8.18732L9.4826 4.76065C9.67594 4.56732 9.99594 4.56732 10.1893 4.76065C10.3826 4.95398 10.3826 5.26732 10.1893 5.46732Z"
        fill="currentColor"
      />
    </svg>
  );
};