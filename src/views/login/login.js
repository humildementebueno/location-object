const iniciarSesion = async () => {
    event.preventDefault();
    console.log("iniciar sesion");
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
        console.log(email," ",password);
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
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
          window.location.href = '../fcpn/fcpn.html';
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
  
 const reseña = () =>{
  event.preventDefault();
    console.log("reseña");
 }

 document.addEventListener('DOMContentLoaded', function() {
  iniciarSesion();
});

// function iniciarSesion1() {
//   event.preventDefault();
//   const button = document.getElementById('blueButton');
//   button.style.backgroundColor = 'blue'; // Cambiar el color de fondo del botón
// }


