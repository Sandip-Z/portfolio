import React from "react";
import Box from "../components/Box";
import { works } from "../content/works";
import ProjectFilter from "../components/ProjectFilter";
import ScrollPosition from "../components/ScrollPosition";
const Work = () => {
  const shouldHighlight = (techused) => {
    const activeTechnology = ["Bootstrap", "CSS3", "Chart.js"];
    let highlight = undefined;
    activeTechnology.forEach((activeTech) => {
      techused.forEach((usedTech) => {
        if (activeTech === usedTech) {
          highlight = true;
        }
      });
    });
    if (!activeTechnology.length) {
      highlight = true;
    }
    return highlight;
  };
  const renderBoxes = works.map((work) => {
    return (
      <Box
        id={work.id}
        key={work.id}
        title={work.title}
        description={work.description}
        technology={work.technology}
        code={work.code}
        live={work.live}
        detail={work.detail}
        highlight={shouldHighlight(work.technology)}
      />
    );
  });
  return (
    <div className="d-flex flex-column page">
      <ProjectFilter />
      <ScrollPosition />
      <div className="d-flex flex-wrap justify-content-center text-white">
        {renderBoxes}
      </div>
    </div>
  );
};

export default Work;
