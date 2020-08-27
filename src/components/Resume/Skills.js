import React from "react";

const Skills = () => {
  return (
    <>
      <h5 className="text-light mb-4 font-weight-bold">For Development</h5>
      <div className="row mb-3">
        <div className="col-lg-6 text-light">
          <p className="font-weight-lighter">HTML5, CSS3</p>
          <p className="font-weight-lighter">SASS, LESS</p>
          <p className="font-weight-lighter">Bootstrap, Materialize CSS</p>
        </div>
        <div className="col-lg-6 text-light">
          <p className="font-weight-lighter">
            Javascript,{" "}
            <span className="font-weight-bolder text-primary">React js</span>
          </p>
          <p className="font-weight-bolder text-primary">Node JS, Express </p>
          <p className="font-weight-lighter">
            MYSQL,{" "}
            <span className="font-weight-bolder text-primary">MongoDB</span>
          </p>
        </div>
      </div>
      <h5 className="text-light mb-4 font-weight-bold">For Version Control</h5>
      <div className="d-flex text-light font-weight-lighter">
        <p>Git</p>
        <p className="mx-3">Gitlab</p>
      </div>
    </>
  );
};

export default Skills;
