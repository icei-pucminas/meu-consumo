import Axios from "axios";
import AuthService from "./AuthsService";

let token = AuthService.getToken();

 const axios = Axios.create({
  baseURL: 'http://localhost/api',
  headers: {Authorization: token}
});

axios.interceptors.request.use(async req => {
   if (!token) {
      token = AuthService.getToken();
      req.headers.Authorization = token;
   }
   return req;
 })

export default axios;
