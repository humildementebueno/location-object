 // Esperar a que se cargue el DOM
 document.addEventListener("DOMContentLoaded", function() {
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