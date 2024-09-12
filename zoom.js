const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');
let currentZoom = 100; // Valor inicial de zoom (100%)
// Evento para aumentar o zoom
zoomInButton.addEventListener('click', () => {
    currentZoom += 10; // Aumenta o zoom em 10%
    document.body.style.fontSize = `${currentZoom}%`;
});
// Evento para diminuir o zoom
zoomOutButton.addEventListener('click', () => {
    if (currentZoom > 50) { // Define um limite mínimo para o zoom (50%)
        currentZoom -= 10; // Diminui o zoom em 10%
        document.body.style.fontSize = `${currentZoom}%`;
    }
});
