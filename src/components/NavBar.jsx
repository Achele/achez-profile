import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    if (display === false) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  return (
    // <>
    <nav>
      <h1 className="nav-title">Achez</h1>
      <ul className="nav-ul" data-visible={display}>
        <li onClick={() => setDisplay(false)}>
          <NavLink to="/" className="nav-links">
            {" "}
            <FaHome /> Home
          </NavLink>
        </li>

        <li onClick={() => setDisplay(false)}>
          <NavLink to="/projects" className="nav-links">
            {" "}
            <FaShoppingBag /> Projects
          </NavLink>
        </li>
      </ul>
      <div className="btn-wrapper">
        <button
          className="mobile-nav"
          onClick={handleDisplay}
          aria-expanded={display}
        ></button>
      </div>
    </nav>
    // </>
  );
}
