import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to Kiree</h2>
      <p>Discover and share moments with Kiree.</p>
      <Link to="/create-post">
        <button>Create Post</button>
      </Link>
    </div>
  );
}

export default Home;
