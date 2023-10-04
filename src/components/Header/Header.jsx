import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./Header.styles.scss";
import logo from "../../assets/cart.png";
// import CartModal from "./CartModal";

function Header() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="nav-items">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/bookstore">Books</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-up">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="logo" onClick={toggleCartModal}>
            <img src={logo} alt="Your Logo" />
          </div>
          {/* {isCartModalOpen && <CartModal toggleCartModal={toggleCartModal} />} */}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
