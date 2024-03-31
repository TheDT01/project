import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Explore() {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT/trending-posts');
        setTrendingPosts(response.data);
      } catch (error) {
        console.error('Fetch Trending Posts Error:', error.response.data);
        // Handle error and display error messages
      }
    };

    fetchTrendingPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      const response = await axios.post(`YOUR_API_ENDPOINT/posts/${postId}/like`);
      console.log('Like Post:', response.data);
      // Update state to reflect the liked post
    } catch (error) {
      console.error('Like Post Error:', error.response.data);
      // Handle error and display error messages
    }
  };

  return (
    <div>
      <h2>Explore</h2>
      <div className="grid">
        {trendingPosts.map((post) => (
          <div key={post.id}>
            <img src={post.imageUrl} alt={post.caption} />
            <p>{post.caption}</p>
            <button onClick={() => handleLike(post.id)}>Like</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
