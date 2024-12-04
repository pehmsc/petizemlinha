// Função para validar o formulário de criação de conta
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter valores dos campos
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Validar os campos
    if (!validateEmail(email)) {
        return showError("email", "Por favor, insira um email válido.");
    }
    if (password.length < 6) {
        return showError("password", "A password deve ter pelo menos 6 caracteres.");
    }
    if (password !== confirmPassword) {
        return showError("confirm-password", "As passwords não coincidem.");
    }

    // Sucesso, se todas as validações passarem
    alert("Conta criada com sucesso!");
    // Redirecionar o usuário para a página de login após criar a conta
    window.location.href = "../login/index.html";
});

// Função para validar o email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,}$/;
    return emailPattern.test(email);
}

// Função para exibir mensagens de erro
function showError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    const errorElement = inputField.nextElementSibling;

    errorElement.textContent = message;
    errorElement.style.display = "block";

    inputField.classList.add("input-error");
    inputField.addEventListener("input", () => {
        errorElement.style.display = "none";
        inputField.classList.remove("input-error");
    });
}
