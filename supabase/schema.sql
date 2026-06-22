-- Proudly. Supabase schema starter
-- Enable PostGIS if your Supabase project supports it.
create extension if not exists postgis;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  traveler_type text check (traveler_type in ('solo','couple','friends','group','business')),
  safety_preferences text[] default '{}',
  is_private boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.cities (
  id text primary key,
  name text not null,
  country text not null,
  score int not null default 0,
  tagline text,
  safety_notes text,
  popular_for text[] default '{}',
  location geography(point, 4326),
  created_at timestamptz default now()
);

create table if not exists public.places (
  id text primary key,
  type text not null check (type in ('stay','nightlife','event','experience','guide','flight')),
  name text not null,
  city_id text references public.cities(id),
  neighborhood text,
  description text,
  image text,
  rating numeric default 0,
  review_count int default 0,
  price_from numeric,
  currency text default 'USD',
  categories text[] default '{}',
  amenities text[] default '{}',
  safety_status text not null default 'community',
  safety_score int not null default 0,
  safety_tags text[] default '{}',
  verified_by text,
  last_reviewed date,
  safety_notes text,
  location geography(point, 4326),
  booking_url text,
  starts_at timestamptz,
  ends_at timestamptz,
  approved boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  place_id text references public.places(id) on delete cascade,
  rating int check (rating between 1 and 5),
  safety_rating int check (safety_rating between 1 and 5),
  body text,
  is_anonymous boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.saved_places (
  user_id uuid references auth.users(id) on delete cascade,
  place_id text references public.places(id) on delete cascade,
  created_at timestamptz default now(),
  primary key(user_id, place_id)
);

create table if not exists public.trips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  city_id text references public.cities(id),
  start_date date,
  end_date date,
  travelers int default 1,
  created_at timestamptz default now()
);

create table if not exists public.trip_items (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references public.trips(id) on delete cascade,
  place_id text references public.places(id) on delete set null,
  title text not null,
  item_date date,
  item_time text,
  status text default 'planned',
  created_at timestamptz default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  place_id text references public.places(id) on delete set null,
  provider text default 'mock',
  provider_booking_id text,
  status text default 'pending',
  total numeric,
  currency text default 'USD',
  start_date date,
  end_date date,
  travelers int default 1,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.saved_places enable row level security;
alter table public.trips enable row level security;
alter table public.trip_items enable row level security;
alter table public.bookings enable row level security;
alter table public.reviews enable row level security;

create policy "Public approved places are readable" on public.places for select using (approved = true);
create policy "Cities are readable" on public.cities for select using (true);
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users manage own saved places" on public.saved_places for all using (auth.uid() = user_id);
create policy "Users manage own trips" on public.trips for all using (auth.uid() = user_id);
create policy "Users manage own bookings" on public.bookings for all using (auth.uid() = user_id);
create policy "Reviews readable" on public.reviews for select using (true);
create policy "Users create reviews" on public.reviews for insert with check (auth.uid() = user_id or is_anonymous = true);
