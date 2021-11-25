import axios from 'axios';
import dotenv from 'dotenv';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptors = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptors)

export {
    $host,
    $authHost
}