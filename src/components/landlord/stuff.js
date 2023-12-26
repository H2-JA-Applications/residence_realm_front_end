import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const LandDashboard = () => {
  const [landlordProperties, setLandlordProperties] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/api/properties/landlord/properties')
          .then(response => response.json())
          .then(data => setLandlordProperties(data))
          .catch(error => console.error('Error:', error));
  }, []);
  
}

