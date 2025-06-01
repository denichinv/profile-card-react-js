import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ image, name, jobTitle, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <div className="profile-details">
        <h2>{name}</h2>
        <hr />
        <h3>{jobTitle}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
