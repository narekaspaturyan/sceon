import { FC, useState, useLayoutEffect, ReactNode, useCallback } from 'react';
import useClickOutside from 'hooks/useClickOutside';

import { arrowDownIcon } from 'assets/svg-icons';
import './styles.scss';

interface SelectProps {
  value?: any;
  options?: any;
  onChange?: any;
  children?: ReactNode;
  disabled?: boolean;
  manySelect?: boolean;
  className?: string;
  placeholder?: string | ReactNode;
  bottom?: any;
  icon?: ReactNode;
  width?: number;
  label?: string;
  textDefault?: boolean;
  textUppercase?: boolean;
  error?: string;
}

const Select: FC<SelectProps> = ({
  value,
  options,
  onChange,
  children,
  disabled,
  manySelect,
  className,
  placeholder,
  bottom,
  icon,
  width,
  label,
  textDefault,
  textUppercase,
  error,
}) => {
  const [showOptions, selectRef, setShowOptions] = useClickOutside(false, val => {
    setIsShow(val);
  });
  const [isShow, setIsShow] = useState(false);
  const [docHeigth, setDocHeight] = useState(0);
  const [elOffsetHeigth, setElOffsetHeigth] = useState(0);

  useLayoutEffect(() => {
    setDocHeight(document.documentElement.clientHeight);
  }, [document.documentElement.clientHeight]);

  useLayoutEffect(() => {
    if (selectRef && selectRef.current) {
      const dimensions = selectRef.current.getBoundingClientRect();
      setElOffsetHeigth(dimensions.y);
    }
  }, [selectRef]);

  const res = docHeigth - elOffsetHeigth;

  const getClassNamesByHeight = useCallback(() => {
    return res < 330 && res > 150 ? 'short-options' : res < 150 ? (bottom ? '' : 'bottom short-options') : '';
  }, [res]);

  const handleSetIsShow = () => setIsShow(!isShow);

  const handleShowOptions = () => {
    !disabled && setShowOptions(!showOptions);
  };

  const handleClick = (item: any) => {
    if (item && value && item.value === value.value) return;
    onChange(item);
    !manySelect && setShowOptions(false);
  };

  return (
    <>
      {label && <div className="select-label">{label}</div>}
      <div
        className={`custom-universal-select noselect ${className ? className : ''}`}
        ref={selectRef}
        onClick={handleSetIsShow}
      >
        <button
          className={`select ${isShow && showOptions ? 'border-color' : ''}  `}
          style={{ width: width ? width : '' }}
          disabled={disabled}
          onClick={handleShowOptions}
        >
          {placeholder && !value ? (
            <span className="placeholder">{placeholder}</span>
          ) : (
            <span
              className={`${textDefault ? 'text-transform-default' : ''}${
                textUppercase ? 'text_upperCase' : ''
              } selected-value noselect`}
            >
              {typeof value === 'object' ? value && value.label : value}
            </span>
          )}
          {icon ? icon : <span className="arrow-icon">{arrowDownIcon}</span>}
        </button>

        {isShow && showOptions && (
          <div
            id="drop-down-profile"
            className={`options ${getClassNamesByHeight()}`}
            style={{ width: width ? width : '' }}
          >
            {children
              ? children
              : options &&
                options.map((item: any) => (
                  <p
                    className={`option ${textDefault ? 'text-transform-default' : ''} ${
                      textUppercase ? 'text-transform-upperCase' : ''
                    } ${item.value}
                  ${
                    value === item.label ||
                    (manySelect && value && value.find((v: any) => v === item.value)) ||
                    (value === 'all' && item.value === '') ||
                    ((typeof value !== 'string' || typeof value !== 'number') && value && value.value === item.value)
                      ? !manySelect
                        ? ''
                        : 'selected'
                      : ''
                  }`}
                    key={item.value}
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    <span className="option-value text-truncate">
                      {item.icon && item.icon} {item.label}
                    </span>
                  </p>
                ))}
          </div>
        )}
      </div>
      {error && <span className="select-error">{error}</span>}
    </>
  );
};

export default Select;
