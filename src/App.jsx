import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Bookstore from "./pages/Bookstore/Bookstore";
import UpdateBookForm from "./components/UpdateBookForm/UpdateBookForm";
import SignupForm from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AddBook from "./pages/AddBook/AddBook";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/bookstore" element={<Bookstore />} />
          <Route path="/update/:id" element={<UpdateBookForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
