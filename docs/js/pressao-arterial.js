document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('#tabela-medicacoes');
    const ctx = document.getElementById('pressaoArterial').getContext('2d');

    // Arrays para armazenar os dados do gráfico
    let labels = [];
    let sistolicaData = [];
    let diastolicaData = [];
    let pulsoData = [];
    let chart;

    // Função para inicializar ou atualizar o gráfico
    function generateChart() {
        if (chart) {
            chart.data.labels = labels;
            chart.data.datasets[0].data = sistolicaData;
            chart.data.datasets[1].data = diastolicaData;
            chart.update();
        } else {
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Pressão Sistólica (mmHg)',
                            data: sistolicaData,
                            borderColor: 'blue',
                            fill: false,
                        },
                        {
                            label: 'Pressão Diastólica (mmHg)',
                            data: diastolicaData,
                            borderColor: 'green',
                            fill: false,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            min: 50,
                            max: 200,
                            title: {
                                display: true,
                                text: 'Pressão Arterial (mmHg)',
                            },
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Data das Medições',
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        },
                    },
                },
            });
        }
    }

    // Função para atualizar os dados do gráfico e sincronizar com o localStorage
    function updateDataFromTable() {
        labels = [];
        sistolicaData = [];
        diastolicaData = [];
        pulsoData = [];

        const tableData = Array.from(tableBody.querySelectorAll('tr')).map(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length > 1) {
                const rowData = {
                    sistolica: parseInt(cells[1].textContent),
                    diastolica: parseInt(cells[2].textContent),
                    pulso: parseInt(cells[3].textContent),
                    data: cells[4].textContent,
                };

                labels.push(rowData.data);
                sistolicaData.push(rowData.sistolica);
                diastolicaData.push(rowData.diastolica);
                pulsoData.push(rowData.pulso);

                return rowData;
            }
        }).filter(Boolean);

        // Atualiza o localStorage com os dados da tabela
        localStorage.setItem('tableData', JSON.stringify(tableData));
        let profile = JSON.parse(localStorage.getItem("profile"));
        if(profile) {
            profile.medicoes = [];
            profile.medicoes.push(tableData);
            localStorage.setItem('profile', JSON.stringify(profile));
        }
        // Atualiza o gráfico com os novos dados
        generateChart();
    }

    // Função para adicionar evento de exclusão a uma nova linha
    function addDeleteEvent(button, row) {
        button.addEventListener('click', function () {
            row.remove(); // Remove a linha da tabela
            updateDataFromTable(); // Atualiza os dados no gráfico e no localStorage
        });
    }

    // Função para adicionar uma nova linha na tabela
    function addRow(sistolica, diastolica, pulso, data) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="color-box"></td>
            <td>${sistolica}</td>
            <td>${diastolica}</td>
            <td>${pulso}</td>
            <td class="data-cell">${data}</td>
            <td><button class="btn btn-primary btn-sm">Excluir</button></td>
        `;
        tableBody.appendChild(newRow);

        // Adiciona o evento de exclusão ao botão
        addDeleteEvent(newRow.querySelector('.btn-primary'), newRow);
    }

    // Função para carregar dados de exemplo apenas se o localStorage estiver vazio
    function loadExampleDataIfNeeded() {
        const storedTableData = localStorage.getItem('tableData');

        if (!storedTableData) {
            const exampleData = [
                { sistolica: 106, diastolica: 75, pulso: 82, data: '09/10/2024' },
                { sistolica: 120, diastolica: 79, pulso: 73, data: '16/09/2024' },
                { sistolica: 147, diastolica: 91, pulso: 93, data: '22/08/2024' },
                { sistolica: 182, diastolica: 113, pulso: 76, data: '03/07/2024' },
                { sistolica: 110, diastolica: 56, pulso: 85, data: '14/06/2024' },
            ];

            exampleData.forEach(entry => {
                addRow(entry.sistolica, entry.diastolica, entry.pulso, entry.data);
            });

            updateDataFromTable(); // Atualizar gráfico e localStorage
        }
    }

    // Função para carregar os dados armazenados ao carregar a página
    function loadDataFromStorage() {
        const storedTableData = localStorage.getItem('tableData');

        if (storedTableData) {
            const tableData = JSON.parse(storedTableData);

            tableData.forEach(row => {
                addRow(row.sistolica, row.diastolica, row.pulso, row.data);
            });

            updateDataFromTable();
        }
    }

    // Adicionar dados via formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const sistolica = form.querySelector('input[placeholder="Sistólica"]').value;
        const diastolica = form.querySelector('input[placeholder="Diastólica"]').value;
        const pulso = form.querySelector('input[placeholder="Pulso"]').value;
        const data = form.querySelector('input[type="date"]').value;

        if (sistolica && diastolica && pulso && data) {
            const inputDate = new Date(data);
            const localDate = new Date(inputDate.getTime() + inputDate.getTimezoneOffset() * 60000);
            addRow(sistolica, diastolica, pulso, localDate.toLocaleDateString());

            form.reset();
            updateDataFromTable();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Inicialização
    loadDataFromStorage(); // Carregar dados do localStorage
    loadExampleDataIfNeeded(); // Adicionar dados de exemplo, se necessário
});
