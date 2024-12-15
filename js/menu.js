const dropdownInput = document.getElementById("dropdown-input");
const dropdownMenu = document.getElementById("dropdown-menu");
const clearButton = document.getElementById("clear");

// Mostrar/ocultar el menú al hacer clic en el input
dropdownInput.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener("click", (e) => {
    if (!dropdownInput.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("active");
    }
});

// Limpiar todas las opciones seleccionadas
clearButton.addEventListener("click", () => {
    const checkboxes = dropdownMenu.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
});