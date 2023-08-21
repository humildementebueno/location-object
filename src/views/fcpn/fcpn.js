// Función asincrónica para obtener los datos del perfil
const getProfileData = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      try {
        const response = await fetch('http://192.168.1.201:5000/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log('Datos del perfil:', data);
        } else {
          console.log('Error al obtener los datos del perfil');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('No se encontró el token en el localStorage');
    }
  };



// Esperar a que se cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
     getProfileData();

    // Agregar un evento de clic al perfil
    const profileImage = document.getElementById('profile-image');
    const configMenu = document.getElementById('config-menu');

    // Cuando se hace clic en el perfil, mostrar/ocultar el menú
    profileImage.addEventListener('click', function() {
        configMenu.classList.toggle('hidden');
    });

    // Cuando se hace clic fuera del menú, ocultarlo
    window.addEventListener('click', function(event) {
        if (!configMenu.contains(event.target) && !profileImage.contains(event.target)) {
            configMenu.classList.add('hidden');
        }
    });
    
});