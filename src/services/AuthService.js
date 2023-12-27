import axios from "axios";
import { axiosInterceptor } from "../utils/useToken.js"; 
axiosInterceptor();
const addUser = "http://localhost:8080/api/v1/auth/register";
const loginUrl = "http://localhost:8080/api/v1/auth/login";

export default class AuthService{
    saveToken(token) {
        localStorage.setItem("token", token);
    }
    saveRole(role) {
        localStorage.setItem("role", role);
    }
    addTenant(user){
        localStorage.clear();
        return axios.post(addUser, user).then(response => {
            // Check if the response has a token and save it
            if (response.data && response.data.accessToken) {
                this.saveToken(response.data.accessToken);
            }
            return response.data;
        })
    }
    addLandlord(user){
        localStorage.clear();
        // console.log(response.data);
        return axios.post(addUser, user).then(response => {
            console.log(user);
            // Check if the response has a token and save it
            if (response.data && response.data.accessToken) {
                this.saveToken(response.data.accessToken);
            }
            return response.data;
        });
    }
    loginUser(user){
        localStorage.clear();
        return axios.post(loginUrl, user).then(response => {
            // Check if the response has a token and save it
            if (response.data && response.data.accessToken && response.data.role) {
                this.saveToken(response.data.accessToken);
                this.saveRole(response.data.role);
            }
            else{
                console.log("Login failed no token in response ");
                throw Error("No Data in response");
            }
            console.log(JSON.stringify(response.data.accessToken))
            return response.data;
        }).catch((error) => {
            console.log(error);
            throw error;
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
