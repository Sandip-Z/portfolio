import React from "react";
import { motion, useViewportScroll } from "framer-motion";

const ScrollPosition = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
    <div className="scroll-line-container">
      <motion.div
        className="scroll p-0"
        style={{
          scaleY: scrollYProgress,
        }}
      >
        &nbsp;
      </motion.div>
    </div>
  );
};

export default ScrollPosition;
