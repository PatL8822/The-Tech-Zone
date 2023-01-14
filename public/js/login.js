const loginHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (userName && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ userName, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        const result = await response.json();

        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert('Failed to log in');
        }
    }

};

const createAccountBtn = async function createAccount() {
    document.location.replace(`/signup`)
}


document.querySelector('#loginForm').addEventListener('submit', loginHandler)

document.querySelector('#btnCreateAccount').addEventListener('click', createAccountBtn);

