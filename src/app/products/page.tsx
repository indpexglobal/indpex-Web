"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import productData from "@/data/products.json";

const BRANDS = ["All Brands", "SKF", "FAG / Schaeffler", "NBC", "Timken", "NTN"];
const CATEGORIES = ["All Solutions", "Bearings", "Lubricants", "Tools", "Digital", "Housings", "Linear"];

function ProductsContent() {
    const searchParams = useSearchParams();
    const brandParam = searchParams.get("brand");
    
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("All Brands");
    const [category, setCategory] = useState("All Solutions");

    // Sync brand state with query param
    useEffect(() => {
        if (brandParam) {
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
            
            // Check category (default to Bearings if missing)
            const itemCategory = (p as any).category || "Bearings";
            const matchesCategory = category === "All Solutions" || itemCategory === category;

            const q = search.toLowerCase();
            const matchesSearch = !q ||
                p.name.toLowerCase().includes(q) ||
                p.specs.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q);
            
            return matchesBrand && matchesCategory && matchesSearch;
        });
    }, [search, brand, category]);

    return (
        <div className="products-page">
            {/* Hero Banner */}
            <section className="banner-corp" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8rem 0 4rem', textAlign: 'center' }}>
                <div className="l-container">
                    <div className="banner-corp__content" data-reveal="fade-in">
                        <h1 className="banner-corp__title" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>
                            Industrial Solutions Catalog
                        </h1>
                        <p className="banner-corp__lead" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
                            Bearings, Lubricants, Maintenance Tools & Digital Condition Monitoring. Direct supply chain for industrial precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search & Filter Bar */}
            <section style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)', padding: '2rem 0', position: 'sticky', top: '70px', zIndex: 100 }}>
                <div className="l-container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Search Input */}
                        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>🔍</span>
                            <input
                                type="text"
                                placeholder="Search solutions (e.g. 'Arcanol', 'Heater', 'Tapered', 'Smartcheck')"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3.25rem',
                                    border: '2px solid var(--color-border)',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '1rem',
                                    background: '#fff',
                                    outline: 'none',
                                    color: 'var(--color-text-main)',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                    transition: 'all 0.2s'
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                            />
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                            {/* Brand Filter */}
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>Brand:</span>
                                {BRANDS.map(b => (
                                    <button
                                        key={b}
                                        onClick={() => setBrand(b)}
                                        style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: '999px',
                                            border: brand === b ? '2px solid var(--color-primary)' : '2px solid transparent',
                                            background: brand === b ? 'var(--color-primary)' : 'rgba(0,0,0,0.05)',
                                            color: brand === b ? '#fff' : 'var(--color-text-main)',
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {b}
                                    </button>
                                ))}
                            </div>

                            {/* Category Filter */}
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>Type:</span>
                                {CATEGORIES.map(c => (
                                    <button
                                        key={c}
                                        onClick={() => setCategory(c)}
                                        style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: '999px',
                                            border: category === c ? '2px solid var(--color-accent)' : '2px solid transparent',
                                            background: category === c ? 'var(--color-accent)' : 'rgba(0,0,0,0.05)',
                                            color: category === c ? '#fff' : 'var(--color-text-main)',
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Result count */}
                        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                            Showing {filtered.length} industrial solutions
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="l-section">
                <div className="l-container">
                    {filtered.length > 0 ? (
                        <div style={{ marginTop: '1rem' }}>
                            <ProductGrid products={filtered} />
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '6rem 2rem', color: 'var(--color-text-muted)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔎</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No solutions found</h3>
                            <p>Try a different search term or select "All Solutions"</p>
                            <button onClick={() => { setSearch(""); setBrand("All Brands"); setCategory("All Solutions"); }} style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600 }}>
                                Reset All Filters
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
