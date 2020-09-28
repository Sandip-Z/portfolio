import React, { useState, useMemo } from "react";
import { works } from "../content/works";
import DisplayAllTechnologyUsed from "../components/Project/DisplayAllTechnologyUsed";

const workCopy = [...works];
let tech = [];
workCopy.forEach((work) => {
  tech.push(...work.technology);
});

const ProjectFilter = () => {
  const [techUsed] = useState(Array.from(new Set(tech)));
  const [toggleShowMoreTechnology, setToggleShowMoreTechnology] = useState(
    false
  );
  const [frequentlyUsedTech] = useState([
    "HTML, CSS & SASS",
    "REACT",
    "NODE & EXPRESS",
  ]);
  const [activeUsedTech, setActiveUsedTech] = useState([]);
  const myMemo = useMemo(() => {
    return techUsed;
  }, [techUsed]);
  const renderTech = frequentlyUsedTech.map((tech) => {
    return (
      <p
        key={tech}
        className={`p-2 my-auto mx-1 ${
          tech === "HTML, CSS & SASS" ||
          tech === "REACT" ||
          tech === "NODE & EXPRESS"
            ? "bg-warning text-dark"
            : "bg-dark text-light"
        } cursor-pointer`}
      >
        {tech}
      </p>
    );
  });

  const handleShowMore = () => {
    setToggleShowMoreTechnology(!toggleShowMoreTechnology);
  };
  return (
    <div className="d-flex justify-content-center align-items-center text-dark mb-3">
      {renderTech}
      <p
        className="bg-dark text-light p-2 my-auto mx-1"
        onClick={handleShowMore}
      >
        &#9660;
      </p>
      <DisplayAllTechnologyUsed
        technology={techUsed}
        toggle={toggleShowMoreTechnology}
      />
    </div>
  );
};

export default ProjectFilter;
