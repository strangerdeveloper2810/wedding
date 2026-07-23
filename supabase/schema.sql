-- ============================================================
--  Thiệp cưới — schema Supabase
--  Chạy toàn bộ file này trong Supabase → SQL Editor → Run
-- ============================================================

-- 1) Bảng RSVP (xác nhận tham dự) — RIÊNG TƯ: chỉ gia đình xem qua dashboard
create table if not exists public.rsvp (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  guest_name  text not null,
  attendance  text not null,              -- 'nha_gai' | 'nha_trai' | 'ca_hai' | 'khong'
  guest_count int  not null default 1,
  message     text,
  constraint rsvp_name_len  check (char_length(guest_name) between 1 and 100),
  constraint rsvp_count_ok  check (guest_count between 0 and 20),
  constraint rsvp_msg_len   check (message is null or char_length(message) <= 1000)
);

-- 2) Bảng WISHES (lời chúc) — CÔNG KHAI: hiện sổ lưu bút trên trang
create table if not exists public.wishes (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  message     text not null,
  constraint wishes_name_len check (char_length(name) between 1 and 100),
  constraint wishes_msg_len  check (char_length(message) between 1 and 1000)
);

-- 3) Bật Row Level Security
alter table public.rsvp   enable row level security;
alter table public.wishes enable row level security;

-- 4) Policies
--    RSVP: khách (anon) chỉ được GHI, KHÔNG được đọc (bảo mật danh sách)
drop policy if exists rsvp_insert_anon on public.rsvp;
create policy rsvp_insert_anon on public.rsvp
  for insert to anon with check (true);

--    WISHES: khách được GHI + ĐỌC (để hiện sổ lưu bút)
drop policy if exists wishes_insert_anon on public.wishes;
create policy wishes_insert_anon on public.wishes
  for insert to anon with check (true);

drop policy if exists wishes_select_anon on public.wishes;
create policy wishes_select_anon on public.wishes
  for select to anon using (true);
