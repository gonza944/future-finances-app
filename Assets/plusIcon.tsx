import { SVGProps } from "react";

type PlusIconProps = {
  props?: SVGProps<SVGSVGElement>;
};

const PlusIconProps: React.FC<PlusIconProps> = (props) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    aria-hidden>
    <title>Plus Icon</title>
    <path
      d="M8.5 3.33334V12.6667"
      stroke="#38342F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.83325 8H13.1666"
      stroke="#38342F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default PlusIconProps;
