import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="d-flex my-5">
      <h2 className="text-white">Sandip.</h2>
      <div className="d-flex align-items-center ml-4">
        <a className="mx-2 text-decoration-none text-white">
          <i className="fa fa-github" aria-hidden="true"></i>
          <span className="px-2">Github</span>
        </a>
        <a
          className="mx-2 text-decoration-none text-white"
          href="https://twitter.com/__Sandip__"
          target="_blank"
          rel="no"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <span className="px-2">Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
