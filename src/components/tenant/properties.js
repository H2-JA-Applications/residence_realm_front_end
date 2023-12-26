import React, { useState, useEffect } from 'react';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/payment/landlord')
      .then(response => response.json())
      .then(data => setPayments(data));
  }, []);

  return (
    <div>
      {payments.map(payment => (
        <div key={payment.id}>
          <p>Tenant ID: {payment.tenantId}</p>
          <p>Property ID: {payment.propertyId}</p>
          <p>Amount: {payment.amount}</p>
          <p>Timestamp: {payment.timestamp}</p>
          <p>Date Paid: {payment.datePaid}</p>
          <p>Payment Status: {payment.paymentStatus}</p>
        </div>
      ))}
    </div>
  );
}
export default Payments;