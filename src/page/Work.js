import React from "react";
import Box from "../components/Box";
import { works } from "../content/works";
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
  return <div className="text-white d-flex flex-wrap mt-5">{renderBoxes}</div>;
};

export default Work;
