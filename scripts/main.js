document.addEventListener('DOMContentLoaded', function() {
    fetch('/data')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            document.getElementById('content').innerText = data;
        })
        .catch(function(err) {
            console.error('Помилка:', err);
        });
});
