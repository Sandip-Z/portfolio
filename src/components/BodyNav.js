import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";

const BodyNav = ({ history, location, match }) => {
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const isActive = (name) => {
    if (`/${name}` === activeLink) {
      return "text-warning font-weight-bold";
    } else if (name === "project" && activeLink === "/") {
      return "active";
    }
    return "text-muted";
  };

  const defaultListClassName = "text-decoration-none nav-link";

  return (
    <nav className="text-muted" style={{ marginn: "85px 0px 35px 0px" }}>
      <ol start="1">
        <li className="p-2">
          <Link
            to="/project"
            className={`${defaultListClassName} ${isActive("project")}`}
          >
            PROJECTS
          </Link>
        </li>
        <li className="p-2">
          <Link
            to="/resume"
            className={`${defaultListClassName} ${isActive("resume")}`}
          >
            RESUME
          </Link>
        </li>
        <li className="p-2">
          <Link
            to="/contact"
            className={`${defaultListClassName} ${isActive("contact")}`}
          >
            CONTACT
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default withRouter(BodyNav);
