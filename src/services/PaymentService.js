import axios from "axios";
import { axiosInterceptor } from "../utils/useToken.js";
axiosInterceptor();
const addPaymentUrl = "http://localhost:8080/api/payment/pay";
const paymenthist = "http://localhost:8080/api/payment/tenant/all"
 
const receivedProperties = 'http://localhost:8080/api/payment/tenant/payments';

export default class PaymentService{
    constructor() {
        const token = localStorage.getItem('token');
        this.config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization' : `Bearer ${token}`
            }
            
        };
    
    };
    
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
        return axios.get(paymenthist).then(response => {
            return response.data;
        })
    }
    getPropertyReceipts() {
        return axios.get(receivedProperties, { ...this.config})
          .then(response => response.data)
      }
 
}