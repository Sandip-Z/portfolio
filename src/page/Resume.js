import React from "react";
import ResumeTitle from "../components/Resume/Title";
import Skills from "../components/Resume/Skills";
import Accomplishment from "../components/Resume/Accomplishment";

const ResumePage = () => {
  return (
    <div className="mt-5">
      <ResumeTitle title="SKILLS" />
      <Skills />
      <ResumeTitle title="accomplishments" />
      <Accomplishment />
      <ResumeTitle title="Experience" />
    </div>
  );
};

export default ResumePage;
