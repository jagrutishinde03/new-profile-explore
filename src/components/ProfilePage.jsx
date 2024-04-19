import React from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/styles.css';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import profiles from './UsersInfo';
import '../CSS/ProfilePage.css';

const ProfilePage = () => {
  const { id } = useParams();
  const userProfile = profiles.find(profile => profile.id === parseInt(id));

  if (!userProfile) {
    return <div>User not found</div>;
  }

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-image-container">
                  <img
                    className="profile-image rounded-circle"
                    src={`${process.env.PUBLIC_URL}/${userProfile.image}`}
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="profile-info">
                  <h1 className="mb-0">{userProfile.name}</h1>
                  <p className="text-muted mb-2">{userProfile.role}</p>
                  <div className="button-container">
                    <Button className="follow-button" variant="contained" color="primary">
                      Follow
                    </Button>
                    <Button className="message-button" variant="outlined" color="primary">
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-8">
                <div className="profile-bio">
                  <h2>Bio</h2>
                  <p>{userProfile.bio}</p>
                </div>
                <div className="profile-details">
                  <h2>Details</h2>
                  <ul className="list-unstyled">
                    <li><strong>Email:</strong> {userProfile.email}</li>
                    <li><strong>Age:</strong> {userProfile.age}</li>
                    <li><strong>Company:</strong> {userProfile.companyName}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="location-map">
                  <h2>Location Map</h2>
                  <LocationOnIcon className="location-icon" /> {userProfile.location}
                </div>
                <Button className="summary-button" variant="contained" color="primary">
                  Summary
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
