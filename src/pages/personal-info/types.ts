import { ChangeEvent } from 'react';

export interface formDataType {
  email: string;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  gender: boolean;
  companyName: string;
  position: string;
  receiveNewsLetters: boolean;
}
export interface inputErrorType {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  position: string;
  dateOfBirth: string;
}

export interface StepProps {
  formData: formDataType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputError: inputErrorType;
}
