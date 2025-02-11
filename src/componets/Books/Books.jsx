import React, { useEffect, useState } from "react";

import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  const api = "./booksData.json";
  // useEffect it take a callback function and an array of dependencies array for load each book from the api in one time .

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold text-center">Books</h1>
      <p>{books.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
