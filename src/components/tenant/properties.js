import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/payment/landlord')
      .then(response => {
        setPayments(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Tenant ID</th>
          <th>Property ID</th>
          <th>Amount</th>
          <th>Timestamp</th>
          <th>Date Paid</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        {payments.map(payment => (
          <tr key={payment.id}>
            <td>{payment.tenantId}</td>
            <td>{payment.propertyId}</td>
            <td>{payment.amount}</td>
            <td>{payment.timestamp}</td>
            <td>{payment.datePaid}</td>
            <td>{payment.paymentStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Payments;