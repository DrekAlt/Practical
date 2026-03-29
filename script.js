// script.js

// Smooth Scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Form Validation and Submission Handling
const validateForm = (form) => {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (validateForm(form)) {
        // Submit the form or handle it via AJAX
        console.log('Form submitted!');
    }
};

// Mobile Menu Toggle
const toggleMenu = () => {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
};

// Active Navigation Link Highlighting
const highlightActiveLink = () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active');
        if (window.location.hash === link.hash) {
            link.classList.add('active');
        }
    });
};

// Smooth Fade-in Animations on Page Load
const fadeInOnLoad = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s';
        setTimeout(() => {
            element.style.opacity = 1;
        }, 100);
    });
};

// Event Listeners
document.addEventListener('DOMContentLoaded', fadeInOnLoad);
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}

const mobileMenuBtn = document.querySelector('.mobile-menu-button');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

// Highlight Active Link
window.addEventListener('hashchange', highlightActiveLink);
highlightActiveLink();