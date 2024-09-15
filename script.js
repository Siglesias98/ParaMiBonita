document.addEventListener("DOMContentLoaded", function() {
    // Función para deslizar hacia abajo
    function deslizarPagina() {
        document.getElementById("animacion-flor").style.display = 'flex'; // Mostrar la animación
        document.getElementById("animacion-flor").scrollIntoView({ behavior: "smooth" });
    }

    // Vinculación del botón a la función de deslizar
    document.querySelector(".boton").addEventListener("click", deslizarPagina);
});
