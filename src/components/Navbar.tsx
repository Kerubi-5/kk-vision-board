import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import icon from "../assets/favicon-32x32.png";
import classNames from "classnames";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <nav className="nav">
      <div className="nav__brand">
        <img src={icon} alt="KK" />
      </div>
      <div
        className={classNames("nav__menu", { active: isActive })}
        onClick={toggleMenu}
      >
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
        <NavLink to="/goals" className="nav__link">
          Goals
        </NavLink>
        <NavLink to="/timeline" className="nav__link">
          Timeline
        </NavLink>
        <NavLink to="/museo" className="nav__link">
          Museo
        </NavLink>
        <NavLink to="/about" className="nav__link">
          About
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
