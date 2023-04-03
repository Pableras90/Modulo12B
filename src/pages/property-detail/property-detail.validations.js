import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    email: [Validators.required, Validators.email],
    comment: [Validators.required],
  }
};

export const formValidation = createFormValidation(validationSchema);
