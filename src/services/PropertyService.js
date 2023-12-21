import axios from "axios";


const getAllPropertUrl = "http://localhost:8080/api/properties";

class PropertyService{
    config = {
    headers: {
      "Access-Control-Request-Headers": "X-Requested-With" ,
      "Access-Control-Request-Method": "POST",
      'Origin':"http://localhost:3000",
    }
  }
    addProperty(property){
        return axios.post(getAllPropertUrl, property, this.config)
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
export default new PropertyService;