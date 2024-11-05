// Manejo del formulario (opcional)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Aquí puedes agregar validaciones adicionales si es necesario
    const dateInput = document.getElementById("date");
    const currentDate = new Date();
    const selectedDate = new Date(dateInput.value);

    // Verificar que la fecha seleccionada sea al menos para mañana
    if (selectedDate <= currentDate) {
        event.preventDefault();
        alert("Por favor, selecciona una fecha válida para la reserva.");
    }
});

// Alternar modo oscuro y claro
const darkModeToggle = document.getElementById("dark-mode-toggle");
const themeStylesheet = document.getElementById("theme-stylesheet");

darkModeToggle.addEventListener("click", () => {
    const isDarkMode = themeStylesheet.getAttribute("href").includes("dark");
    if (isDarkMode) {
        themeStylesheet.setAttribute("href", "/css/contact-light.css");
        darkModeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeStylesheet.setAttribute("href", "/css/contact-dark.css");
        darkModeToggle.textContent = "🌞";
        localStorage.setItem("theme", "dark");
    }
});

// Cargar el tema guardado en localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    themeStylesheet.setAttribute("href", `/css/contact-${savedTheme}.css`);
    darkModeToggle.textContent = savedTheme === "dark" ? "🌞" : "🌙";
}