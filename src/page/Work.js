import React from "react";
import Box from "../components/Box";
const Work = () => {
  return (
    <div className="text-white d-flex flex-wrap mt-5">
      <Box
        technology={["React", "HTML", "CSS"]}
        title="Portfolio"
        description="My portfolio website."
        code="https://github.com/Sandip-Z/portfolio"
        live="http://www.sandipsatyal.com.np"
      />
      <Box
        description="Helps check your website's accessibility, broken links etc"
        title="Site Auditor"
        technology={["Node", "Express", "React", "MYSQL"]}
        code="https://something.com"
        live="s"
        detail="/work/dummy"
      />
    </div>
  );
};

export default Work;
