import axios from "axios";
import {axiosInterceptor} from "../utils/useToken";
axiosInterceptor();

const landlordProperties = 'http://localhost:8080/api/properties/landlord/properties';


class PropertyService{
    constructor() {
        const token = localStorage.getItem('token');
        this.config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization' : `Bearer ${token}`
            }
            
        };
        this.getAllPropertUrl = "http://localhost:8080/api/properties";
    
    };
    addProperty(property){
        return axios.post(this.getAllPropertUrl, property, this.config)
        .catch(err => {
            console.error("Error: whille adding property", err);
        });
    }
    addTenant(propertyId, userID){
        return axios.post(`${this.getAllPropertUrl}/${propertyId}/add`, userID, this.config)
        .catch(err => {
            console.error("Error: whille adding tenant", err);
        });
    }
    getAllProperty(){
        return axios.get(this.getAllPropertUrl, this.config).catch(err => {
            console.error("Error: whille getting all property", err)   
        });
    }

    getProperty(propertyId){
        return axios.get(`${this.getAllPropertUrl}/${propertyId}`, this.config)
        .catch(err => {
            console.error("Error: whille getting property", err);
        });
    }

    getLandlordProperties(){
        return axios.get(landlordProperties).then(response => {
            console.log(response);
            console.log(response.data);
            return response.data;
        });
    }


}
const propertyService = new PropertyService();
export default propertyService;