import React from "react";

import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, image, bookName, author, rating, tags, category } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  shadow-xl p-6">
        <figure className="bg-base-200 py-6 rounded-lg">
          <img src={image} className="rounded-lg h-[166px] " alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex  gap-3">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-sm text-[#23BE0A]">{tag}</button>
            ))}
          </div>
          <h2 className="card-title pt-2">{bookName}</h2>

          <p className="py-2">By : {author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="">{category}</div>
            <div className="flex gap-2">
              {rating}
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
