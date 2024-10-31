import React, { useEffect, useState } from 'react'
import Book from '../Book/Book';

function Books() {
    const [books , setBooks]=useState([])
    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
  return (
    <div>
        {books.length}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  '>
            {
                books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
        </div>
    </div>
  )
}

export default Books