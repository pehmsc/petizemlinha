// Lógica de login para clientes e babysitters

// Função de login para cliente
document.getElementById('login-cliente').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Cliente logado com', email, password);
    // Aqui você pode enviar os dados para o servidor ou realizar a lógica de autenticação
});

// Função de login para babysitter
document.getElementById('login-babysitter').addEventListener('submit', function(e) {
    e.preventDefault();
    const key = document.getElementById('key').value;
    const password = document.getElementById('password-babysitter').value;

    console.log('Babysitter logado com chave', key, 'e password', password);
    // Similar, você pode verificar a chave e autenticar a babysitter
});
