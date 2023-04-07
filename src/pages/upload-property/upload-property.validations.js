import { Validators, createFormValidation } from '@lemoncode/fonk';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
const uploadSchema = {
  field: {
    title: [Validators.required],
    notes: [Validators.required],
    email: [Validators.required, Validators.email],
    phone: [Validators.required,
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7|9)\d{8}$/ },
      },
    ], 
    price: [Validators.required,isNumber.validator],
    saleTypes: [Validators.required,arrayRequired.validator],//R
    address: [Validators.required],
    city: [Validators.required],
    province: [Validators.required,arrayRequired.validator],//R
    squareMeter: [Validators.required,isNumber.validator],
    rooms: [Validators.required,isNumber.validator],
    bathrooms: [Validators.required,isNumber.validator],
    locationUrl: [Validators.required,isUrl.validator],
    mainFeatures: [Validators.required,arrayRequired.validator],//R
    equipments: [Validators.required,arrayRequired.validator],//R
    images: [Validators.required,arrayRequired.validator],//R
  },
};

export const uploadValidation = createFormValidation(uploadSchema);
