import React from "react";

const VistingCard = () => {
  return (
    <div className="visiting-card row">
      <div className="col-6c col-sm-4 visiting-card-logo"></div>
      <div className="col-6c col-sm-8 d-flex align-items-center">
        <div className="d-flex flex-column">
          <h1 className="mb-0 text-warning">Sandip Satyal</h1>
          <h6 className="mb-4">Software Engineer</h6>
          <p className="my-0 font-weight-light visting-card-email">
            sandipsatyal25@gmail.com
          </p>
          <p className="my-0 font-weight-light">sandipsatyal.com.np</p>
          <div className="d-flex mt-4">
            <a
              href="https://www.linkedin.com/in/sandip-satyal-478854193/"
              target="_blank"
              className="text-light"
              title="linkedin"
            >
              <i className="fa fa-linkedin pr-4"></i>
            </a>
            <a
              href="https://github.com/Sandip-Z"
              target="_blank"
              className="text-light"
            >
              <i className="fa fa-github pr-4" title="github"></i>
            </a>
            <a href="#" target="_blank" className="text-light">
              <i className="fa fa-medium pr-4" title="medium"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistingCard;
