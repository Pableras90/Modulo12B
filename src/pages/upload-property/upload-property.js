import { onUpdateField, onSubmitForm } from '../../common/helpers';

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

Promise.all



onUpdateField('title', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    title: value,
  };
});
onUpdateField('notes', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    notes: value,
  };
});
onUpdateField('email', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value,
  };
  formValidation.validateField('email', newProperty.email).then((result) => {
    onSetError('email', result);
  });
});
onUpdateField('phone', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value,
  };
});
onUpdateField('price', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: value,
  };
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
