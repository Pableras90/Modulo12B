import { onUpdateField, onSubmitForm } from '../../common/helpers';
import { uploadValidation } from './upload-property.validations';
import { onSetError } from '../../common/helpers';
/*
Recuperar los valores del formulario de Datos generales.***
Crear validaciones necesarias de dicho formulario.***
Recuperar los valores del formulario de Datos de la vivienda.***
Crear validaciones necesarias de dicho formulario.
Recuperar los valores del formulario de Subir fotos.***
Crear mapper para cumplir con el modelo de la api.
Crear método post para enviar información del formulario.
*/

let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: '',
  equipments: '',
  images: '',
};

onUpdateField('title', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    title: value,
  };
  uploadValidation.validateField('title', newProperty.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    notes: value,
  };
uploadValidation.validateField('notes', newProperty.notes).then((result) => {
    onSetError('notes', result);
  });
});
onUpdateField('email', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value,
  };
  uploadValidation.validateField('email', newProperty.email).then((result) => {
    onSetError('email', result);
  });
});
onUpdateField('phone', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value,
  };
  uploadValidation.validateField('phone', newProperty.phone).then((result) => {
    onSetError('phone', result);
  });
});
onUpdateField('price', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: value,
  };
uploadValidation.validateField('price',newProperty.price).then((result)=>{
  onSetError('price',result);
});
});
onUpdateField('saleTypes', (event) => {
  //ARRAY
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    saleTypes: value,
  };
});
onUpdateField('address', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value,
  };
});
onUpdateField('city', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value,
  };
});

onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value,
  };
});
onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: value,
  };
});
onUpdateField('rooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: value,
  };
});
onUpdateField('bathRooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: value,
  };
});
onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value,
  };
});
onUpdateField('mainFeatures', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    mainFeatures: value,
  };
});

onUpdateField('equipments', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    equipments: value,
  };
});
onUpdateField('images', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    images: value,
  };
});
