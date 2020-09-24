import React from "react";
import ResumeTitle from "../components/Resume/Title";
import Skills from "../components/Resume/Skills";
import Accomplishment from "../components/Resume/Accomplishment";
import Experience from "../components/Resume/Experience";
import Profile from "../components/Resume/Profile";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      className="p-3 pt-5 box-lg page"
      initial={{
        height: 0,
        overflow: "hidden",
      }}
      animate={{
        height: "auto",
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <ResumeTitle title="SANDIP SATYAL" />
      <Profile />
      <ResumeTitle title="SKILLS" />
      <Skills />
      <ResumeTitle title="accomplishments" />
      <Accomplishment />
      <ResumeTitle title="Experience" />
      <Experience />
    </motion.div>
  );
};

export default ResumePage;
