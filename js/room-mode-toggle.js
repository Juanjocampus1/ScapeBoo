// Ensure this script is loaded after the DOM is fully loaded

document.addEventListener('DOMContentLoaded', function() {

    const toggleButton = document.getElementById('dark-mode-toggle');

    const darkModeStylesheet = document.querySelector('link[href="../css/room-dark.css"]');

    const lightModeStylesheet = document.querySelector('link[href="../css/room-light.css"]');



    // Initialize the mode based on the button's aria-pressed attribute

    const isDarkMode = toggleButton.getAttribute('aria-pressed') === 'true';

    darkModeStylesheet.disabled = !isDarkMode;

    lightModeStylesheet.disabled = isDarkMode;



    toggleButton.addEventListener('click', function() {

        const isDarkMode = toggleButton.getAttribute('aria-pressed') === 'true';



        if (isDarkMode) {

            darkModeStylesheet.disabled = true;

            lightModeStylesheet.disabled = false;

            toggleButton.setAttribute('aria-pressed', 'false');

            toggleButton.textContent = '🌙';

        } else {

            darkModeStylesheet.disabled = false;

            lightModeStylesheet.disabled = true;

            toggleButton.setAttribute('aria-pressed', 'true');

            toggleButton.textContent = '🌞';

        }

    });

});