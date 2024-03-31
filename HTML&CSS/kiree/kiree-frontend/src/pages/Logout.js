import React from 'react';

function Logout() {
  const handleLogout = () => {
    // Clear user authentication token from localStorage or state
    console.log('Logged out!');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
