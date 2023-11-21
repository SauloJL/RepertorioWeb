function toggleMenu() {
    var menuLinks = document.querySelector('.menu');
    menuLinks.classList.toggle('active');
}
function openGoogle() {
    window.location.href = "https://www.google.com.br";
}

let currentIndex = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.carousel_slide');
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel_slide');
    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.carousel').style.transform = 'translateX(' + translateValue + ')';
}

// Avança para o próximo slide a cada 7 segundos
function startCarousel() {
    setInterval(nextSlide, 7000);
}

// Inicia o carrossel
startCarousel();

