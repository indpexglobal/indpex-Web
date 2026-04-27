"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const BRANDS_MENU = [
  { name: "SKF", tagline: "Swedish precision — world's #1 bearing brand", color: "#1e40af", filter: "SKF" },
  { name: "FAG / Schaeffler", tagline: "German engineering — FAG & INA product lines", color: "#b91c1c", filter: "FAG" },
  { name: "NBC", tagline: "Made in India — NEI Jaipur, IS/ISO certified", color: "#065f46", filter: "NBC" },
  { name: "Timken", tagline: "USA engineering — tapered roller specialists", color: "#92400e", filter: "Timken" },
  { name: "NTN", tagline: "Japanese precision — full bearing range", color: "#5b21b6", filter: "NTN" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBrandsOpen, setIsBrandsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const searchParams = useSearchParams();
    const currentBrand = searchParams.get("brand");
    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsBrandsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className={`header-corp ${isScrolled ? 'header--scrolled' : ''}`}>
            <nav className="nav-corp">
                <div className="l-container nav-corp__flex">
                    <Link href="/" className="nav-corp__logo" onClick={() => setIsMenuOpen(false)}>
                        <span className="logo-icon">IG</span>
                        INDPEX <span className="logo-accent">GLOBAL</span>
                    </Link>
                    
                    <ul className={`nav-corp__list ${isMenuOpen ? 'nav-corp__list--open' : ''}`}>
                        <li><Link href="/" className="nav-corp__link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/products" className="nav-corp__link" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                        
                        {/* Brands Dropdown */}
                        <li 
                            ref={dropdownRef}
                            className="relative group/brands py-2 md:py-0"
                            onMouseEnter={() => setIsBrandsOpen(true)}
                            onMouseLeave={() => setIsBrandsOpen(false)}
                        >
                            <button 
                                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                                className={`nav-corp__link flex items-center gap-1 w-full text-left py-2 md:py-4 ${isBrandsOpen ? 'text-[var(--color-primary)]' : ''}`}
                            >
                                Brands
                                <svg className={`w-4 h-4 transition-transform duration-200 ${isBrandsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`
                                md:absolute md:top-full md:left-0 md:w-72 md:bg-white md:rounded-xl md:shadow-2xl md:border md:border-slate-100 md:z-50
                                transition-all duration-200 ease-in-out
                                ${isBrandsOpen 
                                    ? 'opacity-100 translate-y-0 visible max-h-[600px] py-2' 
                                    : 'opacity-0 -translate-y-2 invisible max-h-0 pointer-events-none md:max-h-none'
                                }
                                bg-slate-50/50 md:bg-white rounded-lg
                            `}>
                                {/* Invisible Bridge to prevent closing on gap hover */}
                                <div className="hidden md:block absolute -top-4 left-0 w-full h-4" />
                                
                                <div className="px-2">
                                    {BRANDS_MENU.map((brand) => (
                                        <Link
                                            key={brand.name}
                                            href={`/products?brand=${brand.filter}`}
                                            onClick={() => {
                                                setIsBrandsOpen(false);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`
                                                group flex flex-col p-3 rounded-lg transition-all duration-200
                                                hover:bg-slate-100/80 relative overflow-hidden mb-1
                                                ${currentBrand === brand.filter ? 'bg-slate-100/80' : ''}
                                            `}
                                            style={{ borderLeft: `4px solid ${brand.color}` }}
                                        >
                                            <span className="text-[0.8rem] font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
                                                {brand.name}
                                                {currentBrand === brand.filter && (
                                                    <span className="ml-2 text-[9px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded uppercase font-extrabold">Active</span>
                                                )}
                                            </span>
                                            <span className="text-[0.7rem] text-slate-500 mt-0.5 leading-tight">{brand.tagline}</span>
                                        </Link>
                                    ))}
                                </div>
                                <Link 
                                    href="/products" 
                                    className="block p-4 mt-2 bg-slate-100/50 md:bg-slate-50 text-center text-[0.7rem] font-bold text-slate-600 hover:text-[var(--color-primary)] transition-colors border-t border-slate-100"
                                    onClick={() => {
                                        setIsBrandsOpen(false);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    View All Products →
                                </Link>
                            </div>
                        </li>

                        <li><Link href="/industries" className="nav-corp__link" onClick={() => setIsMenuOpen(false)}>Industries</Link></li>
                        <li><Link href="/about" className="nav-corp__link" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    </ul>

                    <div className="nav-corp__actions">
                        <Link href="/contact" className="btn btn--primary btn--nav">Get A Quote</Link>
                        <button 
                            className={`nav-corp__toggle ${isMenuOpen ? 'nav-corp__toggle--active' : ''}`}
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
