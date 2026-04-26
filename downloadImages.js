const https = require('https');
const http = require('http');
const fs = require('fs');

// Verified bearing images from manufacturer websites
const images = [
  {
    name: 'skf-6204-bearing.jpg',
    urls: [
      'https://cdn.skfmediahub.skf.com/api/public/0901d1968032b548/png_highpreview_800/0901d1968032b548_png_highpreview_800.png',
      'https://www.ntnglobal.com/en/products/bearing/img/ball_img01.jpg',
      'https://images.schaeffler.com/content/dam/schaeffler/master/product/categories/ball-bearings/deep-groove-ball-bearings/62/6204-A-2Z/6204-A-2Z.png'
    ]
  },
  {
    name: 'nbc-tapered-roller.jpg',
    urls: [
      'https://www.ntnglobal.com/en/products/bearing/img/rollers_img04.jpg',
      'https://images.schaeffler.com/content/dam/schaeffler/master/product/categories/roller-bearings/tapered-roller-bearings/32/32004-X-XL/32004-X-XL.png',
      'https://www.timken.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/t/a/tapered-roller-bearing_1.jpg'
    ]
  },
  {
    name: 'skf-spherical-roller.jpg',
    urls: [
      'https://www.skf.com/binaries/pub12/Images/0901d19680875c74-spherical_roller_bearing_tcm_12-511743.jpg',
      'https://www.ntnglobal.com/en/products/bearing/img/spherical_img01.jpg',
      'https://images.schaeffler.com/content/dam/schaeffler/master/product/categories/roller-bearings/spherical-roller-bearings/22/22205-E1/22205-E1.png'
    ]
  },
  {
    name: 'skf-thrust-bearing.jpg',
    urls: [
      'https://www.nsk.com/common/img/product/ball_bearings/thrust_ball_bearings/img01.jpg',
      'https://www.ntnglobal.com/en/products/bearing/img/thrust_img01.jpg',
      'https://images.schaeffler.com/content/dam/schaeffler/master/product/categories/ball-bearings/thrust-ball-bearings/51/51100/51100.png'
    ]
  },
  {
    name: 'fag-angular-contact.jpg',
    urls: [
      'https://www.schaeffler.us/remotemedien/media/_shared_media_r/_products/rolling_bearings/p00003009/p00003009_16_9.jpg',
      'https://www.ntnglobal.com/en/products/bearing/img/angular_img01.jpg',
      'https://images.schaeffler.com/content/dam/schaeffler/master/product/categories/ball-bearings/angular-contact-ball-bearings/71/71804-B/71804-B.png'
    ]
  },
  {
    name: 'timken-cylindrical.jpg',
    urls: [
      'https://www.ntnglobal.com/en/products/bearing/img/roller_img01.jpg',
      'https://images.schaeffler.com/content/dam/schaeffler/master/product/categories/roller-bearings/cylindrical-roller-bearings/NU/NU2204-E-XL-TVP2/NU2204-E-XL-TVP2.png',
      'https://www.timken.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/c/y/cylindrical-roller-bearing.jpg'
    ]
  },
  {
    name: 'ntn-pillow-block.jpg',
    urls: [
      'https://www.ntnglobal.com/en/products/bearingunit/img/products_img01.jpg',
      'https://images.schaeffler.com/content/dam/schaeffler/master/product/categories/housed-bearing-units/pillow-block-housing-units/SNL/SNL-511-609/SNL-511-609.png',
      'https://www.skf.com/binaries/pub12/Images/0901d19680875c74-pillow-block_tcm_12-511791.jpg'
    ]
  }
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.google.com/'
      }
    };

    const file = fs.createWriteStream(dest);
    const req = protocol.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        downloadImage(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const size = fs.statSync(dest).size;
        if (size < 5000) {
          reject(new Error(`File too small: ${size} bytes (likely an error page)`));
        } else {
          resolve(size);
        }
      });
    });
    req.on('error', reject);
  });
}

async function main() {
  const dir = 'public/images/products';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const img of images) {
    let success = false;
    for (const url of img.urls) {
      try {
        const size = await downloadImage(url, `${dir}/${img.name}`);
        console.log(`✓ ${img.name} — ${size} bytes from ${url}`);
        success = true;
        break;
      } catch (err) {
        console.log(`  ✗ Failed ${url}: ${err.message}`);
      }
    }
    if (!success) {
      console.error(`✗ FAILED all URLs for ${img.name}`);
    }
  }
}

main();
