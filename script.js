// Force scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Hero Slider — auto cycle
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// Scroll reveal for company rows
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.company-row').forEach(row => {
    observer.observe(row);
});

// Cookie Popup
const cookieOverlay = document.getElementById('cookieOverlay');
const cookieAccept = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');

if (localStorage.getItem('cookieConsent')) {
    cookieOverlay.style.display = 'none';
}

cookieAccept.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieOverlay.style.display = 'none';
});

cookieDecline.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieOverlay.style.display = 'none';
});
