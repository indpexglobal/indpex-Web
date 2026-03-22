"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted. Our procurement team will contact you shortly.");
  };

  return (
    <div className="contact-page">
      {/* Corporate Banner */}
      <section className="banner-corp" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="l-container">
          <div className="banner-corp__content" data-reveal="fade-in">
            <h1 className="banner-corp__title" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Procurement Inquiry</h1>
            <p className="banner-corp__lead" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>Consult with our industrial specialists for custom sourcing and logistics solutions.</p>
          </div>
        </div>
      </section>

      {/* Professional Inquiry Section */}
      <section className="l-section">
        <div className="l-container">
          <div className="l-grid l-grid--2">
            <div className="contact-corp-info" data-reveal="slide-right">
              <h2 className="corp-h2" style={{ fontSize: '2rem', marginBottom: '25px', color: 'var(--color-primary-dark)' }}>Speak with a Specialist</h2>
              <p style={{ color: 'var(--color-text-main)', marginBottom: '40px' }}>Our dedicated procurement team manages global supply chains across multiple time zones. Please submit your technical requirements and contact information below.</p>
              
              <div className="c-info-item" style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '10px' }}>Corporate Headquarters</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-main)', fontWeight: 500 }}>Himanshu Bearings & Vaibhav Ball & Bearings Group<br />India & International Trade Hubs</p>
              </div>
              <div className="c-info-item" style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '10px' }}>Procurement Email</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-main)', fontWeight: 500 }}>contact@indpexglobal.com</p>
              </div>
              <div className="c-info-item" style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '10px' }}>Contact Number</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-main)', fontWeight: 500 }}>+91 78777 44377</p>
              </div>
            </div>

            <div className="card-corp form-corp-card" data-reveal="slide-up">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="f-group-corp" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Full Name / Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Director of Procurement" 
                    required 
                    style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', background: '#fdfdfd' }}
                  />
                </div>
                <div className="f-group-corp" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Corporate Email</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    required 
                    style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', background: '#fdfdfd' }}
                  />
                </div>
                <div className="f-group-corp" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Industry Sector</label>
                  <select 
                    required 
                    style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', background: '#fdfdfd' }}
                  >
                    <option value="">Select Sector...</option>
                    <option>Automotive</option>
                    <option>Energy & Power</option>
                    <option>Manufacturing</option>
                    <option>Metal Products</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="f-group-corp" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Technical Requirements</label>
                  <textarea 
                    rows={6} 
                    placeholder="Describe components, volumes, or machinery specifications..."
                    style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', background: '#fdfdfd' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--primary">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
