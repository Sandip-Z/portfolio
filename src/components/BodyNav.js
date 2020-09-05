import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";

const BodyNav = ({ location }) => {
  const [activeLink, setActiveLink] = useState("/");
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const defaultListClassName = "text-decoration-none nav-link";
  const activeListClassName = "text-warning font-weight-bold";

  const isActive = (name) => {
    console.log(activeLink);
    if (`/${name}` === activeLink || activeLink.split("/")[1] === `${name}`) {
      return activeListClassName;
    } else if (name === "project" && activeLink === "/") {
      return activeListClassName;
    }
    return "text-muted";
  };

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
