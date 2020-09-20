import React, { useEffect, useState, lazy, Suspense } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { works } from "../../content/works";
const Detail = () => {
  const [project, setProject] = useState({});
  const match = useRouteMatch();

  useEffect(() => {
    works.forEach((work) => {
      if (work.id == match.params.id) {
        setProject(work);
      }
      return;
    });
  }, [match.params.id]);

  const renderTechUsed = (project.technology || []).map((tech) => {
    return (
      <code key={tech} className="mr-2">
        {tech}
      </code>
    );
  });

  const renderImages = (project.images || []).map((image) => {
    return (
      <img src={require(`../../asset/${image}`)} className="project-image" />
    );
  });

  return (
    <div className="page">
      <div className="text-light mb-5">
        <Link to="/project">back to all projects</Link>
      </div>
      <div className="text-light">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <>{renderTechUsed}</>
        <div>
          {renderImages.length ? renderImages : <p>No Images Found.</p>}
        </div>
        <p>git hub statics</p>
      </div>
    </div>
  );
};
export default Detail;
