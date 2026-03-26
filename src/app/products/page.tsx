"use client";

import { useState } from "react";

interface Product {
    id: string;
    title: string;
    category: string;
    image_url: string;
    description: string;
}

const categoryDetails: Record<string, { description: string; items?: string[]; dealers?: string[]; stockists?: string[] }> = {
    "All Products": {
        description: "Direct-from-manufacturer supply chain for high-precision industrial components."
    },
    "Bearings": {
        description: "High-load precision ball and roller bearings for global mechanical excellence.",
        items: [
            "Deep Grove Ball Bearings",
            "Miniature Bearings",
            "Cylindrical Roller Bearings",
            "Needle Roller Bearings",
            "Angular Roller Bearings",
            "Pillow Block/ Plummer Block Housings"
        ],
        dealers: ["SKF", "FAG", "TATA", "NRB", "VAIB", "CSG"],
        stockists: ["NBC", "ARB", "TIMKEN", "LINCOLN", "NMB"]
    },
    "Transmission & Motion": {
        description: "Durable power transmission and mechanical motion control systems.",
        items: [
            "V-Belt", 
            "Timing Belts",
            "Roller and Conveyer Chains",
            "Shaft Couplings"
        ]
    },
    "Sealing & Fluid Control": {
        description: "Industrial sealing solutions and fluid management infrastructure.",
        items: [
            "O-Rings",
            "Gaskets",
            "Mechanical Seals",
            "Hydraulic Fittings"
        ]
    },
    "Fasteners & Fixings": {
        description: "High-tensile precision fasteners for structural integrity.",
        items: [
            "Bolts, Nuts and Washers",
            "Threaded inserts and studs",
            "Spring Pins",
            "Circlips"
        ]
    },
    "Electrical & Wiring": {
        description: "Professional electrical connection and air fitting components.",
        items: [
            "Terminals and connectors", 
            "Circuit Breakers",
            "Air Fittings", 
            "Tubings"
        ]
    },
    "MRO Consumables": {
        description: "Essential maintenance, repair, and operation supplies.",
        items: [
            "Cutting Tools", 
            "Drills",
            "Lubricants and Grease"
        ]
    },
    "Automotives & Engine": {
        description: "Precision-engineered components for advanced engine systems.",
        items: [
            "Pump impellers",
            "All types of seals",
            "Valve Guides and Tappets",
            "Piston Rings and Liners",
            "Bearings - All Types"
        ]
    }
};

const STATIC_PRODUCTS: Product[] = [
    // Bearings
    { id: 'b1', title: 'Deep Grove Ball Bearings', category: 'Bearings', image_url: 'https://images.unsplash.com/photo-1594814136440-d4b3506450f3?auto=format&fit=crop&q=80&w=400', description: 'High-precision deep groove ball bearings for low noise and vibration.' },
    { id: 'b2', title: 'Miniature Bearings', category: 'Bearings', image_url: 'https://images.unsplash.com/photo-1590231505291-76495b682650?auto=format&fit=crop&q=80&w=400', description: 'Small-scale precision bearings for high-speed applications.' },
    { id: 'b3', title: 'Cylindrical Roller Bearings', category: 'Bearings', image_url: 'https://images.unsplash.com/photo-159742324403d-d556d0bd1c9c?auto=format&fit=crop&q=80&w=400', description: 'Heavy-duty cylindrical rollers for high radial loads.' },
    { id: 'b4', title: 'Needle Roller Bearings', category: 'Bearings', image_url: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=400', description: 'Compact needle rollers for limited spatial applications.' },
    { id: 'b5', title: 'Angular Roller Bearings', category: 'Bearings', image_url: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400', description: 'Optimized for combined radial and axial loads.' },
    { id: 'b6', title: 'Pillow Block Housings', category: 'Bearings', image_url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400', description: 'Robust mounting solutions for industrial shafts.' },

    // Transmission
    { id: 't1', title: 'Heavy Duty V-Belt', category: 'Transmission & Motion', image_url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400', description: 'High-performance V-belts for efficient power transmission.' },
    { id: 't2', title: 'Industrial Timing Belts', category: 'Transmission & Motion', image_url: 'https://images.unsplash.com/photo-1581093452021-996ffebfd28c?auto=format&fit=crop&q=80&w=400', description: 'Synchronous belts for precise motion control.' },
    { id: 't3', title: 'Roller & Conveyor Chains', category: 'Transmission & Motion', image_url: 'https://images.unsplash.com/photo-1581092162384-8987ec176471?auto=format&fit=crop&q=80&w=400', description: 'Durable chains for heavy-load industrial conveyors.' },
    { id: 't4', title: 'Precision Shaft Couplings', category: 'Transmission & Motion', image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400', description: 'Flexible couplings for reliable shaft connections.' },

    // Sealing
    { id: 's1', title: 'Industrial O-Rings', category: 'Sealing & Fluid Control', image_url: 'https://images.unsplash.com/photo-1581092580497-e0d23cb61402?auto=format&fit=crop&q=80&w=400', description: 'Standard and custom O-rings for various sealing needs.' },
    { id: 's2', title: 'High-Temp Gaskets', category: 'Sealing & Fluid Control', image_url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=400', description: 'Resilient gaskets for extreme thermal environments.' },
    { id: 's3', title: 'Mechanical Seals', category: 'Sealing & Fluid Control', image_url: 'https://images.unsplash.com/photo-1581092162921-950c05874251?auto=format&fit=crop&q=80&w=400', description: 'Precision seals for pumps and rotating equipment.' },
    { id: 's4', title: 'Hydraulic Fittings', category: 'Sealing & Fluid Control', image_url: 'https://images.unsplash.com/photo-1581093806221-70f90c9b071a?auto=format&fit=crop&q=80&w=400', description: 'High-pressure fittings for hydraulic systems.' },

    // Fasteners
    { id: 'f1', title: 'Bolts, Nuts & Washers', category: 'Fasteners & Fixings', image_url: 'https://images.unsplash.com/photo-1581092918056-0ea6541b972c?auto=format&fit=crop&q=80&w=400', description: 'Comprehensive range of industrial fasteners.' },
    { id: 'f2', title: 'Threaded Inserts & Studs', category: 'Fasteners & Fixings', image_url: 'https://images.unsplash.com/photo-1581092580497-e0d23cb61402?auto=format&fit=crop&q=80&w=400', description: 'Precision studs for heavy machinery assembly.' },
    { id: 'f3', title: 'Spring Pins', category: 'Fasteners & Fixings', image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400', description: 'Self-retaining pins for secure mechanical joints.' },
    { id: 'f4', title: 'Internal/External Circlips', category: 'Fasteners & Fixings', image_url: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=400', description: 'Retaining rings for shaft and bore security.' },

    // Electrical
    { id: 'e1', title: 'Terminals & Connectors', category: 'Electrical & Wiring', image_url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400', description: 'High-conductivity electrical connectors.' },
    { id: 'e2', title: 'Industrial Circuit Breakers', category: 'Electrical & Wiring', image_url: 'https://images.unsplash.com/photo-1581093452021-996ffebfd28c?auto=format&fit=crop&q=80&w=400', description: 'Safety breakers for industrial power circuits.' },
    { id: 'e3', title: 'Pneumatic Air Fittings', category: 'Electrical & Wiring', image_url: 'https://images.unsplash.com/photo-1581092162384-8987ec176471?auto=format&fit=crop&q=80&w=400', description: 'Quick-connect fittings for air systems.' },
    { id: 'e4', title: 'Industrial Tubings', category: 'Electrical & Wiring', image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400', description: 'High-durability tubing for fluid and air.' },

    // MRO
    { id: 'm1', title: 'Precision Cutting Tools', category: 'MRO Consumables', image_url: 'https://images.unsplash.com/photo-1581092580497-e0d23cb61402?auto=format&fit=crop&q=80&w=400', description: 'High-speed steel tools for industrial machining.' },
    { id: 'm2', title: 'Industrial Drills', category: 'MRO Consumables', image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400', description: 'Heavy-duty drill bits for metal and concrete.' },
    { id: 'm3', title: 'Lubricants & Grease', category: 'MRO Consumables', image_url: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=400', description: 'Specialized lubricants for high-friction environments.' },

    // Automotive
    { id: 'a1', title: 'Engine Pump Impellers', category: 'Automotives & Engine', image_url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400', description: 'Precision impellers for automotive water pumps.' },
    { id: 'a2', title: 'Valve Guides & Tappets', category: 'Automotives & Engine', image_url: 'https://images.unsplash.com/photo-1581093452021-996ffebfd28c?auto=format&fit=crop&q=80&w=400', description: 'OEM-grade engine components for high durability.' },
    { id: 'a3', title: 'Piston Rings & Liners', category: 'Automotives & Engine', image_url: 'https://images.unsplash.com/photo-1581092162384-8987ec176471?auto=format&fit=crop&q=80&w=400', description: 'Advanced piston sealing and liner systems.' },
    { id: 'a4', title: 'Automotive Bearings', category: 'Automotives & Engine', image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400', description: 'Full range of bearings for vehicle drivetrains.' },
];

export default function Products() {
    const [filter, setFilter] = useState("All Products");

    const filteredProducts = filter === "All Products" 
        ? STATIC_PRODUCTS 
        : STATIC_PRODUCTS.filter(p => p.category === filter);

    const categories = [
        "All Products", 
        "Bearings", 
        "Transmission & Motion", 
        "Sealing & Fluid Control", 
        "Fasteners & Fixings", 
        "Electrical & Wiring", 
        "MRO Consumables", 
        "Automotives & Engine"
    ];

    return (
        <div className="products-page">
            <section className="banner-corp" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8rem 0 4rem', textAlign: 'center' }}>
                <div className="l-container">
                    <div className="banner-corp__content" data-reveal="fade-in">
                        <h1 className="banner-corp__title" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Component Catalog</h1>
                        <p className="banner-corp__lead" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>Direct-from-manufacturer supply chain for high-precision industrial components.</p>
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

                    <div className="category-info" style={{ marginBottom: '3rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{filter}</h2>
                        <p style={{ color: 'var(--color-text-main)', marginBottom: '1rem' }}>
                            {categoryDetails[filter]?.description || "Comprehensive range of high-quality industrial components."}
                        </p>
                        {categoryDetails[filter]?.items && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem', fontSize: '0.875rem' }}>
                                {categoryDetails[filter].items.map((item: string) => (
                                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--color-accent)' }}>•</span> {item}
                                    </div>
                                ))}
                            </div>
                        )}
                        {categoryDetails[filter]?.dealers && (
                            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                                <span style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Authorised Dealers:</span>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                                    {categoryDetails[filter].dealers.map((brand: string) => (
                                        <span key={brand}>{brand}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {categoryDetails[filter]?.stockists && (
                            <div style={{ marginTop: '1rem' }}>
                                <span style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Stockists:</span>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                                    {categoryDetails[filter].stockists.map((brand: string) => (
                                        <span key={brand}>{brand}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

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
                </div>
            </section>
        </div>
    );
}
