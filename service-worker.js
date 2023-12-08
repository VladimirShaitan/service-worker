const API_PATH = '/path-to-your-api';
self.addEventListener('sync', function(event) {
    if (event.tag === 'sync-data') {
        event.waitUntil(
            // Отримання даних з локального сховища
            localforage.getItem('syncData').then(function(data) {
                return fetch(API_PATH, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                });
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log('Дані успішно синхронізовані:', data);
                // Видалення даних з локального сховища після успішної синхронізації
                localforage.removeItem('syncData');
            }).catch(function(err) {
                console.error('Помилка під час синхронізації:', err);
            })
        );
    }
});
