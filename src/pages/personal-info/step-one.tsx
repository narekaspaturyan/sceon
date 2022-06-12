import { FC } from 'react';
import { StepProps } from './types';

import Input from 'components/input';

const StepOne: FC<StepProps> = ({ formData, handleChange, inputError }) => (
  <>
    <div className="name-email-wrapper">
      <div className="input-wrapper">
        <Input
          onChange={handleChange}
          value={formData.firstName}
          placeholder="First name"
          name="firstName"
          error={inputError.firstName}
        />
      </div>
      <div className="input-wrapper">
        <Input
          onChange={handleChange}
          value={formData.lastName}
          placeholder="Last name"
          name="lastName"
          error={inputError.lastName}
        />
      </div>
    </div>
    <Input
      onChange={handleChange}
      value={formData.email}
      type="email"
      placeholder="E-mail"
      name="email"
      error={inputError.email}
    />
  </>
);

export default StepOne;
