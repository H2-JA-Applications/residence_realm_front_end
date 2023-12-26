import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Function to fetch payments data and return JSON
function fetchPaymentsData() {
  return axios.get('http://localhost:8080/api/payment/landlord')
      .then(response => response.data) // Extracting JSON from response
      .catch(error => {
          console.error('There was an error fetching payments data:', error);
          throw error; // Re-throw the error for the caller to handle
      });
}

export default fetchPaymentsData;

