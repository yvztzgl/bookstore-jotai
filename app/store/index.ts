import { atom, useAtom } from "jotai";
import { BasketItem } from "../models/basket.model";
import { BookModel } from "../models/book.model";
import { atomWithStorage } from "jotai/utils";

export const basketItemsAtom = atomWithStorage<BasketItem[]>('basket',[]);