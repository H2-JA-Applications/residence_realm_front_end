import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png";

const Receipts = () => {
    const [date] = useState(new Date());
    return(
        <body>
        <div class="profile">
            <label>Receipt</label>
        </div>
        <div class="form">
        <p class="upcoming">Confirmation: </p>
            <div class = "panel">
        <img class="logo" src={rrlogo} alt = ""/>
                <section class="gridbox">
                    <p class="dashboard-label"> Rent</p>
                    <p class="dashboard-label"> Status</p>
                    <p class="dashboard-label"> Payment Type</p>
                    <p class="dashboard-label"> Date Paid: {date.toLocaleDateString()}</p>
                </section>
                <section class="buttons">
                    <button type = "button" class="dashboard-button"> Back To Main Menu</button>
                </section>
            </div>
        </div>
    </body>
  );
}


export default Receipts;
