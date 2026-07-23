// Nguồn dữ liệu duy nhất cho cả 3 concept — chỉnh ở đây là mọi trang cập nhật.

export interface Person {
  fullName: string;
  saintName: string;
  short: string;
  role: string;
  father: string;
  mother: string;
  hometown: string;
}

export interface WeddingEvent {
  key: string;
  side: 'Nhà gái' | 'Nhà trai';
  title: string;
  time?: string;
  reception?: string;
  date: string;
  weekday?: string;
  lunar?: string;
  venue: string;
  address: string;
  mapQuery: string;
  /** Link Google Maps chính xác (ưu tiên hơn mapQuery nếu có) */
  mapUrl?: string;
}

export const groom: Person = {
  fullName: 'Nguyễn Võ Minh Luân',
  saintName: 'Micae',
  short: 'Minh Luân',
  role: 'Trưởng nam',
  father: 'Ông Nguyễn Thái Bình',
  mother: 'Bà Võ Tuyết Trinh',
  hometown: 'Bình Phước, Vĩnh Long',
};

export const bride: Person = {
  fullName: 'Nguyễn Thị Thu Trang',
  saintName: 'Maria',
  short: 'Thu Trang',
  role: 'Út nữ',
  father: 'Ông Nguyễn Văn Tâm',
  mother: 'Bà Lưu Thị Sương',
  hometown: 'Tam Bình, Thủ Đức, TP.HCM',
};

export const monogram = 'LT';

export const verse = {
  text: 'Sự gì Thiên Chúa đã kết hợp, loài người không được phân ly',
  ref: 'Tin Mừng theo Thánh Mátthêu 19:6',
};

// Ngày cưới chính (Lễ Hôn Phối nhà gái) — dùng cho đếm ngược
export const weddingDateISO = '2026-08-08T10:30:00+07:00';
export const weddingDateLabel = '08 · 08 · 2026';

export const events: WeddingEvent[] = [
  {
    key: 'vuquy',
    side: 'Nhà gái',
    title: 'Lễ Vu Quy',
    time: '09:00',
    date: '08.08.2026',
    weekday: 'Thứ Bảy',
    lunar: 'Nhằm 26 tháng 6 năm Bính Ngọ',
    venue: 'Tư gia nhà gái',
    address: '06, Đường số 3, Tam Bình, Thủ Đức, TP.HCM',
    mapQuery: 'Tam Bình, Thủ Đức, Hồ Chí Minh',
    mapUrl: 'https://maps.app.goo.gl/JqQQ4sCLbB32fr4s9',
  },
  {
    key: 'honphoi',
    side: 'Nhà gái',
    title: 'Thánh Lễ Hôn Phối',
    time: '10:30',
    date: '08.08.2026',
    weekday: 'Thứ Bảy',
    lunar: 'Nhằm 26 tháng 6 năm Bính Ngọ',
    venue: 'Nhà thờ Phanxicô Xaviê',
    address: '140 Phú Châu, Thủ Đức, TP.HCM',
    mapQuery: 'Nhà thờ Phanxicô Xaviê Phú Châu Thủ Đức',
  },
  {
    key: 'tieccuoi',
    side: 'Nhà gái',
    title: 'Tiệc Chung Vui',
    time: '12:00',
    reception: 'Đón khách 11:30',
    date: '08.08.2026',
    weekday: 'Thứ Bảy',
    venue: 'Sảnh tiệc Nhà thờ Phanxicô Xaviê',
    address: '140 Phú Châu, Thủ Đức, TP.HCM',
    mapQuery: 'Nhà thờ Phanxicô Xaviê Phú Châu Thủ Đức',
  },
  {
    key: 'thanhhon',
    side: 'Nhà trai',
    title: 'Lễ Thành Hôn',
    date: '11.08.2026',
    lunar: 'Nhằm 29 tháng 6 năm Bính Ngọ',
    venue: 'Tư gia nhà trai',
    address: 'ĐT909, Bình Phước, Vĩnh Long',
    mapQuery: 'Bình Phước, Vĩnh Long',
    mapUrl: 'https://maps.app.goo.gl/Kq1PbZYYHZY9Uyju8',
  },
];

// Phân loại kho ảnh theo "gu" để mỗi concept lấy đúng chất
export const photos = {
  // Cổ điển villa Pháp — trang trọng, timeless
  classic: [
    '/assets/concept-2.jpeg',
    '/assets/concept-3.jpeg',
    '/assets/concept-5.jpeg',
    '/assets/concept-6.jpeg',
    '/assets/concept-7.jpeg',
    '/assets/concept-10.jpeg',
    '/assets/concept-11.jpeg',
  ],
  classicWide: ['/assets/concept-20.jpeg'],
  brideSolo: '/assets/concept-1.jpeg',
  // Editorial / thành phố — trẻ trung, high-fashion
  editorial: [
    '/assets/concept-9.jpeg',
    '/assets/concept-12.jpeg',
    '/assets/concept-13.jpeg',
    '/assets/concept-14.jpeg',
    '/assets/concept-4.jpeg',
  ],
  editorialWide: [
    '/assets/concept-8.jpeg',
    '/assets/concept-18.jpeg',
    '/assets/concept-19.jpeg',
  ],
  // Đen trắng / cảm xúc
  mono: [
    '/assets/concept-15.jpeg',
    '/assets/concept-16.jpeg',
  ],
  monoWide: [
    '/assets/concept-17.jpeg',
    '/assets/concept-21.jpeg',
  ],
};
