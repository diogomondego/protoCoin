import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError,
): ValidationErrors {
  const validationErrors: ValidationErrors = {};

  err.inner.forEach(error => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
}
