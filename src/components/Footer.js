/**
 * Footer Component
 */

export const renderFooter = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const footerHTML = `
        <footer class="footer">
            <div class="l-container">
                <div class="footer__grid">
                    <div class="footer__brand">
                        <h2 class="footer__brand-title">INDPEX GLOBAL</h2>
                        <p class="footer__brand-text">
                            A global leader in industrial import, export, and strategic sourcing. Connecting global excellence with local industries since 2011.
                        </p>
                    </div>

                    <div class="footer__section">
                        <h4 class="footer__title">Solutions</h4>
                        <ul class="footer__list">
                            <li><a href="products.html" class="footer__link">Industrial Machinery</a></li>
                            <li><a href="products.html" class="footer__link">Metal Products</a></li>
                            <li><a href="products.html" class="footer__link">Tools & Equipment</a></li>
                            <li><a href="products.html" class="footer__link">Raw Materials</a></li>
                        </ul>
                    </div>

                    <div class="footer__section">
                        <h4 class="footer__title">Company</h4>
                        <ul class="footer__list">
                            <li><a href="about.html" class="footer__link">About Us</a></li>
                            <li><a href="industries.html" class="footer__link">Industries Served</a></li>
                            <li><a href="contact.html" class="footer__link">Global Network</a></li>
                            <li><a href="about.html#certifications" class="footer__link">Certifications</a></li>
                        </ul>
                    </div>

                    <div class="footer__section">
                        <h4 class="footer__title">Contact</h4>
                        <ul class="footer__list">
                            <li class="footer__link">123 Industrial Hub, Tech City</li>
                            <li class="footer__link">contact@indpex-global.com</li>
                            <li class="footer__link">+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                <div class="footer__bottom">
                    <p>&copy; 2026 Indpex Global. All rights reserved.</p>
                    <div class="footer__legal">
                        <a href="#" class="footer__link" style="display:inline; margin-left: var(--spacing-4);">Privacy Policy</a>
                        <a href="#" class="footer__link" style="display:inline; margin-left: var(--spacing-4);">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    `;

    container.innerHTML = footerHTML;
};
