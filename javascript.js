const slides = document.getElementById('slide-container');
const dots = document.querySelectorAll('.dot');
let index = 0;
const totalSlides = dots.length;

function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

setInterval(nextSlide, 1000);

