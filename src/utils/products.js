import { supabase } from './supabase';

/**
 * Fetch all products from Supabase
 */
export async function getProducts(category = 'All') {
    let query = supabase.from('products').select('*').order('created_at', { ascending: false });
    
    if (category !== 'All') {
        query = query.eq('category', category);
    }
    
    const { data, error } = await query;
    
    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }
    
    return data;
}

/**
 * Render products into a container (Corporate Style)
 */
export function renderProducts(container, products) {
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = '<div class="loading-state">No products found for this query.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    products.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'product-card-corp card-corp';
        card.setAttribute('data-reveal', 'fade-in');
        
        card.innerHTML = `
            <div class="product-card-corp__img-wrap">
                <img src="${p.image_url || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'}" alt="${p.title}">
            </div>
            <div class="product-card-corp__body">
                <span class="product-card-corp__cat">${p.category}</span>
                <h3 class="product-card-corp__title">${p.title}</h3>
                <div class="product-card-corp__footer">
                    <span class="product-card-corp__price">${p.price ? '$' + p.price : 'P.O.A'}</span>
                    <a href="contact.html?product=${encodeURIComponent(p.title)}" class="btn btn--primary btn--xs">Inquire Now</a>
                </div>
            </div>
        `;

        const styleId = 'product-card-corp-styles';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                .product-card-corp { padding: 0 !important; display: flex; flex-direction: column; }
                .product-card-corp__img-wrap { width: 100%; height: 220px; overflow: hidden; background: #eee; }
                .product-card-corp__img-wrap img { width: 100%; height: 100%; object-fit: cover; }
                .product-card-corp__body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
                .product-card-corp__cat { display: block; font-size: 0.625rem; font-weight: 700; text-transform: uppercase; color: var(--color-accent); letter-spacing: 0.1em; margin-bottom: 0.5rem; }
                .product-card-corp__title { font-size: 1.125rem; font-family: var(--font-heading); margin-bottom: 1.5rem; flex: 1; }
                .product-card-corp__footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 1rem; }
                .product-card-corp__price { font-weight: 800; color: var(--color-primary-dark); font-size: 1rem; }
                .btn--xs { padding: 0.375rem 0.875rem; font-size: 0.6875rem; }
            `;
            document.head.appendChild(style);
        }
        
        container.appendChild(card);
    });

    const revealElements = container.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
}
