const fs = require('fs');

const brands = ['SKF', 'FAG / Schaeffler', 'NBC', 'Timken', 'NTN'];
const types = [
    { type: 'Deep Groove Ball Bearing', desc: 'High-speed precision engineered for industrial electric motors. Ensures zero-friction rotational stability under load.', baseLoad: 10, img: '/images/products/skf-6204-bearing.jpg' },
    { type: 'Angular Contact Bearing', desc: 'Engineered for axial and radial loads in high-velocity spindle applications. Features optimized cage geometry.', baseLoad: 25, img: '/images/products/fag-angular-contact.jpg' },
    { type: 'Spherical Roller Bearing', desc: 'Self-aligning powerhouse designed to accommodate heavy radial and impact loads in mining and aggregate processing.', baseLoad: 90, img: '/images/products/skf-spherical-roller.jpg' },
    { type: 'Tapered Roller Bearing', desc: 'Exceptional rigidity for heavy-duty automotive transmissions. Maintains precise shaft alignment under maximum stress.', baseLoad: 120, img: '/images/products/nbc-tapered-roller.jpg' },
    { type: 'Cylindrical Roller', desc: 'Optimized roller-end profiling minimizes stress concentrations, delivering unmatched longevity in industrial gearboxes.', baseLoad: 60, img: '/images/products/timken-cylindrical.jpg' },
    { type: 'Thrust Ball Bearing', desc: 'Precision thrust plate and caged ball assembly designed to manage extreme axial compression forces smoothly.', baseLoad: 20, img: '/images/products/skf-thrust-bearing.jpg' },
    { type: 'Pillow Block Unit', desc: 'Ready-to-mount bearing unit offering robust shaft support and self-alignment capabilities for industrial conveyors.', baseLoad: 15, img: '/images/products/ntn-pillow-block.jpg' }
];

const generatedProducts = [];
let idCounter = 1;

for (let i = 0; i < 30; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const typeObj = types[Math.floor(Math.random() * types.length)];
    
    const size = Math.floor(Math.random() * 50) + 10;
    const modelNumber = Math.floor(Math.random() * 9000) + 1000;
    const dynamicLoad = typeObj.baseLoad + Math.floor(Math.random() * 40);
    
    generatedProducts.push({
        id: `mock-${idCounter++}`,
        name: `${brand} ${modelNumber} ${typeObj.type}`,
        brand: brand,
        specs: `Dynamic Load: ${dynamicLoad}kN | Bore: ${size}mm. Industrial Grade.`,
        description: typeObj.desc,
        local_image: typeObj.img
    });
}

fs.writeFileSync('src/data/products.json', JSON.stringify(generatedProducts, null, 2));
console.log("Expanded catalog to 30 items!");
