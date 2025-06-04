import React, { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "./mediaQueries.css";

const App = () => {
  const profiles = [
    {
      image:
        "https://cdn.continental.com/fileadmin/__imported/sites/corporate/_international/german/hubpages/10_20presse/04_mediathek/vorstand_20_28de_29/philip-nelles.jpg",
      name: "John Doe",
      jobTitle: "Frontend Developer",
      bio: "Passionate about creating user-friendly web applications.",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://www.github.com/johndoe",
    },

    {
      image:
        "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg",
      name: "Jane Smith",
      jobTitle: "UX Designer",
      bio: "Creating intuitive and engaging user experiences.",
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://www.github.com/janesmith",
    },
    {
      image:
        "https://st2.depositphotos.com/1715570/5435/i/450/depositphotos_54357355-stock-photo-handsome-young-black-man-smiling.jpg",
      name: "Mike Johnson",
      jobTitle: "Backend Engineer",
      bio: "Building robust and scalable server-side solutions.",
      linkedin: "https://www.linkedin.com/in/mikejohnson",
      github: "https://www.github.com/mikejohnson",
    },
  ];

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
