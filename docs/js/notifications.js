'use strict'

const checkNotificationPermission = (data) => {
    if (Notification.permission === 'default' && data !== "Ativar todas as notificações") {
        Notification.requestPermission();
    }
}

const agendaNotificacao = (categoria, data) => {
    // Request Notification Permission
    if (Notification.permission === "granted") {
        showNotification(categoria, data);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotification(categoria, data);
            } else {
                alert("Notification permission denied!");
            }
        });
    } else {
        alert("Notification permission denied!");
    }
}

const showNotification = (categoria, data) => {
    const notificationTime = new Date(`${data.data}T${data.hora}`);
    const now = new Date();
    // const delay = notificationTime - now; // passar horario da consulta
    const delay = 5;
    if (delay > 0) {
        setTimeout(() => {
            const notification = new Notification("Lembrete de " + categoria, {
                body: `Você tem uma consulta com o Dr/Dra ${data.nome} em ${data.data} às ${data.hora}.`,
            });
        }, delay);
    } else {
        console.warn(`Notification time for ${data.nome} has already passed.`);
    }
}

