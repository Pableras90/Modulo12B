import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
export const getDetail = (id) =>
  Axios.get(`${url}/${id}`).then(({ data }) => data);
