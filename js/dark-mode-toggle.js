document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Establecer el modo oscuro por defecto al cargar la página
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.setAttribute("aria-pressed", "true");
        darkModeToggle.textContent = '🌞';
    } else {
        body.classList.add("light-mode");
        darkModeToggle.setAttribute("aria-pressed", "false");
        darkModeToggle.textContent = '🌙';
    }

    // Toggle de Modo Oscuro y Claro
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode', !isDarkMode);
        darkModeToggle.textContent = isDarkMode ? '🌞' : '🌙';
        darkModeToggle.setAttribute("aria-pressed", isDarkMode ? "true" : "false");

        // Guardar el estado en localStorage
        localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");

        // Ajustar el color del texto y el título en modo claro
        if (!isDarkMode) {
            document.querySelector('.intro-title').style.color = '#000'; // Color del título en modo claro
            document.querySelector('.intro-text').style.color = '#333'; // Color del texto en modo claro
        } else {
            document.querySelector('.intro-title').style.color = ''; // Restablecer color del título
            document.querySelector('.intro-text').style.color = ''; // Restablecer color del texto
        }
    });
});