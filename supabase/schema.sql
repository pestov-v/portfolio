-- Portfolio Supabase schema
-- Run this in the SQL Editor of your Supabase project.
-- Recreates the two tables the app uses: analytics_events and chat_sessions.
--
-- The app authenticates with the public (publishable/anon) key for both reads
-- and writes, so RLS policies below grant the anon role the access each API
-- route needs. If you later add a SUPABASE_SECRET_KEY env var, you can tighten
-- these (e.g. drop the anon SELECT policies) since the service role bypasses RLS.

-- ---------------------------------------------------------------------------
-- analytics_events  (written by /api/analytics, read by /api/analytics-dashboard)
-- ---------------------------------------------------------------------------
create table if not exists public.analytics_events (
  id          uuid primary key default gen_random_uuid(),
  event_type  text not null,
  event_data  jsonb not null default '{}'::jsonb,
  country     text,
  city        text,
  user_agent  text,
  referrer    text,
  created_at  timestamptz not null default now()
);

create index if not exists analytics_events_created_at_idx
  on public.analytics_events (created_at desc);
create index if not exists analytics_events_event_type_idx
  on public.analytics_events (event_type);

alter table public.analytics_events enable row level security;

drop policy if exists "anon insert analytics" on public.analytics_events;
create policy "anon insert analytics"
  on public.analytics_events for insert
  to anon
  with check (true);

drop policy if exists "anon select analytics" on public.analytics_events;
create policy "anon select analytics"
  on public.analytics_events for select
  to anon
  using (true);

-- ---------------------------------------------------------------------------
-- chat_sessions  (upserted by /api/chat, read/deleted by /api/chat-history)
-- session_id is the primary key so POST upsert (resolution=merge-duplicates) works.
-- ---------------------------------------------------------------------------
create table if not exists public.chat_sessions (
  session_id  text primary key,
  messages    jsonb not null default '[]'::jsonb,
  model       text,
  updated_at  timestamptz not null default now()
);

create index if not exists chat_sessions_updated_at_idx
  on public.chat_sessions (updated_at desc);

alter table public.chat_sessions enable row level security;

drop policy if exists "anon all chat_sessions" on public.chat_sessions;
create policy "anon all chat_sessions"
  on public.chat_sessions for all
  to anon
  using (true)
  with check (true);
