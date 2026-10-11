import BookCard from '@/components/shared/BookCard';


import { IBook } from "@/type/booksType";
import React from 'react';

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );

   

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

const booksPage = async() => {
    const booksData = await getBooks();
    return (
         <section className="container mx-auto my-15">
      <h2 className="text-3xl font-bold text-center">Explore All Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-6 mt-10">
        {booksData.map((book: IBook) => {
          return <BookCard key={book.bookId} book={book}></BookCard>;
        })}
      </div>
    </section>
    );
};

export default booksPage;