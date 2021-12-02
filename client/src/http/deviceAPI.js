import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

// FOR TYPES

export const createType = async (type) => {
    try {
        const { data } = await $authHost.post('api/type', type)        
        return data
    } catch (e) { alert(e.response.data.message); }

}

export const getTypes = async () => {
    try {
        const { data } = await $host.get('api/type');       
        return data
    } catch (e) { alert(e.response.data.message); }

}

// FOR DEVICES

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}


// FOR BRANDS

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

// TODO: need realise update and delete type