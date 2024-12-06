import './App.css';
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  const profiles = [
    {
      image:
        'https://headshots-inc.com/wp-content/uploads/2021/01/FINAL-Blog-Images.jpg',
      name: 'John Doe',
      jobTitle: 'Frontend Developer',
      bio: 'Passionate about creating user-friendly web applications.',
    },

    {
      image:
        'https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg',
      name: 'Jane Smith',
      jobTitle: 'UX Designer',
      bio: 'Creating intuitive and engaging user experiences.',
    },
    {
      image:
        'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
      name: 'Mike Johnson',
      jobTitle: 'Backend Engineer',
      bio: 'Building robust and scalable server-side solutions.',
    },
  ];
  return (
    <div className="app">
      <h1>Team Profiles</h1>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            jobTitle={profile.jobTitle}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
