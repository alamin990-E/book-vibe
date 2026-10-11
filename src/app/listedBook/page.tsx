"use client";

import ListedBookCard from "@/components/ListedBooks/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/booksType";
import React, { useContext, useState } from "react";

const ListedBookPage = () => {
  const { readBooks, wishBooks } = useContext(BooksContext);

  const [sortby, setsortby] = useState<"rating" | "Pages" | "Year">("rating");

  const sortBooks = (books:IBook[]) =>{
    const shortedBooks = [...books]
    if(sortby === "rating"){
      shortedBooks.sort((a,b)=> b.rating - a.rating)
    }else if(sortby === "Pages"){
      shortedBooks.sort((a,b) => a.totalPages - b.totalPages)
    }else if (sortby === "Year"){
      shortedBooks.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing)
  }
  return shortedBooks

  }

 const sortedReadbooks = sortBooks(readBooks)
 const sortedWishbooks = sortBooks(wishBooks)


  return (
    <div className="container mx-auto">
      <h2 className="my-8 bg-slate-200 rounded-[10px] text-[20px] font-bold text-black text-center py-4">
        Listed Books
      </h2>

      {/* Shorting  */}
      <div className="text-center mb-5 ">
        <select
          value={sortby}
          onChange={(e) =>
            setsortby(e.target.value as "rating" | "Pages" | "Year")
          }
          
          className="select border border-green-500 bg-white text-black outline-none focus:border-gray-300 focus:outline-none focus:ring-0"
        >
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"totalPages"}>Number of Pages</option>
          <option value={"year"}>Published Year</option>
        </select>
      </div>

      {/* ReadBooks Tab */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Read Books (${sortedReadbooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
          {sortedReadbooks.map((book: IBook) => (
            <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
          ))}
        </div>

        {/* wishBooks Tab */}
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Wish Books (${sortedWishbooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
          {sortedWishbooks.map((book: IBook) => (
            <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBookPage;
