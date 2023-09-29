import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Bookstore from "./components/Bookstore/Bookstore";
import UpdateBookForm from "./components/UpdateBookForm/UpdateBookForm";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="bookstore" element={<Bookstore />} />
          {/* <Route path="about" element={} /> */}
          <Route path="/update/:id" element={<UpdateBookForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
