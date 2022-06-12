import { FC, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import calendarIcon from 'assets/calendar-icon.svg';
import './styles.scss';

interface CustomDatePickerProps {
  dateFormat?: string;
  label?: string;
  onChange: (arg: string) => void;
  error?: string;
  placeholderText?: string;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ dateFormat, onChange, label, error, placeholderText }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  useEffect(() => {
    if (startDate) {
      onChange(startDate.toISOString());
    }
  }, [startDate]);

  return (
    <>
      {label && <label className="date-picker-label">{label}</label>}
      <div className="custom-date-picker-wrapper">
        <DatePicker
          placeholderText={placeholderText || 'DD/MM/YYYY'}
          selected={startDate}
          dateFormat={dateFormat || 'dd/MM/yyyy'}
          onChange={(date: Date) => setStartDate(date)}
        />

        <img className="calendar-icon" src={calendarIcon} alt="calendar icon" />
      </div>
      {error && <span className="date-picker-error">{error}</span>}
    </>
  );
};

export default CustomDatePicker;
