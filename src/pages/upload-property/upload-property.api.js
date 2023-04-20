import Axios from 'axios';

const saleTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;
const provinceTypesUrl = `${process.env.BASE_API_URL}/provinces`;
const newPropertyUrl = `${process.env.BASE_API_URL}/properties`;
const equipmentUrl = `${process.env.BASE_API_URL}/equipments`;

export const getSaleTypes = () =>
  Axios.get(saleTypesUrl).then((response) => {
    return response.data;
  });

export const getProvinceType = () =>
  Axios.get(provinceTypesUrl).then((response) => {
    return response.data;
  });

export const getEquipmentList = () =>
  Axios.get(equipmentUrl).then((response) => {
    return response.data;
  });

export const addNewProperty = (newProperty) =>
  Axios.post(newPropertyUrl, newProperty).then((response) => response.data);
