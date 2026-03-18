export const renderFooter = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const footerHTML = `
        <footer class="footer-corp">
            <div class="l-container">
                <div class="footer-corp__grid">
                    <div class="footer-corp__brand">
                        <h2 class="footer-corp__logo">INDPEX GLOBAL</h2>
                        <p class="footer-corp__desc">Reliable Industrial Supply Chain Management.</p>
                        <p class="footer-corp__copy">&copy; 2026 Indpex Global. All Rights Reserved.</p>
                    </div>
                    <div class="footer-corp__nav">
                        <div class="footer-corp__col">
                            <h4>Platform</h4>
                            <a href="products.html">Product Catalog</a>
                            <a href="industries.html">Industrial Sectors</a>
                            <a href="about.html">Corporate Profile</a>
                        </div>
                        <div class="footer-corp__col">
                            <h4>Resources</h4>
                            <a href="contact.html">Request Quote</a>
                            <a href="#">Strategic Sourcing</a>
                            <a href="#">Compliance</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <style>
            .footer-corp {
                background: var(--color-bg-light);
                border-top: 1px solid var(--color-border);
                padding: 5rem 0;
                color: var(--color-text-main);
            }
            .footer-corp__grid { display: flex; justify-content: space-between; gap: 4rem; flex-wrap: wrap; }
            .footer-corp__logo { color: var(--color-primary); font-size: 1.25rem; font-weight: 800; margin-bottom: 1rem; }
            .footer-corp__desc { font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 2rem; }
            .footer-corp__copy { font-size: 0.75rem; opacity: 0.7; }
            
            .footer-corp__nav { display: flex; gap: 4rem; }
            .footer-corp__col h4 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.5rem; color: var(--color-primary-dark); }
            .footer-corp__col a { display: block; font-size: 0.875rem; color: var(--color-text-muted); text-decoration: none; margin-bottom: 0.75rem; transition: color 0.2s; }
            .footer-corp__col a:hover { color: var(--color-primary); }

            @media (max-width: 768px) {
                .footer-corp__nav { gap: 2rem; flex-direction: column; }
            }
        </style>
    `;

    container.innerHTML = footerHTML;
};
