const createPw = document.getElementById('createPw');
const confirmPw = document.getElementById('confirmPw');

document.getElementById('createBTN').addEventListener('submit', () => {
    if (createPw === confirmPw) {
        alert('PW matches!!!')
    } else {
        alert('Password dose not match.')
    }
})