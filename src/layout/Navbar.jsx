import React, { useEffect } from "react";
import "../style/nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  let user = false;
  useEffect(() => {
    let navBar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 0) {
        navBar.setAttribute("class", "activeNavBar");
      } else if (window.pageYOffset === 0) {
        navBar.classList.remove("activeNavBar");
      }
    });
  }, []);
  return (
    <nav>
      <div className="menu">
        <ul>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
