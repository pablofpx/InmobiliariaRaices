const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 0;
let interval;

// Actualiza la posición del carrusel
function updateCarousel() {
    const translateX = -index * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;
}

// Comienza el deslizamiento automático
function startAutoSlide() {
    interval = setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarousel();
    }, 3000); // Cambia cada 3 segundos
}

// Detiene el deslizamiento automático
function stopAutoSlide() {
    clearInterval(interval);
}

// Eventos para los botones
nextButton.addEventListener('click', () => {
    stopAutoSlide();
    index = (index + 1) % totalImages;
    updateCarousel();
    startAutoSlide();
});

prevButton.addEventListener('click', () => {
    stopAutoSlide();
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
    startAutoSlide();
});

// Pausa el auto slide al pasar el ratón
carouselImages.addEventListener('mouseenter', stopAutoSlide);
carouselImages.addEventListener('mouseleave', startAutoSlide);

// Inicia el auto slide al cargar la página
startAutoSlide();
