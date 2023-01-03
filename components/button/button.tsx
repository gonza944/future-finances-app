import cx from "classnames";
import styles from "./button.module.scss";

export enum ButtonType {
  Primary,
  Secondary,
}

type CommonButtonProps = {
  copy: string;
  onCLick: () => void;
  overridenStyles?: { [key: string]: string };
  children?: JSX.Element;
};

type variableButtonProps =
  | {
      type: ButtonType.Secondary;
      hightlighted: boolean;
    }
  | {
      type: ButtonType.Primary;
      hightlighted?: never;
    };

export type buttonProps = CommonButtonProps & variableButtonProps;

const typeToClass = new Map<ButtonType, string>();
typeToClass.set(ButtonType.Primary, styles.primary);
typeToClass.set(ButtonType.Secondary, styles.secondary);

const Button: React.FC<buttonProps> = ({
  copy,
  type = ButtonType.Primary,
  overridenStyles,
  onCLick,
  children,
  hightlighted = false,
}) => (
  <button
    onClick={onCLick}
    className={cx(
      typeToClass.get(type),
      hightlighted && styles.hightlighted,
      overridenStyles
    )}>
    {children}
    <p className={styles.copy}>{copy}</p>
  </button>
);

export default Button;
