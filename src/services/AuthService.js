import axios from "axios";

const addTenantUrl = "http://localhost:8080/api/v1/auth/register/tenant";
const addLandLordUrl = "http://localhost:8080/api/v1/auth/register/landlord";

class AuthService{
    addTenant(user){
        return axios.post(addTenantUrl, user);
    }
    addLandlord(user){
        return axios.post(addLandLordUrl, user);
    }
}
export default new AuthService;