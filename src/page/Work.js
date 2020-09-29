import React, { useState } from "react";
import Box from "../components/Box";
import { works } from "../content/works";
import ProjectFilter from "../components/ProjectFilter";
import ScrollPosition from "../components/ScrollPosition";
const Work = () => {
  const [activeTechnologies, setActiveTechnologies] = useState([]);

  const handleActiveTechnologiesChange = (technology) => {
    const indexInActiveTechnologies = activeTechnologies.indexOf(technology);
    if (indexInActiveTechnologies === -1) {
      setActiveTechnologies([...activeTechnologies, technology]);
    } else {
      const clonedActiveTechnologies = [...activeTechnologies];
      clonedActiveTechnologies.splice(indexInActiveTechnologies, 1);
      setActiveTechnologies(clonedActiveTechnologies);
    }
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
