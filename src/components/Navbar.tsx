"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header-corp ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="top-bar">
                <div className="l-container top-bar__flex">
                    <span className="top-bar__text">Himanshu Bearings & Vaibhav Ball & Bearings Group | Est. 1995</span>
                    <div className="top-bar__contact">
                        <a href="tel:+917877744377" className="top-bar__link">📞 +91 78777 44377</a>
                        <span className="top-bar__separator"></span>
                        <a href="mailto:contact@indpexglobal.com" className="top-bar__link">✉️ contact@indpexglobal.com</a>
                    </div>
                </div>
            </div>
            <nav className="nav-corp">
                <div className="l-container nav-corp__flex">
                    <Link href="/" className="nav-corp__logo">
                        INDPEX <span className="logo-accent">GLOBAL</span>
                    </Link>
                    
                    <ul className={`nav-corp__list ${isMenuOpen ? 'nav-corp__list--open' : ''}`}>
                        <li><Link href="/" className="nav-corp__link">Home</Link></li>
                        <li><Link href="/#products" className="nav-corp__link">Products</Link></li>
                        <li><Link href="/industries" className="nav-corp__link">Industries</Link></li>
                        <li><Link href="/about" className="nav-corp__link">About</Link></li>
                    </ul>

                    <div className="nav-corp__actions">
                        <Link href="/contact" className="btn btn--primary btn--nav">Get A Quote</Link>
                        <button 
                            className="nav-corp__toggle" 
                            id="nav-toggle" 
                            aria-label="Toggle Menu"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </nav>

            <style jsx>{`
                .header-corp {
                    position: fixed;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 95%;
                    max-width: 1400px;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                }

                .header--scrolled {
                    top: 10px;
                    width: 98%;
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
                }

                /* Top Bar Styling */
                .top-bar {
                    background: linear-gradient(90deg, #1a2a3a 0%, #0d1b2a 100%);
                    color: rgba(255,255,255,0.85);
                    padding: 0.4rem 0;
                    font-size: 0.75rem;
                    font-family: var(--font-ui), sans-serif;
                    letter-spacing: 0.02em;
                }
                .top-bar__flex { 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .top-bar__contact {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .top-bar__link { 
                    color: #fff; 
                    text-decoration: none; 
                    font-weight: 500;
                    transition: opacity 0.2s;
                }
                .top-bar__link:hover { opacity: 0.8; }
                .top-bar__separator {
                    width: 1px;
                    height: 12px;
                    background: rgba(255,255,255,0.3);
                }

                /* Main Nav Styling */
                .nav-corp { 
                    padding: 1.2rem 0; 
                    transition: padding 0.3s ease;
                }
                .nav-corp__flex { 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                }
                
                /* Logo */
                .nav-corp__logo {
                    font-family: var(--font-heading);
                    font-weight: 800;
                    font-size: 1.75rem;
                    color: var(--color-primary-dark);
                    text-decoration: none;
                    letter-spacing: -0.03em;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                }
                .logo-accent { 
                    color: var(--color-primary); 
                    font-weight: 300; 
                    margin-left: 6px; 
                    position: relative;
                }
                .logo-accent::after {
                    content: '';
                    position: absolute;
                    bottom: 4px;
                    left: -2px;
                    width: 4px;
                    height: 4px;
                    background: var(--color-accent, #ff3366);
                    border-radius: 50%;
                }

                /* Nav Links */
                .nav-corp__list { 
                    display: flex; 
                    gap: 2.5rem; 
                    align-items: center; 
                    list-style: none; 
                    margin: 0;
                    padding: 0;
                }
                .nav-corp__link {
                    position: relative;
                    text-decoration: none;
                    color: var(--color-text-main);
                    font-weight: 600;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    padding: 0.5rem 0;
                    transition: color 0.3s ease;
                }
                
                .nav-corp__link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background: linear-gradient(90deg, var(--color-primary) 0%, #4facfe 100%);
                    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                    border-radius: 2px;
                }
                .nav-corp__link:hover { 
                    color: var(--color-primary); 
                }
                .nav-corp__link:hover::after {
                    width: 100%;
                }

                /* Action Buttons */
                .nav-corp__actions {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                .btn--nav { 
                    padding: 0.6rem 1.5rem; 
                    font-size: 0.8125rem; 
                    border-radius: 50px;
                    box-shadow: 0 4px 15px rgba(26, 42, 58, 0.15);
                    transition: all 0.3s ease;
                }
                .btn--nav:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(26, 42, 58, 0.25);
                }

                /* Mobile Menu Toggle */
                .nav-corp__toggle { 
                    display: none; 
                    flex-direction: column; 
                    justify-content: space-between;
                    width: 28px;
                    height: 20px;
                    border: none; 
                    background: none; 
                    cursor: pointer;
                    padding: 0;
                }
                .nav-corp__toggle span { 
                    width: 100%; 
                    height: 2px; 
                    background: var(--color-primary-dark); 
                    transition: all 0.3s ease;
                    border-radius: 2px;
                }

                @media (max-width: 1024px) {
                    .nav-corp__list { 
                        display: none; 
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: #fff;
                        flex-direction: column;
                        padding: 2rem;
                        gap: 1.5rem;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    }
                    .nav-corp__list--open { display: flex; }
                    .nav-corp__toggle { display: flex; }
                    .top-bar__text { display: none; }
                    .top-bar__flex { justify-content: center; }
                }
            `}</style>
        </header>
    );
};

export default Navbar;
