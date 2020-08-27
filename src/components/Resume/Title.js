import React from "react";

const ResumeTitle = ({ title, icon }) => {
  return (
    <>
      <div className="border-top"></div>
      <h5
        className="text-dark text-center text-uppercase"
        style={{ letterSpacing: 7, marginTop: "-13px" }}
      >
        <span style={{ background: "white", padding: "0px 5px" }}>{title}</span>
      </h5>
    </>
  );
};

export default ResumeTitle;
