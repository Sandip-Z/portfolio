import React from "react";

const DisplayAllTechnologyUser = ({
  technology,
  toggle,
  handleActiveTechnologiesChange,
  activeTechnologies,
}) => {
  const isActive = (technology) => {
    activeTechnologies.forEach((activeTech) => {
      if (activeTech === technology) {
        return { color: "yellow !important" };
      }
    });
    return {};
  };
  const renderTechnolgies = technology.map((tech) => {
    return (
      <li
        style={isActive(tech)}
        key={tech}
        onClick={() => handleActiveTechnologiesChange(tech)}
      >
        {tech}
      </li>
    );
  });
  return (
    <>
      {toggle ? (
        <ul>
          {renderTechnolgies}
          <li onClick={() => handleActiveTechnologiesChange(false)}>
            Clear All
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default DisplayAllTechnologyUser;
