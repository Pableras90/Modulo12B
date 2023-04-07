import Axios from "axios";

const saleTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;
const provinceTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;
const newPropertyUrl = `${process.env.BASE_API_URL}/properties`;

export const getSaleTypes = () =>
    Axios.get(saleTypesUrl).then((response) => {
        return response.data;
    });

export const getProvinceType = () =>
    Axios.get(provinceTypesUrl).then((response) => {
        return response.data;
    });

export const addNewProperty = (newProperty) => {
    Axios.post(newPropertyUrl, newProperty).then((response) => {
        return response.data;
      });
};