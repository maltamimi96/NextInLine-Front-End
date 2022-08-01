import axios from "axios";
const API = axios.create({
    baseURL:"https://nextinline-backend.herokuapp.com/"


})
    API.interceptors.request.use((req)=>{
        const token= sessionStorage.token
        if(token){
            req.headers["Authorization"]=`Bearer ${token}`
        }
        return req
    })    


    
export default API