document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos de entrada
    const carboidratosInput = document.getElementById('carboidratos');
    const proporcaoInput = document.getElementById('proporcao');
    const glicemiaAtualInput = document.getElementById('glicemia_atual');
    const alvoGlicemiaInput = document.getElementById('alvo_glicemia');
    const sensibilidadeInput = document.getElementById('sensibilidade');
    const doseCorrecaoInput = document.getElementById('dose_correção');

    // Função para calcular a dose de insulina
    function calcularDoseInsulina() {
        const carboidratos = parseFloat(carboidratosInput.value) || 0;
        const proporcao = parseFloat(proporcaoInput.value) || 0;
        const glicemiaAtual = parseFloat(glicemiaAtualInput.value) || 0;
        const alvoGlicemia = parseFloat(alvoGlicemiaInput.value) || 0;
        const sensibilidade = parseFloat(sensibilidadeInput.value) || 0;

        // Lógica de cálculo da dose de insulina
        const doseCarboidratos = carboidratos / proporcao; // Dose para carboidratos
        const glicemiaExcesso = glicemiaAtual - alvoGlicemia; // Diferença em relação ao alvo
        const doseCorrecao = glicemiaExcesso / sensibilidade; // Dose para correção

        // Total da dose de insulina
        const totalDose = doseCarboidratos + doseCorrecao;

        // Atualiza o input com o resultado
        doseCorrecaoInput.value = totalDose.toFixed(2); // Formata para 2 casas decimais
    }

    // Adiciona event listeners para calcular a dose quando os inputs mudarem
    carboidratosInput.addEventListener('input', calcularDoseInsulina);
    proporcaoInput.addEventListener('input', calcularDoseInsulina);
    glicemiaAtualInput.addEventListener('input', calcularDoseInsulina);
    alvoGlicemiaInput.addEventListener('input', calcularDoseInsulina);
    sensibilidadeInput.addEventListener('input', calcularDoseInsulina);
});
