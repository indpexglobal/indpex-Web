"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Product {
    id: string;
    title: string;
    category: string;
    image_url: string;
    description: string;
    price: number | null;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filter, setFilter] = useState("All Products");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        setLoading(true);
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching products:', error);
        } else {
            setProducts(data || []);
        }
        setLoading(false);
    }

    const filteredProducts = filter === "All Products" 
        ? products 
        : products.filter(p => p.category === filter);

    const categories = ["All Products", "Machinery", "Metal Products", "Mechanical Components"];

    return (
        <div className="products-page">
            <section className="banner-corp" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8rem 0 4rem', textAlign: 'center' }}>
                <div className="l-container">
                    <div className="banner-corp__content" data-reveal="fade-in">
                        <h1 className="banner-corp__title" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Industrial Catalog</h1>
                        <p className="banner-corp__lead" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>High-specification machinery, metals, and components for global scale enterprise operations.</p>
                    </div>
                </div>
            </section>

            <section className="l-section">
                <div className="l-container">
                    <div className="catalog-header" style={{ marginBottom: '3rem', borderBottom: '2px solid var(--color-bg-light)', paddingBottom: '1.5rem' }}>
                        <div className="filter-bar-corp" style={{ display: 'flex', gap: '1rem', overflowX: 'auto', padding: '0.5rem 0' }}>
                            {categories.map(cat => (
                                <button 
                                    key={cat}
                                    className={`filter-btn-corp ${filter === cat ? 'filter-btn--active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                    style={{
                                        background: filter === cat ? 'var(--color-primary)' : 'none',
                                        border: '1px solid var(--color-border)',
                                        padding: '0.625rem 1.5rem',
                                        borderRadius: 'var(--radius-sm)',
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        cursor: 'pointer',
                                        transition: '0.2s',
                                        whiteSpace: 'nowrap',
                                        color: filter === cat ? '#fff' : 'var(--color-text-main)'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--color-text-muted)' }}>Syncing secure catalog data...</div>
                    ) : (
                        <div className="l-grid l-grid--4" id="product-grid">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="product-card" data-reveal="fade-in">
                                    <div className="product-image">
                                        <img src={product.image_url || "/bearings-hero.png"} alt={product.title} />
                                    </div>
                                    <h3 className="product-name">{product.title}</h3>
                                    <span style={{ display: 'block', margin: '0 1.75rem 1rem', fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {product.category}
                                    </span>
                                    <a href={`/contact?product=${encodeURIComponent(product.title)}`} className="product-link">Inquire Now &rarr;</a>
                                </div>
                            ))}
                            {filteredProducts.length === 0 && (
                                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>
                                    No products found in this category.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
