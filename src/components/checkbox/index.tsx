import { FC, ChangeEvent } from 'react';
import './styles.scss';

interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  labelRight?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hoverText?: string;
  name?: string;
}

const Checkbox: FC<CheckboxProps> = ({ checked, labelRight, disabled, onChange, className, hoverText, name }) => {
  return (
    <label title={hoverText || ''} className={`${className || ''} custom-checkbox-block `}>
      <input disabled={disabled} type="checkbox" checked={checked} name={name || ''} onChange={onChange} />
      <span className="checkmark"></span>
      <span className="label-right">{labelRight}</span>
    </label>
  );
};

export default Checkbox;
