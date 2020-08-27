import React from "react";
import { Link } from "react-router-dom";

const Accomplishment = () => {
  return (
    <>
      <ul className="mt-3 text-light experience-list my-5">
        <li>
          Developed an{" "}
          <span className="text-warning font-weight-bold text-capitalize">
            enterprise level web application
          </span>{" "}
          for presak to help the company manage its distibution all across the
          country. <Link to="#">Details</Link>
        </li>
        <li>
          Helped Goodvibes organize their content with an intuitive{" "}
          <span className="text-warning font-weight-bold text-capitalize">
            admin panel.
          </span>{" "}
          <Link to="#">Details</Link>
        </li>
        <li>
          Build myself a{" "}
          <span className="text-warning font-weight-bold text-capitalize">
            portfolio website.
          </span>{" "}
          <Link to="#">Details</Link>
        </li>
      </ul>
    </>
  );
};

export default Accomplishment;
