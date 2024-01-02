import axios from "axios";
import {axiosInterceptor} from "../utils/useToken";
axiosInterceptor();

const upcomingURL = 'http://localhost:8080/upcoming/property';
export default class UpcomingPaymentService{

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
    getUpcomingDate(propertyID){
        let url = `${upcomingURL}/${propertyID}`;
        return axios.get(url, { ...this.config})
        .then(response => response.data)  
    };

}