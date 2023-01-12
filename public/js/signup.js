function pwcheck(e) {
    e.preventDefault();

    const password = document.querySelector('#createPassword').value.trim();
    const confirmPw = document.querySelector('#confirmPw').value.trim();

    console.log(password)
    console.log(confirmPw)
    if (password === confirmPw) {
        alert('Pw matches!')
    } else {
        alert('Pw do not match!')
    }

    signUphHandler();
}

async function signUphHandler() {
    const userName = document.querySelector('#createUserName').value.trim();
    const password = document.querySelector('#createPassword').value.trim();

    if (userName && password) {
        const response = await fetch('/api/users/createAccount', {
            method: 'POST',
            body: JSON.stringify({
                userName,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');

            document.location.replace('/homepage');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#createAccount').addEventListener('submit', pwcheck);