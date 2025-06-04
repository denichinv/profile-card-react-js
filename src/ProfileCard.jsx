import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ image, name, jobTitle, bio, linkedin, github }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <div className="profile-details">
        <h2>{name}</h2>
        <hr />
        <h3>{jobTitle}</h3>
        <p>{bio}</p>

        <div className="social-links">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
