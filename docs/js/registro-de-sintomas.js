document.getElementById('sintoma').addEventListener('change', function() {
    const outroSintomaInput = document.querySelector('input[placeholder="Outro sintoma não especificado"]');
    
    if (this.value === 'outro') {
        outroSintomaInput.disabled = false; // Habilita o campo de texto
    } else {
        outroSintomaInput.disabled = true;  // Desabilita o campo de texto
        outroSintomaInput.value = ''; // Limpa o valor do campo quando não estiver habilitado
    }
});

const sintomaSelect = document.getElementById('sintoma');
const intensidadeSelect = document.getElementById('intensidade');
const dataInput = document.querySelector('input[type="date"]');
const horaInput = document.querySelector('input[type="time"]');
const adicionarButton = document.querySelector('.btn-primary.w-100');
const tabelaBody = document.querySelector('.table tbody');

adicionarButton.addEventListener('click', () => {
    const sintoma = sintomaSelect.options[sintomaSelect.selectedIndex].text;
    const intensidade = intensidadeSelect.options[intensidadeSelect.selectedIndex].text;
    const data = dataInput.value;
    const hora = horaInput.value;

    if (!data || !hora) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${sintoma}</td>
        <td>${intensidade}</td>
        <td class="data-hora">${data.split('-').reverse().join('/')}</td>
        <td class="data-hora">${hora}</td>
        <td><button class="btn btn-primary btn-sm excluir-btn">Excluir</button></td>
    `;

    novaLinha.querySelector('.excluir-btn').addEventListener('click', (e) => {
        e.target.closest('tr').remove();
    });

    tabelaBody.appendChild(novaLinha);

    sintomaSelect.selectedIndex = 0;
    intensidadeSelect.selectedIndex = 0;
    dataInput.value = '';
    horaInput.value = '';
});

