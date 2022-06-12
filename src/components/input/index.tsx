import { FC, RefObject, ChangeEvent } from 'react';
import './styles.scss';

interface InputProps {
  type?: string;
  value: string | number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  ref?: RefObject<HTMLInputElement>;
  label?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const Input: FC<InputProps> = ({
  onChange,
  type,
  value,
  placeholder,
  disabled,
  required,
  error,
  label,
  className,
  name,
  ref,
}) => {
  return (
    <div className="input-main-wrapper">
      {label && (
        <label className="label" htmlFor="custom-input">
          {label}
        </label>
      )}
      <input
        ref={ref || null}
        type={type || 'text'}
        placeholder={placeholder || ''}
        value={value}
        disabled={disabled}
        required={required}
        name={name || 'custom-input'}
        className={`custom-input ${error ? 'error-border' : ''}
       ${className || ''}`}
        onChange={onChange}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
