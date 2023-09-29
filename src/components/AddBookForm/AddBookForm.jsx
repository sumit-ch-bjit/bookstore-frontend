// AddBookForm.js

import React from "react";
import useBookForm from "../../hooks/useBookForm"; // Adjust the path based on your project structure
import "./AddBookForm.styles.scss"; // Import the styles

const AddBookForm = ({ onAddBook }) => {
  const { formData, handleChange, handleSubmit } = useBookForm(onAddBook);

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Discount Percentage</label>
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Publish Date</label>
          <input
            type="text"
            name="publishDate"
            placeholder="YYYY-MM-DD"
            value={formData.publishDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            name="ISBN"
            value={formData.ISBN}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
