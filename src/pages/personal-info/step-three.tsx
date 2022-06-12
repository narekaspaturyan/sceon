import { FC } from 'react';

import Checkbox from 'components/checkbox';
import Input from 'components/input';
import Select from 'components/select';

import { formDataType, StepProps } from './types';

interface StepThreeProps extends StepProps {
  setFormData: (arg: formDataType) => void;
}

const selectOptions = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
  { label: 'Option 4', value: 'Option 4' },
  { label: 'Option 5', value: 'Option 5' },
];

const StepThree: FC<StepThreeProps> = ({ formData, handleChange, setFormData, inputError }) => {
  const handleSelect = (selectedItem: { label: string; value: string }) => {
    setFormData({ ...formData, position: selectedItem.value });
  };

  return (
    <>
      <Input
        onChange={handleChange}
        value={formData.companyName}
        placeholder="Company name"
        name="companyName"
        error={inputError.companyName}
      />

      <Select
        label="Position"
        onChange={handleSelect}
        value={formData.position}
        placeholder="--Select one --"
        options={selectOptions}
        error={inputError.position}
      />

      <div className="newsletter-wrapper">
        <Checkbox
          checked={formData.receiveNewsLetters}
          onChange={handleChange}
          name="receiveNewsLetters"
          labelRight="Receive Newsletters"
        />
      </div>
    </>
  );
};

export default StepThree;
