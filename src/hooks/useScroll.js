import React, { useState, useEffect } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState(undefined);
  useEffect(() => {
    setScroll(window.innerWidth > document.documentElement.clientWidth);
  }, [window.innerWidth]);
  return [scroll];
};

export default useScroll;
