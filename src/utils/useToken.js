import axios from 'axios';

export const axiosInterceptor = () => {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : ' ';
    return config;
  });

  axios.interceptors.response.use(response => {
    if(response.data.accessToken){
      localStorage.setItem("token", response.data.accessToken);
    }

    return response;
  }, error =>{
    if(error.response && error.response.status === 500){
      window.location.href = "/";
      
    }
    return Promise.reject(error);
  }
  );
  
}
