import React from 'react';
import rrlogo from "../../images/rrlogo.png"

const Add_Rental = () => {
    return(
        <body>
            <div class="profile">
                <label>Add Rental</label>
            </div>
            <div class="form">
            <img class="logo" src={rrlogo} alt = ""/>
                <section class="gridbox">
                    <div class="input-form">
                        <input class="input" id="l_address" type="text" required name="l_address"/>
                        <label class="label" for="l_address">Address</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="rent_ammount" type="text" required name="rent_ammount"/>
                        <label class="label" for="rent_ammount">Rent</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="due_date" type="text" required name="due_date"/>
                        <label class="label" for="due_date">Due Date</label>
                    </div>
                    <select name="role" id="property_type" selectedIndex="-1" class="input2">
                        <option value="">Select Property Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="house">House</option>
                    </select>
                </section>
                <section class="buttons">
                    <div class="input-form">
                            <input class="input" id="apt_num" type="text" required name="apt_num"/>
                            <label class="label" for="apt_num">Apt Number</label>
                    </div>
                    <button type = "button" class="dashboard-button">Add Property</button>
                    <button type = "button" class="dashboard-button">Back To Dashboard</button>
                </section>
            </div>
        </body>
  );
}

export default Add_Rental;
