import React, { useState } from "react";
import Box from "../components/Box";
import { works } from "../content/works";
import ProjectFilter from "../components/ProjectFilter";
import ScrollPosition from "../components/ScrollPosition";
const Work = () => {
  const [activeTechnologies, setActiveTechnologies] = useState([]);

  const handleActiveTechnologiesChange = (technology) => {
    if (typeof technology !== "boolean" && !activeTechnologies.length) {
      setActiveTechnologies([...activeTechnologies, technology]);
      return;
    }

    if (typeof technology === "boolean" && !technology) {
      setActiveTechnologies([]);
      return;
    }

    activeTechnologies.forEach((activeTech, index) => {
      if (activeTech === technology) {
        const clonedActiveTechnologies = [...activeTechnologies];
        clonedActiveTechnologies.splice(index, 1);
        console.log(clonedActiveTechnologies);
        setActiveTechnologies(clonedActiveTechnologies);
        return;
      } else {
        setActiveTechnologies([...activeTechnologies, technology]);
      }
    });
  };

  const shouldHighlight = (techused) => {
    let highlight = undefined;
    activeTechnologies.forEach((activeTech) => {
      techused.forEach((usedTech) => {
        if (activeTech === usedTech) {
          highlight = true;
        }
      });
    });
    if (!activeTechnologies.length) {
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
      <ProjectFilter
        activeTechnologies={activeTechnologies}
        handleActiveTechnologiesChange={handleActiveTechnologiesChange}
      />
      <ScrollPosition />
      <div className="d-flex flex-wrap justify-content-center text-white">
        {renderBoxes}
      </div>
    </div>
  );
};

export default Work;
