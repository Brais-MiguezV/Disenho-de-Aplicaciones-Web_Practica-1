$("form").submit(function(event) {
    event.preventDefault(); // Previene que el formulario se envíe por el método por defecto
  
    // Recoge los datos del formulario y conviértelos en un objeto
    var formData = {};
    $.each($(this).serializeArray(), function(i, field) {
      formData[field.name] = field.value;
    });
  
    // Envía el correo electrónico con los datos del formulario
    Email.send({
      Host: "smtp.gmail.com",
      Username: "tucorreo@gmail.com",
      Password: "tucontraseña",
      To: "destinatario@example.com",
      From: "tucorreo@gmail.com",
      Subject: formData.asunto,
      Body: "Nombre: " + formData.nombre + "<br>" +
            "Apellidos: " + formData.apellidos + "<br>" +
            "Correo electrónico: " + formData.correo + "<br>" +
            "Teléfono: " + formData.telefono + "<br>" +
            "Mensaje: " + formData.mensaje,
    }).then(function(message) {
      alert("El correo electrónico ha sido enviado");
    });
  });
  
