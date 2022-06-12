import { FC } from 'react';
import { StepProps, formDataType } from './types';

import RadioButton from 'components/radio-button';
import CustomDatePicker from 'components/date-picker';

interface StepTwoProps extends StepProps {
  setFormData: (arg: formDataType) => void;
}

const StepTwo: FC<StepTwoProps> = ({ formData, handleChange, inputError, setFormData }) => {
  const handleDatePickerChange = (dateString: string) => setFormData({ ...formData, dateOfBirth: dateString });

  return (
    <>
      <div className="gender-select-wrapper">
        <div className={`${formData.gender ? 'checked' : ''} gender-select`}>
          <RadioButton checked={formData.gender} labelRight="Male" name="gender" onChange={handleChange} />
        </div>
        <div className={`${!formData.gender ? 'checked' : ''} gender-select`}>
          <RadioButton checked={!formData.gender} labelRight="Female" name="gender" onChange={handleChange} />
        </div>
      </div>
      <div>
        <CustomDatePicker
          placeholderText={formData.dateOfBirth.slice(0, 10)}
          error={inputError.dateOfBirth}
          label="Date of birth"
          onChange={handleDatePickerChange}
        />
      </div>
    </>
  );
};

export default StepTwo;
