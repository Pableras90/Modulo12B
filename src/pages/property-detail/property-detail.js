import { getPropertyDetail } from './properties-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { history } from '../../core/router/history';


const params =history.getParams();
const isEditMode =Boolean(params.id);

if (isEditMode){
    getPropertyDetail(params.id).then()
}

getPropertyDetail(params.id).then((propertiesId) => {
  setPropertyValues(propertiesId);
});
