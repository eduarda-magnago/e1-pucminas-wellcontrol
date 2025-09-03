// Trocar foto de perfil
document.querySelector(".btn-change-photo button").addEventListener("click", function () {
    document.getElementById("profilePictureInput").click();
});

document.getElementById("profilePictureInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector(".profile-picture img").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Função para adicionar um novo campo de email
const addEmailButton = document.querySelector(".btn-outline-primary");
addEmailButton.addEventListener("click", function () {
    const emailFormGroup = document.createElement("div");
    emailFormGroup.classList.add("mb-3");

    const emailLabel = document.createElement("label");
    emailLabel.classList.add("form-label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Endereço de e-mail adicional";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.classList.add("form-control");
    emailInput.placeholder = "someone@example.com";
    emailInput.required = true;

    emailFormGroup.appendChild(emailLabel);
    emailFormGroup.appendChild(emailInput);

    // Insere o novo campo de e-mail antes do botão de adicionar
    addEmailButton.parentNode.insertBefore(emailFormGroup, addEmailButton);
});

// Salvar dados no localStorage
document.querySelector(".btn.btn-primary.btn-sm").addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const country = document.getElementById("country").value;
    const gender = document.getElementById("gender").value;
    const language = document.getElementById("language").value;
    const timezone = document.getElementById("timezone").value;

    // Salva os valores no localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("country", country);
    localStorage.setItem("gender", gender);
    localStorage.setItem("language", language);
    localStorage.setItem("timezone", timezone);

    // Exibe uma mensagem ao usuário
    alert("Dados salvos com sucesso!");
});

// Carregar dados salvos do localStorage ao carregar a página
window.onload = function() {
    if (localStorage.getItem("firstName")) {
        document.getElementById("firstName").value = localStorage.getItem("firstName");
    }
    if (localStorage.getItem("lastName")) {
        document.getElementById("lastName").value = localStorage.getItem("lastName");
    }
    if (localStorage.getItem("country")) {
        document.getElementById("country").value = localStorage.getItem("country");
    }
    if (localStorage.getItem("gender")) {
        document.getElementById("gender").value = localStorage.getItem("gender");
    }
    if (localStorage.getItem("language")) {
        document.getElementById("language").value = localStorage.getItem("language");
    }
    if (localStorage.getItem("timezone")) {
        document.getElementById("timezone").value = localStorage.getItem("timezone");
    }
};
