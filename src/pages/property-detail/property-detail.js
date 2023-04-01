import { getPropertyDetail } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router/history';
import { mapPropertyDetailsFromApiToVm } from './property_detail.mappers';

let propertiesToVmId={
    id:'',
    title:'',
    notes:'',
    price:'',
    city:'',
    squareMeter:'',
    rooms:'',
    bathrooms:'',
    locationUrl:'',
    mainFeatures:'',
    equipments:'',
    mainImage:'',
    images:'',
  };

  let equipments = [];
  getEquipments().then(data=>{
    console.log(data);
    equipments=data.map(id=>id.name);
    console.log(equipments)
  })


const params = history.getParams();

getPropertyDetail(params.id).then((propertiesId) => {
  propertiesToVmId = mapPropertyDetailsFromApiToVm(propertiesId);
  setPropertyValues(propertiesToVmId);
});
