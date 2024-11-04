document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.setAttribute("aria-pressed", "true");
    } else {
        darkModeToggle.setAttribute("aria-pressed", "false");
    }
});

function showRoomInfo(roomId) {
    const room = document.getElementById(roomId);
    const infoText = document.createElement("p");
    infoText.textContent = "Aquí encontrarás pistas ocultas y secretos terroríficos que desafiarán tu valentía...";
    infoText.classList.add("room-extra-info");
    room.appendChild(infoText);
    setTimeout(() => {
        room.removeChild(infoText);
    }, 5000);  // Se elimina el texto después de 5 segundos
}
