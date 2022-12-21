import axios from "axios";


export const HTTP = axios.create({
    baseURL: 'http://178.151.201.167:49203/api/v1/'
})