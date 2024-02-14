function register(ev) {
    const sectionElement = document.querySelector('section'); // Seleciona a seção que contém os campos de entrada
    const username = sectionElement.querySelector('#username').value; // Obtém o valor do campo de entrada do nome de usuário
    const password = sectionElement.querySelector('#password').value; // Obtém o valor do campo de entrada da senha
    const passwordConfirmation = sectionElement.querySelector('#passwordConfirmation').value; // Obtém o valor do campo de entrada de confirmação de senha

    if (password === passwordConfirmation) {
        alert('Usuário ' + username + ' registrado!');
    } else {
        alert('As senhas não são iguais! Tente novamente!');
    }
}

const button = document.getElementById('register-button');

button.addEventListener('click', register);

function removeListener() {
    button .removeEventListener('click', register)
    alert('Event Removed')
}
