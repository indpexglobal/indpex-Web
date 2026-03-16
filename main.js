import './src/styles/main.css';
import { renderNavbar } from './src/components/Navbar';
import { renderFooter } from './src/components/Footer';
import { initScrollAnimations, initParallax } from './src/utils/animations';

/**
 * Main Application Entry Point
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Global Components
    renderNavbar('navbar-root');
    renderFooter('footer-root');

    // 2. Initialize Animation Engine
    initScrollAnimations();
    initParallax();

    // 3. Handle Form Submissions (if any on the current page)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        initContactForm(contactForm);
    }

    console.log('Indpex Global: Corporate Architecture Initialized.');
});

/**
 * Contact Form Logic
 */
const initContactForm = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = 'Sending...';
        btn.disabled = true;

        // Mock submission
        setTimeout(() => {
            btn.textContent = 'Thank you! Inquiry Sent.';
            btn.style.backgroundColor = '#10b981'; // Success Green
            form.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
};
