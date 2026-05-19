import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleMenuToggle = () => {
    setShow(!show);
  };

  return (
    <header>
      <div className="container padded-container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink onClick={handleMenuToggle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleMenuToggle} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleMenuToggle} to="/country">
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleMenuToggle} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button className="zero-margin-btn" onClick={handleMenuToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
