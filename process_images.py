import json
import os
import random
from PIL import Image, ImageEnhance

base_dir = r'C:\Users\pavan\.gemini\antigravity\brain\4071965a-3b1d-4c61-98c7-dd5bf3093d84'
out_dir = r'public/images/products'

base_images = {
    'deep_groove': [
        os.path.join(base_dir, 'gen_deep_groove_1_1777355096287.png'),
        os.path.join(base_dir, 'gen_deep_groove_2_1777355112716.png'),
        os.path.join(base_dir, 'gen_deep_groove_3_1777355180058.png')
    ],
    'angular_contact': [
        os.path.join(base_dir, 'gen_angular_contact_1_1777355142318.png'),
        os.path.join(base_dir, 'gen_angular_contact_2_1777355202826.png')
    ],
    'spherical_roller': [os.path.join(base_dir, 'gen_spherical_roller_2_1777355220316.png')],
    'tapered_roller': [os.path.join(base_dir, 'gen_tapered_roller_2_1777355237287.png')],
    'cylindrical_roller': [os.path.join(base_dir, 'gen_cylindrical_roller_2_1777355276283.png')],
    'needle_roller': [os.path.join(base_dir, 'gen_needle_roller_1_1777355294976.png')],
    'pillow_block': [os.path.join(base_dir, 'gen_pillow_block_1_1777355162812.png')],
    'insert_bearing': [os.path.join(base_dir, 'gen_insert_bearing_1_1777355310047.png')]
}

def get_base_image(product_name):
    name = product_name.lower()
    if 'angular contact' in name: return random.choice(base_images['angular_contact'])
    if 'spherical roller' in name: return base_images['spherical_roller'][0]
    if 'tapered roller' in name: return base_images['tapered_roller'][0]
    if 'cylindrical roller' in name: return base_images['cylindrical_roller'][0]
    if 'needle roller' in name: return base_images['needle_roller'][0]
    if 'pillow block' in name or 'flanged bearing' in name: return base_images['pillow_block'][0]
    if 'insert bearing' in name: return base_images['insert_bearing'][0]
    return random.choice(base_images['deep_groove'])

def process_image(img_path, out_path):
    img = Image.open(img_path)
    
    # Random flip
    if random.choice([True, False]):
        img = img.transpose(Image.FLIP_LEFT_RIGHT)
        
    # Minor crop to make it look slightly different (zoom in by 2-5%)
    width, height = img.size
    crop_pct = random.uniform(0.02, 0.05)
    left = width * crop_pct
    top = height * crop_pct
    right = width * (1 - crop_pct)
    bottom = height * (1 - crop_pct)
    img = img.crop((left, top, right, bottom)).resize((width, height), Image.Resampling.LANCZOS)
    
    # Slight brightness/contrast tweak
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(random.uniform(0.95, 1.05))
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(random.uniform(0.95, 1.05))
    
    img.save(out_path)

with open('src/data/products.json', 'r') as f:
    products = json.load(f)

# List of products we manually added specific images for recently
recently_added = [
    'arcanol-multitop', 'arcanol-load150', 'arcanol-hyperform-46', 'arcanol-gearguard-320',
    'arcalub-c1', 'fag-heater150', 'fag-mounting-kit', 'fag-laser-align', 'schaeffler-smartcheck',
    'fag-sns-plummer', 'ina-kuve-linear', 'fag-precision-spindle',
    'skf-6024-m', 'skf-353101-hub-bearing', 'skf-lqcf-20-linear-rail', 'fag-6316-m-c3',
    'fag-22326-e1-k', 'fag-heater50-basic-230v', 'nbc-6305-zz', 'nbc-30205',
    'ntn-6206-llu', 'ntn-4t-32007', 'ntn-ucp-207', 'timken-lm11749-lm11710'
]

for p in products:
    if p['id'] in recently_added:
        continue
    
    # For generic old ones
    if 'local_image' in p and p['local_image'].startswith('/images/products/'):
        # Let's create a unique unbranded image
        base_img = get_base_image(p['name'])
        unique_name = f"{p['id']}-unbranded.png"
        out_path = os.path.join(out_dir, unique_name)
        
        try:
            process_image(base_img, out_path)
            p['local_image'] = f"/images/products/{unique_name}"
            print(f"Processed {p['id']} -> {unique_name}")
        except Exception as e:
            print(f"Error processing {p['id']}: {e}")

with open('src/data/products.json', 'w') as f:
    json.dump(products, f, indent=2)

print("Done processing products.json")
