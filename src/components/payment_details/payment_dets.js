
import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png";
const Payment_Details = () => {
    const [date] = useState(new Date());
    return(
        <body>
        <div class="profile">
            <label>Payment Detail</label>
        </div>
        <div class="form">
        
            <div class = "panel">
                <br/>
                <img class="logo" src={rrlogo} alt = ""/>
                <section class="gridbox">
                    <p class="dashboard-label">Rent</p>
                    <p class="dashboard-label">Status</p>
                    <p class="dashboard-label">Payment Type</p>
                    <p class="dashboard-label">Date Paid: {date.toLocaleDateString()}</p>
                    <p class="dashboard-label">Property Id</p>
                    <p class="dashboard-label">Payment Id</p>
                </section>
                <section class="buttons">
                    <button type = "button" class="dashboard-button">Payment History</button>
                    <button type = "button" class="dashboard-button">Back To Main Menu</button>
                </section>
            </div>
        </div>
    </body>
  );
}


export default Payment_Details;
