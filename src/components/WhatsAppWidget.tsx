"use client";

const WhatsAppWidget = () => {
    const phoneNumber = "917877744377";
    const message = "Hello, I am interested in your industrial products.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-widget"
            title="Chat with us via WhatsApp"
        >
            <div className="whatsapp-icon">
                <svg viewBox="0 0 24 24" width="32" height="32">
                    <path fill="#fff" d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.087 3.388L6.5 18.5l3.29-.861a5.733 5.733 0 002.241.459c3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.759-5.767-5.759zm3.377 8.272c-.14.391-.711.713-1.018.759-.282.043-.639.065-1.031-.059-.243-.075-.544-.19-.94-.356-1.685-.694-2.775-2.411-2.859-2.522-.084-.111-.694-.924-.694-1.764 0-.84.444-1.252.602-1.42.158-.168.346-.21.463-.21s.233.003.334.01c.11.008.258-.04.405.314.158.384.544 1.32.592 1.417.048.097.08.21.011.334-.06.126-.06.21-.149.314-.09.105-.18.232-.258.312-.089.091-.182.19-.08.365.102.175.452.748.97 1.209.667.594 1.23.782 1.405.869.175.087.278.073.38-.044.102-.118.444-.518.563-.694.119-.175.238-.148.405-.084.168.065 1.065.503 1.248.595.183.092.304.137.349.213.045.076.045.438-.095.829z"></path>
                </svg>
            </div>
            
            <style jsx>{`
                .whatsapp-widget {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 1000;
                    cursor: pointer;
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .whatsapp-widget:hover {
                    transform: scale(1.15) rotate(5deg);
                }
                .whatsapp-icon {
                    width: 60px;
                    height: 60px;
                    background-color: #25d366;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
                    position: relative;
                }
                .whatsapp-icon::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: #25d366;
                    border-radius: 50%;
                    z-index: -1;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
            `}</style>
        </a>
    );
};

export default WhatsAppWidget;
