# Thiệp cưới online — Minh Luân & Thu Trang 💌

Thiệp cưới điện tử (single-page) cho lễ thành hôn **Micae Nguyễn Võ Minh Luân** & **Maria Nguyễn Thị Thu Trang** — `08.08.2026`, Thủ Đức · Sài Gòn.

Phong cách: **sang trọng · trẻ trung · hiện đại**, tông màu **đỏ đô (burgundy) · kem · nhũ vàng**, monogram *LT* + thánh giá (đám cưới Công giáo).

## 🧱 Công nghệ

- [Astro](https://astro.build) 5 (single-page, tối ưu tốc độ)
- TypeScript (strict)
- [Tailwind CSS](https://tailwindcss.com) 4 (qua `@tailwindcss/vite`)
- Google Fonts: Fraunces · Cormorant Garamond · EB Garamond · Be Vietnam Pro · Dancing Script
- Quản lý gói bằng **pnpm** (bắt buộc, không dùng npm)

## 🚀 Chạy dự án

```bash
pnpm install     # cài dependencies (lần đầu)
pnpm dev         # chạy dev server → http://localhost:4321
pnpm build       # build production → thư mục dist/
pnpm preview     # xem thử bản build
```

> Lưu ý: đã khai báo `pnpm.onlyBuiltDependencies` trong `package.json` để pnpm chạy build script của `esbuild`/`sharp` (cần cho dev server & tối ưu ảnh).

## 🗺️ Các trang

| Đường dẫn | Nội dung |
|---|---|
| `/` | Trang chọn concept (picker) |
| `/concept-a` | **Editorial Quiet Luxury** — nền kem, typography tạp chí, layout bất đối xứng |
| `/concept-b` | **Cinematic Scroll** — nền tối, ảnh full-bleed, parallax, kể chuyện theo cuộn |

> Sau khi chốt concept chính thức, concept còn lại sẽ được gỡ và route được đưa về `/`.

## 📁 Cấu trúc

```
chang-wedding/
├── assets/               # Ảnh gốc (nguồn) + wedding-info.jpeg
├── public/
│   └── assets/           # Ảnh phục vụ web (copy từ assets/)
├── src/
│   ├── data/
│   │   └── wedding.ts    # ⭐ Nguồn dữ liệu DUY NHẤT (tên, gia đình, sự kiện, ảnh)
│   ├── layouts/
│   │   └── Base.astro    # Layout gốc (head, fonts, global.css)
│   ├── pages/
│   │   ├── index.astro   # Picker
│   │   ├── concept-a.astro
│   │   └── concept-b.astro
│   └── styles/
│       └── global.css    # Tailwind + biến màu + tiện ích reveal
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## ✏️ Chỉnh sửa nội dung

Toàn bộ thông tin cưới nằm ở **`src/data/wedding.ts`** — sửa một chỗ, cả hai concept tự cập nhật:

- `groom` / `bride`: tên thánh, họ tên, vai vế, ba mẹ, quê quán
- `events`: danh sách sự kiện (Vu Quy, Hôn Phối, Tiệc, Thành Hôn) kèm thời gian, địa điểm, `mapQuery`
- `verse`: câu Kinh Thánh
- `weddingDateISO`: mốc đếm ngược
- `photos`: phân loại ảnh theo "gu" (classic / editorial / mono...)

Thêm/đổi ảnh: bỏ file vào `public/assets/` rồi khai báo đường dẫn trong `photos`.

## 📌 Việc còn lại (roadmap)

- [ ] Chốt concept chính thức (A hoặc B)
- [ ] Form **RSVP / xác nhận tham dự** thật (hiện là nút placeholder `href="#"`)
- [ ] **Mừng cưới**: mã QR + số tài khoản ngân hàng
- [ ] Nhạc nền + nút bật/tắt
- [ ] Sổ **lời chúc** từ khách mời
- [ ] Tối ưu ảnh bằng `<Image />` của Astro (hiện dùng `<img>` tĩnh)
- [ ] Deploy (Vercel / Netlify / Cloudflare Pages)

---

Made with ♥ for Luân & Trang.
