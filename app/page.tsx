import Image from "next/image";
import BookList from "./components/book-list/bookList";
import Basket from "./components/basket/Basket";

export default function Home() {
  return (
    <>
      <div className="flex items-stretch w-full h-[100vh]">
        <div className="w-[70%] h-full overflow-y-auto">
          <BookList></BookList>
        </div>
        <div className="w-[30%] border-l h-full p-[16px] relative flex flex-col">
          <Basket></Basket>
        </div >
      </div >
    </>
  );
}
