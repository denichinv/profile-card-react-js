import './App.css'
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  const profiles = [
    {
      image:
        'https://cdn.continental.com/fileadmin/__imported/sites/corporate/_international/german/hubpages/10_20presse/04_mediathek/vorstand_20_28de_29/philip-nelles.jpg',
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
        'https://st2.depositphotos.com/1715570/5435/i/450/depositphotos_54357355-stock-photo-handsome-young-black-man-smiling.jpg',
      name: 'Mike Johnson',
      jobTitle: 'Backend Engineer',
      bio: 'Building robust and scalable server-side solutions.',
    },
  ];
  return (<>
      <h1 className='header'>Team Profiles</h1><hr />
    <div className="app">
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
    </div></>
  );
};

export default App;