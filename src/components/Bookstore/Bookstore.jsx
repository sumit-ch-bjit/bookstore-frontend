import React, { useState, useEffect } from "react";
import "./Bookstore.styles.scss";
import BookList from "../Booklist/BookList";
import FilterBar from "../FilterBar/FilterBar";
import AddBookForm from "../AddBookForm/AddBookForm";
import { useAsyncError } from "react-router-dom";

function Bookstore() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const itemsPerPage = 5; // You can adjust this based on your API and UI requirements

  useEffect(() => {
    fetch(
      `http://localhost:3000/api/books?page=${currentPage}&pageSize=${itemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const handleAddBook = (newBook) => {
    fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then(() => console.log("book added"))
      .catch((error) => console.log(error));

    console.log("Adding book to the database:", newBook);

    // For this example, we'll just update the local state
    // setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const filterBooks = (filter) => {
    setFilter(filter);
    setCurrentPage(currentPage);
  };

  return (
    <div className="bookstore">
      <h1>Welcome to the Bookstore</h1>
      <FilterBar onFilter={filterBooks} />
      <BookList books={books} />
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span> Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={books && books.length < itemsPerPage}
        >
          Next Page
        </button>
      </div>
      <br />
      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default Bookstore;
