import { getPropertyList, getSaleTypeList, getProvinceList } from "./property-list.api";
import { mapPropertyListFromApiToViewModel } from "./property-list.mappers";
import { addPropertyRows, setOptions } from "./property-list.helpers";
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions, } from "./property-list.constants";


Promise.all([
    getPropertyList(),
    getSaleTypeList(),
    getProvinceList(),
]).then(([propertyList, saleTypeList, provinceList]) => {
    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');

});


const loadPropertyList = propertyList => {
    const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
    addPropertyRows(viewModelPropertyList);
};
