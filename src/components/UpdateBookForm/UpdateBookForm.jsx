// UpdateBookForm.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UpdateBookForm.styles.scss";

const UpdateBookForm = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    price: 0,
    discountPercentage: 0,
    description: "",
    publishDate: "",
    ISBN: "",
    stock: 0,
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/books/${id}`);
        const data = await response.json();
        // console.log(data.data, "data");
        const bookObject = data.data;
        setBook(bookObject);
        // console.log(book, "its the book set state");
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBookDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/books/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then(() => console.log("book added", book))
      .catch((error) => console.log(error));

    console.log("Adding book to the database:", book);
    alert("book updated");

    // For this example, we'll just update the local state
    // setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
        />

        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
        />

        <label>Discount Percentage</label>
        <input
          type="number"
          name="discountPercentage"
          value={book.discountPercentage}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={book.description}
          onChange={handleChange}
        />

        <label>Publish Date</label>
        <input
          type="date"
          name="publishDate"
          value={book.publishDate}
          onChange={handleChange}
        />

        <label>ISBN</label>
        <input
          type="text"
          name="ISBN"
          value={book.ISBN}
          onChange={handleChange}
        />

        <label>Stock</label>
        <input
          type="number"
          name="stock"
          value={book.stock}
          onChange={handleChange}
        />

        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBookForm;
