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
            <nav className="nav-corp">
                <div className="l-container nav-corp__flex">
                    <Link href="/" className="nav-corp__logo">
                        <span className="logo-icon">IG</span>
                        INDPEX <span className="logo-accent">GLOBAL</span>
                    </Link>
                    
                    <ul className={`nav-corp__list ${isMenuOpen ? 'nav-corp__list--open' : ''}`}>
                        <li><Link href="/" className="nav-corp__link">Home</Link></li>
                        <li><Link href="/products" className="nav-corp__link">Products</Link></li>
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
        </header>
    );
};

export default Navbar;
