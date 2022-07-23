import axios from "axios";
const API = axios.create({
    baseURL:"http://127.0.0.1:3000"


})
    API.interceptors.request.use((req)=>{
        const token= sessionStorage.token
        if(token){
            req.headers["Authorization"]=`Bearer ${token}`
        }
        return req
    })    


    
export default API