import React from "react";
import profileImage from "../../asset/profile.png";
const Profile = () => {
  return (
    <div className="text-light my-5">
      <div className="d-flex justify-content-center">
        <img src={profileImage} className="img img-responsive profile-image" />
      </div>
      <div className="d-flex flex-column align-items-center my-3">
        <a
          href="#"
          className="text-decoration-none text-warning text-uppercase"
        >
          Visit my linked in profile
        </a>
        <a
          href="#"
          className="text-decoration-none text-warning text-uppercase"
        >
          Download resume in pdf format
        </a>
      </div>
      <p className="font-weight-lighter">
        Software Engineer from Kathmandu, Nepal. I love learning new things
        because i love building new things. Hope to always remain as passionate
        as i am today while writing this.
      </p>
    </div>
  );
};

export default Profile;
