import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-corp" data-reveal="fade-in">
            <div className="l-container">
                <div className="footer-corp__grid">
                    <div className="footer-corp__brand" data-reveal="slide-right">
                        <h2 className="footer-corp__logo">INDPEX GLOBAL</h2>
                        <p className="footer-corp__desc">Himanshu Bearings & Vaibhav Ball & Bearings Group<br />Reliable Industrial Supply Chain Management.</p>
                        <p className="footer-corp__copy">&copy; {new Date().getFullYear()} Indpex Global. All Rights Reserved.</p>
                    </div>
                    <div className="footer-corp__nav" data-reveal="slide-left">
                        <div className="footer-corp__col">
                            <h4>Platform</h4>
                            <Link href="/products">Product Catalog</Link>
                            <Link href="/industries">Industrial Sectors</Link>
                            <Link href="/about">Corporate Profile</Link>
                        </div>
                        <div className="footer-corp__col">
                            <h4>Resources</h4>
                            <Link href="/contact">Request Quote</Link>
                            <Link href="/admin/login">Admin Portal</Link>
                            <Link href="#">Compliance</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
