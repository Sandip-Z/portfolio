import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const FootNavigation = () => {
  const [nav, setNav] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    switch (location.pathname) {
      case "/project":
        setNav(["home", "resume"]);
        return;
      case "/resume":
        setNav(["project", "contact"]);
        return;
      case "/contact":
        setNav(["resume", "home"]);
        return;
      default:
        setNav(["contact", "project"]);
    }
  }, [location.pathname]);

  const handleNavigation = (pathname) => {
    history.push(`/${pathname}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="foot-navigation">
      <button onClick={() => handleNavigation(nav[0])}>
        <i className="fa fa-arrow-left"></i>
        <span className="mx-3 text-capitalize">{nav[0]}</span>
      </button>
      <button onClick={() => handleNavigation(nav[1])}>
        <span className="mx-3 text-capitalize">{nav[1]}</span>
        <i className="fa fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default FootNavigation;
