import { NavLink } from "react-router-dom";
import "./styles/header.css";
function Header() {
  return (
    <div>
      <nav className="links">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">Cards</NavLink>
      </nav>
    </div>
  );
}

export default Header;
