import axios from "axios";

const SERVER_AXIOS = axios.create({
    baseURL:"http://192.168.1.47:10000"
})

export const  GET_REQ = async()=>{
    return await SERVER_AXIOS.get("/");
}