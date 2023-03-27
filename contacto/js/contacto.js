
function sendEmail() {
    // Obtenemos los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // significa que debe tener un @ y un punto
    const telefonoRegex = /^\d{9}$/; // significa que debe tener 9 dígitos

    // Comprobamos que los campos no estén vacíos y que el email y el teléfono sean válidos
    if (nombre != '' || apellidos != '' || asunto != '' || mensaje != '' || email != '' || telefono != '') {
        if (emailRegex.test(email) && telefonoRegex.test(telefono)) {
            alert('¡Mensaje enviado con éxito!');
        } else if (emailRegex.test(email) && !telefonoRegex.test(telefono)) {
            alert('Por favor, introduce un teléfono válido.');
        } else if (!emailRegex.test(email) && telefonoRegex.test(telefono)) {
            alert('Por favor, introduce un correo electrónico válido.');
        } else {
            alert('Por favor, introduce un correo electrónico y un teléfono válidos.');
        }
    } else {
        alert('Por favor, rellena todos los campos.');
    }

}

// Añadimos el evento click al botón de enviar
const botonEnviar = document.querySelector('.button');
botonEnviar.addEventListener('click', sendEmail);
