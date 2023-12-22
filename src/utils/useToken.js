import axios from 'axios';

export const axiosInterceptor = () => {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });
}
