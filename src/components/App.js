import Login from "./login/login";
import Ten_Dashboard from "./tenant/ten_dashboard";
import Rental from "./tenant/rentals";
import Payment from "./tenant/payment";
import Receipts from "./tenant/receipts";
import Payment_Details from "./tenant/payment_dets";
import Land_Dashboard from "./landlord/land_dashboard";
import Add_Rental from "./landlord/add_rentals";
import Track_Late from "./landlord/track_late";
import Manage_Pay from "./landlord/manage_pay";
import Received_Pay from "./landlord/receive_pay";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    document.title = "Residence Realm";
    document.innerHTML = <link rel="icon" href="../notepad-background.png"/>;
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
                <Route path={"/landlord_dashboard/receive_pay"} element={<Received_Pay/>} exact={true}></Route>
                <Route path={"/landlord_dashboard/track_late"} element={<Track_Late/>} exact={true}></Route>
                <Route path={"/landlord_dashboard/manage_pay"} element={<Manage_Pay/>} exact={true}></Route>
                <Route path={"/landlord_dashboard/add_rentals"} element={<Add_Rental/>} exact={true}></Route>
            </Routes>
        </BrowserRouter>  
  );
}


export default App;
