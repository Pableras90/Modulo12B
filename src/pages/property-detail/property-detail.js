import { getPropertyDetail, getEquipments } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router/history';
import { mapPropertyDetailsFromApiToVm } from './property_detail.mappers';

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


getPropertyDetail(params.id).then((propertiesId) => {
  getEquipments().then((equipmentsList) => {   
    propertiesToVmId = mapPropertyDetailsFromApiToVm(propertiesId,equipmentsList);
    console.log(propertiesToVmId);
    setPropertyValues(propertiesToVmId);
  });
});

/*
Promise.all([getEquipments(), getPropertyDetail()]).then(
  ([equipmentsList, propertiesId]) => {   
      propertiesToVmId = mapPropertyDetailsFromApiToVm(propertiesId,equipmentsList);
      setPropertyValues(propertiesToVmId);
    });
  */