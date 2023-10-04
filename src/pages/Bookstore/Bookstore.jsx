import React, { useState, useEffect } from "react";
import "./Bookstore.styles.scss";
import BookList from "../../components/Booklist/BookList";
import FilterBar from "../../components/FilterBar/FilterBar";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import useBook from "../../hooks/useBooks";

function Bookstore() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const { getBook } = useBook();

  const itemsPerPage = 5; // You can adjust this based on your API and UI requirements

  useEffect(() => {
    getBook(currentPage, itemsPerPage)
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, [currentPage]);

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
    </div>
  );
}

export default Bookstore;
