document.addEventListener('DOMContentLoaded', function () {
    
    // Função para adicionar nova medicação
    document.querySelector('.btn-primary.w-100').addEventListener('click', function () {
        let medName = document.querySelector('input[placeholder="Digite o nome da nova medicação"]').value;
        let medDate = document.querySelector('input[type="date"]').value;
        let medTime = document.querySelector('input[type="time"]').value;

        if (medName && medDate && medTime) {
            let table = document.querySelector('.table.custom-table tbody');
            let newRow = table.insertRow();

            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);

            // Formatando a data no formato dd/mm/yyyy
            let formattedDate = new Date(medDate);
            let day = formattedDate.getDate().toString().padStart(2, '0');
            let month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
            let year = formattedDate.getFullYear();
            let formattedDateString = `${day}/${month}/${year}`;

            cell1.textContent = medName;
            cell2.textContent = formattedDateString; // Usando a data formatada
            cell3.textContent = medTime;
            cell4.innerHTML = '<button class="btn btn-primary btn-sm">Excluir</button>';

            // Adicionando a classe de cor para data e hora
            cell2.classList.add('data-hora');
            cell3.classList.add('data-hora');

            // Função para excluir nova linha
            cell4.querySelector('button').addEventListener('click', function () {
                this.parentElement.parentElement.remove();
            });

            // Limpar campos após adição
            document.querySelector('input[placeholder="Digite o nome da nova medicação"]').value = '';
            document.querySelector('input[placeholder="Digite a quantidade (dose) necessária"]').value = '';
            document.querySelector('input[placeholder="Digite a especialização do médico"]').value = '';
            document.querySelector('input[type="date"]').value = '';
            document.querySelector('input[type="time"]').value = '';
        }
    });

    // Função para adicionar nova consulta médica
    document.querySelectorAll('.btn-primary.w-100')[1].addEventListener('click', function (e) {
        e.preventDefault();
        let docName = document.querySelector('input[placeholder="Digite o nome do médico"]').value;
        let docDate = document.querySelectorAll('input[type="date"]')[1].value;
        let docTime = document.querySelectorAll('input[type="time"]')[1].value;

        if (docName && docDate && docTime) {
            let table = document.querySelectorAll('.table.custom-table tbody')[1];
            let newRow = table.insertRow();
            let profile = readProfile();

            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);

            // Formatando a data no formato dd/mm/yyyy
            let formattedDocDate = new Date(docDate);
            let day = formattedDocDate.getDate().toString().padStart(2, '0');
            let month = (formattedDocDate.getMonth() + 1).toString().padStart(2, '0');
            let year = formattedDocDate.getFullYear();
            let formattedDocDateString = `${day}/${month}/${year}`;

            cell1.textContent = docName;
            cell2.textContent = formattedDocDateString; // Usando a data formatada
            cell3.textContent = docTime;
            cell4.innerHTML = '<button class="btn btn-primary btn-sm">Excluir</button>';

            // Adicionando a classe de cor para data e hora
            cell2.classList.add('data-hora');
            cell3.classList.add('data-hora');

            // Função para excluir nova linha
            cell4.querySelector('button').addEventListener('click', function () {
                this.parentElement.parentElement.remove();
            });

            // Limpar campos após adição
            document.querySelector('input[placeholder="Digite o nome do médico"]').value = '';
            document.querySelectorAll('input[type="date"]')[1].value = '';
            document.querySelectorAll('input[type="time"]')[1].value = '';

            if(profile) {
                const novaConsulta = {
                    "nome": docName,
                    "data": formattedDocDateString, // Usando a data formatada
                    "hora": docTime
                };
                profile.consultas.push(novaConsulta);
                agendaNotificacao("consulta", novaConsulta);
                updateProfile(profile);
            }

        }
    });

    // Função para excluir medicação já existente
    document.querySelectorAll('.table.custom-table tbody')[0].querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {
            this.parentElement.parentElement.remove();
        });
    });

    // Função para excluir consulta médica já existente
    document.querySelectorAll('.table.custom-table tbody')[1].querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {
            this.parentElement.parentElement.remove();
        });
    });
});
