



import ReadTheButton from '@/components/bookDetails/ReadTheButton';
import WishTheButton from '@/components/bookDetails/WishTheButton';
import { IBook } from '@/type/booksType';
import Image from 'next/image';
import React from 'react';

interface IBookParams {
    params: Promise<{ bookId: string }>
   
}

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};


const bookDetailsPage = async({params}:IBookParams) => {
    const {bookId} = await params
    const booksData = await getBooks();
    const book:IBook = booksData.find((book:IBook)=>String(book.bookId) === String (bookId))
   
   
    return (
        <div className="container mx-auto px-4 py-10">
  <div className="card card-side overflow-hidden gap-8 border px-8 py-5 border-gray-200 bg-base-100 shadow-md transition-all duration-300 hover:shadow-xl">
    
    {/* Book Image */}
   
  <Image
    src={book.image}
    width={300}
    height={420}
    className="max-h-full max-w-full object-contain h-auto w-auto "
     loading="eager"
    alt={book.bookName}
  />


    {/* Book Details */}
    <div className="card-body bg-slate-50 rounded-2xl">
      
      {/* Category & Rating */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
          {book.category}
        </span>

        <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1.5">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-gray-700">
            {book.rating}
          </span>
        </div>
      </div>

      {/* Book Name */}
      <h2 className="mt-3 text-2xl font-bold text-gray-900">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="text-sm text-gray-500">
        By{" "}
        <span className="font-semibold text-gray-700">
          {book.author}
        </span>
      </p>

      {/* Review */}
      <p className="mt-4 text-base leading-7 text-gray-600">
        {book.review}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Book Information */}
      <div className="my-4 grid grid-cols-2 gap-3 border-y border-gray-100 py-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-gray-400">Pages</p>
          <p className="font-semibold text-gray-800">
            {book.totalPages}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Publisher</p>
          <p className="font-semibold text-gray-800">
            {book.publisher}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Published</p>
          <p className="font-semibold text-gray-800">
            {book.yearOfPublishing}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="card-actions justify-start gap-5">
       <ReadTheButton book={book}></ReadTheButton>
        
        <WishTheButton book={book}></WishTheButton>
      </div>

    </div>
  </div>
</div>
    );
};

export default bookDetailsPage;