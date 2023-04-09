import { onUpdateField, onSubmitForm } from '../../common/helpers';
import { uploadValidation } from './upload-property.validations';
import { onSetError, onSetFormErrors } from '../../common/helpers';
import {
  getSaleTypes,
  getProvinceType,
  addNewProperty,
} from './upload-property.api';
import {
  formatCheckboxId,
  setCheckboxList,
  setOptionList,
  formatDeleteFeatureButtonId,
} from './upload-property.helpers';
import { mapNewPropertyFromVmToApi } from './upload-property.mappers';

/*
Recuperar los valores del formulario de Datos generales.***
Crear validaciones necesarias de dicho formulario.***
Recuperar los valores del formulario de Datos de la vivienda.***
Crear validaciones necesarias de dicho formulario.
Recuperar los valores del formulario de Subir fotos.***
Crear mapper para cumplir con el modelo de la api. 
Crear método post para enviar información del formulario.*** en properties?
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

const addProperty = (value) => {
  newProperty = {
    ...newProperty,
    saleTypes: [...newProperty.saleTypes, value],
  };
};
//REVISAR
const setEvents = (list) => {
  list.forEach((element) => {
    const id = formatCheckboxId(element);
    onUpdateField(id, (event) => {
      const value = event.target.value;
      addProperty(value);
    });
  });
  uploadValidation
    .validateField('saleTypes', newProperty.saleTypes)
    .then((result) => {
      onSetError('saleTypes', result);
    });
};

Promise.all([getProvinceType(), getSaleTypes()]).then(
  ([ provinceList,saleTypesList]) => {
    setCheckboxList(saleTypesList, 'saleTypes');//
    setEvents(saleTypesList);
    setOptionList(provinceList, 'province'); 
  }
);

onUpdateField('newFeature', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    mainFeatures: value,
  };
  uploadValidation
    .validateField('newFeature', newProperty.mainFeatures)
    .then((result) => {
      onSetError('newFeature', result);
    });
});

//DATOS GENERALES--------------------------------------------------------------

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
  uploadValidation.validateField('price', newProperty.price).then((result) => {
    onSetError('price', result);
  });
});

//DATOS DE VIVIENDA----------------------------------------------------------------

onUpdateField('address', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value,
  };
  uploadValidation
    .validateField('address', newProperty.address)
    .then((result) => {
      onSetError('address', result);
    });
});
onUpdateField('city', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value,
  };
  uploadValidation.validateField('city', newProperty.city).then((result) => {
    onSetError('city', result);
  });
});

onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value,
  };
  uploadValidation
    .validateField('province', newProperty.province)
    .then((result) => {
      onSetError('province', result);
    });
});
onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: value,
  };
  uploadValidation
    .validateField('squareMeter', newProperty.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});
onUpdateField('rooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: value,
  };
  uploadValidation.validateField('rooms', newProperty.rooms).then((result) => {
    onSetError('rooms', result);
  });
});
onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: value,
  };
  uploadValidation
    .validateField('bathrooms', newProperty.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});
onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value,
  };
  uploadValidation
    .validateField('locationUrl', newProperty.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

//Boton insertar----------------------------

onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  if (value) {
    newProperty = {
      ...newProperty,
      mainFeatures: [...newProperty.mainFeatures, value],
    };
    formatDeleteFeatureButtonId(value);
  }
});
///////////////////////////////////////////////////////
onUpdateField('equipments', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    equipments: value,
  };
  uploadValidation
    .validateField('equipments', newProperty.equipments)
    .then((result) => {
      onSetError('equipments', result);
    });
});
onUpdateField('images', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    images: value,
  };
  uploadValidation
    .validateField('images', newProperty.images)
    .then((result) => {
      onSetError('images', result);
    });
});

//Boton guardar---------------------------------------------
onSubmitForm('save-button', () => {
  console.log(newProperty);
  uploadValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);
  });
  const apiNewProperty = mapNewPropertyFromVmToApi(newProperty);
  //Insertar propiedad ??
});
