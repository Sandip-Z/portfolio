import React from "react";
import { Link } from "react-router-dom";
const TabletNav = () => {
  return (
    <div className="tNav">
      <input className="tNav__checkbox" type="checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="tNav__button">
        Menu
      </label>
      <div className="tNav__background">&nbsp;</div>
      <nav className="tNav__nav">
        <ul className="tNav__list">
          <li className="tNav__item">
            <Link href="#" className="tNav__link">
              Home
            </Link>
          </li>
          <li className="tNav__item">
            <Link href="#" className="tNav__link">
              Project
            </Link>
          </li>
          <li className="tNav__item">
            <Link href="#" className="tNav__link">
              Resume
            </Link>
          </li>
          <li className="tNav__item">
            <Link href="#" className="tNav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TabletNav;
