import { profiles } from "./profiles";

import React, { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "./mediaQueries.css";

const App = () => {
  const [theme, setTheme] = React.useState("light");

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <h1 className="header">Team Profiles</h1>
      <hr />
      <div className="app">
        <div className="profiles-container">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              image={profile.image}
              name={profile.name}
              jobTitle={profile.jobTitle}
              bio={profile.bio}
              linkedin={profile.linkedin}
              github={profile.github}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
