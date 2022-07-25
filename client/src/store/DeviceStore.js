import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Сматрфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: 'Samsung', price: 25000, rating: 5, img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12pro/iphone12-pro-colors.jpg'},
            {id: 2, name: 'Apple 1', price: 25000, rating: 5, img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12pro/iphone12-pro-colors.jpg'},
            {id: 2, name: 'Apple 2', price: 25000, rating: 5, img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12pro/iphone12-pro-colors.jpg'},
            {id: 2, name: 'Apple 3', price: 25000, rating: 5, img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12pro/iphone12-pro-colors.jpg'},
            {id: 2, name: 'Apple 4', price: 25000, rating: 5, img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12pro/iphone12-pro-colors.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
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
}