const editButtonHandler = async (event) => {


    const name = document.querySelector('#postTittle').value.trim();
    const description = document.querySelector('#postBody').value.trim()
    const postId = document.querySelector('[name="post-id"]').value;

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dash');
    } else {
        alert('Failed to Update post!');
    }
    console.log('Update btn pushed')
};

document.querySelector('#editBtn').addEventListener('click', editButtonHandler);