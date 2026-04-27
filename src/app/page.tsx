"use client";

import { useState, useRef, useEffect } from "react";

interface Product {
    id: string;
    title: string;
    category: string;
    image_url: string;
    description: string;
    price: number | null;
}

const CERTIFICATES = [
  {
    id: "skf-2024",
    title: "SKF Bearings",
    sub: "Certificate of Authorization 2024",
    img: "/certificates/skf-2024.png",
  },
  {
    id: "tata-2024",
    title: "TATA Bearings",
    sub: "Authorised Stockist 2024-25",
    img: "/certificates/tata-stockist.png",
  },
  {
    id: "nrb-2023",
    title: "NRB Bearings",
    sub: "Authorised Distributor 2023-24",
    img: "/certificates/nrb-distributor.png",
  },
  {
    id: "schaeffler-2020",
    title: "Schaeffler Bearings",
    sub: "Certificate of Authorization 2020",
    img: "/certificates/schaeffler-auth-2020.jpg",
  },
  {
    id: "schaeffler-2018",
    title: "Schaeffler Bearings",
    sub: "Industrial Distributors Meet 2018",
    img: "/certificates/skf-auth-2024.jpg",
  },
  {
    id: "nrb-2022",
    title: "NRB Bearings",
    sub: "Authorised Distributor 2022-23",
    img: "/certificates/nrb-auth-2022.jpg",
  },
  {
    id: "ravm-v",
    title: "RAVM",
    sub: "Membership Certificate (Vaibhav)",
    img: "/certificates/ravm-member-vaibhav.jpg",
  },
  {
    id: "ravm-h",
    title: "RAVM",
    sub: "Membership Certificate (Himanshu)",
    img: "/certificates/ravm-member-himanshu.jpg",
  },
  {
    id: "skf-2021",
    title: "SKF India",
    sub: "Authorised Distributor 2021",
    img: "/certificates/skf-auth-2021.jpg",
  },
  {
    id: "tata-2017",
    title: "TATA Bearings",
    sub: "Authorised Stockist 2017",
    img: "/certificates/tata-auth-2017.jpg",
  },
  {
    id: "auto-2022",
    title: "Auto Carnival",
    sub: "Participation Certificate 2022",
    img: "/certificates/auto-carnival-2022.jpg",
  },
];


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

import Link from "next/link";

const FEATURED_PRODUCTS = [
  { id: 'b1', title: 'Deep Grove Ball Bearings', category: 'Bearings', image_url: 'https://images.unsplash.com/photo-1594814136440-d4b3506450f3?auto=format&fit=crop&q=80&w=400' },
  { id: 'b3', title: 'Cylindrical Roller Bearings', category: 'Bearings', image_url: 'https://images.unsplash.com/photo-159742324403d-d556d0bd1c9c?auto=format&fit=crop&q=80&w=400' },
  { id: 't1', title: 'Heavy Duty V-Belt', category: 'Transmission & Motion', image_url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400' },
  { id: 'e3', title: 'Pneumatic Air Fittings', category: 'Electrical & Wiring', image_url: 'https://images.unsplash.com/photo-1581092162384-8987ec176471?auto=format&fit=crop&q=80&w=400' },
];



export default function Home() {
  const featuredProducts = FEATURED_PRODUCTS;
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Slow playback as requested
    }
  }, []);

  return (
    <div className="home-page">
      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content museum-frame" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>&times;</button>
            <div className="museum-inner">
               <img src={selectedCert.img} alt={selectedCert.title} className="museum-img" />
            </div>
            <div className="modal-title">{selectedCert.title} - {selectedCert.sub}</div>
          </div>
        </div>
      )}

      {/* Corporate Hero Section */}
      <section className="hero-corp" style={{ paddingTop: '140px' }}>
        <div className="hero-corp__video-wrap">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="hero-corp__video" 
            poster="/bearings-hero.png"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Glass Effect Overlay */}
          <div className="hero-corp__overlay" style={{ 
            backdropFilter: 'blur(8px) saturate(120%)', 
            WebkitBackdropFilter: 'blur(8px) saturate(120%)',
            backgroundColor: 'rgba(30, 58, 90, 0.4)',
            backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(30, 58, 90, 0.6) 100%)'
          }}></div>
        </div>
        <div className="l-container">
          <div className="hero-corp__content">
            <h1 className="hero-corp__title">Direct-from-Manufacturer <br />Industrial Components</h1>
            <p className="hero-corp__lead">
              20–40% below market price, pre-shipment inspection, IEC-registered Indian exporter. Specialized supply for GCC, Africa, and Europe.
            </p>
            <div className="hero-corp__actions">
              <Link href="/products" className="btn btn--primary">Browse Components</Link>
              <Link href="/contact" className="btn btn--outline" style={{ color: '#fff', borderColor: '#fff' }}>Technical Inquiry</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="l-section l-section--bg" style={{ paddingBottom: '2rem' }}>
        <div className="l-container">
          <div className="l-grid l-grid--3">
            <div className="feat-corp" data-reveal="fade-in">
              <h3 className="feat-corp__title">Strategic Sourcing</h3>
              <p className="feat-corp__text">Access to a global network of verified manufacturers for high-precision components.</p>
            </div>
            <div className="feat-corp" data-reveal="fade-in">
              <h3 className="feat-corp__title">Enterprise Logistics</h3>
              <p className="feat-corp__text">Seamless international transport and supply chain management for large-scale operations.</p>
            </div>
            <div className="feat-corp" data-reveal="fade-in">
              <h3 className="feat-corp__title">Compliance & Quality</h3>
              <p className="feat-corp__text">Rigorous quality assurance and global compliance standards for every part we deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Corporate Legacy Section */}
      <section className="l-section" id="about" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="l-container">
          <div className="editorial-legacy">
            <h2 className="editorial-title" data-reveal="slide-up">Established Reach <br />& Corporate Legacy</h2>
            <div className="editorial-layout">
              <div className="editorial-lead" data-reveal="slide-up">
                <p>Indpex Global is an authoritative leader in the international industrial supply chain. We specialize in the procurement and logistics of high-specification machinery, metal products, and technical components.</p>
              </div>
              
              <div className="editorial-entities">
                <div className="entity-block" data-reveal="fade-in">
                  <div className="entity-meta">
                    <span className="entity-year">Est. 1995</span>
                    <h3 className="entity-name">Himanshu Bearings</h3>
                  </div>
                  <p className="entity-desc">Our principal enterprise, primarily specializing in the automobile segment. With decades of foundational experience, we have cultivated an enduring reputation for uncompromising quality and reliability in automotive components.</p>
                </div>
                
                <div className="entity-divider"></div>
                
                <div className="entity-block" data-reveal="fade-in">
                  <div className="entity-meta">
                    <span className="entity-year">Est. 2017</span>
                    <h3 className="entity-name">Vaibhav Ball & Bearings</h3>
                  </div>
                  <p className="entity-desc">Our specialized entity focused on industrial mechanical components. We supply an extensive range of bearings across all grades, power cable components, and heavy machinery essentials to support comprehensive industrial operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="l-section bg-grid">
        <div className="l-container">
          <div className="l-grid l-grid--4" style={{ textAlign: 'center' }}>
            <div className="stat-corp" data-reveal="slide-up">
              <span className="stat-corp__num">1995</span>
              <span className="stat-corp__label">Established</span>
            </div>
            <div className="stat-corp" data-reveal="slide-up">
              <span className="stat-corp__num">50+</span>
              <span className="stat-corp__label">Strategic Partners</span>
            </div>
            <div className="stat-corp" data-reveal="slide-up">
              <span className="stat-corp__num">100%</span>
              <span className="stat-corp__label">Quality Verified</span>
            </div>
            <div className="stat-corp" data-reveal="slide-up">
              <span className="stat-corp__num">24h</span>
              <span className="stat-corp__label">Rapid Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Dealerships Section */}
      <section className="l-section" style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="l-container">
          <div className="card-corp" data-reveal="fade-in" style={{ textAlign: 'center', borderTop: '3px solid var(--color-primary)' }}>
            <h2 className="corp-h2" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Authorised Dealerships & Strategic Stock</h2>
            <p style={{ marginBottom: '2.5rem', color: 'var(--color-text-main)', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              We represent global standards of quality through our strategic partnerships. We are proud **Authorised Dealers** and specialized **Stockists** of world-renowned manufacturing brands.
            </p>
            
            <div className="brands-vertical-layout" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {/* Authorised Dealers - Top Row */}
              <div className="brands-row">
                <span style={{ display: 'block', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '2rem', letterSpacing: '0.1em' }}>Authorised Dealers:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem 4rem', alignItems: 'center' }}>
                  {[
                    { name: "SKF", logo: "/images/logos/skf.png" },
                    { name: "FAG", logo: "/images/logos/fag.png" },
                    { name: "TATA", logo: "/images/logos/tata.png" },
                    { name: "NRB", logo: "/images/logos/nrb.png" },
                    { name: "VAIB", logo: null },
                    { name: "CSG", logo: null }
                  ].map(brand => (
                    <div key={brand.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                      {brand.logo ? (
                        <img src={brand.logo} alt={brand.name} style={{ height: '40px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.8, transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }} onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.8'; }} />
                      ) : (
                        <span style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-primary-dark)' }}>{brand.name}</span>
                      )}
                      {brand.logo && <span style={{ fontWeight: 700, fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{brand.name}</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ height: '1px', background: 'var(--color-border)', width: '60px', margin: '0 auto' }}></div>

              {/* Stockists - Bottom Row */}
              <div className="brands-row">
                <span style={{ display: 'block', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '2rem', letterSpacing: '0.1em' }}>Strategic Stockists:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem 3.5rem', alignItems: 'center' }}>
                  {[
                    { name: "NBC", logo: "/images/logos/nbc.png" },
                    { name: "ARB", logo: "/images/logos/arb.png" },
                    { name: "TIMKEN", logo: "/images/logos/timken.png" },
                    { name: "LINCOLN", logo: "/images/logos/lincoln.png" },
                    { name: "NMB", logo: "/images/logos/nmb.png" }
                  ].map(brand => (
                    <div key={brand.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                      {brand.logo ? (
                        <img src={brand.logo} alt={brand.name} style={{ height: '35px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }} onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }} />
                      ) : (
                        <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary)' }}>{brand.name}</span>
                      )}
                      {brand.logo && <span style={{ fontWeight: 700, fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{brand.name}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="cert-section">
        <div className="l-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="editorial-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }} data-reveal="slide-up">Our Certifications <br />& Authorizations</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Verification of our authorized status and industry memberships, ensuring genuine supply and technical compliance.
            </p>
          </div>

          <div className="cert-grid">
            {CERTIFICATES.map((cert) => (
              <div 
                className="cert-card certificate-plaque" 
                key={cert.id} 
                data-reveal="fade-in"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-image">
                  <img src={cert.img} alt={cert.title} />
                  <div className="cert-view-btn">Inspect Original</div>
                </div>
                <div className="cert-info">
                  <span className="cert-badge">Verified Credential</span>
                  <h3 className="cert-name">{cert.title}</h3>
                  <p className="cert-subtitle">{cert.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Product Showcase Carousel (Dynamic) */}
      <section id="products" className="l-section l-section--bg" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="l-container">
          <h2 className="editorial-title" style={{ textAlign: 'center', marginBottom: '4rem' }} data-reveal="slide-up">Featured Components</h2>
        </div>
        
        <div className="product-marquee-wrapper" data-reveal="fade-in">
          <div className="product-marquee">
            {/* Original Set */}
            {featuredProducts.map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-image"><img src={p.image_url || "/bearings-hero.png"} alt={p.title} /></div>
                <h3 className="product-name">{p.title}</h3>
                <Link href="/products" className="product-link">Explore Specifications &rarr;</Link>
              </div>
            ))}
            {/* Duplicate Set for infinite scroll */}
            {featuredProducts.map(p => (
              <div className="product-card" key={`dup-${p.id}`}>
                <div className="product-image"><img src={p.image_url || "/bearings-hero.png"} alt={p.title} /></div>
                <h3 className="product-name">{p.title}</h3>
                <Link href="/products" className="product-link">Explore Specifications &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Logistics Section */}
      <section className="l-section l-section--bg">
        <div className="l-container">
          <div className="l-grid l-grid--2" style={{ alignItems: 'center' }}>
            <div className="logistics-content-corp" data-reveal="slide-right">
              <h2 className="corp-h2">Strategically Managed Logistics</h2>
              <p className="section-lead">Importing mission-critical components requires more than just transport—it requires precision timing.</p>
              <p>Indpex Global manages the entire supply chain from factory gate to your facility. We handle all customs compliance, international manifests, and expedited shipping to minimize your production downtime.</p>
              <Link href="/contact" className="btn btn--outline">Inquire About Logistics</Link>
            </div>
            <div className="logistics-visual-corp" data-reveal="slide-left">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" alt="Global Logistics" style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section id="sectors">
        <div className="sector-tiles-corp">
          <Link href="/industries#automotive" className="sector-tile">
            <div className="sector-tile__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000')" }}></div>
            <div className="sector-tile__overlay"></div>
            <div className="sector-tile__content">
              <span className="sector-tile__label">Mechanical Authority</span>
              <h3 className="sector-tile__title">Automotive & <br />Transport</h3>
              <p className="sector-tile__desc">High-load precision ball and roller bearings for next-generation drivetrains.</p>
              <span className="sector-tile__link">View Capabilities</span>
            </div>
          </Link>

          <Link href="/industries#energy" className="sector-tile">
            <div className="sector-tile__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-954ff2127c8b?auto=format&fit=crop&q=80&w=1000')" }}></div>
            <div className="sector-tile__overlay"></div>
            <div className="sector-tile__content">
              <span className="sector-tile__label">Sustainable Power</span>
              <h3 className="sector-tile__title">Energy & <br />Infrastructure</h3>
              <p className="sector-tile__desc">High-reliability bearing solutions for wind turbines, tidal energy, and grid infrastructure.</p>
              <span className="sector-tile__link">View Capabilities</span>
            </div>
          </Link>

          <Link href="/industries#heavy-industry" className="sector-tile">
            <div className="sector-tile__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000')" }}></div>
            <div className="sector-tile__overlay"></div>
            <div className="sector-tile__content">
              <span className="sector-tile__label">Industrial Strength</span>
              <h3 className="sector-tile__title">Heavy <br />Industrial</h3>
              <p className="sector-tile__desc">Massive roller solutions for global mining, power generation, and manufacturing.</p>
              <span className="sector-tile__link">View Capabilities</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
