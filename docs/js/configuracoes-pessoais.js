document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector("button.botao-notificacoes"); 
    
    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            const checkboxes = document.querySelectorAll('.form-check-input');
            
            const anyUnchecked = Array.from(checkboxes).some(checkbox => !checkbox.checked);

            checkboxes.forEach(function(checkbox) {
                checkbox.checked = anyUnchecked; 
            });

            toggleButton.textContent = anyUnchecked ? "Desativar todas as notificações" : "Ativar todas as notificações";
            checkNotificationPermission(toggleButton.textContent);
        });
    } else {
        console.error("Botão não encontrado");
    }
});


const imcBtn = document.getElementById("imc-btn");
imcBtn.addEventListener('click', () => {
    let peso = parseInt(document.querySelector("#imc-peso").value),
        altura = parseInt(document.querySelector("#imc-altura").value),
        resultado = document.getElementById("imc-resultado");
    if(!isNaN(peso) && !isNaN(altura)){
        const IMC = ((peso/Math.pow(altura,2))*10000).toFixed(2);
        resultado.value = IMC;
    }else{
      alert('Complete sua altura e peso');
    }
})

