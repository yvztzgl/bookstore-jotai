import { BookModel } from "./book.model";

export interface BasketItem{
    item:BookModel,
    quantity:number,
}

export interface Basket{
    items:BasketItem[],
    total:number,
}