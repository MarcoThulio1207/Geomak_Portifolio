const imgs = document.querySelector(".container_carrossel");
const img = document.querySelectorAll(".container_carrossel img");

let idx = 0;
let imgWidth = img[0].clientWidth; // Calcula a largura da imagem dinamicamente
const totalImgs = img.length; // Total de imagens

// Duplica as imagens no container para criar um loop infinito visual
imgs.innerHTML += imgs.innerHTML;

function carrosel() {
    idx++;
    
    // Movimenta o container com a transição
    imgs.style.transform = `translateX(${-idx * imgWidth}px)`;
    imgs.style.transition = 'transform 0.5s ease-in-out';
    
    // Quando atingir o final da duplicata, reinicia para o início
    if (idx >= totalImgs) {
        setTimeout(() => {
            imgs.style.transition = 'none'; // Remove a transição para reset
            idx = 0; // Reseta o índice
            imgs.style.transform = `translateX(0px)`; // Volta para a primeira imagem
        }, 500);
    }
}

// Intervalo para rodar o carrossel
setInterval(carrosel, 1800);

// Recalcula a largura das imagens se a janela for redimensionada (inclui mobile)
window.addEventListener('resize', () => {
    imgWidth = img[0].clientWidth; // Atualiza a largura da imagem com a nova largura
});
