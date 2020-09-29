import { createContext } from "react";

let activeTechnologies = ["Bootstrap"];

// const updateActiveTechnologies = (technology) => {
//   activeTechnologies.forEach((activeTech, index) => {
//     if (activeTech === technology) {
//       removeFromActiveTechnology(index);
//     } else {
//       addToActiveTechnology(technology);
//     }
//   });
// };

// const addToActiveTechnology = (technology) => {
//   return activeTechnologies.push(technology);
// };

// const removeFromActiveTechnology = (index) => {
//   const clonedActiveTechnologies = [...activeTechnologies];
//   clonedActiveTechnologies.splice(index, 1);
//   console.log(clonedActiveTechnologies);
//   activeTechnologies = clonedActiveTechnologies;
// };

const ActiveTechnologyContext = createContext([]);

export default ActiveTechnologyContext;
