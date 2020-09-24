import React from "react";
import { motion, useViewportScroll } from "framer-motion";
import useScroll from "../hooks/useScroll";

const ScrollPosition = () => {
  const [hasScroll] = useScroll();
  const { scrollYProgress } = useViewportScroll();

  if (hasScroll) {
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
  }
  return <></>;
};

export default ScrollPosition;
