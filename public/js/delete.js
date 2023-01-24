const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dash');
        } else {
            alert('Failed to delete post!');
        }
    }
    console.log('Delete btn pushed')
};

document.querySelector('.deletepost').addEventListener('click', delButtonHandler);