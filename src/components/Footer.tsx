import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-corp" data-reveal="fade-in">
            <div className="l-container">
                <div className="footer-corp__main">
                    <div className="footer-corp__brand-col" data-reveal="slide-right">
                        <Link href="/" className="footer-corp__logo">
                            <span className="logo-icon">IG</span>
                            INDPEX <span className="logo-accent">GLOBAL</span>
                        </Link>
                        <p className="footer-corp__tagline">
                            Authoritative leader in the international industrial supply chain, specializing in precision bearings and mechanical components since 1995.
                        </p>
                        <div className="footer-corp__badges">
                            <span className="badge-pill">ISO 9001:2015</span>
                            <span className="badge-pill">IEC Registered</span>
                        </div>
                    </div>

                    <div className="footer-corp__links-grid">
                        <div className="footer-corp__col" data-reveal="fade-in">
                            <h4 className="footer-corp__title">Solutions</h4>
                            <ul className="footer-corp__list">
                                <li><Link href="/products?category=Bearings">Industrial Bearings</Link></li>
                                <li><Link href="/products?category=Transmission">Power Transmission</Link></li>
                                <li><Link href="/products?category=Sealing">Sealing Systems</Link></li>
                                <li><Link href="/industries">Industry Sectors</Link></li>
                            </ul>
                        </div>
                        
                        <div className="footer-corp__col" data-reveal="fade-in">
                            <h4 className="footer-corp__title">Company</h4>
                            <ul className="footer-corp__list">
                                <li><Link href="/about">Our Legacy</Link></li>
                                <li><Link href="/contact">Contact Global</Link></li>
                                <li><Link href="/admin/login">Partner Portal</Link></li>
                                <li><Link href="/sitemap.xml">Sitemap</Link></li>
                            </ul>
                        </div>

                        <div className="footer-corp__col footer-corp__col--wide" data-reveal="slide-left">
                            <h4 className="footer-corp__title">Global Procurement</h4>
                            <div className="footer-corp__contact-item">
                                <span className="contact-label">Technical Desk</span>
                                <a href="mailto:contact@indpexglobal.com" className="contact-value">contact@indpexglobal.com</a>
                            </div>
                            <div className="footer-corp__contact-item">
                                <span className="contact-label">Direct Logistics</span>
                                <a href="tel:+917877744377" className="contact-value">+91 78777 44377</a>
                            </div>
                            <div className="footer-corp__social">
                                {/* Social placeholders */}
                                <div className="social-icon">IN</div>
                                <div className="social-icon">FB</div>
                                <div className="social-icon">WA</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-corp__bottom">
                    <div className="footer-corp__legal">
                        <p>&copy; {new Date().getFullYear()} Indpex Global. All rights reserved.</p>
                        <div className="legal-links">
                            <Link href="#">Terms of Export</Link>
                            <Link href="#">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="footer-corp__attribution">
                        Himanshu Bearings & Vaibhav Ball Bearings Group
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
