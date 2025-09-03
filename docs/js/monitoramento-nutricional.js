// Javacript para gerar um ALERTA, quando o usuário definir uma nova meta de carboidratos e para deixar descrito o valor embaixo do botão
function definirMetaCarboidratos() {
    const meta = document.getElementById('metaCarboidratos').value;

    if (meta === '') {
        alert('Por favor, insira uma meta antes de definir.');
        return;
    }

    alert('Meta semanal de carboidratos definida para ' + meta + 'g!');

    const metaAtualElemento = document.querySelector('.card p:last-child');
    metaAtualElemento.textContent = 'Meta atual = ' + meta + 'g';
}

// Javacript para calcular o consumo total de carboidratos e sódio
function calcularTotal() {
    const carboidratos = document.querySelectorAll('tbody tr td:nth-child(2)');
    const sodio = document.querySelectorAll('tbody tr td:nth-child(3)');

    let totalCarboidratos = 0;
    let totalSodio = 0;

    carboidratos.forEach(td => {
        totalCarboidratos += parseInt(td.textContent.replace('g', '')) || 0;
    });

    sodio.forEach(td => {
        totalSodio += parseInt(td.textContent.replace('mg', '')) || 0;
    });

    document.getElementById('totalCarboidratos').textContent = totalCarboidratos;
    document.getElementById('totalSodio').textContent = totalSodio;
}

// Javacript para adicionar nova linha na tabela de Refeições Diárias
document.addEventListener('DOMContentLoaded', function() {
    const adicionarButton = document.querySelector('.btn-primary.w-100');

    if (adicionarButton) {
        adicionarButton.addEventListener('click', function() {
            const nomeInput = document.querySelector('input[placeholder="Digite nova refeição"]');
            const carboidratosInput = document.querySelector('input[placeholder="Carboidratos (g)"]');
            const sodioInput = document.querySelector('input[placeholder="Sódio (g)"]');
            const dataInput = document.querySelector('input[placeholder="Digite a data desejada"]');
            const horaInput = document.querySelector('input[placeholder="Digite o horário desejado"]');

            if (!nomeInput.value || !carboidratosInput.value || !sodioInput.value || !dataInput.value || !horaInput.value) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            const nome = nomeInput.value;
            const carboidratos = `${carboidratosInput.value}g`;
            const sodio = `${sodioInput.value}mg`;
            const data = dataInput.value.split('-').reverse().join('/');
            const hora = horaInput.value;

            const tabela = document.querySelector('table tbody');
            if (!tabela) {
                console.error('Erro ao encontrar a tabela!');
                return;
            }

            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${nome}</td>
                <td>${carboidratos}</td>
                <td>${sodio}</td>
                <td class="data-hora">${data}</td>
                <td class="data-hora">${hora}</td>
                <td><button class="btn btn-primary btn-sm">Excluir</button></td>
            `;

            tabela.appendChild(novaLinha);

            nomeInput.value = '';
            carboidratosInput.value = '';
            sodioInput.value = '';
            dataInput.value = '';
            horaInput.value = '';

            const excluirButton = novaLinha.querySelector('.btn-sm');
            excluirButton.addEventListener('click', function() {
                tabela.removeChild(novaLinha);
            });
        });
    } else {
        console.error('Erro: Botão de adicionar não encontrado!');
    }
});



