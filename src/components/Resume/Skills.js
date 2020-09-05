import React from "react";

const Skills = () => {
  return (
    <div className="my-3">
      <h5 className="d-none text-light mb-4 font-weight-bold">
        For Development
      </h5>
      <div className="row mb-3">
        <div className="col-6 text-light text-center">
          <p className="font-weight-lighter">HTML5, CSS3</p>
          <p className="font-weight-lighter">SASS, LESS</p>
          <p className="font-weight-lighter">Bootstrap, Materialize CSS</p>
        </div>
        <div className="col-6 text-light text-center">
          <p>
            <span className="font-weight-lighter">Javascript, </span>
            <span className="font-weight-bolder text-warning">React JS</span>
          </p>
          <p className="font-weight-bolder text-warning">Node JS, Express </p>
          <p>
            <span className="font-weight-lighter">MYSQL, </span>
            <span className="font-weight-bolder text-warning">MongoDB</span>
          </p>
        </div>
      </div>
      <h5 className="d-none text-light mb-4 font-weight-bold">
        For Version Control
      </h5>
      <div className="d-flex justify-content-between pr-3 text-light font-weight-lighter mb-5">
        <p>Git</p>
        <p className="ml-3">Github</p>
        <p className="ml-3">Heruko</p>
        <p className="ml-3">AWS</p>
        <p className="ml-3">CI/CD</p>
        <p className="ml-3">Docker</p>
        <p className="ml-3">Webpack</p>
      </div>
    </div>
  );
};

export default Skills;
