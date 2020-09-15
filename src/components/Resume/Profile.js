import React from "react";
import profileImage from "../../asset/profile.png";
const Profile = () => {
  return (
    <div className="text-light my-5">
      {/* <div className="d-flex align-items-center justify-content-end my-0 mr-2">
        <a
          href="#"
          className="text-decoration-none text-primary text-uppercase"
        >
          <i className="fa fa-linkedin" />
        </a>
        <a
          href="#"
          className="text-decoration-none text-primary ml-5 text-uppercase"
        >
          <i className="fa fa-download" aria-hidden="true"></i>
        </a>
      </div> */}
      <div className="d-flex justify-content-center">
        <img
          src={profileImage}
          className="img img-responsive profile-image"
          alt="Sandip Satyal"
        />
      </div>
      <p className="mt-3 font-weight-lighter">
        Software Engineer from Kathmandu, Nepal. I love learning new things
        because i love building new things. Hope to always remain as passionate
        as i am today while writing this.
      </p>
    </div>
  );
};

export default Profile;
