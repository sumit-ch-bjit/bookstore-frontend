import { useForm, Controller } from "react-hook-form";
import useBook from "../../hooks/useBooks";

const AddBookForm = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: onchange,
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      price: "",
      stock: "",
    },
  });

  const { postBook } = useBook();

  const handleAddBook = async (formData) => {
    try {
      const res = await postBook(formData);

      console.log("book added ", res);
    } catch (error) {
      console.log("error posting books", error);
    }
  };

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Add a new book
      </h2>
      <form onSubmit={handleSubmit((data) => handleAddBook(data))}>
        <div>
          <h3>Title: </h3>
          <Controller
            control={control}
            name="title"
            rules={{
              required: "Title is required",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter a Title"
                {...field}
                style={{ border: errors.title ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.title && <h5>{errors.title.message}</h5>}
        </div>
        <div>
          <h3>Author: </h3>
          <Controller
            control={control}
            name="author"
            rules={{
              required: "author is required",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter an author"
                {...field}
                style={{ border: errors.author ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.author && <h5>{errors.author.message}</h5>}
        </div>
        <div>
          <h3>Genre: </h3>
          <Controller
            control={control}
            name="genre"
            render={({ field }) => (
              <input placeholder="Enter a Genre" {...field} />
            )}
          />
        </div>

        <div>
          <h3>Price: </h3>
          <Controller
            control={control}
            name="price"
            rules={{
              required: "Price is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Price must be a valid number",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Add a Price"
                {...field}
                style={{ border: errors.price ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.price && <h5>{errors.price.message}</h5>}
        </div>
        <div>
          <h3>Stock: </h3>
          <Controller
            control={control}
            name="stock"
            rules={{
              required: "stock is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "stock must be a valid number",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Add a stock amount"
                {...field}
                style={{ border: errors.stock ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.stock && <h5>{errors.stock.message}</h5>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookForm;
