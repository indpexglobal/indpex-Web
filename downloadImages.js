const https = require('https');
const fs = require('fs');

const images = [
    { name: 'skf-6204-bearing.jpg', url: 'https://m.media-amazon.com/images/I/71Xm04T6TdL._AC_SL1500_.jpg' },
    { name: 'nbc-tapered-roller.jpg', url: 'https://m.media-amazon.com/images/I/61b7l4Y-yNL._AC_SL1500_.jpg' },
    { name: 'skf-spherical-roller.jpg', url: 'https://m.media-amazon.com/images/I/61d-+wP0y6L._AC_SL1000_.jpg' },
    { name: 'skf-thrust-bearing.jpg', url: 'https://m.media-amazon.com/images/I/61-91a5zS0L._AC_SL1000_.jpg' },
    { name: 'fag-angular-contact.jpg', url: 'https://m.media-amazon.com/images/I/61f-1lM34SL._AC_SL1000_.jpg' },
    { name: 'timken-cylindrical.jpg', url: 'https://m.media-amazon.com/images/I/71oD1s-6sVL._AC_SL1500_.jpg' },
    { name: 'ntn-pillow-block.jpg', url: 'https://m.media-amazon.com/images/I/71Yx-zXvUeL._AC_SL1500_.jpg' }
];

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
  }
};

images.forEach(img => {
  https.get(img.url, options, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Failed to get ${img.url}: ${res.statusCode}`);
      return;
    }
    const path = `public/images/products/${img.name}`;
    const file = fs.createWriteStream(path);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${img.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });
});
