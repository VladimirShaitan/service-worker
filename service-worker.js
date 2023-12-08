self.addEventListener('push', function(event) {
    const options = {
        body: 'Це push-повідомлення!',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
