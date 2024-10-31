import React from 'react'

function Book({book}) {
    console.log(book);
const {image, bookName, author, review,tags}= book;

  return (
    <div className="card bg-base-100 w-96 border p-6 ">
      <figure className="bg-[#F3F3F3] p-5 rounded-2xl">
        <img className="h-[166px] " src={image} alt={author} />
      </figure>
      <div>
        {tags.map((p) => (
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
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default Book