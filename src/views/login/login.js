const iniciarSesion = async () => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
        console.log(username," ",password);
    try {
      const response = await fetch('http://192.168.1.201:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      console.log("response ",response);
      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          // Almacenar el token en localStorage
          localStorage.setItem('token', data.token);
          // Redirigir a otra página o realizar otras acciones
        } else {
          console.log('Credenciales inválidas');
        }
      } else {
        console.log('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  