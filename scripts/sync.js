'use strict';

document.getElementById('syncForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        message: document.getElementById('dataInput').value
    };

    // Збереження даних в локальному сховищі
    localStorage.setItem('syncData', JSON.stringify(data));

    // Реєстрація події синхронізації
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then(function(swRegistration) {
            return swRegistration.sync.register('sync-data');
        }).catch(function() {
            // Відправка даних відразу, якщо фонова синхронізація недоступна
            sendData(data);
        });
    } else {
        // Фонова синхронізація не підтримується
        sendData(data);
    }
});

function sendData(data) {
    // Ваш код для відправлення даних на сервер
}
