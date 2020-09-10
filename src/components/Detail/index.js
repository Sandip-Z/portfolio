import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
const Detail = () => {
  const match = useRouteMatch();
  console.log(match.params.id);
  return (
    <div className="page">
      <div className="text-light mb-5">
        <Link to="/project">back to all projects</Link>
      </div>
      <div>
        <h1>Name of the project</h1>
        <h5>Descriptions of the project</h5>
        <p>technology used in project</p>
        <div>images of the project</div>
        <p>git hub statics</p>
      </div>
    </div>
  );
};
export default Detail;
