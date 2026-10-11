"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/booksType";
import { useContext } from "react";
import { toast } from "react-toastify";



const ReadTheButton = ({book}:{book:IBook}) => {

    const booksProviderRead= useContext(BooksContext)
    const {readBooks,setReadBooks} =booksProviderRead

    // console.log(booksProviderRead ,"Books provider")

    const handleReadButton =() =>{

        setReadBooks([...readBooks,book])
        toast.success(`${book.bookName} is add to read list`)
    // console.log("Read button trigger",book)

    }
    return (
        <button onClick={()=>handleReadButton()} className="btn rounded-lg border-2 border-gray-500 bg-white px-6 text-black">
          Read
        </button>
    );
};

export default ReadTheButton;