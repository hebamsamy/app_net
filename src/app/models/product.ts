export class Product {
    id: number;
    name: string
    price: number
    quantity: number
    categoryID: number
    imgURL: string

    constructor(
        _id: number,
        _n: string,
        _p: number,
        _q: number,
        _img: string,
        _Cid: number,
    ) {
        this.id = _id;
        this.categoryID = _Cid
        this.imgURL = _img
        this.name = _n
        this.price = _p
        this.quantity = _q
    }
}