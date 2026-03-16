/**
 * Navbar Component
 */

export const renderNavbar = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const navHTML = `
        <nav class="nav" id="main-nav">
            <div class="l-container nav__container">
                <a href="index.html" class="nav__logo">INDPEX GLOBAL</a>
                
                <ul class="nav__list">
                    <li><a href="index.html" class="nav__link">Home</a></li>
                    <li><a href="products.html" class="nav__link">Products</a></li>
                    <li><a href="industries.html" class="nav__link">Industries</a></li>
                    <li><a href="about.html" class="nav__link">About</a></li>
                    <li><a href="contact.html" class="nav__link">Contact</a></li>
                </ul>

                <a href="contact.html#quote" class="btn btn--primary">Request Quote</a>
            </div>
        </nav>
    `;

    container.innerHTML = navHTML;

    // Handle scroll effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    });

    // Set active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = container.querySelectorAll('.nav__link');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('nav__link--active');
        }
    });
};
