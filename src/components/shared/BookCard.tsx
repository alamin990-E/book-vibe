import { IBook } from "@/type/booksType";
import Image from "next/image";
import Link from "next/link";

interface bookProps {
  book: IBook;
}

const BookCard = ({ book }: bookProps) => {
  return (
   <div className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  {/* Book Image */}
  <div className="flex h-52 items-center justify-center overflow-hidden rounded-xl bg-gray-200 p-4">
    <Image
      src={book.image}
      alt={book.bookName}
      width={150}
      height={200}
      className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Badges */}
  <div className="mt-4 flex flex-wrap gap-2">
    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
      {book.category}
    </span>

    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
      {book.tags[1]}
    </span>
  </div>

  {/* Book Details */}
  <h2 className="mt-3 line-clamp-1 text-lg font-bold text-gray-900">
    {book.bookName}
  </h2>

  <p className="mt-1 text-sm text-gray-500">
    By <span className="font-medium text-gray-700">{book.author}</span>
  </p>

  {/* Divider */}
  <div className="my-4 border-t border-gray-100" />

  {/* Card Footer */}
  <div className="flex items-center justify-between">
    <span className="rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600">
      {book.tags[0]}
    </span>

    <div className="flex items-center gap-1.5">
      <span className="text-sm font-semibold text-gray-800">
        {book.rating.toFixed(1)}
      </span>

      <span className="text-lg text-yellow-500">★</span>
    </div>
  </div>

  {/* View Details Button */}
    <Link  href={`books/${book.bookId}`}>
        <button className="mt-4 w-full cursor-pointer rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-600">
    View Details
  </button>
    </Link>
</div>
  );
};

export default BookCard;
