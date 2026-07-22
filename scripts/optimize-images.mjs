// Tối ưu ảnh: đọc ảnh gốc trong assets/, xuất bản nén + WebP + AVIF ra public/assets/
// Chạy: pnpm optimize:img
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets';
const OUT = 'public/assets';
const MAX_EDGE = 1600; // giới hạn cạnh dài (đủ nét cho web + retina ở các khổ hiển thị)

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.jpe?g$/i.test(f));

let before = 0;
let after = 0;

for (const file of files) {
  const srcPath = path.join(SRC, file);
  const base = file.replace(/\.jpe?g$/i, '');
  const meta = await sharp(srcPath).metadata();

  const resize =
    Math.max(meta.width ?? 0, meta.height ?? 0) > MAX_EDGE
      ? (meta.width ?? 0) >= (meta.height ?? 0)
        ? { width: MAX_EDGE }
        : { height: MAX_EDGE }
      : {};

  const pipe = sharp(srcPath).rotate().resize({ ...resize, withoutEnlargement: true });

  const jpg = path.join(OUT, `${base}.jpeg`);
  const webp = path.join(OUT, `${base}.webp`);
  const avif = path.join(OUT, `${base}.avif`);

  const rj = await pipe.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(jpg);
  const rw = await pipe.clone().webp({ quality: 76 }).toFile(webp);
  const ra = await pipe.clone().avif({ quality: 52 }).toFile(avif);

  const orig = (await sharp(srcPath).toBuffer()).length;
  before += orig;
  after += rj.size + rw.size + ra.size;
  console.log(
    `${file}: jpeg ${(rj.size / 1024) | 0}KB · webp ${(rw.size / 1024) | 0}KB · avif ${(ra.size / 1024) | 0}KB`
  );
}

console.log(
  `\nXong ${files.length} ảnh. Gốc ~${(before / 1048576).toFixed(1)}MB → jpeg tối ưu ~${(after / 1048576).toFixed(1)}MB (gồm cả webp+avif).`
);
