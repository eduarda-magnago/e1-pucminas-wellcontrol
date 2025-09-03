(function () {
    const Actions = {
        init: function () {
            this.addName();
            this.addDate();
            this.logout();
            this.exportToCSV();
            this.destacarMenuAtivo();
            this.salvarMenuAtivo();
        },

        addName: function () {
            const profile = readProfile();
            if (profile) {
                let nome = document.getElementById('nome-usuario');
                let greeting = document.getElementById('greeting');
                nome.innerText = profile.nome;
                greeting.innerText = profile.nome;
            }
        },

        logout: function () {
            const logOutBtn = document.getElementById('logout');
            if (!logOutBtn) {
                return;
            }
            logOutBtn.addEventListener("click", () => {
                window.location.replace('/');
            });
        },

        exportToCSV: function () {
            const bloodPressureData = [
                { month: "Janeiro", systolic: 135, diastolic: 70 },
                { month: "Fevereiro", systolic: 120, diastolic: 85 },
                { month: "Marco", systolic: 110, diastolic: 63 },
                { month: "Abril", systolic: 128, diastolic: 78 },
                { month: "Maio", systolic: 142, diastolic: 60 }
            ];

            const headers = ["Mes", "Pressao Sistolica (mmHg)", "Pressao Diastolica (mmHg)"];
            const rows = bloodPressureData.map(row => [row.month, row.systolic, row.diastolic]);

            let csvContent = "data:text/csv;charset=utf-8," 
                + headers.join(",") + "\n" 
                + rows.map(e => e.join(",")).join("\n");

            const encodedUri = encodeURI(csvContent);
            const link = document.getElementById("export-file");
            if (link) {
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "blood_pressure_data.csv");
            }
        },

        salvarMenuAtivo: function () {
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    const clickedElement = e.target.closest('a');
                    if (clickedElement) {
                        localStorage.setItem("active-link", clickedElement.pathname);
                    }
                });
            });
        },

        destacarMenuAtivo: function () {
            const activeLink = localStorage.getItem("active-link");
            if (!activeLink) return;

            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                const linkElement = item.querySelector('a');
                if (linkElement && linkElement.pathname === activeLink) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        },

        addDate: function () {
            const dateNow = new Date();
            const dashDate = document.getElementById('dash-date');
            if (dashDate) {
                const dashTime = document.getElementById('dash-time');
                const dashDay = document.getElementById('dash-day');
                const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

                const dayOfWeekIndex = dateNow.getDay();
                const dayOfWeek = daysOfWeek[dayOfWeekIndex];

                const formattedDate = dateNow.toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });

                const formattedTime = dateNow.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false 
                });

                dashDate.innerText = formattedDate;
                dashTime.innerText = formattedTime;
                dashDay.innerText = dayOfWeek;
            }
        }
    };

    Actions.init();
})();
