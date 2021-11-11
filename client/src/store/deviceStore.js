import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' },
            { id: 3, name: 'Телевизоры' },
            { id: 4, name: 'Ноутбуки' },
        ]
        this._brands = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Samsung' }
        ]
        this._devices = [
            { id: 1, name: 'Iphone12 Pro', price: 100000, rating: 5, img: 'https://pineapple7.ru/image/cache/catalog/tovary/apple/iPhone%2012/iPhone%2012%20Pro%20128-1000x1000.png' },
            { id: 2, name: 'Iphone11 Pro', price: 50000, rating: 5, img: 'https://pineapple7.ru/image/cache/catalog/tovary/apple/iPhone%2012/iPhone%2012%20Pro%20128-1000x1000.png' },
            { id: 3, name: 'Iphone10 Pro', price: 10000, rating: 5, img: 'https://pineapple7.ru/image/cache/catalog/tovary/apple/iPhone%2012/iPhone%2012%20Pro%20128-1000x1000.png' },
            { id: 4, name: 'Iphone9 Pro', price: 150, rating: 5, img: 'https://pineapple7.ru/image/cache/catalog/tovary/apple/iPhone%2012/iPhone%2012%20Pro%20128-1000x1000.png' },
        ]
        this._SelectedType = {}
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

}