'use client'
import { BookModel } from "@/app/models/book.model"
import Book from "../book/book"
import { useAtom } from "jotai";
import { basketItemsAtom } from "@/app/store";
import { useEffect } from "react";

export default function BookList() {
    
    
    const books:BookModel[] = [
        {
          id:'1',
          title:'Çocuk, Köstebek, Tilki ve At',
          author:'Charlie Mackesy',
          imgUrl:'https://r2.1k-cdn.com/sig/size:256/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F268597_0c99f_1640083713.jpg',
          price:100
        },
        {
          id:'2',
          title:'Böyle Buyurdu Zerdüşt',
          author:'Friedrich Nietzsche',
          imgUrl:'https://r2.1k-cdn.com/sig/size:384/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F2111894_1703967400_4wFai.jpg',
          price:120
        },{
          id:'3',
          title:'Ermiş',
          author:'Halil Cibran',
          imgUrl:'https://r2.1k-cdn.com/sig/size:384/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2FErmis_852_1389815786.jpg',
          price:79
        },
        {
          id:'4',
          title:'Uçurtmayı Vurmasınlar',
          author:'Feride Çiçekoğlu',
          imgUrl:'https://r2.1k-cdn.com/sig/size:384/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F56586_c5768_1599597955.jpg',
          price:100
        },
        {
          id:'5',
          title:'Sineklerin Tanrısı',
          author:'William Golding',
          imgUrl:'https://r2.1k-cdn.com/sig/size:384/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_683b1_1590098323.jpg',
          price:190
        },
        {
          id:'6',
          title:'Hayvan Çiftliği',
          author:'George Orwell',
          imgUrl:'https://r2.1k-cdn.com/sig/size:640/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F56085_RXIua_1525561545.jpg',
          price:140
        },
        {
          id:'7',
          title:'Otomatik Portakal',
          author:'Anthony Burgess',
          imgUrl:'https://r2.1k-cdn.com/sig/size:640/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F9414_0e26b_1553711443.jpg',
          price:140
        },{
          id:'8',
          title:'Açlık',
          author:'Knut Hamsun',
          imgUrl:'https://r2.1k-cdn.com/sig/size:384/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2F%2Fkitaplar%2F101_1441502227.jpg',
          price:140
        },
        {
          id:'9',
          title:'İnsanlığımı Yitirirken',
          author:'Osamu Dazai',
          imgUrl:'https://r2.1k-cdn.com/sig/size:640/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F316900_sCQtI_1649925794.jpg',
          price:140
        },{
          id:'10',
          title:'Yaşamak',
          author:'Yu Hua',
          imgUrl:'https://r2.1k-cdn.com/sig/size:384/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F87436_05203_1570726113.jpg',
          price:140
        }
      ]
    return <>
        <div className="grid grid-cols-4 gap-[16px] items-stretch p-[16px]">
            {
                books.map(book =>{
                    return <Book key={book.id} book={book}></Book>
                })
            }
        </div >
    </>
}