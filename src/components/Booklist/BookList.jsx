import "./BookList.styles.scss";
import BookItem from "../BookItem/BookItem";
import Spinner from "../Spinner/Spinner";
import useBook from "../../hooks/useBooks";

function BookList({ books }) {
  const { deleteBook } = useBook();
  const handleOnClick = (id) => {
    const res = deleteBook(id);
    console.log(res);
  };
  return (
    <div className="book-list">
      <ul>
        {!books.length ? (
          <Spinner />
        ) : (
          books.map((book) => (
            <BookItem key={book._id} book={book} handleDelete={handleOnClick} />
          ))
        )}
      </ul>
    </div>
  );
}

export default BookList;
