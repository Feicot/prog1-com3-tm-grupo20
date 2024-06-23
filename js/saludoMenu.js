window.onload = function() {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        const header = document.querySelector('header');
        if (header) {
            const saludoDiv = document.createElement('div');
            saludoDiv.className = 'saludo';
            saludoDiv.innerHTML = `Bienvenido: ${userEmail} <a href="#" id="logout">Logout</a>`;
            header.appendChild(saludoDiv);

            document.getElementById('logout').addEventListener('click', function() {
                localStorage.removeItem('userEmail');
                window.location.reload();
            });
        }

        const loginLink = document.querySelector('a[href="login.html"]');
        const registerLink = document.querySelector('a[href="register.html"]');
        
        if (loginLink) {
            loginLink.style.display = 'none';
        }
        
        if (registerLink) {
            registerLink.style.display = 'none';
        }
    }
};
