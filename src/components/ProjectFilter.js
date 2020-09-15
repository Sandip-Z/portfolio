import React, { useState, useMemo } from "react";
import { works } from "../content/works";

const workCopy = [...works];
let tech = [];
workCopy.forEach((work) => {
  tech.push(...work.technology);
});

const ProjectFilter = () => {
  const [techUsed] = useState(Array.from(new Set(tech)));
  const [frequentlyUsedTech] = useState(["HTML5", "CSS3", "REACT", "SASS"]);
  const myMemo = useMemo(() => {
    return techUsed;
  }, [techUsed]);
  const renderTech = frequentlyUsedTech.map((tech) => {
    return (
      <p
        className={`p-2 my-auto mx-1 ${
          tech === "HTML5" || tech === "CSS3" || tech === "SASS"
            ? "bg-warning text-dark"
            : "bg-dark text-light"
        }`}
      >
        {tech}
      </p>
    );
  });
  return (
    <div className="d-flex justify-content-center align-items-center text-dark mb-3">
      {renderTech}
      <p className="bg-dark text-light p-2 my-auto mx-1">&#9660;</p>
    </div>
  );
};

export default ProjectFilter;
