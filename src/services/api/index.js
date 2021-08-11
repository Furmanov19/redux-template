import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.response.use(
  response => response,
  error => error
);

const setHeaders = headers => {
  const defaultHeader = { 'Content-Type': 'application/json' };
  if (headers) return Object.assign(defaultHeader, headers);
  return defaultHeader;
};

const get = (url, headers) => {
  return axios.get(`${url}`, setHeaders(headers));
};

const post = (url, data, headers) => {
  const currentHeaders = setHeaders(headers);
  return axios.post(`${url}`, data, currentHeaders);
};

const patch = (url, data, headers) => {
  return axios.patch(`${url}`, data, setHeaders(headers));
};

const put = (url, data, headers) => {
  return axios.put(`${url}`, data, setHeaders(headers));
};

const remove = (url, data, headers) => {
  return axios.delete(`${url}`, setHeaders(headers));
};

export default {
  get,
  post,
  put,
  patch,
  remove,
};
