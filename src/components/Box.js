import React from "react";
import { Link } from "react-router-dom";
import ChasingShadow from "../hoc/chasingShadow";

const Box = ({ description, technology, code, live, title, detail }) => {
  const getTechnology = () => {
    if (technology && technology.length) {
      const kbdRendered = technology.map((tech) => {
        return (
          <small key={tech} className="mx-1 font-weight-lighter">
            {tech}
          </small>
        );
      });
      return kbdRendered;
    } else {
      return <small>Technology n/a</small>;
    }
  };
  return (
    <div className="d-flex flex-column">
      <div>
        <h3 className="mb-0">{title || "Title"}</h3>
        <p className="mt-2">{getTechnology()}</p>
        <p className="text-overflow-ellipsis h-100 work-description">
          {description || "Description n/a"}
        </p>
      </div>
      <div className="font-weight-light work-footer mt-auto">
        <div className="d-flex justify-content-start">
          {live && (
            <div title="Live">
              <i className="fa fa-eye" aria-hidden="true"></i>
              <a
                href={live}
                className="text-decoration-none ml-1 work-footer"
                target="_blank"
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
              >
                Code
              </a>
            </div>
          )}
          {detail && (
            <div className="ml-auto" title="Detail">
              <Link
                to={detail}
                className="text-decoration-none mr-2 work-footer"
              >
                <i class="fa fa-info" aria-hidden="true"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChasingShadow(Box);
