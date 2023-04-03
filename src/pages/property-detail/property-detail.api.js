import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

const urlEquipment = `${process.env.BASE_API_URL}/equipments`;

const urlContact = `${process.env.BASE_API_URL}/contact`;

export const getPropertyDetail = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });

export const getEquipments = () =>
  Axios.get(urlEquipment).then((response) => {
    return response.data;
  });

export const postContactForm = (form) =>
  Axios.post(urlContact, form).then((response) => {
    return response.data;
  });

