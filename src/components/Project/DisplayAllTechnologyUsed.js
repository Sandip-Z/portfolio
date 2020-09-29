import React from "react";

const DisplayAllTechnologyUser = ({
  technology,
  toggle,
  handleActiveTechnologiesChange,
  activeTechnologies,
}) => {
  const isActive = (technology) => {
    let active = undefined;
    activeTechnologies.forEach((activeTech) => {
      if (activeTech === technology) {
        console.log(activeTech, technology);
        active = true;
      }
    });
    if (active) {
      return { color: "red" };
    } else {
      return { color: "black" };
    }
  };
  console.log(isActive("HTML5"));
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
          <li onClick={() => handleActiveTechnologiesChange(false)}>
            Clear All
          </li>
          {renderTechnolgies}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default DisplayAllTechnologyUser;
