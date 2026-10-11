import { IBook } from '@/type/booksType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBookCard = ({book}:{book:IBook}) => {
    return (

<div className="group flex items-stretch gap-5 rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:shadow-md">

  {/* Book Image */}
  <div className="w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100 p-3">
    <Image
      src={book.image}
      alt={book.bookName}
      width={200}
      height={400}
      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Book Details + Footer */}
  <div className="flex min-w-0 flex-1 flex-col justify-between">

    {/* Book Information */}
    <div>
      <h2 className="line-clamp-1 text-base font-bold text-gray-900">
        {book.bookName}
      </h2>

      <p className="mt-1 text-xs text-gray-500">
        By: <span className="font-medium text-gray-700">{book.author}</span>
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold text-gray-700">Tag</span>

        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-2.5 py-1 text-green-700"
          >
            #{tag}
          </span>
        ))}

        <span className="text-gray-500">
          Year of Publishing: {book.yearOfPublishing}
        </span>
      </div>

      {/* Publisher and Pages */}
      <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">
        <span>Publisher: {book.publisher}</span>
        <span>Pages: {book.totalPages}</span>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-4 flex flex-wrap items-center justify-start gap-3 border-t border-gray-100 pt-3">

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          Category: {book.category}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
          Rating: {book.rating.toFixed(1)}
        </span>
      </div>

      <Link
        href={`/books/${book.bookId}`}
        className="rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-700"
      >
        View Details
      </Link>

    </div>
  </div>
</div>




    );
};

export default ListedBookCard;