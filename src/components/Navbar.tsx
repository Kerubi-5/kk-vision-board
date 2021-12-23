import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <nav className="nav">
      <div className="nav__brand">KK</div>
      <div
        className={isActive ? "nav__menu active" : "nav__menu"}
        onClick={toggleMenu}
      >
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav__link">
          About
        </NavLink>
        <NavLink to="/test" className="nav__link">
          Test
        </NavLink>
        <NavLink to="/test2" className="nav__link">
          Test2
        </NavLink>
      </div>
      <div className="nav__close" onClick={toggleMenu}>
        {isActive ? (
          <AiOutlineClose className="nav__toggle" />
        ) : (
          <AiOutlineMenu className="nav__toggle" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
