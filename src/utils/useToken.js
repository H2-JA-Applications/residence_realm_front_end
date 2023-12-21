import React, {useState} from 'react'
import axios from 'axios';


const axiosInterceptor= () => {axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
}

 

