const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  console.log('--- Starting Assets & Performance Optimization ---');

  // 1. Create public/img/commonBanner/1.webp if missing
  const bannerDir = path.join('public', 'img', 'commonBanner');
  if (!fs.existsSync(bannerDir)) fs.mkdirSync(bannerDir, { recursive: true });
  const bannerPath = path.join(bannerDir, '1.webp');

  const svg = `<svg width="1920" height="450" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#01223b;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#023c68;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#045791;stop-opacity:1" />
      </linearGradient>
      <pattern id="pat" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1.5" fill="#ffffff" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="1920" height="450" fill="url(#grad)" />
    <rect width="1920" height="450" fill="url(#pat)" />
  </svg>`;
  await sharp(Buffer.from(svg)).webp({ quality: 85 }).toFile(bannerPath);
  console.log('✓ Created banner:', bannerPath);

  // 2. Create public/img/blogs/shape.webp so Blogs.jsx stops 404ing
  const blogsDir = path.join('public', 'img', 'blogs');
  if (!fs.existsSync(blogsDir)) fs.mkdirSync(blogsDir, { recursive: true });
  const shapePath = path.join(blogsDir, 'shape.webp');

  const shapeSvg = `<svg width="80" height="8" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4 Q20 0, 40 4 T80 4" fill="none" stroke="#82c408" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`;
  await sharp(Buffer.from(shapeSvg)).webp({ quality: 90 }).toFile(shapePath);
  console.log('✓ Created shape:', shapePath);

  // 3. Compress huge PNG files in public/img
  const heavyPngs = [
    { file: 'public/img/blog1.png', maxW: 900 },
    { file: 'public/img/blog2.png', maxW: 900 },
    { file: 'public/img/blog3.png', maxW: 900 },
    { file: 'public/img/blog4.png', maxW: 900 },
    { file: 'public/img/prod3.png', maxW: 800 },
    { file: 'public/img/prod4.png', maxW: 800 },
    { file: 'public/img/prod5.png', maxW: 800 },
    { file: 'public/img/about/12.png', maxW: 900 },
    { file: 'public/img/about/13.png', maxW: 900 },
    { file: 'public/img/banner/1.png', maxW: 1600 },
    { file: 'public/img/banner/2.png', maxW: 1600 }
  ];

  for (const item of heavyPngs) {
    if (fs.existsSync(item.file)) {
      const origSize = fs.statSync(item.file).size;
      const tmpFile = item.file + '.tmp.png';
      try {
        await sharp(item.file)
          .resize({ width: item.maxW, withoutEnlargement: true })
          .png({ quality: 80, effort: 6 })
          .toFile(tmpFile);
        const newSize = fs.statSync(tmpFile).size;
        fs.unlinkSync(item.file);
        fs.renameSync(tmpFile, item.file);
        console.log(`✓ Compressed ${item.file}: ${(origSize/1024/1024).toFixed(2)}MB -> ${(newSize/1024).toFixed(0)}KB (-${Math.round((1 - newSize/origSize)*100)}%)`);
      } catch (err) {
        if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
        console.error(`Error compressing ${item.file}:`, err.message);
      }
    }
  }

  console.log('--- All assets optimized successfully ---');
}

run().catch(console.error);
