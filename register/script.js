// Função para validar o formulário
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter valores dos campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const postalCode = document.getElementById("postal-code").value.trim();
    const city = document.getElementById("city").value.trim();

    // Validar os campos
    if (name === "") return showError("name", "O nome completo é obrigatório.");
    if (!validateEmail(email)) return showError("email", "Por favor, insira um email válido.");
    if (password.length < 6) return showError("password", "A password deve ter pelo menos 6 caracteres.");
    if (password !== confirmPassword) return showError("confirm-password", "As passwords não coincidem.");
    if (postalCode === "") return showError("postal-code", "O código postal é obrigatório.");
    if (city === "") return showError("city", "A cidade é obrigatória.");

    // Sucesso
    alert("Conta criada com sucesso!");
});

// Validação do email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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

// Função para voltar à página inicial
function goBack() {
    window.location.href = "../index.html";
}
