import Axios from "axios";

const saleTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;
const provinceTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypes = () =>
    Axios.get(saleTypesUrl).then((response) => {
        return response.data;
    });

export const getProvinceType = () =>
    Axios.get(provinceTypesUrl).then((response) => {
        return response.data;
    });
