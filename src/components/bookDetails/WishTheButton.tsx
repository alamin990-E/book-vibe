"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/booksType";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishTheButton = ({book}:{book:IBook}) => {

    const wishButtonProvider = useContext(BooksContext)
    const {wishBooks,setWishBooks} = wishButtonProvider

    // console.log(wishButtonProvider)

    const handleWishButton =() =>{
        
        setWishBooks([...wishBooks,book])
        toast.success(`${book.bookName} is added on wish list`)
        // console.log("WishTheButton trigger")
    }
    return (
        <button onClick={()=>handleWishButton()} className="btn rounded-lg border-0 bg-green-500 px-6 text-white">
          Wish List
        </button>
    );
};

export default WishTheButton;