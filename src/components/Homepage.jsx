import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import profiles from './UsersInfo'; 
import '../CSS/styles.css';

const Homepage = () => {
  const [searchOption, setSearchOption] = useState('name'); 
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleSearchOptionChange = (option) => {
    setSearchOption(option);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile[searchOption].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="container">
        <Navbar
          searchOption={searchOption}
          handleSearchOptionChange={handleSearchOptionChange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <div className="flex-container">
          <div className="profile-container">
            <h1 className="profile-heading">PROFILES</h1>
            <p className="profile-description">Click on a profile to explore more</p>
            <div className="row">
              {filteredProfiles.map(profile => (
                <div className="profile-card" key={profile.id}>
                  <img
                    alt="Profile"
                    src={profile.image}
                    style={{ width: "220px", height: "220px", borderRadius: "50%" }}
                  />
                  <h2 className="font-bold">{profile.name}</h2>
                  <p className="text-center w-300 dark:prose-dark">
                    {profile.role}. 
                  </p>

              
                  <p className="text-center w-300 dark:prose-dark">
                    {profile.email}
                  </p>
                  <Link to={`/profile/${profile.id}`}>
                    <Button className="explore-button" variant="contained" color="primary">
                      Explore Profile
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;