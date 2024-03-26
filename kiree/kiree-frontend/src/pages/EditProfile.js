import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditProfile() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    // Add more profile fields as needed
  });

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT/user-profile');
        setFormData({
          username: response.data.username,
          email: response.data.email,
          // Set other profile fields here
        });
      } catch (error) {
        console.error('Fetch User Data Error:', error.response.data);
        // Handle error and display error messages
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('YOUR_API_ENDPOINT/edit-profile', formData);
      console.log('Edit Profile Successful:', response.data);
      // Display success message or redirect to profile page
    } catch (error) {
      console.error('Edit Profile Error:', error.response.data);
      // Handle error and display error messages
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* Add more profile fields as needed */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
