import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    email: [Validators.required, Validators.email],
    message: [Validators.required],
  }
};

export const formValidation = createFormValidation(validationSchema);
