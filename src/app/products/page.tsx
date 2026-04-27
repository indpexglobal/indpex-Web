"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import productData from "@/data/products.json";

const BRANDS = ["All Brands", "SKF", "FAG / Schaeffler", "NBC", "Timken", "NTN"];

function ProductsContent() {
    const searchParams = useSearchParams();
    const brandParam = searchParams.get("brand");
    
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("All Brands");

    // Sync brand state with query param
    useEffect(() => {
        if (brandParam) {
            // Map "FAG" to "FAG / Schaeffler" if needed
            const foundBrand = BRANDS.find(b => b.includes(brandParam));
            if (foundBrand) {
                setBrand(foundBrand);
            }
        } else {
            setBrand("All Brands");
        }
    }, [brandParam]);

    const filtered = useMemo(() => {
        return productData.filter(p => {
            const matchesBrand = brand === "All Brands" || p.brand === brand;
            const q = search.toLowerCase();
            const matchesSearch = !q ||
                p.name.toLowerCase().includes(q) ||
                p.specs.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q);
            return matchesBrand && matchesSearch;
        });
    }, [search, brand]);

    return (
        <div className="products-page">
            {/* Hero Banner */}
            <section className="banner-corp" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8rem 0 4rem', textAlign: 'center' }}>
                <div className="l-container">
                    <div className="banner-corp__content" data-reveal="fade-in">
                        <h1 className="banner-corp__title" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>
                            Bearing Product Catalog
                        </h1>
                        <p className="banner-corp__lead" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
                            Authorised distributor for SKF, FAG/Schaeffler, NBC, Timken & NTN. Direct supply chain for industrial precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search & Filter Bar */}
            <section style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)', padding: '1.5rem 0', position: 'sticky', top: '70px', zIndex: 100 }}>
                <div className="l-container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                        {/* Search Input */}
                        <div style={{ position: 'relative', maxWidth: '600px' }}>
                            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', fontSize: '1rem' }}>🔍</span>
                            <input
                                type="text"
                                placeholder="Search by name, specs, or type (e.g. 'tapered roller', '6204', 'SKF')"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem 1rem 0.8rem 2.75rem',
                                    border: '2px solid var(--color-border)',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.9rem',
                                    background: '#fff',
                                    outline: 'none',
                                    color: 'var(--color-text-main)',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                            />
                        </div>

                        {/* Brand Filter Buttons */}
                        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginRight: '0.25rem' }}>Brand:</span>
                            {BRANDS.map(b => (
                                <button
                                    key={b}
                                    onClick={() => setBrand(b)}
                                    style={{
                                        padding: '0.45rem 1.1rem',
                                        borderRadius: '999px',
                                        border: brand === b ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                                        background: brand === b ? 'var(--color-primary)' : '#fff',
                                        color: brand === b ? '#fff' : 'var(--color-text-main)',
                                        fontWeight: 700,
                                        fontSize: '0.78rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.18s',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {b}
                                </button>
                            ))}
                            {/* Result count */}
                            <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                                {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="l-section">
                <div className="l-container">
                    {filtered.length > 0 ? (
                        <div style={{ marginTop: '2rem' }}>
                            <ProductGrid products={filtered} />
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '6rem 2rem', color: 'var(--color-text-muted)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔎</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No products found</h3>
                            <p>Try a different search term or select "All Brands"</p>
                            <button onClick={() => { setSearch(""); setBrand("All Brands"); }} style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600 }}>
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default function Products() {
    return (
        <Suspense fallback={<div className="l-container py-20 text-center">Loading catalog...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
