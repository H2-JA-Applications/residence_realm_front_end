import axios from "axios";
import {axiosInterceptor} from "../utils/useToken";

axiosInterceptor();

const landlordProperties = 'http://localhost:8080/api/properties/landlord/properties';
const receivedProperties = 'http://localhost:8080/api/payment/all/4';
const TenanttoProperty = 'http://localhost:8080/api/properties/';

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
            return response.data;
        });
    }

    getPropertyReceipts(){
        return axios.get(receivedProperties).then(response => {
            return response.data;
        });
    }

    addTenanttoProperty(propId, tenId) {
        let url = `${TenanttoProperty}${propId}/add/${tenId}`;
        return axios.post(url).then(response => {
            return response.data;
        });
    }
    
    removeTenanttoProperty(propId, tenId) {
        let url = `${TenanttoProperty}${propId}/removeTenant/${tenId}`;
        return axios.put(url).then(response => {
            return response.data;
        });
    }
}
const propertyService = new PropertyService();
export default propertyService;