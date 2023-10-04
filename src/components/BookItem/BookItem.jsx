// BookItem.js

import React from "react";
import { Link } from "react-router-dom";
import "./BookItem.styles.scss";

const BookItem = ({ book, handleDelete }) => {
  const { _id, title, author, genre, description, stock } = book;

  return (
    <div className="book-item">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Description: {description}</p>
      <p>Stock: {stock}</p>

      <Link to={`/update/${_id}`}>
        <button className="update-button">Update</button>
      </Link>

      {/* Delete Button */}
      <button
        className="delete-button"
        onClick={() => {
          handleDelete(_id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BookItem;
