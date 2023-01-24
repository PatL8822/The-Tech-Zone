const newPostHandler = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#postTittle').value.trim();
    const description = document.querySelector('#postBody').value.trim();

    if (name && description) {
        const response = await fetch(`/api/post/addpost`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dash');
        } else {
            alert('Failed to create post!');
        }
    }
};

document.querySelector('.new-post-btn').addEventListener('click', newPostHandler);