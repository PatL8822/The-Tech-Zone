function pwcheck(e) {
    e.preventDefault();

    const password = document.querySelector('#createPassword').value.trim();
    const confirmPw = document.querySelector('#confirmPw').value.trim();

    if (password === confirmPw) {
        signUphHandler();
    } else {
        alert('Passwords do not match!')
    }
}

async function signUphHandler() {
    const username = document.querySelector('#createUserName').value.trim();
    const password = document.querySelector('#createPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    };
};

document.querySelector('#createAccount').addEventListener('submit', pwcheck);