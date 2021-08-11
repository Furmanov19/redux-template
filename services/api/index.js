import axios from 'axios';
import store from 'src/store';
import history from 'src/store/history';
import apiConfig from './configure';

axios.defaults.baseURL = apiConfig.getBaseUrl();
axios.defaults.timeout = apiConfig.timeout;

axios.interceptors.response.use(
  response => response,
  error => {
    const typeError = 'priorityLevel';

    if (error.response.status === 404 && error.response.data.type === typeError) {
      history.push('/');
    }
    if (error.response.status === 401) {
      const { accessToken } = store.getState().auth.user;
      const jwtToken = localStorage.getItem('token');
      window.location.replace(
        `${process.env.REACT_APP_API_URI}/logout?accessToken=${accessToken}&jwtToken=${jwtToken}`
      );
    }
    return Promise.reject(error);
  }
);

const setAuthTokenToHeader = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

const deleteAuthTokenFromHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

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
  setAuthTokenToHeader,
  deleteAuthTokenFromHeader,
};
