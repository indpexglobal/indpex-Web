/**
 * 404 Page Logic - Roaming Traveller & Footprints
 */

const traveller = document.getElementById('traveller');
const container = document.querySelector('.traveller-container');
const canvas = document.getElementById('footprint-canvas');
const ctx = canvas.getContext('2d');

let footprints = [];
let posX = -100;
let posY = 0;
let angle = 0;
let speed = 2;

/**
 * Initialize footprints canvas
 */
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

/**
 * Animation Loop
 */
function animate() {
    // 1. Update Traveller Position (Roaming)
    posX += Math.cos(angle) * speed;
    posY += Math.sin(angle) * speed;
    
    // Add noise to angle for "roaming" effect
    angle += (Math.random() - 0.5) * 0.1;
    
    // Keep in bounds (mostly)
    if (posX > window.innerWidth + 100) posX = -100;
    if (posY > 200 || posY < -200) angle *= -1;

    container.style.transform = `translate(${posX}px, ${posY}px) rotate(${angle * 10}deg)`;

    // 2. Add Footprints
    if (Math.random() > 0.9) {
        footprints.push({
            x: posX + 20,
            y: window.innerHeight * 0.8 + posY + 50,
            alpha: 1,
            life: 200
        });
    }

    // 3. Draw Footprints
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    
    footprints = footprints.filter(f => {
        f.life--;
        f.alpha = f.life / 200;
        ctx.globalAlpha = f.alpha;
        ctx.beginPath();
        ctx.ellipse(f.x, f.y, 4, 8, angle, 0, Math.PI * 2);
        ctx.fill();
        return f.life > 0;
    });

    requestAnimationFrame(animate);
}

// 4. Parallax Effect
window.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = mouseX * speed * 100;
        const y = mouseY * speed * 100;
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});

animate();
