import { Validators, createFormValidation } from '@lemoncode/fonk';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';
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
    saleTypes: [Validators.required],//Array
    address: [Validators.required],
    city: [Validators.required],
    province: [Validators.required],//Selector
    squareMeter: [isNumber.validator],
    rooms: [isNumber.validator],
    bathrooms: [isNumber.validator],
    locationUrl: [isUrl.validator],
    mainFeatures: [Validators.required],//Ni idea
    equipments: [Validators.required],//Ni idea
    images: [Validators.required],//Imagen
  },
};

export const uploadValidation = createFormValidation(uploadSchema);
