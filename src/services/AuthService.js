import axios from "axios";

const addTenantUrl = "http://localhost:8080/api/v1/auth/register/tenant";
const addLandLordUrl = "http://localhost:8080/api/v1/auth/register/landlord";
const loginUrl = "http://localhost:8080/api/v1/auth/login";

class AuthService{
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
export default new AuthService;