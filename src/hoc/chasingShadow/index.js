import React, { useState, useEffect } from "react";

function chasingShadow(Component) {
  return ({ ...props }) => {
    const [style, setStyle] = useState(undefined);
    const [deg, setDeg] = useState(undefined);
    const defaultClassName = "box";

    useEffect(() => {
      let style = {
        backgroundImage: `linear-gradient(${deg}deg, #f1c40f, transparent)`,
      };
      setStyle(style);
    }, [deg]);

    const handleMouseMove = (event) => {
      const X = event.clientX / 5;
      const Y = event.clientY / 5;
      const result = X + Y;
      setDeg(result);
    };

    const handleMouseLeave = (e) => {
      // console.log("mouse left");
      // style={}
      setStyle({});
    };

    return (
      <div
        className={`${defaultClassName}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ ...style }}
      >
        <Component {...props} />
      </div>
    );
  };
}

export default chasingShadow;
