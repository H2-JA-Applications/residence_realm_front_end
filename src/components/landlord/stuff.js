import React, { useState, useEffect } from 'react';

export const useLandlordProperties = () => {
  const [landlordProperties, setLandlordProperties] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/api/properties/landlord/properties')
          .then(response => response.json())
          .then(data => setLandlordProperties(data))
          .catch(error => console.error('Error:', error));
  }, []);

  return landlordProperties;
}