document.addEventListener("DOMContentLoaded", () => {
  const salvarBtn = document.querySelector(".salvar");

  salvarBtn.addEventListener("click", () => {
    // Obtém os valores das caixas de texto
    const carboidratos = document.getElementById("carboidratos").value;
    const proporcao = document.getElementById("proporcao").value;
    const glicemiaAtual = document.getElementById("glicemia_atual").value;
    const alvoGlicemia = document.getElementById("alvo_glicemia").value;
    const sensibilidade = document.getElementById("sensibilidade").value;
    const doseCorrecao = document.getElementById("dose_correção").value;

    // Cria um objeto para armazenar os dados
    const medida = {
      carboidratos: carboidratos || null,
      proporcao: proporcao || null,
      glicemiaAtual: glicemiaAtual || null,
      alvoGlicemia: alvoGlicemia || null,
      sensibilidade: sensibilidade || null,
      doseCorrecao: doseCorrecao || null,
      timestamp: new Date().toISOString(),
    };

    // Recupera o histórico existente no LocalStorage
    let historico = JSON.parse(localStorage.getItem("historico_medicoes")) || [];

    historico.push(medida);

    // Atualiza o LocalStorage
    localStorage.setItem("historico_medicoes", JSON.stringify(historico));

    alert("Medição salva com sucesso!");
  });
});
