import React from 'react'

import bannerImg from '../../assets/books.jpg'

function Banner() {
  return (
    <div className="hero bg-base-200 p-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="w-full rounded-lg shadow-2xl" />
        <div className='w-full my-4'>
          <h1 className="text-5xl font-bold">Books to Freshen Up Your Bookshelf</h1>
         
          <button className="btn bg-green-600 mt-2">Get Read Book</button>
        </div>
      </div>
    </div>
  );
}

export default Banner