import { key } from 'localforage';
import React from 'react'
import { Link } from 'react-router-dom';

function Book({book}) {
    console.log(book);
const {bookId, image, bookName, author, category, publisher, tags } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 border p-6 ">
        <figure className="bg-[#F3F3F3] p-5 rounded-2xl">
          <img className="h-[166px] " src={image} alt={author} />
        </figure>
        <div>
          {tags.map((p, ind) => (
            <button className="mr-5 bg-[#23BE0A0D] p-2 rounded-2xl mt-4 text-[#23BE0A]">
              {p}
            </button>
          ))}
        </div>
        <div className="my-7">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-xl my-4 ">By : {publisher}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Book