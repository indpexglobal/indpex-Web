const { chromium } = require('playwright');
const fs = require('fs');

const targetNames = [
  'skf-6204-bearing.jpg', 'nbc-tapered-roller.jpg', 'skf-spherical-roller.jpg',
  'skf-thrust-bearing.jpg', 'fag-angular-contact.jpg', 'timken-cylindrical.jpg', 'ntn-pillow-block.jpg'
];

async function extractGenuineBearings() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36'
  });
  
  const page = await context.newPage();
  
  console.log('Navigating to Ashoka Bearings...');
  await page.goto('https://ashokabearings.com/products', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  const ashokaImages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
        .filter(img => img.src.includes('http') && !img.src.includes('logo') && img.clientWidth > 40)
        .map(img => img.src);
  });
  
  console.log('Navigating to Universal Sales...');
  try {
      await page.goto('https://www.universalsales.co.in/products.html', { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2000);
  } catch(e) { }
  
  const uniImages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
        .filter(img => img.src && !img.src.includes('logo'))
        .map(img => img.src);
  });
  
  const allImageUrls = [...ashokaImages, ...uniImages].filter(Boolean);
  console.log("Found " + allImageUrls.length + " real bearing images from catalogs.");
  
  let i = 0;
  for(let j=0; j < allImageUrls.length && i < targetNames.length; j++) {
      const url = allImageUrls[j];
      if(url.includes('banner') || url.includes('bg') || url.includes('header')) continue;
      
      try {
          const newPage = await context.newPage();
          const response = await newPage.goto(url, { waitUntil: 'networkidle' });
          const buffer = await response.body();
          
          if(buffer.length > 5000) { // Verify it's not a tiny icon 
             fs.writeFileSync(`public/images/products/${targetNames[i]}`, buffer);
             console.log(`Saved ${targetNames[i]} from ${url} (${buffer.length} bytes)`);
             i++;
          }
          await newPage.close();
      } catch (err) {
          console.log(`Failed to download ${url}`);
      }
  }

  await browser.close();
}

extractGenuineBearings().catch(console.error);
