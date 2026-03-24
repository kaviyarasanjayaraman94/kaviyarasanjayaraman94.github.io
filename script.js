// Menu Toggle for Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Optional: Animate hamburger to X
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Optional: only animate once
        }
    });
}, {
    root: null,
    threshold: 0.15, // trigger when 15% is visible
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => scrollObserver.observe(el));

// Sticky Header Styling on Scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        header.style.background = 'rgba(13, 15, 23, 0.9)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(13, 15, 23, 0.7)';
    }
});
