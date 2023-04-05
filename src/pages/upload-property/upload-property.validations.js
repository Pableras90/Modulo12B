import { Validators, createFormValidation } from '@lemoncode/fonk';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
const uploadSchema = {
  field: {
    title: [Validators.required],
    notes: [Validators.required],
    email: [Validators.required, Validators.email],
    phone: [
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7|9)\d{8}$/ },
      },
    ], 
    price: [isNumber.validator],
    saleTypes: [Validators.required],//Voy por aqui!!
    address: [Validators.required],
    city: [Validators.required],
    province: [Validators.required],
    squareMeter: [Validators.required],
    rooms: [Validators.required],
    bathrooms: [Validators.required],
    locationUrl: [Validators.required],
    mainFeatures: [Validators.required],
    equipments: [Validators.required],
    images: [Validators.required],
  },
};

export const uploadValidation = createFormValidation(uploadSchema);
