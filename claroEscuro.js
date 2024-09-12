const noitebutton = document.getElementById('noite');
const diabutton = document.getElementById('dia');
// Evento para o botão "noite"
noitebutton.addEventListener('click', () => {
    console.log("Noite");
    document.body.style.backgroundColor = "#2c2c2c"; // Altera o fundo para um tom escuro
    document.body.style.color = "#ffffff"; // Altera a cor do texto para branco
});
// Evento para o botão "dia"
diabutton.addEventListener('click', () => {
    console.log("Dia");
    document.body.style.backgroundColor = "#ffffff"; // Altera o fundo para branco
    document.body.style.color = "#000000"; // Altera a cor do texto para preto
});