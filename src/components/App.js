import Login from "./login/login";
import Ten_Dashboard from "./tenant/ten_dashboard";
import Rental from "./choose_rental/rentals";
import Payment from "./pay_rent/payment";
import Receipts from "./confirm_receipt/receipts";
import Payment_Details from "./payment_details/payment_dets";
import Land_Dashboard from "./landord_dashboard/land_dashboard";
import Add_Rental from "./Add_Rental/add_rentals";


import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

    document.title = "Residence Realm";
    document.innerHTML = <link rel="icon" href="/notepad-background.png" />;

    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>} exact={true}></Route>
                <Route path={"/tenant_dashboard"} element={<Ten_Dashboard/>} exact={true}></Route>
                <Route path={"/tenant_dashboard/choose_rental"} element={<Rental/>} exact={true}></Route>
                <Route path={"/tenant_dashboard/payment"} element={<Payment/>} exact={true}></Route>
                <Route path={"/tenant_dashboard/view_receipts"} element={<Receipts/>} exact={true}></Route>
                <Route path={"/tenant_dashboard/payment_detail"} element={<Payment_Details/>} exact={true}></Route>
                <Route path={"/landlord_dashboard"} element={<Land_Dashboard/>} exact={true}></Route>
                <Route path={"/landlord_dashboard/add_rentals"} element={<Add_Rental/>} exact={true}></Route>
            </Routes>
        </BrowserRouter>  
  );
}


export default App;
