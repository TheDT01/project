const postForm = document.getElementById('postForm');
const contentInput = document.getElementById('content');
const postsDiv = document.getElementById('posts');

// Function to fetch and display posts
function fetchPosts() {
    fetch('/posts')
        .then(response => response.json())
        .then(posts => {
            postsDiv.innerHTML = '';
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <p><strong>User ${post.user_id}:</strong> ${post.content}</p>
                `;
                postsDiv.appendChild(postElement);
            });
        });
}

// Form submission
postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const content = contentInput.value.trim();
    if (content === '') {
        alert('Please enter something to post');
        return;
    }

    fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content, user_id: 1 }) // For now, hardcode user_id
    })
    .then(response => {
        if (response.ok) {
            contentInput.value = '';
            fetchPosts();
        } else {
            alert('Error posting');
        }
    });
});

// Initial fetch
fetchPosts();
