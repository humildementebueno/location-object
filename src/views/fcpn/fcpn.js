// Función para cerrar la token de un usuario
const logOut= ()=> {
  event.preventDefault();
  // Obtener el objeto de la token
  const token = localStorage.getItem("token");
  console.log("oyeeee!!!");
  console.log('este es el token: ',token);
  // Eliminar el objeto de la token
  localStorage.removeItem("token");

  // Redireccionar a la página de inicio
  window.location.href = "../../index.html";
}
// Función asincrónica para obtener los datos del perfil
const getProfileData = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      try {
        const response = await fetch('http://172.24.19.82:5000/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          const userData = data.data[0];
          console.log('Datos del perfil: ', userData);
          return userData;
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
//cargando los datos del user a la hamburguesa
const showUser = async () => {
  try {
      const user = await getProfileData(); // Espera a que se obtengan los datos del usuario
      const profile1 = document.getElementById('user-currently1');
      const profile2 = document.getElementById('user-currently2');
      
      // Usar textContent para asignar los valores a los elementos
      profile1.textContent = `Nombre de usuario: ${user.username}`;
      profile2.textContent = `Correo electrónico: ${user.correo}`;
  } catch (error) {
      console.error('Error:', error);
  }
};


// Esperar a que se cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
    //  getProfileData();
    showUser();
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