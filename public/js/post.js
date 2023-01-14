const newPostHandler = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#postTittle').value.trim();
    const description = document.querySelector('#postBody').value.trim();

    if (name && description) {
        const response = await fetch(`/api/post/newpost`, {
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

const makeNewPostBTN = async function newPost() {
    document.location.replace(`/card`)
}

document.querySelector('#postBTNContainer').addEventListener('click', makeNewPostBTN);