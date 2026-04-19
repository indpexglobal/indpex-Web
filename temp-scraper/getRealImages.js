const { chromium } = require('playwright');
const fs = require('fs');
const https = require('https');

async function scrapeRealImages() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('https://www.assambearing.in/skf', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);
  
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
        .filter(img => img.src && img.src.includes('http') && img.clientWidth > 50)
        .map(img => img.src);
  });
  
  // Also try ashoka
  let ashokaImages = [];
  try {
     await page.goto('https://ashokabearings.com/products', { waitUntil: 'domcontentloaded', timeout: 60000 });
     await page.waitForTimeout(3000);
     ashokaImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img')).map(i => i.src).filter(Boolean);
     });
  } catch(e) {}
  
  const allImageUrls = [...images, ...ashokaImages].filter(url => url.startsWith('http') && !url.includes('logo') && !url.includes('icon'));
  
  console.log("Found " + allImageUrls.length + " candidate images.");
  
  // We need 7 images
  const targetNames = [
    'skf-6204-bearing.jpg', 'nbc-tapered-roller.jpg', 'skf-spherical-roller.jpg',
    'skf-thrust-bearing.jpg', 'fag-angular-contact.jpg', 'timken-cylindrical.jpg', 'ntn-pillow-block.jpg'
  ];
  
  for(let i=0; i<targetNames.length; i++) {
     const url = allImageUrls[i % allImageUrls.length];
     if (!url) break;
     
     // Download using playwright response buffer since standard fetch might be blocked
     try {
       const newPage = await browser.newPage();
       const response = await newPage.goto(url);
       const buffer = await response.body();
       fs.writeFileSync(`public/images/products/${targetNames[i]}`, buffer);
       console.log(`Saved ${targetNames[i]} from ${url}`);
       await newPage.close();
     } catch (e) {
       console.error("Failed to save", url, e.message);
     }
  }

  await browser.close();
}

scrapeRealImages().catch(console.error);
