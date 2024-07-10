document.querySelector('form').addEventListener('submit', function(event) {
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (address === '' || email === '' || password === '') {
        event.preventDefault();
        alert('Veuillez remplir tous les champs.');
    }
});
