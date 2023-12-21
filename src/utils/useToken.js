import React, {useState} from 'react'
import axios from 'axios';

  const axiosInterceptor= () => {axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    config.headers['Content-Encoding'] = 'application/json';
    config.headers.Accept = '*/*';
    config.headers['Accept-Encoding'] = 'gzip,deflate,br';
    config.headers['Connection'] = 'keep-alive';

    return config;
  });
}


 

