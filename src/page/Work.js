import React from "react";
import Box from "../components/Box";
import { works } from "../content/works";
import ProjectFilter from "../components/ProjectFilter";
const Work = () => {
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
      />
    );
  });
  return (
    <div className="page">
      {/* <ProjectFilter /> */}
      <div className="d-flex flex-wrap justify-content-center text-white">
        {renderBoxes}
      </div>
    </div>
  );
};

export default Work;
