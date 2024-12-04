// Função para validar o formulário de login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter valores dos campos de login
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validar os campos
    if (!validateEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (password === "") {
        alert("Por favor, insira a sua password.");
        return;
    }

    // Simular login bem-sucedido
    alert("Login efetuado com sucesso!");
    // Aqui você pode redirecionar o utilizador ou autenticar via servidor
});

// Validação do email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Função para redirecionar para a página de criação de conta
function goToRegister() {
    window.location.href = "../register/index.html";
}

// Função para voltar à página inicial
function goBack() {
    window.location.href = "../index.html";
}

// Função para recuperar a password (em desenvolvimento futuro)
function recoverPassword() {
    alert("Funcionalidade de recuperação de password ainda em desenvolvimento.");
}
