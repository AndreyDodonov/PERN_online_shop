import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    // ! Admin role only for dev. DELETE IT IN RELISE!!
    try {
        const { data } = await $host.post('api/user/registration', { email, password, role: 'Admin' })
        localStorage.setItem('token', data.token)
        console.log('\x1b[36m%s\x1b[0m', "!Delete admin role!");
        return jwt_decode(data.token)
    } catch (e) { }

}

export const login = async (email, password) => {
    try {
        const { data } = await $host.post('api/user/login', { email, password });
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    } catch (e) { alert(e.response.data.message); }

}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}