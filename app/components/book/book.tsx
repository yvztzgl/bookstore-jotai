'use client'
import { BookModel } from "@/app/models/book.model";
import { basketItemsAtom } from "@/app/store";
import { useAtom } from "jotai";
import { selectAtom } from "jotai/utils";
import { useMemo } from "react";


export default function Book({ book }: { book: BookModel }) {
    const [basketItems,setBasketItems] = useAtom(basketItemsAtom);
    const [basketBook] = useAtom(useMemo(() => selectAtom(basketItemsAtom,(v => v.find(item => item.item.id == book.id))),[]))

    function addItem(){
        let ind = basketItems.findIndex(item => item.item.id == book.id);
        if(ind > -1){
            let newItems = JSON.parse(JSON.stringify(basketItems));
            newItems[ind].quantity += 1;
            setBasketItems(newItems);
        }else{
            setBasketItems([...basketItems,{item:book,quantity:1}])
        }
    }

    return <>
        <div className="border p-[8px] flex flex-col gap-3 rounded relative shadow-md">
            {
                basketBook && <span className="bg-orange-400 absolute text-[12px] px-2 py-1 rounded-tr rounded-bl right-0 top-0 text-white">Sepette ({basketBook.quantity   })</span>
            }
        <img src={book.imgUrl} className="h-[240px] w-[180px] m-auto" alt="" />
        <div className="flex flex-col">
            <span><b>{ book.title }</b></span>
            <span className="opacity-60">{book.author}</span>
        </div>
        <button onClick={addItem}  className="w-full flex bg-black text-white p-2 rounded items-center justify-between">
        <span>Satın Al</span>
        <span>{ book.price }TL</span>
    </button >
</div >
    </>
}