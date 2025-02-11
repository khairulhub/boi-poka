import React from "react";

import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  // const params = useParams();
  // useParams object akare full properties id ta diye day.
  const { bookId } = useParams();
  //convert bookid to string to integer
  const id = parseInt(bookId);
  // console.log(params);
  // console.log(bookId);

  //load all the books by using loader
  const data = useLoaderData();
  // console.log(data);
  //find the book by id from the book data
  const book = data.find((book) => book.bookId === id);
  console.log(book);
  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = book;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <p className="pt-2"><b>By :</b> {author}</p>
          <div className="divider"></div>
          <p >{category}</p>
          <div className="divider"></div>
          <p className="pt-2"><b>Review: </b>{review}</p>
          <div className="flex  gap-3">
          <b>Tags:</b>
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-sm text-[#23BE0A]">
                {tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <p className="pt-2"><b>Total Pages:</b> {totalPages}</p>
          <p className="pt-2"><b>Publisher:</b> {publisher}</p>
          <p className="pt-2"><b>Year of Publishing:</b> {yearOfPublishing}</p>
          <p className="pt-2"><b>Rating:</b> {rating}</p>
          <div className="flex gap-2 pt-2">
          <button className="btn btn-outline btn-light">Read</button>
          <button className="btn btn-info">Wishlist</button>
          </div>
          
        </div>

        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <img
            className="w-full h-full "
            src={image}
            alt={currentBookId}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
