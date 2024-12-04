// Simulação de login - Isso pode ser substituído por uma autenticação real
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar o usuário para a página principal ou outra página
        window.location.href = '../index.html';  // Exemplo de redirecionamento
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
