import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          🍕<span className="red">Haugesund</span>{" "}
          <span className="green">Pizzeria</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart <span className="green">{cartstate.cartItems.length}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
