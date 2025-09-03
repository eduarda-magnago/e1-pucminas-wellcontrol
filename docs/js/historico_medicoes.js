document.addEventListener("DOMContentLoaded", () => {
  const historicoLista = document.getElementById("historico-lista");
  const mediaGlicemiaEl = document.getElementById("media-glicemia");

  // Função para calcular a média de glicemia do último mês
  const calcularMediaGlicemia = () => {
    const historico = JSON.parse(localStorage.getItem("historico_medicoes")) || [];
    const agora = new Date();
    const trintaDiasAtras = new Date();
    trintaDiasAtras.setDate(agora.getDate() - 30);

    const glicemiasRecentes = historico
      .filter((medida) => {
        const dataMediacao = new Date(medida.timestamp);
        return (
          dataMediacao >= trintaDiasAtras &&
          dataMediacao <= agora &&
          medida.glicemiaAtual != null &&
          !isNaN(medida.glicemiaAtual)
        );
      })
      .map((medida) => parseFloat(medida.glicemiaAtual));

    // Calcula a média
    if (glicemiasRecentes.length > 0) {
      const soma = glicemiasRecentes.reduce((acc, valor) => acc + valor, 0);
      const media = (soma / glicemiasRecentes.length).toFixed(2); // Formata para 2 casas decimais
      mediaGlicemiaEl.textContent = `${media} mg/dl`;
    } else {
      mediaGlicemiaEl.textContent = "Nenhuma medição disponível nos últimos 30 dias.";
    }
  };


  // Função para renderizar o histórico
  const renderizarHistorico = () => {
    // Recupera o histórico do LocalStorage
    const historico = JSON.parse(localStorage.getItem("historico_medicoes")) || [];

    historicoLista.innerHTML = "";

    if (historico.length === 0) {
      historicoLista.innerHTML = "<p>Nenhuma medição registrada até o momento.</p>";
      return;
    }

    // Cria uma lista para exibir as medições
    const ul = document.createElement("ul");
    ul.className = "list-group";

    historico.forEach((medida, index) => {
      // Formata a data para exibição
      const dataHora = new Date(medida.timestamp).toLocaleString("pt-BR");

      // Cria um item da lista
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-start";

      li.innerHTML = `
        <div>
          <strong>Medição ${index + 1}:</strong><br>
          - Carboidratos: ${medida.carboidratos || "N/A"} g 
          - Glicemia: ${medida.glicemiaAtual || "N/A"} mg/dl<br>
          - Dose de Correção: ${medida.doseCorrecao || "N/A"} unidades 
          - Registrado em: ${dataHora}<br>
        </div>
        <button class="btn btn-danger btn-sm deletar" data-index="${index}">Deletar</button>
      `;

      ul.appendChild(li);
    });

    historicoLista.appendChild(ul);

    document.querySelectorAll(".deletar").forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        deletarMedicao(index);
      });
    });

    calcularMediaGlicemia();
  };

  // Função para deletar uma medição
  const deletarMedicao = (index) => {
    let historico = JSON.parse(localStorage.getItem("historico_medicoes")) || [];

    historico.splice(index, 1);

    // Atualiza o LocalStorage
    localStorage.setItem("historico_medicoes", JSON.stringify(historico));

    renderizarHistorico();
  };

  // Renderiza o histórico ao carregar a página
  renderizarHistorico();
});
