import { createContext } from "react";

let activeTechnologies = ["Bootstrap"];

const updateActiveTechnologies = (technology) => {
  activeTechnologies.forEach((activeTech, index) => {
    if (activeTech === technology) {
      removeFromActiveTechnology(index);
    } else {
      addToActiveTechnology(technology);
    }
  });
};

const addToActiveTechnology = (technology) => {
  return activeTechnologies.push(technology);
};

const removeFromActiveTechnology = (index) => {
  const clonedActiveTechnologies = [...activeTechnologies];
  clonedActiveTechnologies.splice(index, 1);
  console.log(clonedActiveTechnologies);
  activeTechnologies = clonedActiveTechnologies;
};

updateActiveTechnologies("CSS3");
updateActiveTechnologies("CSS3");

const ActiveTechnologyContext = createContext(activeTechnologies);

export default ActiveTechnologyContext;
