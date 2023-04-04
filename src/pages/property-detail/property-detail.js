import {
  getPropertyDetail,
  getEquipments,
  postContactForm,
} from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router/history';
import { mapPropertyDetailsFromApiToVm } from './property_detail.mappers';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidation } from './property-detail.validations';

let propertiesToVmId = {
  id: '',
  title: '',
  notes: '',
  price: '',
  city: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: '',
  equipments: '',
  mainImage: '',
  images: '',
};

const params = history.getParams();

Promise.all([getEquipments(), getPropertyDetail(params.id)]).then(
  ([equipmentsList, propertiesId]) => {
    propertiesToVmId = mapPropertyDetailsFromApiToVm(
      propertiesId,
      equipmentsList
    );
    setPropertyValues(propertiesToVmId);
  }
);
//id:email id:message-error

let form = {
  email: '',
  comment: '',
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  form = {
    ...form,
    email: value,
  };
  formValidation.validateField('email', form.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  form = {
    ...form,
    comment: value,
  };
  formValidation.validateField('message', form.comment).then((result) => {
    onSetError('message', result);
  });
});

//No funciona



onSubmitForm('contact-button', () => {
  formValidation.validateForm(form).then((result) => {
    onSetFormErrors(result);
    if(result.succeeded){
      postContactForm(form).then(isForm=>{ //ISform???? arreglar 2:16:31 clase1 12A
        console.log({isForm});
      })
    }
  });
 
});
