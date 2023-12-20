import React from 'react';
import rrlogo from "../../images/rrlogo.png"

const Payment = () => {
    return(
        <body>
            <div class="profile">
                <label>Payment</label>
            </div>
            <div class="form">
            <img class="logo" src={rrlogo} alt = ""/>
                    <select name="role" id="role" selectedIndex="-1" class="input">
                        <option value="">Select a Payment Type</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                        <option value="ach">ACH</option>
                        <option value="echeck">ECheck</option>
                    </select>
                <section class="gridbox">
                    <div class="input-form">
                        <input class="input" id="accounting/cardnumber" type="password" required name="accounting/cardnumber"/>
                        <label class="label" for="accounting/cardnumber">Account/Card Number</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="csv/routingnumber" type="text" required name="csv/routingnumber"/>
                        <label class="label" for="csv/routingnumber">CSV/Routing Number</label>
                    </div>
                    <div class="input-form">
                        <input class="input" id="expire" type="text" required name="expire"/>
                        <label class="label" for="expire">Expiration Date</label>
                    </div>
                    <select name="role" id="role" selectedIndex="-1" class="input2">
                        <option value="">Select Account Type</option>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                    </select>
                </section>
                <section class="buttons">
                    <button type = "button" class="dashboard-button">Make Payment</button>
                    <button type = "button" class="dashboard-button">Back To Dashboard</button>
                </section>
            </div>
        </body>
  );
}

export default Payment;
