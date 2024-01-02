import axios from "axios";
import { axiosInterceptor } from "../utils/useToken.js"; 
axiosInterceptor();
const infoURL = "http://localhost:8080/api/v1/auth";
const upcoming = "http://localhost:8080/upcoming";

export default class UserInfo{
    viewInfo() {
        return axios.get(infoURL);
    }
    viewUpcoming(){
        return axios.get(upcoming);
    }
}
