import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import "../styles/global.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2023 Web Warrior</p>
      </footer>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.any,
};
export default Layout;
