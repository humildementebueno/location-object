const registro = async () => {
      event.preventDefault();
    
      // Obtener los valores de los campos del formulario (nombre, email, contraseña, rol)
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const rol = document.getElementById('rol').value;
    
      // Crear un objeto con los datos del usuario
      const nuevoUsuario = {
        nombre: nombre,
        email: email,
        password: password,
        rol: rol,
      };
    
      try {
        // Realizar una solicitud POST a la API para registrar el nuevo usuario
        const response = await fetch('http://localhost:8080/api/usuarios/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevoUsuario),
        });
    
        if (response.ok) {
          // El registro fue exitoso, puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
          console.log('Registro exitoso');
          // Redirigir a otra página, por ejemplo:
          // window.location.href = 'pagina-de-bienvenida.html';
        } else {
          // El registro falló, puedes mostrar un mensaje de error
          console.error('Error en el registro');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };