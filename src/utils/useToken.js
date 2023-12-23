import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const axiosInterceptor = () => {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        useHistory().push('/');
      }
      return Promise.reject(error);
    }
  );
}
