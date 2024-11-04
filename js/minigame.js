// Configuración del juego
const codes = ["1842", "ghoul", "haunt"];  // Códigos de los niveles
let level = 0;
const hints = [
    "Pista 1: La luna llena esconde lo que el sol no revela.",
    "Pista 2: Las sombras hablan en susurros.",
    "Pista 3: Solo los valientes ven la salida."
];

function checkCode() {
    const userCode = document.getElementById("code-input").value.toLowerCase();
    const gameMessage = document.getElementById("game-message");

    if (userCode === codes[level]) {
        gameMessage.textContent = "¡Correcto! " + hints[level];
        gameMessage.style.color = "#4CAF50";
        level++;

        if (level < codes.length) {
            setTimeout(() => {
                document.getElementById("code-input").value = "";
                gameMessage.textContent = `Nivel ${level + 1}: Encuentra el siguiente código.`;
            }, 2000);
        } else {
            gameMessage.textContent = "¡Felicidades! Has completado el desafío y tienes todas las pistas.";
        }
    } else {
        gameMessage.textContent = "Código incorrecto. Inténtalo de nuevo.";
        gameMessage.style.color = "#FF4444";
    }
}
