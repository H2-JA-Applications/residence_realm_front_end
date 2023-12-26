import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useLandlordProperties = () => {
  const [landlordProperties, setLandlordProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/properties/landlord/properties')
      .then(response => {
        setLandlordProperties(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return landlordProperties;
}