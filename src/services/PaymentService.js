import axios from "axios";
import { axiosInterceptor } from "../utils/useToken.js";
axiosInterceptor();
const addPaymentUrl = "http://localhost:8080/api/payment/pay";
// const addLandLordUrl = "http://localhost:8080/api/v1/auth/register/landlord";
const paymenthist = "http://localhost:8080/api/payment/tenant/payments"
// const addLandLordUrl = "http://localhost:8080/api/v1/auth/register/landlord";
// const loginUrl = "http://localhost:8080/api/v1/auth/login";
 
export default class PaymentService{
    saveToken(token) {
        localStorage.setItem("token", token);
    }
    addPayment(payment){
        return axios.post(addPaymentUrl, payment).then(response => {
            // Check if the response has a token and save it
            if (response.data && response.data.token) {
                this.saveToken(response.data.token);
            }
            return response.data;
        })
    }
    viewPayment(){
        console.log("worked");
        return axios.get(paymenthist).then(response => {
            return response.data;
        })
    }
 
}