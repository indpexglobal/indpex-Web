import Link from "next/link";

export default function Industries() {
  return (
    <div className="industries-page">
      {/* Corporate Banner */}
      <section className="banner-corp" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="l-container">
          <div className="banner-corp__content" data-reveal="fade-in">
            <h1 className="banner-corp__title" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Specialized Industrial Solutions</h1>
            <p className="banner-corp__lead" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>Expertise in importing and distributing high-precision mechanical components across critical industrial sectors.</p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="l-section">
        <div className="l-container">
          <div className="l-grid l-grid--1" style={{ gap: '3rem' }}>
            {/* Automotive */}
            <div className="card-corp sector-card-corp" id="automotive" data-reveal="slide-up">
              <div className="sector-card-corp__visual">
                <img src="/bearings-hero.png" alt="Automotive Bearings" />
              </div>
              <div className="sector-card-corp__body">
                <h2 className="sector-title-corp">Automotive & transport</h2>
                <p className="sector-text-corp">Supplying ultra-precision ball bearings and heavy-duty roller bearings for modern vehicle drivetrains and hubs.</p>
                <ul className="sector-list-corp">
                  <li>Deep Groove Ball Bearings</li>
                  <li>Tapered Roller Bearings</li>
                  <li>Hub Unit Assemblies</li>
                </ul>
              </div>
            </div>

            {/* Energy & Infrastructure */}
            <div className="card-corp sector-card-corp" id="energy" data-reveal="slide-up">
              <div className="sector-card-corp__visual">
                <img src="https://images.unsplash.com/photo-1466611653911-954ff2127c8b?auto=format&fit=crop&q=80&w=800" alt="Energy Infrastructure" />
              </div>
              <div className="sector-card-corp__body">
                <h2 className="sector-title-corp">Energy & Infrastructure</h2>
                <p className="sector-text-corp">Providing critical bearing systems for renewable energy installations and large-scale power infrastructure projects.</p>
                <ul className="sector-list-corp">
                  <li>Main Shaft Bearings</li>
                  <li>Pitch & Yaw Drive Bearings</li>
                  <li>Insulated Electrical Bearings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
