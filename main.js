import './src/styles/main.css';
import { renderNavbar } from './src/components/Navbar';
import { renderFooter } from './src/components/Footer';
import { initScrollAnimations, initParallax } from './src/utils/animations';

/**
 * Main Application Entry Point
 */
document.addEventListener('DOMContentLoaded', () => {
    // 0. Mark JS as active
    document.body.classList.add('js-active');

    // 1. Render Global Components
    renderNavbar('navbar-root');
    renderFooter('footer-root');

    // 2. Initialize Animation Engine
    setTimeout(() => {
        initScrollAnimations();
        initParallax();
    }, 100);

    // 3. Handle Product Listing
    const productGrid = document.querySelector('.l-grid--4');
    if (productGrid && (window.location.pathname.includes('products.html') || document.querySelector('.products-section'))) {
        initProductListing(productGrid);
    }

    // 4. Handle Form Submissions (if any on the current page)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        initContactForm(contactForm);
    }

    console.log('Indpex Global: Corporate Architecture Initialized.');
});

/**
 * Product Listing Logic
 */
import { getProducts, renderProducts } from './src/utils/products';

async function initProductListing(container) {
    // Initial fetch
    let products = await getProducts();
    renderProducts(container, products);

    // Handle Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            // UI Update
            filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
            btn.classList.add('filter-btn--active');
            
            // Data Update
            const category = btn.textContent.trim();
            const filteredProducts = await getProducts(category === 'All Products' ? 'All' : category);
            renderProducts(container, filteredProducts);
        });
    });
}

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
