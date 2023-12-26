import axios from 'axios';

export const axiosInterceptor = () => {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem("accessToken");
    config.headers.Authorization = token ? `Bearer ${token}` : ' ';
    return config;
  });

  axios.interceptors.response.use(response => {
    if(response.data.accessToken){
      localStorage.setItem("token", response.data.accessToken);
    }
  });
  

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );
}
