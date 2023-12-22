import axios from "axios";
import {axiosInterceptor} from "../utils/useToken";

axiosInterceptor();

const getAllPropertUrl = "http://localhost:8080/api/properties";


class PropertyService{
    constructor() {
        this.config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip,deflate,br',
                'Connection': 'keep-alive'
            }
        }
    };
    addProperty(property){
        return axios.post(this.getAllPropertUrl, property, this.config)
        .catch(err => {
            console.error("Error: whille adding property", err);
        });
    }
    addTenant(propertyId, userID){
        return axios.post(`${this.getAllPropertUrl}/${propertyId}/add`, userID)
        .catch(err => {
            console.error("Error: whille adding tenant", err);
        });
    }
    getAllProperty(){
        return axios.get(getAllPropertUrl, this.config).catch(err => {
            console.error("Error: whille getting all property", err)   
        });
    }

    getProperty(propertyId){
        return axios.get(`${getAllPropertUrl}/${propertyId}`, this.config)
        .catch(err => {
            console.error("Error: whille getting property", err);
        });
    }


}
const propertyService = new PropertyService();
export default propertyService;