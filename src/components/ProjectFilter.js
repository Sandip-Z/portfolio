import React, { useState } from "react";
import { works } from "../content/works";
// import DisplayAllTechnologyUsed from "../components/Project/DisplayAllTechnologyUsed";

const workCopy = [...works];
let tech = [];
workCopy.forEach((work) => {
  tech.push(...work.technology);
});

const ProjectFilter = ({
  activeTechnologies,
  handleActiveTechnologiesChange,
}) => {
  // const [techUsed] = useState(Array.from(new Set(tech)));
  // const [toggleShowMoreTechnology, setToggleShowMoreTechnology] = useState(
  //   false
  // );
  const [frequentlyUsedTech] = useState(["sass", "react", "node"]);
  // const [activeUsedTech, setActiveUsedTech] = useState([]);
  // const myMemo = useMemo(() => {
  //   return techUsed;
  // }, [techUsed]);

  const isActive = (tech) => {
    let active = undefined;
    activeTechnologies.forEach((activeTech) => {
      if (activeTech === tech) {
        active = true;
        return;
      }
    });
    return active;
  };
  const renderTech = frequentlyUsedTech.map((tech) => {
    return (
      <p
        key={tech}
        className={`p-2 my-auto text-uppercase mx-1 ${
          isActive(tech) ? "bg-warning text-dark" : "bg-dark text-light"
        } cursor-pointer`}
        onClick={() => handleActiveTechnologiesChange(tech)}
      >
        {tech}
      </p>
    );
  });

  // const handleShowMore = () => {
  //   setToggleShowMoreTechnology(!toggleShowMoreTechnology);
  // };
  return (
    <div className="d-flex justify-content-center align-items-center mb-3">
      {renderTech}
      <div className="technology-dropdown__wrapper">
        {/* <p
          className={`bg-dark text-light p-2 my-auto mx-1 d-none ${
            toggleShowMoreTechnology ? "rotate" : ""
          }`}
          onClick={handleShowMore}
        >
          &#9660;
        </p> */}
        {/* <DisplayAllTechnologyUsed
          technology={techUsed}
          toggle={toggleShowMoreTechnology}
          activeTechnologies={activeTechnologies}
          handleActiveTechnologiesChange={handleActiveTechnologiesChange}
        /> */}
      </div>
    </div>
  );
};

export default ProjectFilter;
