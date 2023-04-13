import { FC } from "react";

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  className?:string;
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  className,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
      className={`${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
