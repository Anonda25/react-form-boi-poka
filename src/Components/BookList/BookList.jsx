import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/Utlity";
import Book from "../Book/Book";
import WishLis from "../wishList/WishLis";

function BookList() {
  const data = useLoaderData();
  const [readlist , setReadList]=useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(storedReadList, storedReadListInt, data);
    const readBookList = data.filter(book => storedReadListInt.includes(book.bookId))
    setReadList(readBookList)
  }, []);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab> Read Books </Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>read books {readlist.length}</h2>
          <div className="grid grid-cols-3 ">
            {readlist.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>wishg list books</h2>
          <div className="grid grid-cols-3">{readlist.map(book => <WishLis key={book.bookId} book={book}></WishLis>)}</div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default BookList;
