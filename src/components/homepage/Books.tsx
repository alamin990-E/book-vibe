import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/type/booksType";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-15">
      <h2 className="text-3xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 mt-10">
        {booksData.slice(0,9).map((book: IBook) => {
          return <BookCard key={book.bookId} book={book}></BookCard>;
        })}
      </div>
    </section>
  );
};

export default Books;
