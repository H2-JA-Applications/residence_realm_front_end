import axios from "axios";
import { axiosInterceptor } from "../utils/useToken.js"; 
axiosInterceptor();
const infoURL = "http://localhost:8080/api/v1/auth";

export default class UserInfo{
    viewInfo() {
        return axios.get(infoURL);
    }
}
