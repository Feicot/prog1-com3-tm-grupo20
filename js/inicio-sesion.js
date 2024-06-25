window.onload = function() {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email.trim() === '') {
                alert('Por favor complete el campo email');
                return;
            }

            if (password.trim() === '') {
                alert('Por favor complete el campo contraseña');
                return;
            }

            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }

            localStorage.setItem('userEmail', email);

            window.location.href = 'index.html';
        });
    } else {
        console.error("Formulario no encontrado.");
    }
};
