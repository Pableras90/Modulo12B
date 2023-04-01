import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

const urlEquipment = `${process.env.BASE_API_URL}/equipments`;

export const getPropertyDetail = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });

export const getEquipments = () => {
  Axios.get(urlEquipment).then((response) => {
    return response.data;
  });
};
