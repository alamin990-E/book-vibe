"use client"


import { createContext, ReactNode, useState } from "react";

interface childrenProps {
    children:ReactNode
}


export const BooksContext = createContext({})

const BooksProvider = ({children}:childrenProps) => {
    const [readBooks, setReadBooks] = useState([])
    const [wishBooks, setWishBooks] = useState ([])

    const value = {
        readBooks, setReadBooks,
        wishBooks, setWishBooks
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
};

export default BooksProvider;