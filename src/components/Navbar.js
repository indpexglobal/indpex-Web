export const renderNavbar = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const navHTML = `
        <header class="header-corp">
            <div class="top-bar">
                <div class="l-container top-bar__flex">
                    <span>Industrial Procurement Leaders Since 2011</span>
                    <a href="mailto:contact@indpexglobal.com">contact@indpexglobal.com</a>
                </div>
            </div>
            <nav class="nav-corp">
                <div class="l-container nav-corp__flex">
                    <a href="index.html" class="nav-corp__logo">
                        INDPEX <span class="logo-accent">GLOBAL</span>
                    </a>
                    
                    <ul class="nav-corp__list">
                        <li><a href="index.html" class="nav-corp__link">Home</a></li>
                        <li><a href="products.html" class="nav-corp__link">Products</a></li>
                        <li><a href="industries.html" class="nav-corp__link">Industries</a></li>
                        <li><a href="about.html" class="nav-corp__link">About</a></li>
                        <li><a href="contact.html" class="btn btn--primary btn--nav">Get A Quote</a></li>
                    </ul>

                    <button class="nav-corp__toggle" id="nav-toggle">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </nav>
        </header>
    `;

    container.innerHTML = navHTML;

    const style = document.createElement('style');
    style.textContent = `
        .header-corp {
            position: sticky;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .top-bar {
            background: var(--color-primary-dark);
            color: rgba(255,255,255,0.7);
            padding: 0.5rem 0;
            font-size: 0.75rem;
            font-family: var(--font-ui);
        }
        .top-bar__flex { display: flex; justify-content: space-between; }
        .top-bar a { color: #fff; text-decoration: none; }

        .nav-corp { padding: 1rem 0; }
        .nav-corp__flex { display: flex; justify-content: space-between; align-items: center; }
        .nav-corp__logo {
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 1.625rem;
            color: var(--color-primary);
            text-decoration: none;
            letter-spacing: -0.02em;
            text-transform: uppercase;
        }
        .logo-accent { color: var(--color-text-main); font-weight: 300; margin-left: 2px; }
        .nav-corp__list { display: flex; gap: 2rem; align-items: center; list-style: none; }
        .nav-corp__link {
            text-decoration: none;
            color: var(--color-text-main);
            font-weight: 600;
            font-size: 0.8125rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: color 0.2s;
        }
        .nav-corp__link:hover { color: var(--color-primary); }
        .btn--nav { padding: 0.5rem 1.25rem; font-size: 0.75rem; }
        .nav-corp__toggle { display: none; flex-direction: column; gap: 4px; border: none; background: none; }
        .nav-corp__toggle span { width: 20px; height: 2px; background: var(--color-primary); }

        @media (max-width: 1024px) {
            .nav-corp__list { display: none; }
            .nav-corp__toggle { display: flex; }
        }
    `;
    document.head.appendChild(style);
};
