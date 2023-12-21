import axios from "axios";


const getAllPropertUrl = "http://localhost:8080/api/properties";

class PropertyService{
    addProperty(property, userID){
        return axios.post(getAllPropertUrl + userID, property)
    }
    addTenant(propertyId, userID){
        return axios.post(getAllPropertUrl + propertyId + "add", userID)
    }
    getAllProperty(){
        return axios.get(getAllPropertUrl)
    }
    getProperty(propertyId){
        return axios.get(getAllPropertUrl + propertyId)
    }


}
export default PropertyService;