import { FC, ChangeEvent } from 'react';
import './styles.scss';

interface RadioButtonProps {
  checked: boolean;
  disabled?: boolean;
  labelRight?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hoverText?: string;
  name?: string;
}

const RadioButton: FC<RadioButtonProps> = ({ checked, labelRight, disabled, onChange, className, hoverText, name }) => {
  return (
    <label title={hoverText || ''} className={`${className || ''} custom-radio-block`}>
      <input disabled={disabled} type="radio" checked={checked} name={name || ''} onChange={onChange} />
      <span className="checkmark"></span>
      <span className="label-right">{labelRight}</span>
    </label>
  );
};

export default RadioButton;
