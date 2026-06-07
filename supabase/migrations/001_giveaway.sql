-- S.Y.S.T.E.M. KC Business Scholarship — Giveaway entries table
-- Run this in your Supabase project's SQL editor

create table if not exists giveaway_entries (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz default now(),

  -- Contact
  name             text not null,
  business         text not null,
  industry         text,
  employees        text,
  email            text not null,
  phone            text,

  -- Need-based scholarship questions (carry the most selection weight)
  reason           text,   -- Why does your business need this program?
  biggest_challenge text,  -- What's costing you the most right now?
  what_would_change text,  -- What would actually change if you won?

  -- Referral tracking
  referral_code    text unique not null,  -- this entry's shareable code
  referred_by      text,                   -- referral_code of the referrer
  referral_count   integer default 0,      -- how many others this entry has referred

  -- Selection
  cycle            text,           -- e.g. "2026-Q2" — set by admin when processing
  selected         boolean default false,
  selection_notes  text            -- admin-only notes on selection decision
);

-- Fast lookups
create index giveaway_entries_referral_code_idx on giveaway_entries(referral_code);
create index giveaway_entries_referred_by_idx   on giveaway_entries(referred_by);
create index giveaway_entries_email_idx         on giveaway_entries(email);

-- Row-level security: API routes use service role key, no public access
alter table giveaway_entries enable row level security;
create policy "Service role full access" on giveaway_entries
  using (true)
  with check (true);

-- RPC: increment referral count when someone uses a referral link
create or replace function increment_referral_count(code text)
returns void language plpgsql as $$
begin
  update giveaway_entries
  set referral_count = referral_count + 1
  where referral_code = code;
end;
$$;
