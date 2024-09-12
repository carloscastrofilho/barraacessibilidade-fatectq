const widget = new window.VLibras.Widget('https://vlibras.gov.br/app');

const toggleButton = document.getElementById('toggleVlibras');

let vlibrasActive = false;

toggleButton.addEventListener('click', () => {
    const vlibrasElement = document.querySelector('[vw]');
    if (vlibrasActive) {
        vlibrasElement.style.display = 'none';
        toggleButton.textContent = 'Ativar VLibras';
    } else {
        vlibrasElement.style.display = 'block';
        toggleButton.textContent = 'Desativar VLibras';
    }
    vlibrasActive = !vlibrasActive;
});