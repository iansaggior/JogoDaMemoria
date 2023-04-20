const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault(); // não recarrega a página quando clica no play

    localStorage.setItem('player', input.value); // salva a informação digitada no input
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit)