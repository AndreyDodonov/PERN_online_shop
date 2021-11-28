import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._SelectedType = {}
        this._SelectedBrand = {}
        makeAutoObservable(this)
    }

    // actions
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._SelectedType = type
    }
    setSelectedBrand(brand) {
        this._SelectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._SelectedType
    }
    get selectedBrand() {
        return this._SelectedBrand
    }

}