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
                
                <!-- Hamburger Trigger -->
                <button class="nav__toggle" id="nav-toggle" aria-label="Toggle Menu">
                    <span class="nav__toggle-bar"></span>
                    <span class="nav__toggle-bar"></span>
                    <span class="nav__toggle-bar"></span>
                </button>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li><a href="index.html" class="nav__link">Home</a></li>
                        <li><a href="products.html" class="nav__link">Products</a></li>
                        <li><a href="industries.html" class="nav__link">Industries</a></li>
                        <li><a href="about.html" class="nav__link">About</a></li>
                        <li><a href="contact.html" class="nav__link">Contact</a></li>
                    </ul>
                    <a href="contact.html#quote" class="btn btn--primary nav__cta">Request Quote</a>
                </div>
            </div>
        </nav>
    `;

    container.innerHTML = navHTML;

    const nav = document.getElementById('main-nav');
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    // Toggle Mobile Menu
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('nav__menu--open');
            toggle.classList.toggle('nav__toggle--active');
        });
    }

    // Handle scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    });

    // Set active link and close menu on click
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = container.querySelectorAll('.nav__link');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('nav__link--active');
        }
        
        link.addEventListener('click', () => {
            menu.classList.remove('nav__menu--open');
            toggle.classList.remove('nav__toggle--active');
        });
    });
};
