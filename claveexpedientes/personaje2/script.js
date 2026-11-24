const form = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Ejemplo de validación básica
    if (passwordInput.value === '123456') {
        errorMsg.style.color = 'green';
        errorMsg.textContent = '¡Acceso correcto!';
    } else {
        errorMsg.style.color = 'red';
        errorMsg.textContent = 'Correo o contraseña incorrectos.';
    }
});