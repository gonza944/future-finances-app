import cx from "classnames";
import styles from "./button.module.scss";

export enum ButtonType {
  Primary,
  Secondary,
}

export type buttonProps = {
  copy: string;
  onCLick: () => void;
  type?: ButtonType;
  overridenStyles?: { [key: string]: string };
  children?: JSX.Element,
};

const typeToClass = new Map<ButtonType, string>();
typeToClass.set(ButtonType.Primary, styles.primary);
typeToClass.set(ButtonType.Secondary, styles.secondary);

const Button: React.FC<buttonProps> = ({
  copy,
  type = ButtonType.Primary,
  overridenStyles,
  onCLick,
  children,
}) => (
  <button
    onClick={onCLick}
    className={cx(typeToClass.get(type), overridenStyles)}>
    {children}
    <p>{copy}</p>
  </button>
);

export default Button;
