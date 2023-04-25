import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbat = () => {
  return (
    <nav>
      <h1 className="navbar__title">User Management System</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contacts</Link>
      </ul>
    </nav>
  );
};

export default Navbat;
