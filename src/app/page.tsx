"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Product {
  id: string;
  title: string;
  category: string;
  image_url: string;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchFeatured();
  }, []);

  async function fetchFeatured() {
    const { data } = await supabase
      .from('products')
      .select('*')
      .limit(8);
    if (data) setFeaturedProducts(data);
  }

  return (
    <div className="home-page">
      {/* Corporate Hero Section */}
      <section className="hero-corp" style={{ paddingTop: '140px' }}>
        <div className="hero-corp__video-wrap">
          <video autoPlay muted loop playsInline className="hero-corp__video" poster="/bearings-hero.png">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-robotic-arm-working-in-a-factory-40342-large.mp4" type="video/mp4" />
          </video>
          <div className="hero-corp__overlay"></div>
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
              <span className="stat-corp__num">2011</span>
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
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-main)', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              We represent global standards of quality through our strategic partnerships. We are proud **Authorised Dealers** and specialized **Stockists** of world-renowned manufacturing brands.
            </p>
            
            <div className="marquee-wrapper">
              <div className="marquee-content">
                <span style={{ fontWeight: 400, fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Authorised Dealers:</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>SKF</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>FAG</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>TATA</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>NRB</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>VAIB</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>CSG</span>
                
                <span style={{ fontWeight: 400, fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginLeft: '2rem' }}>Stockists:</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>NBC</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>ARB</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>TIMKEN</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>LINCOLN</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>NMB</span>

                {/* Duplicate Set for infinite scroll */}
                <span style={{ fontWeight: 400, fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginLeft: '2rem' }}>Authorised Dealers:</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>SKF</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>FAG</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>TATA</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>NRB</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>VAIB</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>CSG</span>
                
                <span style={{ fontWeight: 400, fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginLeft: '2rem' }}>Stockists:</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>NBC</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>ARB</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>TIMKEN</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>LINCOLN</span>
                <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>NMB</span>
              </div>
            </div>
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
            {featuredProducts.length > 0 ? (
              <>
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
              </>
            ) : (
                <div style={{ padding: '2rem', textAlign: 'center', width: '100%', color: 'var(--color-text-muted)' }}>Initialising live catalog...</div>
            )}
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
