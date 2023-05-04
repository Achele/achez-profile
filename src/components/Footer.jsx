import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <NavLink to="/" className="footer-links">
          {" "}
          Home
        </NavLink>
        <NavLink to="/projects" className="footer-links">
          {" "}
          Projects
        </NavLink>
      </div>
      <p> &copy; 2023 Ojoachele Onuh. All rights reserved</p>
    </footer>
  );
}
