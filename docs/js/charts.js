(function () {
if(!document.getElementById('chart-pressao')) {
    return;
}
// const ctx = document.getElementById('chart-glicemia').getContext('2d');
const ctx2 = document.getElementById('chart-pressao').getContext('2d');
const weightBarCtx = document.getElementById('chart-weight').getContext('2d');
const bloodSugarPie = document.getElementById('chart-sugar');
// const bpLineCtx = document.getElementById('chart-pressure').getContext('2d');

const gradientSystolic = ctx2.createLinearGradient(0, 0, 0, 400);
gradientSystolic.addColorStop(0, 'rgba(255, 99, 132, 0.5)');
gradientSystolic.addColorStop(1, 'rgba(255, 99, 132, 0)');

const gradientDiastolic = ctx2.createLinearGradient(0, 0, 0, 400);
gradientDiastolic.addColorStop(0, 'rgba(54, 162, 235, 0.5)');
gradientDiastolic.addColorStop(1, 'rgba(54, 162, 235, 0)');

const profile = readProfile();
let fullDates = []
if(profile.medicoes[0].length > 0) {
    fullDates = profile.medicoes[0]?.map(item => {
        const [day, month, year] = item.data.split("/");
        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        const monthName = monthNames[parseInt(month, 10) - 1];
        return monthName;
    });
} else {
    let container = document.getElementById('grafico-pressao-container');
    let reportContainer = document.querySelector('.export-file');
    container.innerHTML = "<div><strong>Nenhuma medição encontrada</strong>. Vá para a <a href='/dashboard/pressao-arterial'>tela de medições para iniciar!</a></div>";
    reportContainer.classList.add('d-none');
}


const data = {
    labels: fullDates,
    datasets: [
        {
            label: 'Pressão Sistólica (mmHg)',
            data: profile.medicoes[0] ? profile.medicoes[0].map(item => item.sistolica) : [],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: gradientSystolic,
            fill: true,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointHoverRadius: 8,
            tension: 0.4
        },
        {
            label: 'Pressão Diastólica (mmHg)',
            data: profile.medicoes[0] ? profile.medicoes[0].map(item => item.diastolica) : [],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: gradientDiastolic,
            fill: true,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointHoverRadius: 8,
            tension: 0.4
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Pressão Arterial (mmHg)'
                },
                suggestedMin: 50,
                suggestedMax: 160
            }
        }
    }
};
new Chart(ctx2, config);

// Gradient fill for bars
    const gradientWeight = weightBarCtx.createLinearGradient(0, 0, 0, 100);
    gradientWeight.addColorStop(0, 'rgba(255, 165, 0, 0.8)');
    gradientWeight.addColorStop(1, 'rgba(255, 165, 0, 0.2)');

    const dataWeight = {
        labels: Array.from({ length: 15 }, (_, i) => i + 1),
        datasets: [{
            label: 'Weight Progress',
            data: [50, 70, 85, 80, 75, 80, 70, 50, 55,60,50,65,70,65],
            backgroundColor: gradientWeight,
            borderColor: 'rgba(255, 140, 0, 1)',
            borderWidth: 1,
            borderRadius: 4,
            barPercentage: 0.6,
        }]
    };

    const configWeight = {
        type: 'bar',
        data: dataWeight,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                }
            },
        }
    };
    new Chart(weightBarCtx, configWeight);


    const databloodSugarPie = {
        datasets: [{
            data: [30, 70], // 30% progress, 70% remaining
            backgroundColor: ['#0000FF', '#FFFFFF'], // Blue for progress, light blue for remaining
            borderWidth: 0
        }]
    };

    const configbloodSugarPie = {
        type: 'doughnut',
        data: databloodSugarPie,
        options: {
            responsive: true,
            // maintainAspectRatio: false,
            cutout: '70%', // Makes it appear as a circular progress ring
            rotation: -90, // Start from the top
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
                doughnutlabel: {
                    labels: [
                        {
                            text: '+30%',
                            font: {
                                size: '16',
                                weight: 'bold'
                            }
                        }
                    ]
                }
            }
        }
    };

    new Chart(bloodSugarPie, configbloodSugarPie);

})();
