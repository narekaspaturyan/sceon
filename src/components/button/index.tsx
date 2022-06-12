import { FC, ReactElement, MouseEvent } from 'react';
import './styles.scss';

interface ButtonProps {
  name?: string | ReactElement;
  noBackground?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactElement | null;
  rightIcon?: ReactElement | null;
  className?: string;
  children?: ReactElement;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
}

const Button: FC<ButtonProps> = ({
  name,
  noBackground,
  disabled,
  leftIcon,
  rightIcon,
  children,
  className,
  onClick,
  active,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`custom-button ${className || ''} ${noBackground ? 'no-background' : ''}  ${
      disabled ? 'disabled' : ''
    } ${active ? 'active' : ''}`}
  >
    {children || (
      <>
        {leftIcon && <span className="left-icon">{leftIcon}</span>}
        <span>{name}</span>
        {rightIcon && <span className="right-icon">{rightIcon}</span>}
      </>
    )}
  </button>
);

export default Button;
