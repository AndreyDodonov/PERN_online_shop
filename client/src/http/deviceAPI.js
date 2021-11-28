import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    try {
        const { data } = await $authHost.post('api/type', type)        
        return data
    } catch (e) { alert(e.response.data.message); }

}

export const getTypes = async () => {
    try {
        const { data } = await $host.post('api/type');       
        return data
    } catch (e) { alert(e.response.data.message); }

}

// TODO: need realise update and delete type