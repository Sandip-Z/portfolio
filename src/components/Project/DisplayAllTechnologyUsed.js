import React from "react";

const DisplayAllTechnologyUser = ({ technology, toggle }) => {
  const renderTechnolgies = technology.map((tech) => {
    return <li key={tech}>{tech}</li>;
  });
  return <>{toggle ? <ul>{renderTechnolgies}</ul> : <></>}</>;
};

export default DisplayAllTechnologyUser;
