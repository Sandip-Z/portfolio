import React, { useState } from "react";
import { Link } from "react-router-dom";
const TabletNav = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const toggleCheckbox = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  return (
    <div className="tNav">
      <input
        className="tNav__checkbox"
        type="checkbox"
        id="nav-toggle"
        checked={checkboxChecked}
      />
      <label
        htmlFor="nav-toggle"
        className="tNav__button"
        onClick={toggleCheckbox}
      >
        Menu
      </label>
      <div className="tNav__background">&nbsp;</div>
      <nav className="tNav__nav">
        <ul className="tNav__list">
          <li className="tNav__item">
            <Link
              to="/"
              className="tNav__link"
              onClick={() => setCheckboxChecked(false)}
            >
              Home
            </Link>
          </li>
          <li className="tNav__item">
            <Link
              to="/project"
              className="tNav__link"
              onClick={() => setCheckboxChecked(false)}
            >
              Project
            </Link>
          </li>
          <li className="tNav__item">
            <Link
              to="/resume"
              className="tNav__link"
              onClick={() => setCheckboxChecked(false)}
            >
              Resume
            </Link>
          </li>
          <li className="tNav__item">
            <Link
              to="/contact"
              className="tNav__link"
              onClick={() => setCheckboxChecked(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TabletNav;
