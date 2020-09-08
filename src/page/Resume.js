import React from "react";
import ResumeTitle from "../components/Resume/Title";
import Skills from "../components/Resume/Skills";
import Accomplishment from "../components/Resume/Accomplishment";
import Experience from "../components/Resume/Experience";
import Profile from "../components/Resume/Profile";

const ResumePage = () => {
  return (
    <div className="p-3 pt-5 box-lg page">
      <ResumeTitle title="SANDIP SATYAL" />
      <Profile />
      <ResumeTitle title="SKILLS" />
      <Skills />
      <ResumeTitle title="accomplishments" />
      <Accomplishment />
      <ResumeTitle title="Experience" />
      <Experience />
    </div>
  );
};

export default ResumePage;
