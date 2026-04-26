import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Authorised SKF & FAG Bearing Distributor Since 2011",
  description: "Indpex Global (Himanshu Bearings & Vaibhav Ball Bearings) has been India's trusted industrial bearing distributor since 2011. Authorised dealers for SKF, FAG, NBC, Timken and NTN. 15+ years expertise.",
  alternates: { canonical: "https://indpexglobal.com/about" },
  openGraph: { url: "https://indpexglobal.com/about", title: "About Indpex Global | Authorised Bearing Distributor Since 2011", description: "15+ years of industrial bearing supply. Authorised SKF, FAG, NBC, Timken and NTN dealer." },
};

export default function About() {
  return (
    <div className="about-page">
      {/* Corporate Banner */}
      <section className="banner-corp" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="l-container">
          <div className="banner-corp__content" data-reveal="fade-in">
            <h1 className="banner-corp__title" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Industrial Authority</h1>
            <p className="banner-corp__lead" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>Connecting global excellence with local operations since 2011.</p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="l-section">
        <div className="l-container">
          <div className="l-grid l-grid--2">
            <div className="about-lead" data-reveal="slide-right">
              <h2 className="corp-h2">Established Reach</h2>
              <p>Indpex Global is an authoritative leader in the international industrial supply chain. We specialize in the procurement and logistics of high-specification machinery, metal products, and technical components for multi-national corporations and government infrastructure projects.</p>
              <p>Our foundation is built on three pillars: global network, technical verification, and logistical precision.</p>
            </div>
            <div className="card-corp" data-reveal="slide-up">
              <h3 className="feat-title" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Our Mandate</h3>
              <p className="feat-text" style={{ marginBottom: '2.5rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>To provide enterprise-grade industrial solutions that enable global scale and operational excellence.</p>
              <div className="mandate-stat" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                <span className="m-num" style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>15+</span>
                <span className="m-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-text-muted)' }}>Years of Corporate Presence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Entities Section */}
      <section className="l-section l-section--bg" style={{ backgroundColor: '#f7f9fc' }}>
        <div className="l-container">
          <div className="l-grid l-grid--2">
            <div className="card-corp" data-reveal="slide-up">
              <h3 className="feat-title">Himanshu Bearings</h3>
              <p className="feat-text">Established in 2011</p>
              <p style={{ color: 'var(--color-text-main)' }}>Our principal enterprise, primarily specializing in the automobile segment. With decades of foundational experience, we have cultivated an enduring reputation for uncompromising quality and reliability in automotive components.</p>
            </div>
            <div className="card-corp" data-reveal="slide-up">
              <h3 className="feat-title">Vaibhav Ball & Bearings</h3>
              <p className="feat-text">Established in 2017</p>
              <p style={{ color: 'var(--color-text-main)' }}>Our specialized entity focused on industrial mechanical components. We supply an extensive range of bearings across all grades, power cable components, and heavy machinery essentials to support comprehensive industrial operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Dealerships Section */}
      <section className="l-section" style={{ paddingTop: 0 }}>
        <div className="l-container">
          <div className="card-corp" data-reveal="fade-in" style={{ textAlign: 'center', borderTop: '3px solid var(--color-primary)' }}>
            <h2 className="corp-h2" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Authorized Partnerships</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-main)', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              We represent global standards of quality through our strategic partnerships. We are proud authorized dealers and specialized stockists of world-renowned manufacturing brands.
            </p>
            
            <div className="marquee-wrapper">
              <div className="marquee-content">
                <span>SKF</span><span>TATA</span><span>FAG</span><span>VAIB</span><span>CSG</span><span>NRB</span><span>NBC (Stockist)</span>
                <span>SKF</span><span>TATA</span><span>FAG</span><span>VAIB</span><span>CSG</span><span>NRB</span><span>NBC (Stockist)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
