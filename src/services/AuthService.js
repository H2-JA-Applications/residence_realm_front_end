import axios from "axios";
import { axiosInterceptor } from "../utils/useToken.js"; 
axiosInterceptor();
const addTenantUrl = "http://localhost:8080/api/v1/auth/register/tenant";
const addLandLordUrl = "http://localhost:8080/api/v1/auth/register/landlord";
const loginUrl = "http://localhost:8080/api/v1/auth/login";

export default class AuthService{
    saveToken(token) {
        localStorage.setItem("token", token);
    }
    addTenant(user){
        return axios.post(addTenantUrl, user).then(response => {
            // Check if the response has a token and save it
            if (response.data && response.data.token) {
                this.saveToken(response.data.token);
            }
            return response.data;
        })
    }
    addLandlord(user){
        return axios.post(addLandLordUrl, user).then(response => {
            // Check if the response has a token and save it
            if (response.data && response.data.token) {
                localStorage.clear();
                this.saveToken(response.data.token);
            }
            return response.data;
        });
    }
    loginUser(user){
        return axios.post(loginUrl, user).then(response => {
            // Check if the response has a token and save it
            if (response.data && response.data.token) {
                this.saveToken(response.data.token);
            }
            console.log(JSON.stringify(response.data.token))
            return response.data;
        });
    }

}


// const requestHTTPOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer {AuthService.token}'
//     },
//     body: JSON.stringify(user)
// }
