import { onUpdateField, onSubmitForm } from '../../common/helpers';
import { uploadValidation } from './upload-property.validations';
import { onSetError, onSetFormErrors, onAddFile } from '../../common/helpers';
import {
  getSaleTypes,
  getProvinceType,
  addNewProperty,
  getEquipmentList,
} from './upload-property.api';
import {
  formatCheckboxId,
  setCheckboxList,
  setOptionList,
  formatDeleteFeatureButtonId,
  onAddImage,
  onAddFeature,
  onRemoveFeature,
} from './upload-property.helpers';
import { mapNewPropertyFromVmToApi } from './upload-property.mappers';



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
  mainFeatures: [],
  equipmentIds: [],
  images: [],
};

//REVISAR

const addElement = (value, object, id) => {
  return { ...object, [id]: [...object[id], value] };
};

const removeElement = (value, object, id) => {
  return { ...object, [id]: object[id].filter((element) => element !== value) };
};

const setEvents = (list, ID) => {
  list.forEach((element) => {
    const id = formatCheckboxId(element);
    onUpdateField(id, (event) => {
      const value = event.target.value;
      if (event.target.checked === true) {
        console.log(addElement(value, newProperty, ID));
        newProperty = addElement(value, newProperty, ID);
      } else {
        newProperty = removeElement(value, newProperty, ID);
      }
    });
  });
};

Promise.all([getProvinceType(), getSaleTypes(), getEquipmentList()]).then(
  ([provinceList, saleTypesList, equipmentsList]) => {
    setCheckboxList(saleTypesList, 'saleTypes');
    setCheckboxList(equipmentsList, 'equipments');
    setEvents(saleTypesList, 'saleTypes');
    setEvents(equipmentsList, 'equipmentIds');
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




///////////////////////////////////////////////////////
/*onUpdateField('equipments', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    equipmentIds: [...newProperty.equipmentIds,value],
  };
  uploadValidation
    .validateField('equipments', newProperty.equipmentIds)
    .then((result) => {
      onSetError('equipments', result);
    });
});*/


//Boton guardar---------------------------------------------
onSubmitForm('save-button', () => {
  uploadValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);
    const apiNewProperty = mapNewPropertyFromVmToApi(newProperty);
    if (result.succeeded) {
      addNewProperty(apiNewProperty).then(() => {
        console.log('apiNewProperty', apiNewProperty);
        history.back();
      });
    }
  });
});

//Boton insertar (REVISAR)
onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  if (value) {
    const deleteId = formatDeleteFeatureButtonId(value);
    newProperty = addElement(value, newProperty, 'mainFeatures');
    onAddFeature(value);
    onSubmitForm(deleteId, () => {
      onRemoveFeature(value);
      newProperty = removeElement(value, newProperty, 'mainFeatures');
    });
  }
});
//REVISAR
onAddFile('add-image', value => {
  newProperty = {
    ...newProperty,
    images: [...newProperty.images, value],
  };
  onAddImage(value);
});

