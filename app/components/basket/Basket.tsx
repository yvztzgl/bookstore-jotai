'use client';

import { basketItemsAtom } from "@/app/store";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
const readonlyBasketItems = atom((get) => get(basketItemsAtom));

export default function Basket() {
    const [basketItems] = useAtom(readonlyBasketItems);
    const total = basketItems.reduce((total,item) =>{
        return total + (item.item.price * item.quantity)
    },0);

    useEffect(() =>{
        console.log(basketItems);
    },[basketItems])

    return <>
        <div className="grow overflow-y-auto pb-4 flex flex-col gap-3">
            {
                basketItems.map(item => {
                    return <div key={item.item.id} className="flex border gap-2 px-2 py-2 rounded" >
                            <div className="h-[64px]">
                                <img alt="" src={item.item.imgUrl} className="h-[64px] w-[52px]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px]">{item.item.title}</span>
                                <span className="opacity-60 text-[12px]">{item.item.author}</span>
                                <span>{item.item.price * item.quantity}TL</span>
                            </div>
                            <div className="ml-auto flex flex-col">
                                <button className="bg-black flex items-center justify-center text-white w-[24px] h-[24px]">+</button>
                                <button className="border-l border-r">{item.quantity}</button>
                                <button className="bg-black flex items-center justify-center text-white w-[24px] h-[24px]">-</button>
                            </div>
                        </div>
                    
                })
            }
        </div >
        <button
            className="w-full disabled:opacity-30 mt-auto flex bg-black text-white p-2 rounded items-center justify-between" ><span>Ödemeye
                Git</span> <span>{total}TL</span></button >
    </>
}