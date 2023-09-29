import "./BookList.styles.scss";
import { Link } from "react-router-dom";

import React, { useState } from "react";

function BookList({ books }) {
  const handleOnClick = (id) => {
    fetch(`http://localhost:3000/api/books/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => console.log("deleted book"))
      //   .then(() => alert("book deleted"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>

            <Link to={`/update/${book._id}`}>
              <button>Update</button>
            </Link>

            {/* Delete Button */}
            <button
              onClick={() => {
                handleOnClick(book._id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
