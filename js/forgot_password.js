window.onload = function() {
    const form = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('email');
    const checkbox = document.getElementById('checkbox');
    const emailError = document.getElementById('emailError');
    const checkboxError = document.getElementById('checkboxError');
    const message = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

                    emailError.innerText = '';
            checkboxError.innerText = '';
            message.innerText = '';
            if (emailInput.value.trim() === '') {
                emailError.innerText = 'Por favor escriba su email.';
                return;             }
            if (!checkbox.checked) {
                checkboxError.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña.';
                return;
            }
            message.innerText = 'Recibirás un email con las instrucciones para recuperar tu contraseña.';
            message.innerHTML += '<br><a href="login.html">Ir al login</a>';
        });
    } else {
        console.error("Formulario no encontrado.");
    }
}

