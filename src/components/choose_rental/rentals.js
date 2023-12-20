import React, {useState} from 'react';
import rrlogo from "../../images/rrlogo.png"

const Rental = () => {
    const [date] = useState(new Date());
    return(
        <body>
            <div class="profile">
                <label>Choose Rental</label>
            </div>
            <div class="form">
            <img class="logo" src={rrlogo} alt = ""/>
                <section class="gridbox">
                    <div class="input-form">
                        <input class="input-text" id="address" type="text" required name="address"/>
                        <label class="label" for="address">Address</label>
                    </div>
                    <p class="dashboard-label"> Landlord Email</p>
                    <p class="dashboard-label"> Rent</p>
                    <p class="dashboard-label"> Due Date: <span></span> {date.toLocaleDateString()}</p>
                </section>
                <section class="buttons">
                    <button type = "button" class="dashboard-button"> Search Address</button>
                    <button type = "button" class="dashboard-button"> Pick Property</button>
                    <button type = "button" class="dashboard-button"> Back To Main Menu</button>
                </section>
            </div>
        </body>
  );
}


export default Rental;