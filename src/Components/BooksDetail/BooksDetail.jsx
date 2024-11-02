import { parse } from "postcss";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWeshList } from "../Utility/Utlity";

function BooksDetail() {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  //  console.log(typeof book ,typeof data,typeof id,typeof bookId);
  console.log(book);
  const {
    bookId: currentBook,
    image,
    bookName,
    author,
    category,
    publisher,
    tags,
    review,
    totalPages,
    yearOfPublishing,
  } = book;

  const handelMarkAsRead = (id) => {
    /**
     * 1. understand what to store or save : => bookId
     * 2. where to store : database
     * 3. array . list,  collection,
     * 4. check : if the book already in the readlist
     * 5. if not , then add the book to the list
     * 6. if yes , do not add the book
     */
    addToStoredReadList(id);
  };

  const handelWeshListBtn = (id) => {
    addToStoredWeshList(id)
  };
  return (
    <div className=" ">
      <div className="flex gap-10 border p-10 ">
        <div className="w-full">
          <img className="w-52" src={image} alt="" />
        </div>
        <div className="w-full space-y-3">
          <p>{bookName}</p>
          <p> By : {author}</p>
          <div className="border w-full"></div>
          <p>{category}</p>
          <div className="border w-full"></div>
          {review}
          <div className="border w-full"></div>
          <p>Number of pages : {totalPages}</p>
          <p> Publishes : {publisher}</p>
          <p>yera of Publishing : {yearOfPublishing}</p>
          <div className="gap-5 flex">
            <button
              onClick={() => handelMarkAsRead(id)}
              className="btn btn-outline btn-accent"
            >
              Read
            </button>
            <button
              onClick={() => handelWeshListBtn(id)}
              className="btn btn-accent"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksDetail;
