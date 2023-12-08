'use strict';
document.getElementById('subscribe').addEventListener('click', function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.pushManager.subscribe({
                userVisibleOnly: true,
                // Використовуйте власний веб-ключ для push-повідомлень
                applicationServerKey: 'YOUR_WEB_PUSH_KEY'
            }).then(function(subscription) {
                console.log('User is subscribed:', subscription);
            }).catch(function(err) {
                console.log('Failed to subscribe the user: ', err);
            });
        });
    }
});
