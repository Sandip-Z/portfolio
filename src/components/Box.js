import React from "react";
import { Link, useHistory } from "react-router-dom";
import ChasingShadow from "../hoc/chasingShadow";

const Box = ({ description, technology, code, live, title, detail, id }) => {
  const history = useHistory();
  const getTechnology = () => {
    if (technology && technology.length) {
      const kbdRendered = technology.map((tech) => {
        return (
          <small key={tech} className="mr-2 font-weight-lighter">
            {tech}
          </small>
        );
      });
      return kbdRendered;
    } else {
      return <small>Technology n/a</small>;
    }
  };

  const navigateToDetail = () => {
    // history.push(`/project/detail/${id}`);
    console.log("navigation disabled");
  };
  return (
    <div
      className="d-flex flex-column cursor-pointer"
      onClick={navigateToDetail}
    >
      <div>
        <h5 className="mb-0 text-capitalize">{title || "Title"}</h5>
        <p className="mt-2">{getTechnology()}</p>
        <p className="text-overflow-ellipsis work-description">
          {description || "Description n/a"}
        </p>
      </div>
      <div className="font-weight-light work-footer mt-auto">
        <div className="d-flex justify-content-start box__info">
          {live && (
            <div title="Live">
              <i className="fa fa-eye" aria-hidden="true"></i>
              <a
                href={live}
                className="text-decoration-none ml-1 work-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          )}
          {code && (
            <div className="mx-3" title="Code">
              <i className="fa fa-code" aria-hidden="true"></i>
              <a
                href={code}
                className="text-decoration-none ml-1 work-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          )}
          {detail && (
            <div className="ml-auto" title="Detail">
              <Link
                to={`/project/detail/${id}`}
                className="text-decoration-none mr-2 work-footer"
              >
                <i className="fa fa-info" aria-hidden="true"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChasingShadow(Box);
