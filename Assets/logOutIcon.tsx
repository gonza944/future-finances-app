import { SVGProps } from "react";

type LogOutProps = {
  props?: SVGProps<SVGSVGElement>;
};

const LogOut: React.FC<LogOutProps> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    {...props}>
    <title>log out icon</title>
    <path
      d="M11.6667 5.83332L7.50008 9.99999L11.6667 14.1667"
      stroke="#38342F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 10L17.5 10"
      stroke="#38342F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.6756 16.6993 2.5 16.2754 2.5 15.8333L2.5 4.16667C2.5 3.72464 2.6756 3.30072 2.98816 2.98816C3.30072 2.6756 3.72464 2.5 4.16667 2.5H7.5"
      stroke="#38342F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default LogOut;
