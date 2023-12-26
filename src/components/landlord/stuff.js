import axios from 'axios';

// Function to fetch landlord properties data and return JSON
export function fetchLandlordProperties() {
    return axios.get('http://localhost:8080/api/properties/landlord/properties')
        .then(response => response.data) // Extracting JSON from response
        .catch(error => {
            console.error('Error fetching landlord properties:', error);
            throw error; // Re-throw the error for the caller to handle
        });
};