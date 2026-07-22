// Tạo ảnh OG 1200x630 (preview khi share link) từ 1 ảnh cưới landscape.
// Chạy: pnpm optimize:og
import sharp from 'sharp';

const SRC = 'public/assets/concept-18.jpeg'; // ảnh landscape, đôi đứng gần
const OUT = 'public/og-image.jpg';

const gradient = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
         <stop offset="52%" stop-color="#1e080c" stop-opacity="0"/>
         <stop offset="100%" stop-color="#1e080c" stop-opacity="0.5"/>
       </linearGradient>
     </defs>
     <rect width="1200" height="630" fill="url(#g)"/>
   </svg>`
);

const info = await sharp(SRC)
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .composite([{ input: gradient, top: 0, left: 0 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(OUT);

console.log(`OG image: ${OUT} (${(info.size / 1024) | 0}KB, ${info.width}x${info.height})`);

// apple-touch-icon 180x180 từ favicon.svg (dùng cho iOS / PWA)
const icon = await sharp('public/favicon.svg', { density: 320 })
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');
console.log(`apple-touch-icon.png (${icon.width}x${icon.height})`);
