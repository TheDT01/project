import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Fetch Posts Error:', error.response.data);
        // Handle error and display error messages
      }
    };

    fetchPosts();
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

  const handleComment = async (postId, commentText) => {
    try {
      const response = await axios.post(`YOUR_API_ENDPOINT/posts/${postId}/comments`, {
        text: commentText,
      });
      console.log('Comment Added:', response.data);
      // Update state to reflect the new comment
    } catch (error) {
      console.error('Add Comment Error:', error.response.data);
      // Handle error and display error messages
    }
  };

  return (
    <div>
      <h2>Feed</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.imageUrl} alt={post.caption} />
          <p>{post.caption}</p>
          <button onClick={() => handleLike(post.id)}>Like</button>
          <div>
            {post.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.text}</p>
              </div>
            ))}
            <input type="text" placeholder="Add a comment..." />
            <button onClick={() => handleComment(post.id, 'New Comment')}>
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
