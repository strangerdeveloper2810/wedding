import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL as string;
const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string;

// Client dùng ở phía trình duyệt. An toàn khi lộ anon key vì đã bật RLS
// (khách chỉ được ghi rsvp/wishes và đọc wishes — xem supabase/schema.sql).
export const supabase = createClient(url, anonKey, {
  // persistSession: true để trang /admin giữ đăng nhập. Khách thường không login
  // nên không có session nào được lưu — vẫn an toàn.
  auth: { persistSession: true, autoRefreshToken: true },
});
