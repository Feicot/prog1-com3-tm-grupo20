window.onload = function() {
    const form = document.getElementById('registerForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;
            document.getElementById('emailError').innerText = '';
            document.getElementById('passwordError').innerText = '';
            document.getElementById('confirmPasswordError').innerText = '';
            let formIsValid = true;
            if (username.trim() === '') {
                document.getElementById('usernameError').innerText = 'Por favor complete el campo';
                formIsValid = false;
            }
            if (email.trim() === '') {
                document.getElementById('emailError').innerText = 'Por favor complete el campo';
                formIsValid = false;
            }
            if (password.trim() === '') {
                document.getElementById('passwordError').innerText = 'Por favor complete el campo';
                formIsValid = false;
            } else if (password.length < 6) {
                document.getElementById('passwordError').innerText = 'Debe ingresar al menos 6 caracteres';
                formIsValid = false;
            }
            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').innerText = 'Las contraseñas no coinciden';
                formIsValid = false;
            }
            if (formIsValid) {
                window.location.href = 'inicio-sesion.html'; // Redirigir al formulario de inicio de sesión
            }
        });
    } else {
        console.error("Formulario no encontrado.");
    }
}