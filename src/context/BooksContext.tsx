"use client"


import { IBook } from "@/type/booksType";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface childrenProps {
    children:ReactNode
}
interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishBooks: IBook[];
  setWishBooks: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType>({
    readBooks:[],
    setReadBooks:()=>{},
    wishBooks:[],
    setWishBooks:()=>{},
})

const BooksProvider = ({children}:childrenProps) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
const [wishBooks, setWishBooks] = useState<IBook[]>([]);

    const value = {
        readBooks, setReadBooks,
        wishBooks, setWishBooks
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
};

export default BooksProvider;