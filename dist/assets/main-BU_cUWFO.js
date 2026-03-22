import{t as e}from"./supabase-BMU8zLYl.js";var t=e=>{let t=document.getElementById(e);if(!t)return;t.innerHTML=`
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
    `;let n=document.createElement(`style`);n.textContent=`
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
    `,document.head.appendChild(n)},n=e=>{let t=document.getElementById(e);t&&(t.innerHTML=`
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
    `)},r=()=>{let e=document.createElement(`a`);e.href=`https://wa.me/917877744377`,e.target=`_blank`,e.rel=`noopener noreferrer`,e.className=`whatsapp-widget`,e.setAttribute(`aria-label`,`Chat on WhatsApp`),e.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.002 21.567c-1.606 0-3.14-.383-4.524-1.111l-5.004 1.312 1.33-4.881c-.812-1.423-1.247-3.04-1.248-4.712.002-5.184 4.221-9.403 9.406-9.403 5.184 0 9.403 4.218 9.405 9.403.002 5.188-4.219 9.392-9.365 9.392z"/>
        </svg>
    `,document.body.appendChild(e);let t=document.createElement(`style`);t.textContent=`
        .whatsapp-widget {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background-color: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 9999;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
        }
        .whatsapp-widget:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.2);
            color: white;
        }
        @media (max-width: 768px) {
            .whatsapp-widget {
                bottom: 16px;
                right: 16px;
                width: 50px;
                height: 50px;
            }
            .whatsapp-widget svg {
                width: 28px;
                height: 28px;
            }
        }
    `,document.head.appendChild(t)},i=()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`revealed`),e.unobserve(t.target))})},{threshold:.1,rootMargin:`0px 0px -50px 0px`});document.querySelectorAll(`[data-reveal]`).forEach(t=>e.observe(t))},a=()=>{window.addEventListener(`scroll`,()=>{let e=window.scrollY;document.querySelectorAll(`[data-parallax]`).forEach(t=>{let n=-(e*(t.dataset.parallaxSpeed||.5));t.style.transform=`translateY(${n}px)`})})};async function o(t=`All`){let n=e.from(`products`).select(`*`).order(`created_at`,{ascending:!1});t!==`All`&&(n=n.eq(`category`,t));let{data:r,error:i}=await n;return i?(console.error(`Error fetching products:`,i),[]):r}function s(e,t){if(!e)return;if(t.length===0){e.innerHTML=`<div class="loading-state">No products found for this query.</div>`;return}e.innerHTML=``,t.forEach(t=>{let n=document.createElement(`div`);n.className=`product-card-corp card-corp`,n.setAttribute(`data-reveal`,`fade-in`),n.innerHTML=`
            <div class="product-card-corp__img-wrap">
                <img src="${t.image_url||`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800`}" alt="${t.title}">
            </div>
            <div class="product-card-corp__body">
                <span class="product-card-corp__cat">${t.category}</span>
                <h3 class="product-card-corp__title">${t.title}</h3>
                <div class="product-card-corp__footer">
                    <span class="product-card-corp__price">${t.price?`$`+t.price:`P.O.A`}</span>
                    <a href="contact.html?product=${encodeURIComponent(t.title)}" class="btn btn--primary btn--xs">Inquire Now</a>
                </div>
            </div>
        `;let r=`product-card-corp-styles`;if(!document.getElementById(r)){let e=document.createElement(`style`);e.id=r,e.textContent=`
                .product-card-corp { padding: 0 !important; display: flex; flex-direction: column; }
                .product-card-corp__img-wrap { width: 100%; height: 220px; overflow: hidden; background: #eee; }
                .product-card-corp__img-wrap img { width: 100%; height: 100%; object-fit: cover; }
                .product-card-corp__body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
                .product-card-corp__cat { display: block; font-size: 0.625rem; font-weight: 700; text-transform: uppercase; color: var(--color-accent); letter-spacing: 0.1em; margin-bottom: 0.5rem; }
                .product-card-corp__title { font-size: 1.125rem; font-family: var(--font-heading); margin-bottom: 1.5rem; flex: 1; }
                .product-card-corp__footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 1rem; }
                .product-card-corp__price { font-weight: 800; color: var(--color-primary-dark); font-size: 1rem; }
                .btn--xs { padding: 0.375rem 0.875rem; font-size: 0.6875rem; }
            `,document.head.appendChild(e)}e.appendChild(n)});let n=e.querySelectorAll(`[data-reveal]`),r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`revealed`),r.unobserve(e.target))})},{threshold:.1});n.forEach(e=>r.observe(e))}document.addEventListener(`DOMContentLoaded`,()=>{document.body.classList.add(`js-active`),t(`navbar-root`),n(`footer-root`),r(),setTimeout(()=>{i(),a()},100);let e=document.querySelector(`.l-grid--4`);e&&(window.location.pathname.includes(`products.html`)||document.querySelector(`.products-section`))&&c(e);let o=document.querySelector(`.contact-form`);o&&l(o),console.log(`Indpex Global: Corporate Architecture Initialized.`)});async function c(e){s(e,await o());let t=document.querySelectorAll(`.filter-btn`);t.forEach(n=>{n.addEventListener(`click`,async()=>{t.forEach(e=>e.classList.remove(`filter-btn--active`)),n.classList.add(`filter-btn--active`);let r=n.textContent.trim();s(e,await o(r===`All Products`?`All`:r))})})}var l=e=>{e.addEventListener(`submit`,t=>{t.preventDefault();let n=e.querySelector(`button[type="submit"]`),r=n.textContent;n.textContent=`Sending...`,n.disabled=!0,setTimeout(()=>{n.textContent=`Thank you! Inquiry Sent.`,n.style.backgroundColor=`#10b981`,e.reset(),setTimeout(()=>{n.textContent=r,n.style.backgroundColor=``,n.disabled=!1},3e3)},1500)})};