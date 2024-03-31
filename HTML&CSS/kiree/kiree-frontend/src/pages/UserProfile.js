import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT/user-profile');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Fetch User Profile Error:', error.response.data);
        // Handle error and display error messages
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditProfile = async (updatedProfileData) => {
    try {
      const response = await axios.put('YOUR_API_ENDPOINT/user-profile', updatedProfileData);
      console.log('Edit Profile Success:', response.data);
      // Update state to reflect the edited profile
    } catch (error) {
      console.error('Edit Profile Error:', error.response.data);
      // Handle error and display error messages
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile ? (
        <div>
          <p>Username: {userProfile.username}</p>
          <p>Email: {userProfile.email}</p>
          {/* Display other profile details */}
          <button onClick={() => handleEditProfile({ /* Updated profile data */ })}>
            Edit Profile
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default UserProfile;
