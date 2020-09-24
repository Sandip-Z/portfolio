import React from "react";
import { motion } from "framer-motion";

const ResumeTitle = ({ title, icon }) => {
  return (
    <>
      <div className="border-top"></div>
      <h5
        className="text-dark text-center text-uppercase"
        style={{ letterSpacing: 7, marginTop: "-13px" }}
      >
        <motion.span
          initial={{ background: "black", padding: "0px 5px" }}
          animate={{
            background: "white",
            padding: "0px 5px",
          }}
        >
          {title}
        </motion.span>
      </h5>
    </>
  );
};

export default ResumeTitle;
