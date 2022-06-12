import { FC, useState, ReactNode, ChangeEvent } from 'react';

import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';

import { formDataType, inputErrorType } from './types';
import { isValidEmail, isValidName, setItemToLocalStroage, getItemFromLocalStroage } from 'helpers';

import Button from 'components/button';

import { arrowLeft, arrowRight } from 'assets/svg-icons';
import './styles.scss';

const PAGE = 'page';
const FORM_DATA = 'formData';

const PersonalInfo: FC = () => {
  const [page, setPage] = useState(() => +getItemFromLocalStroage(PAGE) || 1);

  const [inputError, setInputError] = useState<inputErrorType>({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    position: '',
    dateOfBirth: '',
  });

  const [formData, setFormData] = useState<formDataType>(
    () =>
      getItemFromLocalStroage(FORM_DATA) || {
        email: '',
        dateOfBirth: '',
        firstName: '',
        lastName: '',
        gender: true,
        companyName: '',
        position: '',
        receiveNewsLetters: true,
      },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const targetName = e.target.name;
    if (targetName === 'receiveNewsLetters') {
      setFormData(prev => ({ ...prev, [targetName]: e.target.checked }));
      return;
    }
    if (targetName === 'gender') {
      setFormData(prev => ({ ...prev, [targetName]: !prev[targetName] }));
      return;
    }
    setFormData(prev => ({ ...prev, [targetName]: e.target.value }));
  };

  const displayStep = (): ReactNode =>
    page === 1 ? (
      <StepOne formData={formData} handleChange={handleChange} inputError={inputError} />
    ) : page === 2 ? (
      <StepTwo formData={formData} handleChange={handleChange} inputError={inputError} setFormData={setFormData} />
    ) : (
      <StepThree formData={formData} handleChange={handleChange} inputError={inputError} setFormData={setFormData} />
    );

  const handleValidate = (): boolean => {
    if (page === 1) {
      if (!isValidName(formData.firstName)) {
        setInputError(prev => ({ ...prev, firstName: 'First name is invalid' }));
        return false;
      } else {
        setInputError(prev => ({ ...prev, firstName: '' }));
      }

      if (!isValidName(formData.lastName)) {
        setInputError(prev => ({ ...prev, lastName: 'Last name is invalid' }));
        return false;
      } else {
        setInputError(prev => ({ ...prev, lastName: '' }));
      }
      if (!isValidEmail(formData.email)) {
        setInputError(prev => ({ ...prev, email: 'Email is invalid' }));
        return false;
      } else {
        setInputError(prev => ({ ...prev, email: '' }));
      }
    }
    if (page === 2) {
      if (!formData.dateOfBirth) {
        setInputError(prev => ({ ...prev, dateOfBirth: 'Select date of birth' }));
        return false;
      } else {
        setInputError(prev => ({ ...prev, dateOfBirth: '' }));
      }
    }
    if (page === 3) {
      if (!isValidName(formData.companyName)) {
        setInputError(prev => ({ ...prev, companyName: 'Company name is invalid' }));
        return false;
      } else {
        setInputError(prev => ({ ...prev, companyName: '' }));
      }
      if (!formData.position) {
        setInputError(prev => ({ ...prev, position: 'Select a position' }));
        return false;
      } else {
        setInputError(prev => ({ ...prev, position: '' }));
      }
    }

    return true;
  };

  const handleNext = (): void => {
    if (handleValidate()) {
      if (page === 3) {
        setItemToLocalStroage(FORM_DATA, formData);
        console.log(formData);
        return;
      }

      setItemToLocalStroage(FORM_DATA, formData);
      setItemToLocalStroage(PAGE, page + 1);
      setPage(prev => prev + 1);
    }
  };
  const handlePrev = (): void => {
    if (page !== 1) {
      setItemToLocalStroage(PAGE, page - 1);
      setPage(prev => prev - 1);
    }
  };

  const handleReset = (): void => {
    setPage(1);
    const newformData: any = { ...formData };
    for (const key in newformData) {
      if (Object.prototype.hasOwnProperty.call(newformData, key)) {
        if (typeof newformData[key] === 'boolean') {
          newformData[key] = true;
          continue;
        }
        newformData[key] = '';
      }
    }
    setFormData(newformData);
    localStorage.clear();
  };

  return (
    <div className="personal-main-wrapper">
      <div className="form-wrapper">
        <div className="personal-progress-wrapper">
          <Button
            className={`${page === 1 ? 'hidden' : ''} previous`}
            noBackground
            name="Previous"
            onClick={handlePrev}
            leftIcon={arrowLeft}
          />

          <div className="progress-count">
            <span>{page}/3</span>
          </div>

          <Button className={page === 3 ? '' : 'hidden'} noBackground name="Reset" onClick={handleReset} />
        </div>

        <h1 className="header-text">Submit your personal Information</h1>

        <div className="steps-wrapper">{displayStep()}</div>

        <Button name={page === 3 ? 'Submit' : 'Next'} onClick={handleNext} rightIcon={page === 3 ? null : arrowRight} />
      </div>
    </div>
  );
};

export default PersonalInfo;
