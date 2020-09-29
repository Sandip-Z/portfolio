import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

function chasingShadow(Component) {
  return ({ ...props }) => {
    const [style, setStyle] = useState(undefined);
    const [deg, setDeg] = useState(undefined);
    // const defaultClassName = "box";

    useEffect(() => {
      let style = {
        backgroundImage: `linear-gradient(${deg}deg, #f1c40f, transparent)`,
      };
      setStyle(style);
    }, [deg]);

    const container = useCallback(() => {
      return {
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            // delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
        },
      };
    }, []);

    // const item = {
    //   hidden: { y: 20, opacity: 0 },
    //   visible: {
    //     y: 0,
    //     opacity: 1,
    //   },
    // };

    const handleMouseMove = (event) => {
      const Y = event.clientY / 5;
      const X = event.clientX / -2;
      const result = X + Y;
      setDeg(result);
    };

    const handleMouseLeave = (e) => {
      // console.log("mouse left");
      // style={}
      setStyle({});
    };

    return (
      <motion.div
        className="d-flex"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        variants={container}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: props.highlight ? 1.07 : 1,
          borderRadius: 7,
        }}
      >
        <Component
          {...props}
          style={props.highlight ? { ...style } : { opacity: "0.2" }}
        />
      </motion.div>
    );
  };
}

export default chasingShadow;
