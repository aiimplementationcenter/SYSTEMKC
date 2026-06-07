# S.Y.S.T.E.M. KC — Full Site Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild systemkc.com from AI-automation-consulting positioning to money-model-first / operator-credibility positioning, with two homepages (national + local KC), a giveaway funnel with referral tracking, an application gate, and all supporting offer pages — while preserving existing industry/blog/legal pages and local SEO.

**Architecture:** Next.js 16 App Router, hybrid mode (remove `output: 'export'` to unlock API routes for giveaway referral tracking). Supabase for giveaway entries + referral codes. Formspree for the apply form. Existing design tokens (globals.css) evolved, not replaced. All existing industry/blog pages preserved; old service URLs get `next.config.mjs` redirects to new slugs.

**Tech Stack:** Next.js 16 (App Router, hybrid), React 19, Supabase (JS client + Postgres), Formspree (apply form), existing CSS design system (globals.css), Google Fonts already loaded.

---

## Placeholders — fill before launch

| Token | Value |
|---|---|
| `[OWNER NAME]` | Jason Dillon |
| `[SERVICE COMPANY NAME]` | TBD — owner to supply |
| `[SERVICE COMPANY INDUSTRY]` | TBD — owner to supply |
| `[# LOCATIONS]` | TBD — owner to supply |
| `[REAL RESULT NUMBERS]` | TBD — owner to supply |
| `[PRIZE VALUE]` | ~$25,000–$30,000 working figure |
| `[GIVEAWAY CADENCE]` | monthly or quarterly — owner to decide |
| `[TOP REFERRER PRIZE]` | e.g., free month of mentorship — owner to decide |
| `[CALENDLY_URL]` | owner to supply booking link |
| `[FORMSPREE_ID]` | existing: `xdajgpod`; owner may want separate apply endpoint |

---

## Architecture decisions locked in

### Routing
```
/                       → app/page.jsx           (National homepage — NEW)
/kansas-city            → app/kansas-city/page.jsx (Local KC homepage — NEW)
/the-system             → app/the-system/page.jsx
/done-for-you           → app/done-for-you/page.jsx
/mentorship             → app/mentorship/page.jsx
/giveaway               → app/giveaway/page.jsx
/giveaway/refer         → app/giveaway/refer/page.jsx
/apply                  → app/apply/page.jsx
/results                → app/results/page.jsx    (rebuilt)
/about                  → app/about/page.jsx      (rebuilt)
/contact                → app/contact/page.jsx    (keep, update CTAs)
/industries/*           → keep as-is
/blog/*                 → keep as-is
/free-system-audit-*    → keep as-is (landing page)
Legal pages             → keep as-is

API routes:
/api/giveaway/enter     → app/api/giveaway/enter/route.js
/api/giveaway/refer     → app/api/giveaway/refer/route.js
```

### Old URL redirects (SEO preservation)
```
/services/system-audit-kansas-city/          → /apply/
/services/ai-training-kansas-city/           → /mentorship/
/services/done-for-you-automation-kansas-city/ → /done-for-you/
/services/monthly-automation-support-kansas-city/ → /mentorship/
/services/                                   → /the-system/
/use-cases/                                  → /the-system/
/free-audit/                                 → /apply/
/free-guide/                                 → /giveaway/
```

### File map
```
app/
  layout.jsx                    MODIFY — new nav (national/KC links, no prices)
  globals.css                   MODIFY — evolve design tokens, new components
  page.jsx                      REPLACE — national homepage
  kansas-city/page.jsx          CREATE — local KC homepage
  the-system/page.jsx           CREATE
  done-for-you/page.jsx         CREATE
  mentorship/page.jsx           CREATE
  giveaway/page.jsx             CREATE
  giveaway/refer/page.jsx       CREATE
  apply/page.jsx                CREATE
  results/page.jsx              REPLACE
  about/page.jsx                REPLACE
  contact/page.jsx              MODIFY — update CTAs
  components/
    GiveawayForm.jsx            CREATE — 'use client'
    ApplyForm.jsx               CREATE — 'use client'
    GeoBanner.jsx               CREATE — 'use client', dismissible
    ReferralShare.jsx           CREATE — 'use client', generates/shows referral link
    ContactForm.jsx             KEEP
    FaqAccordion.jsx            KEEP
  api/
    giveaway/enter/route.js     CREATE — POST: save entry, generate referral code
    giveaway/refer/route.js     CREATE — GET: validate ref code, POST: track referral

lib/
  supabase.js                   CREATE — Supabase client (browser)
  supabase-server.js            CREATE — Supabase client (server/API routes)

next.config.mjs                 MODIFY — remove output:export, add redirects
.env.local                      MODIFY — add SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_KEY
```

---

## Task 1 — Remove static export, add redirects, wire Supabase env

**Files:**
- Modify: `next.config.mjs`
- Modify: `.env.local` (create if missing)
- Create: `lib/supabase.js`
- Create: `lib/supabase-server.js`

- [ ] **Step 1: Update next.config.mjs**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/services/system-audit-kansas-city/', destination: '/apply/', permanent: true },
      { source: '/services/ai-training-kansas-city/', destination: '/mentorship/', permanent: true },
      { source: '/services/done-for-you-automation-kansas-city/', destination: '/done-for-you/', permanent: true },
      { source: '/services/monthly-automation-support-kansas-city/', destination: '/mentorship/', permanent: true },
      { source: '/services/', destination: '/the-system/', permanent: true },
      { source: '/use-cases/', destination: '/the-system/', permanent: true },
      { source: '/free-audit/', destination: '/apply/', permanent: true },
      { source: '/free-guide/', destination: '/giveaway/', permanent: true },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 2: Add env vars to .env.local**

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Owner must create a Supabase project and paste these values. Document in README.

- [ ] **Step 3: Create lib/supabase.js (browser client)**

```js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
```

- [ ] **Step 4: Create lib/supabase-server.js (server/API route client)**

```js
import { createClient } from '@supabase/supabase-js';

export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}
```

- [ ] **Step 5: Install Supabase JS client**

```
npm install @supabase/supabase-js
```

- [ ] **Step 6: Verify dev server still starts**

```
npm run dev
```
Expected: compiles with no errors (some pages may 404 until new routes are added — that's fine).

- [ ] **Step 7: Commit**

```
git add next.config.mjs lib/supabase.js lib/supabase-server.js package.json package-lock.json
git commit -m "feat: remove static export, add 301 redirects, wire Supabase client"
```

---

## Task 2 — Supabase schema: giveaway entries + referral tracking

**Files:**
- Create: `supabase/migrations/001_giveaway.sql` (run in Supabase SQL editor)

- [ ] **Step 1: Run this SQL in your Supabase project's SQL editor**

```sql
-- Giveaway entries
create table if not exists giveaway_entries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  business text not null,
  email text not null,
  phone text,
  referral_code text unique not null,   -- this entry's shareable code
  referred_by text,                      -- referral_code of the person who referred them
  entry_count integer default 1          -- base 1 + bonus entries from referrals
);

-- Index for fast referral code lookups
create index giveaway_entries_referral_code_idx on giveaway_entries(referral_code);
create index giveaway_entries_referred_by_idx on giveaway_entries(referred_by);

-- Row-level security: service role only (API routes use service key)
alter table giveaway_entries enable row level security;
create policy "Service role full access" on giveaway_entries
  using (true)
  with check (true);
```

- [ ] **Step 2: Save migration file locally**

Create `supabase/migrations/001_giveaway.sql` with the SQL above so it's version-controlled.

- [ ] **Step 3: Commit**

```
git add supabase/migrations/001_giveaway.sql
git commit -m "feat: add giveaway_entries schema"
```

---

## Task 3 — API route: POST /api/giveaway/enter

**Files:**
- Create: `app/api/giveaway/enter/route.js`

- [ ] **Step 1: Create the route**

```js
import { createServerClient } from '../../../../lib/supabase-server';

function generateCode(length = 7) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function POST(request) {
  const { name, business, email, phone, referred_by } = await request.json();

  if (!name || !business || !email) {
    return Response.json({ error: 'name, business, and email are required' }, { status: 400 });
  }

  const supabase = createServerClient();

  // Check for duplicate email
  const { data: existing } = await supabase
    .from('giveaway_entries')
    .select('id, referral_code')
    .eq('email', email)
    .maybeSingle();

  if (existing) {
    return Response.json({ referral_code: existing.referral_code, duplicate: true });
  }

  // Generate unique referral code
  let referral_code;
  let attempts = 0;
  do {
    referral_code = generateCode();
    const { data: collision } = await supabase
      .from('giveaway_entries')
      .select('id')
      .eq('referral_code', referral_code)
      .maybeSingle();
    if (!collision) break;
    attempts++;
  } while (attempts < 10);

  // If referred_by code exists, add a bonus entry to the referrer
  if (referred_by) {
    await supabase.rpc('increment_entry_count', { code: referred_by });
  }

  const { data, error } = await supabase
    .from('giveaway_entries')
    .insert({ name, business, email, phone, referral_code, referred_by: referred_by || null })
    .select('referral_code')
    .single();

  if (error) {
    console.error('Giveaway insert error:', error);
    return Response.json({ error: 'Failed to save entry' }, { status: 500 });
  }

  return Response.json({ referral_code: data.referral_code });
}
```

- [ ] **Step 2: Add the increment_entry_count RPC to Supabase**

Run in Supabase SQL editor:

```sql
create or replace function increment_entry_count(code text)
returns void language plpgsql as $$
begin
  update giveaway_entries
  set entry_count = entry_count + 1
  where referral_code = code;
end;
$$;
```

- [ ] **Step 3: Commit**

```
git add app/api/giveaway/enter/route.js
git commit -m "feat: giveaway entry API route with referral bonus logic"
```

---

## Task 4 — API route: GET /api/giveaway/refer (validate ref code)

**Files:**
- Create: `app/api/giveaway/refer/route.js`

- [ ] **Step 1: Create the route**

```js
import { createServerClient } from '../../../../lib/supabase-server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return Response.json({ valid: false }, { status: 400 });
  }

  const supabase = createServerClient();
  const { data } = await supabase
    .from('giveaway_entries')
    .select('name, referral_code')
    .eq('referral_code', code)
    .maybeSingle();

  if (!data) {
    return Response.json({ valid: false });
  }

  return Response.json({ valid: true, referrer_name: data.name.split(' ')[0] });
}
```

- [ ] **Step 2: Commit**

```
git add app/api/giveaway/refer/route.js
git commit -m "feat: referral code validation API route"
```

---

## Task 5 — Update nav and footer for new architecture

**Files:**
- Modify: `app/layout.jsx`

The nav needs: national/KC toggle links, new page links (The System, Done For You, Mentorship, Giveaway), Apply CTA. No pricing. Footer gets new link structure.

- [ ] **Step 1: Replace layout.jsx**

```jsx
import './globals.css';

export const metadata = {
  title: 'S.Y.S.T.E.M. KC — Build a More Profitable Business',
  description: 'We rebuild how your service business makes money, then install the systems and workflows that run it without you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="nav" data-screen-label="Nav">
      <div className="wrap nav-inner">
        <a className="nav-brand" href="/" aria-label="S.Y.S.T.E.M. KC home">
          <img src="/assets/SYSTEM Logo.png" alt="S.Y.S.T.E.M. KC" />
        </a>
        <div className="nav-links">
          <a href="/the-system/">How It Works</a>
          <a href="/done-for-you/">Done For You</a>
          <a href="/mentorship/">Mentorship</a>
          <a href="/giveaway/">🎁 Giveaway</a>
          <a href="/results/">Results</a>
          <a href="/about/">About</a>
          <a href="/kansas-city/" className="nav-local">Kansas City</a>
        </div>
        <a className="nav-cta" href="/apply/">Apply Now &nbsp;→</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="foot" data-screen-label="Footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/assets/SYSTEM Logo.png" alt="S.Y.S.T.E.M. KC" />
            <p className="blurb">We rebuild how your service business makes money — then install the systems and workflows that run it on autopilot.</p>
            <p className="blurb" style={{marginTop: '10px', fontSize: '13px'}}>S.Y.S.T.E.M. = Save Yourself Stress, Time, Energy, Money</p>
          </div>
          <div className="foot-col">
            <h5>Work Together</h5>
            <a href="/done-for-you/">Done For You</a>
            <a href="/mentorship/">Mentorship</a>
            <a href="/giveaway/">The Giveaway</a>
            <a href="/apply/">Apply</a>
            <a href="/contact/">Book a Call</a>
          </div>
          <div className="foot-col">
            <h5>Learn More</h5>
            <a href="/the-system/">How It Works</a>
            <a href="/results/">Results</a>
            <a href="/about/">About</a>
            <a href="/industries/">Industries</a>
            <a href="/blog/">Blog</a>
          </div>
          <div className="foot-col">
            <h5>Kansas City</h5>
            <a href="/kansas-city/">KC Home Services</a>
            <a href="/industries/hvac-plumbing-automation-kansas-city/">HVAC &amp; Plumbing</a>
            <a href="/industries/real-estate-automation-kansas-city/">Real Estate</a>
            <a href="/industries/restaurant-automation-kansas-city/">Restaurants</a>
            <a href="/industries/law-firm-automation-kansas-city/">Law Firms</a>
            <a href="/industries/medical-dental-automation-kansas-city/">Medical &amp; Dental</a>
            <a href="/industries/salon-spa-automation-kansas-city/">Salons &amp; Spas</a>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 S.Y.S.T.E.M. KC LLC · Kansas City, MO · <a href="tel:8169622111" style={{color: 'inherit'}}>(816) 962-2111</a></div>
          <div className="legal">
            <a href="/privacy-policy/">Privacy</a>
            <a href="/terms/">Terms &amp; SMS</a>
            <a href="/cookies/">Cookies</a>
            <a href="/accessibility/">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add .nav-local style to globals.css**

Find the `.nav-links` block and append:

```css
.nav-local{color:var(--c-e) !important;font-weight:600}
```

- [ ] **Step 3: Verify dev server — nav renders, all links clickable**

- [ ] **Step 4: Commit**

```
git add app/layout.jsx app/globals.css
git commit -m "feat: update nav and footer for new site architecture"
```

---

## Task 6 — GeoBanner component (dismissible KC suggestion)

**Files:**
- Create: `app/components/GeoBanner.jsx`

- [ ] **Step 1: Create GeoBanner.jsx**

```jsx
'use client';
import { useState, useEffect } from 'react';

export default function GeoBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('geo-banner-dismissed');
    if (dismissed) return;
    // Optional: use navigator.geolocation or a free IP API for a hint
    // For now, show the banner to everyone and let them self-select
    setShow(true);
  }, []);

  function dismiss() {
    sessionStorage.setItem('geo-banner-dismissed', '1');
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="geo-banner" role="alert">
      <span>In the Kansas City area? We offer in-person, on-site engagements for local businesses. &nbsp;<a href="/kansas-city/">See KC services →</a></span>
      <button onClick={dismiss} aria-label="Dismiss" className="geo-dismiss">✕</button>
    </div>
  );
}
```

- [ ] **Step 2: Add GeoBanner CSS to globals.css**

```css
.geo-banner{display:flex;align-items:center;justify-content:space-between;gap:16px;background:var(--c-e);color:#fff;font-size:14px;padding:10px 24px;position:relative;z-index:49}
.geo-banner a{color:#fff;font-weight:700;text-decoration:underline}
.geo-dismiss{background:none;border:none;color:#fff;font-size:18px;cursor:pointer;padding:0 4px;line-height:1;opacity:.8}
.geo-dismiss:hover{opacity:1}
```

- [ ] **Step 3: Commit**

```
git add app/components/GeoBanner.jsx app/globals.css
git commit -m "feat: add dismissible KC geo-suggestion banner"
```

---

## Task 7 — National homepage (`/`)

**Files:**
- Replace: `app/page.jsx`

The national homepage sells: money model → profitability → custom growth → operator credibility. No prices. CTAs: Apply / Giveaway / Book a call.

- [ ] **Step 1: Replace app/page.jsx**

```jsx
import GeoBanner from './components/GeoBanner';

export const metadata = {
  title: 'S.Y.S.T.E.M. KC — Build a More Profitable Business',
  description: 'We rebuild how your service business makes money, then install the systems and workflows that run it without you. Operator-built. Results-first.',
};

export default function Page() {
  return (
    <main>
      <GeoBanner />

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">For service business owners</span>
          <h1 className="nat-h1">We rebuild how your business makes money.<br /><em>Then we install the systems that run it.</em></h1>
          <p className="nat-lede">Most service businesses aren't losing because of competition. They're losing to their own pricing, their own follow-up gaps, and money already inside their customer base that they can't see yet.</p>
          <p className="nat-sub">We find it. We fix the model. Then we build the workflows and automation that run it without you.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply to work together <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="/giveaway/">Enter the Giveaway — win the full program free</a>
          </div>
          <p className="nat-trust">Powered by smart systems and AI where it helps — but the money comes from the model, not the software.</p>
        </div>
      </section>

      {/* ── OPERATOR CREDIBILITY ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Why this is different</span>
          <h2 style={{marginTop: '14px'}}>This isn't a consultant who read some books.</h2>
          <blockquote className="op-quote">
            "I've spent 20 years building businesses, and I still own [SERVICE COMPANY NAME], a [# LOCATIONS]-location [SERVICE COMPANY INDUSTRY] company across the Midwest. I don't teach this from a course I bought — I run it."
          </blockquote>
          <p style={{marginTop: '24px', color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7'}}>That's the difference. When we look at your pricing, your lead flow, and your follow-up gaps, we're looking at the same problems we solve in our own operation. The money-model work is credible because a multi-location operator is exactly who should be redesigning someone's profitability — not a software reseller.</p>
          <div style={{marginTop: '32px'}}>
            <a className="btn btn--primary" href="/about/">The full story →</a>
          </div>
        </div>
      </section>

      {/* ── STAT WALL ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Where the money is hiding</span>
          <h2 style={{marginTop: '14px', maxWidth: '24ch'}}>The profit you're leaving on the table isn't a mystery. It's a math problem.</h2>
          <div className="stat-wall">
            <div className="stat-cell">
              <div className="stat-num">62%</div>
              <div className="stat-desc">of calls to small service businesses go unanswered — each one is a job that went to a competitor<sup>1</sup></div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">&lt;5 min</div>
              <div className="stat-desc">response time makes you 21× more likely to qualify a lead — most businesses take hours or days<sup>2</sup></div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">78%</div>
              <div className="stat-desc">of buyers choose whoever responds first — not who does the best work<sup>3</sup></div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">85%</div>
              <div className="stat-desc">of people who reach voicemail never call back<sup>4</sup></div>
            </div>
          </div>
          <p className="stat-sources">Sources: <sup>1</sup>Invoca 2023 · <sup>2</sup>Harvard Business Review · <sup>3</sup>Velocify · <sup>4</sup>Clutch research</p>
          <p style={{marginTop: '28px', fontSize: '17px', color: 'var(--muted)', maxWidth: '60ch'}}>That's revenue you've already earned the right to — it's just leaking out before you can collect it. The first step isn't adding more marketing. It's finding the money already in your pipeline.</p>
        </div>
      </section>

      {/* ── HOW IT WORKS (3 layers) ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">The approach</span>
          <h2 style={{marginTop: '14px'}}>Money first. Growth second. Systems third.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '56ch'}}>Everything we do follows this order. Most agencies invert it — they sell you more leads before your business can even handle the ones it has.</p>
          <div className="three-col" style={{marginTop: '48px'}}>
            <div className="three-card">
              <div className="three-num">01</div>
              <h3>Fix how you make money</h3>
              <p>We audit your pricing, offer structure, upsells, and dead-lead pipeline. The goal: find profit already hiding in your current customers before spending a dollar on growth.</p>
              <p style={{marginTop: '12px', fontWeight: '600', color: 'var(--ink)', fontSize: '15px'}}>Goal: pay for the engagement out of found money.</p>
            </div>
            <div className="three-card">
              <div className="three-num">02</div>
              <h3>Build growth for your specific business</h3>
              <p>Your offer, your lead flow, your follow-up sequence — built for your business, not a template. We design the lead engine after we understand the model, not before.</p>
            </div>
            <div className="three-card">
              <div className="three-num">03</div>
              <h3>Install the systems that run it</h3>
              <p>CRM, pipelines, missed-call recovery, AI follow-up, booking, reviews, owner reporting. The workflows and automation that run the model without you in the loop for every task.</p>
              <p style={{marginTop: '12px', fontSize: '14px', color: 'var(--muted)'}}>AI and automation live here — as part of the systems layer, not the headline.</p>
            </div>
          </div>
          <div style={{marginTop: '40px'}}>
            <a className="btn btn--primary" href="/the-system/">See the full approach →</a>
          </div>
        </div>
      </section>

      {/* ── OFFER PATHS ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Ways to work together</span>
          <h2 style={{marginTop: '14px'}}>Pick the path that fits where you are.</h2>
          <div className="offer-grid">
            <div className="offer-card offer-card--featured">
              <span className="tag">Flagship · Done For You</span>
              <h3>6-Month Growth Explosion</h3>
              <p>We do the money-model audit, redesign your profitability, build your custom growth engine, and install the automation that runs it. Full handoff at month 6. Delivered remotely or hybrid.</p>
              <p style={{marginTop: '16px', fontWeight: '700', color: 'var(--c-e)'}}>Stacked value: [PRIZE VALUE]</p>
              <a className="btn btn--primary" href="/done-for-you/" style={{marginTop: '20px', display: 'inline-flex'}}>Learn more →</a>
            </div>
            <div className="offer-card">
              <span className="tag">Learn · Mentorship</span>
              <h3>Operator Mentorship</h3>
              <p>We install the initial system with you, then mentor you through running your own money model and growth engine. Upfront intensive + ongoing monthly. You own everything.</p>
              <a className="btn btn--ghost" href="/mentorship/" style={{marginTop: '20px', display: 'inline-flex'}}>Learn more →</a>
            </div>
            <div className="offer-card offer-card--giveaway">
              <span className="tag">Free · The Giveaway</span>
              <h3>Win the whole program</h3>
              <p>Enter to win the full 6-Month Growth Explosion — free. Refer another owner and earn bonus entries. One winner drawn each [GIVEAWAY CADENCE].</p>
              <a className="btn btn--invert" href="/giveaway/" style={{marginTop: '20px', display: 'inline-flex'}}>Enter free →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS PREVIEW ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">Proof</span>
          <h2 style={{marginTop: '14px'}}>Results from real businesses.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '52ch'}}>We show the owner's own company results first — because we don't ask clients to take a risk we haven't already taken ourselves.</p>
          <div style={{marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            <a className="btn btn--primary" href="/results/">See the results →</a>
            <a className="btn btn--ghost" href="/about/">About the operator →</a>
          </div>
        </div>
      </section>

      {/* ── S.Y.S.T.E.M. ACRONYM ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">What we're actually saving</span>
          <h2 style={{marginTop: '14px'}}>S.Y.S.T.E.M.</h2>
          <div className="acro-row" style={{marginTop: '36px'}}>
            {[
              ['S','#1E3A5F','Save','Starting with profit. Finding the money you're already leaving on the table.'],
              ['Y','#7BB13C','Yourself','The owner gets out of the weeds. The business runs without you in every loop.'],
              ['S','#E88B25','Stress','Less chasing, less guessing, less firefighting.'],
              ['T','#6B2E91','Time','Workflows that run themselves. No more manual everything.'],
              ['E','#1F8A99','Energy','Focused on the work that actually grows the business.'],
              ['M','#D4322E','Money','The outcome. More of it, more predictably, with less of the above spent to get it.'],
            ].map(([letter, color, word, desc]) => (
              <div className="acro-card" key={word}>
                <div className="acro-letter" style={{color}}>{letter}</div>
                <div className="acro-word">{word}</div>
                <div className="acro-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BLOCK ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">How we work</span>
          <h2 style={{marginTop: '14px'}}>No contracts. No confusion. You own everything.</h2>
          <div className="trust-grid" style={{marginTop: '36px'}}>
            {[
              ['No long-term contracts', 'Month-to-month on retainer. If you leave, accounts transfer into your name and everything stays with you.'],
              ['You own all of it', 'Every workflow, SOP, automation, and data asset belongs to your business — not to us.'],
              ['Plain English', 'No jargon. No fake dashboards. No AI hype. We explain everything the way one business owner talks to another.'],
              ['Workflow before tool', 'We look at how your business actually runs before recommending anything to buy or change.'],
            ].map(([title, desc]) => (
              <div className="trust-cell" key={title}>
                <div className="tc-check">✓</div>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Ready to find out what your business is actually worth?</h2>
          <p className="sub">Apply to work with us, or enter the giveaway and win the whole program free. Either way, the first step is a conversation.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/giveaway/">Enter the Giveaway →</a>
            <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>

    </main>
  );
}
```

- [ ] **Step 2: Add national homepage CSS to globals.css** (nat-hero, op-quote, three-col/card, offer-grid/card, stat-wall, trust-grid)

```css
/* ── NATIONAL HOMEPAGE ── */
.nat-hero{padding:96px 0 80px;border-bottom:1px solid var(--rule)}
.nat-h1{font-size:clamp(38px,5vw,72px);line-height:1.08;letter-spacing:-.04em;margin-top:18px;max-width:18ch}
.nat-lede{margin-top:28px;font-size:clamp(18px,2vw,22px);color:var(--muted);line-height:1.55;max-width:56ch}
.nat-sub{margin-top:16px;font-size:17px;color:var(--muted);max-width:52ch;line-height:1.6}
.nat-trust{margin-top:28px;font-size:14px;color:var(--muted);font-style:italic}
.op-quote{margin:32px 0 0;padding:28px 32px;background:var(--card);border-left:4px solid var(--c-e);border-radius:0 8px 8px 0;font-size:clamp(17px,1.8vw,21px);line-height:1.6;color:var(--ink);font-style:italic}
.three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.three-card{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:32px}
.three-num{font-family:var(--mono);font-size:11px;letter-spacing:.12em;color:var(--muted);font-weight:700;margin-bottom:16px}
.offer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:24px;margin-top:40px;align-items:start}
.offer-card{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:32px}
.offer-card--featured{border-color:var(--c-e);box-shadow:0 0 0 1px var(--c-e)}
.offer-card--giveaway{background:var(--ink);color:#F4F1EA;border-color:var(--ink)}
.offer-card--giveaway .tag{background:rgba(255,255,255,.12);color:#F4F1EA}
.offer-card--giveaway h3{color:#F4F1EA}
.offer-card--giveaway p{color:rgba(244,241,234,.75)}
.stat-wall{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:48px}
.stat-cell{padding:28px;background:var(--card);border:1px solid var(--rule);border-radius:10px}
.stat-num{font-family:var(--mono);font-size:clamp(28px,3vw,40px);font-weight:700;color:var(--c-m);letter-spacing:-.02em;margin-bottom:12px}
.stat-desc{font-size:15px;color:var(--muted);line-height:1.55}
.stat-sources{margin-top:16px;font-size:12px;color:var(--muted);font-style:italic}
.trust-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.trust-cell{display:flex;gap:16px;align-items:start;padding:24px;background:var(--card);border:1px solid var(--rule);border-radius:8px}
.tc-check{font-size:20px;color:var(--c-y);flex-shrink:0;margin-top:2px}
.trust-cell strong{display:block;margin-bottom:6px;color:var(--ink)}
.trust-cell p{font-size:15px;color:var(--muted);line-height:1.6;margin:0}
@media(max-width:900px){.three-col{grid-template-columns:1fr}.offer-grid{grid-template-columns:1fr}.stat-wall{grid-template-columns:1fr 1fr}.trust-grid{grid-template-columns:1fr}}
@media(max-width:520px){.stat-wall{grid-template-columns:1fr}}
```

- [ ] **Step 3: Verify homepage renders at http://localhost:3000**

- [ ] **Step 4: Commit**

```
git add app/page.jsx app/globals.css
git commit -m "feat: national homepage — money-model-first positioning"
```

---

## Task 8 — Local KC homepage (`/kansas-city`)

**Files:**
- Create: `app/kansas-city/page.jsx`

Same money-model-first promise but with local/in-person framing, KC map, metro testimonials.

- [ ] **Step 1: Create app/kansas-city/page.jsx**

```jsx
export const metadata = {
  title: 'Kansas City Business Systems & Automation | S.Y.S.T.E.M. KC',
  description: 'Local, in-person business systems consulting for Kansas City home service companies. We walk into your business, find the profit leaks, and fix them.',
};

export default function Page() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">Kansas City · In-person · Home services</span>
          <h1 className="nat-h1">We walk into Kansas City businesses and find what's costing you money.</h1>
          <p className="nat-lede">Most KC service businesses aren't losing to better competition. They're losing to missed calls, slow follow-up, and profit gaps nobody has taken the time to map out.</p>
          <p className="nat-sub">We come to you — in person — review the full operation, and show you exactly what to fix first.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply to work together <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
          <p className="nat-trust">Built locally in Kansas City for service businesses that are tired of guessing.</p>
        </div>
      </section>

      {/* ── OPERATOR CREDIBILITY ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who you're talking to</span>
          <h2 style={{marginTop: '14px'}}>A Kansas City operator helping Kansas City operators.</h2>
          <blockquote className="op-quote">
            "I've spent 20 years building businesses, and I still own [SERVICE COMPANY NAME], a [# LOCATIONS]-location [SERVICE COMPANY INDUSTRY] company across the Midwest. I don't teach this from a course I bought — I run it."
          </blockquote>
          <p style={{marginTop: '24px', color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7'}}>We're not a remote agency. We're not a software reseller. We're a Kansas City business working with Kansas City businesses — in person, in your operation, with your actual workflow.</p>
        </div>
      </section>

      {/* ── PAIN / STAT WALL ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Where the money is hiding</span>
          <h2 style={{marginTop: '14px', maxWidth: '24ch'}}>The profit you're leaving behind isn't a mystery. It's a pattern.</h2>
          <div className="stat-wall">
            <div className="stat-cell"><div className="stat-num">62%</div><div className="stat-desc">of calls to local service businesses go unanswered — each one a job that went somewhere else<sup>1</sup></div></div>
            <div className="stat-cell"><div className="stat-num">&lt;5 min</div><div className="stat-desc">response time makes you 21× more likely to close — most KC businesses take hours<sup>2</sup></div></div>
            <div className="stat-cell"><div className="stat-num">78%</div><div className="stat-desc">of buyers choose whoever responds first — not who does the best work<sup>3</sup></div></div>
            <div className="stat-cell"><div className="stat-num">85%</div><div className="stat-desc">of people who reach voicemail never call back<sup>4</sup></div></div>
          </div>
          <p className="stat-sources">Sources: <sup>1</sup>Invoca 2023 · <sup>2</sup>Harvard Business Review · <sup>3</sup>Velocify · <sup>4</sup>Clutch research</p>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">Who we work with</span>
          <h2 style={{marginTop: '14px'}}>Any Kansas City small business. Any industry.</h2>
          <p className="lede" style={{marginTop: '18px'}}>Systems and automation are not inherent to any one industry — we can teach any small business how to save time, cut stress, and run tighter operations. The segments below are where we have the deepest playbooks.</p>
          <div className="card-grid" style={{marginTop: '40px'}}>
            <a className="card" href="/industries/hvac-plumbing-automation-kansas-city/"><span className="tag">Trades</span><h3>HVAC, Plumbing &amp; Home Services</h3><p>Missed-call text-back, quote follow-up, review automation. The leakiest phone tree in the metro — and the highest ROI fix.</p><span className="more">Explore →</span></a>
            <a className="card" href="/industries/real-estate-automation-kansas-city/"><span className="tag">Property</span><h3>Real Estate</h3><p>Lead nurture, auto-scheduling, cold-lead resurrection. Stop losing leads while you're showing a house.</p><span className="more">Explore →</span></a>
            <a className="card" href="/industries/restaurant-automation-kansas-city/"><span className="tag">Food &amp; Bev</span><h3>Restaurants</h3><p>Reservation follow-up, review recovery, staff communication. The margin is thin enough already.</p><span className="more">Explore →</span></a>
            <a className="card" href="/industries/law-firm-automation-kansas-city/"><span className="tag">Legal</span><h3>Law Firms</h3><p>Intake, follow-up, client communication. Billable hours shouldn't be spent on admin.</p><span className="more">Explore →</span></a>
            <a className="card" href="/industries/medical-dental-automation-kansas-city/"><span className="tag">Healthcare</span><h3>Medical &amp; Dental</h3><p>Appointment reminders, no-show reduction, patient follow-up. Compliance-aware workflows.</p><span className="more">Explore →</span></a>
            <a className="card" href="/industries/salon-spa-automation-kansas-city/"><span className="tag">Beauty</span><h3>Salons &amp; Spas</h3><p>No-show automation, rebooking sequences, review requests. Built for appointment-based businesses.</p><span className="more">Explore →</span></a>
          </div>
          <p style={{marginTop: '28px', color: 'var(--muted)'}}>Your industry not listed? <a href="/contact/" style={{color: 'var(--c-e)', fontWeight: '600'}}>Ask anyway →</a></p>
        </div>
      </section>

      {/* ── SERVICE AREA MAP ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Service area</span>
          <h2 style={{marginTop: '14px'}}>Kansas City metro + 90-minute radius.</h2>
          <p className="lede" style={{marginTop: '18px'}}>We serve the full KC metro plus Topeka, St. Joseph, Warrensburg, Lawrence, Atchison, and Sedalia. Anywhere within about 90 minutes of downtown KC.</p>
          <div className="area-map" aria-hidden="true" style={{marginTop: '40px'}}>
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E0D2" strokeWidth=".5"/>
                </pattern>
                <radialGradient id="zone" cx="55%" cy="54%" r="50%">
                  <stop offset="0%" stopColor="#D4322E" stopOpacity=".18"/>
                  <stop offset="65%" stopColor="#D4322E" stopOpacity=".08"/>
                  <stop offset="100%" stopColor="#D4322E" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="url(#g)"/>
              <circle cx="220" cy="215" r="125" fill="url(#zone)"/>
              <circle cx="220" cy="215" r="125" fill="none" stroke="#D4322E" strokeWidth="1" strokeDasharray="3 5" opacity=".5"/>
              <path d="M 215 20 Q 217 80 215 200 L 220 215 L 245 240 Q 247 320 245 380" stroke="#C5B98C" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
              <text x="228" y="30" fontFamily="Space Mono" fontSize="10" fill="#9A917E" fontWeight="700">MO</text>
              <text x="205" y="30" textAnchor="end" fontFamily="Space Mono" fontSize="10" fill="#9A917E" fontWeight="700">KS</text>
              <path d="M 30 150 Q 110 130 195 145 Q 230 160 290 130 T 380 110" stroke="#1F8A99" strokeWidth="1.5" fill="none" opacity=".4"/>
              <path d="M 60 220 L 380 235" stroke="#D9D3C5" strokeWidth="5" fill="none"/>
              <text x="372" y="248" textAnchor="end" fontFamily="Space Mono" fontSize="10" fill="#9A917E" fontWeight="700">I-70</text>
              <circle cx="140" cy="220" r="4" fill="#11110E"/>
              <circle cx="210" cy="80" r="4" fill="#11110E"/>
              <circle cx="295" cy="285" r="4" fill="#11110E"/>
              <circle cx="170" cy="215" r="3" fill="#605849"/>
              <circle cx="170" cy="155" r="3" fill="#605849"/>
              <circle cx="355" cy="260" r="3" fill="#605849"/>
              <circle cx="220" cy="215" r="22" fill="#D4322E" opacity=".15"/>
              <circle cx="220" cy="215" r="9" fill="#D4322E"/>
              <circle cx="220" cy="215" r="3" fill="#fff"/>
            </svg>
            <div className="map-tag primary" style={{left:'55%',top:'54%'}}><span className="pin" style={{background:'#fff'}}></span>Kansas City</div>
            <div className="map-tag" style={{left:'35%',top:'55%'}}>Topeka</div>
            <div className="map-tag" style={{left:'52.5%',top:'20%'}}>St. Joseph</div>
            <div className="map-tag" style={{left:'73.75%',top:'71%'}}>Warrensburg</div>
            <div className="map-tag" style={{left:'42.5%',top:'62%'}}>Lawrence</div>
            <div className="map-tag" style={{left:'42.5%',top:'39%'}}>Atchison</div>
            <div className="map-tag" style={{left:'88.75%',top:'65%'}}>Sedalia</div>
            <div className="map-zone-label">~90 min service zone</div>
          </div>
        </div>
      </section>

      {/* ── S.Y.S.T.E.M. ACRONYM ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">What we're actually saving</span>
          <h2 style={{marginTop:'14px'}}>S.Y.S.T.E.M.</h2>
          <div className="acro-row" style={{marginTop:'36px'}}>
            {[
              ['S','#1E3A5F','Save','Starting with profit.'],
              ['Y','#7BB13C','Yourself','The owner gets out of the weeds.'],
              ['S','#E88B25','Stress','Less chasing, less guessing.'],
              ['T','#6B2E91','Time','Workflows that run themselves.'],
              ['E','#1F8A99','Energy','Focused on what actually grows the business.'],
              ['M','#D4322E','Money','The outcome.'],
            ].map(([letter,color,word,desc])=>(
              <div className="acro-card" key={word}>
                <div className="acro-letter" style={{color}}>{letter}</div>
                <div className="acro-word">{word}</div>
                <div className="acro-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BLOCK ── */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">How we work</span>
          <h2 style={{marginTop:'14px'}}>Local. In person. You own everything.</h2>
          <div className="trust-grid" style={{marginTop:'36px'}}>
            {[
              ['In person','We come to your location. We see how your business actually runs, not how you describe it over a Zoom call.'],
              ['No long-term contracts','Month-to-month. If you leave, everything transfers to you.'],
              ['You own all of it','Every workflow, SOP, automation, and data asset is yours.'],
              ['Plain English','No jargon. No AI hype. One business owner talking to another.'],
            ].map(([title,desc])=>(
              <div className="trust-cell" key={title}>
                <div className="tc-check">✓</div>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Ready to find out what your KC business is actually leaving on the table?</h2>
          <p className="sub">Apply to work with us or call Jason directly. First conversation is always free.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
            <a className="btn btn--ghost-invert" href="/giveaway/">Enter the Giveaway →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
```

- [ ] **Step 2: Verify at http://localhost:3000/kansas-city/**

- [ ] **Step 3: Commit**

```
git add app/kansas-city/page.jsx
git commit -m "feat: local KC homepage with in-person framing and service area map"
```

---

## Task 9 — /the-system

**Files:**
- Create: `app/the-system/page.jsx`

- [ ] **Step 1: Create the page**

```jsx
export const metadata = {
  title: 'How It Works | The SYSTEM | S.Y.S.T.E.M. KC',
  description: 'Money model first. Custom growth second. Systems and AI third. See the full approach to rebuilding how your service business makes money.',
};

export default function Page() {
  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">How It Works</span></div></div>

      <header className="page-hero">
        <div className="wrap">
          <span className="label">The approach</span>
          <h1>Money first. Growth second. <em>Systems third.</em></h1>
          <p className="lede">Most agencies sell you more leads before your business can handle the ones it has. We invert that. Every step of the engagement follows this order — because that's the order that actually compounds.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="process-steps">
            <div className="proc-step">
              <div className="proc-month">Month 1</div>
              <h2>Profit first</h2>
              <p>We map your current money model — pricing, offer structure, upsells, dead-lead pipeline. The goal: find profit already hiding in your current customers before spending a dollar on growth.</p>
              <p style={{marginTop:'16px',fontWeight:'700',color:'var(--c-e)'}}>Goal: pay for the engagement out of found money.</p>
              <ul style={{marginTop:'20px',display:'flex',flexDirection:'column',gap:'10px',color:'var(--muted)',fontSize:'16px',lineHeight:'1.6'}}>
                <li>Money-model audit — where is revenue leaking?</li>
                <li>Pricing and offer structure review</li>
                <li>Dead-lead and past-customer reactivation</li>
                <li>Upsell and cross-sell mapping</li>
                <li>Profitability redesign — the new model on paper</li>
              </ul>
            </div>

            <div className="proc-step">
              <div className="proc-month">Months 2–3</div>
              <h2>Custom growth setup</h2>
              <p>Your offer, your lead flow, your follow-up sequence — built for your specific business, not a template. We design the lead engine after we understand the model, not before.</p>
              <ul style={{marginTop:'20px',display:'flex',flexDirection:'column',gap:'10px',color:'var(--muted)',fontSize:'16px',lineHeight:'1.6'}}>
                <li>Offer design — what you're actually selling and to whom</li>
                <li>Lead source map and traffic plan</li>
                <li>Custom follow-up and nurture sequence</li>
                <li>Booking and proposal flow</li>
              </ul>
            </div>

            <div className="proc-step">
              <div className="proc-month">Months 2–5</div>
              <h2>Install the systems</h2>
              <p>CRM, pipelines, missed-call recovery, AI follow-up, booking, review requests, owner reporting. The workflows and automation that run the model without you in the loop for every task.</p>
              <p style={{marginTop:'16px',fontSize:'14px',color:'var(--muted)',fontStyle:'italic'}}>AI and automation live here — as part of the systems layer, not the headline.</p>
              <ul style={{marginTop:'20px',display:'flex',flexDirection:'column',gap:'10px',color:'var(--muted)',fontSize:'16px',lineHeight:'1.6'}}>
                <li>CRM + pipeline setup and automation</li>
                <li>Missed-call text-back and speed-to-lead</li>
                <li>AI follow-up and nurture sequences</li>
                <li>Appointment reminders and no-show reduction</li>
                <li>Review request workflow</li>
                <li>Owner daily summary — visibility without micromanaging</li>
              </ul>
            </div>

            <div className="proc-step">
              <div className="proc-month">Month 6</div>
              <h2>Optimize &amp; hand off</h2>
              <p>We optimize based on 5 months of real data, train your team on every system, document all SOPs in plain English, and hand off full ownership. You leave with a business that runs without you in the loop.</p>
              <ul style={{marginTop:'20px',display:'flex',flexDirection:'column',gap:'10px',color:'var(--muted)',fontSize:'16px',lineHeight:'1.6'}}>
                <li>Performance review — what's working, what to tune</li>
                <li>Team training on all installed systems</li>
                <li>SOPs documented in plain English</li>
                <li>Full account transfer into your name</li>
                <li>Optional: transition to monthly mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">The supporting line</span>
          <blockquote className="op-quote">
            "Powered by smart systems and AI where it helps — but the money comes from the model, not the software."
          </blockquote>
          <p style={{marginTop:'24px',color:'var(--muted)',fontSize:'17px',lineHeight:'1.7'}}>AI and automation are real tools. They save real time and close real gaps. But they don't fix a broken pricing model. They don't redesign a weak offer. They don't find the $40k sitting in your dead-lead list. We do that first — then we use the tools.</p>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Ready to see what this looks like for <em>your</em> business?</h2>
          <p className="sub">Apply to work together or enter the giveaway and win the full program free.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/giveaway/">Enter the Giveaway →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Add process-steps CSS to globals.css**

```css
.process-steps{display:flex;flex-direction:column;gap:0}
.proc-step{padding:48px 0;border-bottom:1px solid var(--rule)}
.proc-step:last-child{border-bottom:none}
.proc-month{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--c-e);font-weight:700;margin-bottom:14px}
.proc-step h2{font-size:clamp(26px,3vw,38px);letter-spacing:-.03em;margin-bottom:16px}
```

- [ ] **Step 3: Commit**

```
git add app/the-system/page.jsx app/globals.css
git commit -m "feat: /the-system page — 6-month arc and 3-layer approach"
```

---

## Task 10 — /done-for-you

**Files:**
- Create: `app/done-for-you/page.jsx`

- [ ] **Step 1: Create the page** (no prices — Apply CTA only)

```jsx
export const metadata = {
  title: '6-Month Growth Explosion | Done For You | S.Y.S.T.E.M. KC',
  description: 'We do the money-model audit, redesign your profitability, build your custom growth engine, and install the automation. Full handoff at month 6. Apply to see if you qualify.',
};

export default function Page() {
  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Done For You</span></div></div>

      <header className="page-hero">
        <div className="wrap">
          <span className="label">Flagship program · Done For You</span>
          <h1>6-Month Growth Explosion.</h1>
          <p className="lede">We do everything. Money-model audit, profitability redesign, custom growth engine, full automation install, team training, and handoff. You operate it. We build it.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply to work together <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="/giveaway/">Or enter to win it free →</a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <span className="label">What's included</span>
          <h2 style={{marginTop:'14px'}}>Six months. Full scope. Full handoff.</h2>
          <p className="lede" style={{marginTop:'18px',maxWidth:'56ch'}}>This is productized so the scope is clear — but every implementation is custom-built for your business, not a template dropped into your CRM.</p>
          <div className="dfy-grid" style={{marginTop:'48px'}}>
            <div className="dfy-primary">
              <div className="dfy-label">Primary — the money</div>
              <ul className="dfy-list">
                <li>Money-model audit — surface profit already in your pipeline</li>
                <li>Profitability redesign — pricing, offer structure, upsells, downsells</li>
                <li>Dead-lead reactivation — revenue from customers you've already paid to acquire</li>
                <li>Custom growth blueprint — your lead engine, not a template</li>
                <li>6 months of strategy calls + optimization</li>
              </ul>
            </div>
            <div className="dfy-secondary">
              <div className="dfy-label">Secondary — the engine</div>
              <ul className="dfy-list">
                <li>CRM + pipeline automation</li>
                <li>Speed-to-lead / missed-call recovery</li>
                <li>AI follow-up, nurture &amp; booking</li>
                <li>Appointment reminders + no-show reduction</li>
                <li>Review request workflow</li>
                <li>Owner daily visibility summary</li>
              </ul>
            </div>
            <div className="dfy-delivery">
              <div className="dfy-label">Delivery</div>
              <ul className="dfy-list">
                <li>SOPs documented in plain English</li>
                <li>Team training on every system</li>
                <li>Full account transfer — you own everything on exit</li>
              </ul>
              <p style={{marginTop:'20px',fontSize:'14px',color:'var(--muted)',fontStyle:'italic'}}>Delivered remotely or hybrid. Kansas City clients can request in-person scope walkthrough.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <span className="label">The 6-month arc</span>
          <h2 style={{marginTop:'14px'}}>How the engagement runs.</h2>
          <div className="three-col" style={{marginTop:'40px'}}>
            <div className="three-card"><div className="three-num">Month 1</div><h3>Profit first</h3><p>Map the money model. Find profit already hiding in your pipeline. Goal: pay for the engagement out of found money before we spend a dollar on growth.</p></div>
            <div className="three-card"><div className="three-num">Months 2–3</div><h3>Growth setup</h3><p>Build your offer + lead engine. Custom to your business — your market, your customers, your conversion points.</p></div>
            <div className="three-card"><div className="three-num">Months 2–5</div><h3>Systems install</h3><p>Deploy the workflows and automation that run the model. Speed-to-lead, follow-up, booking, reviews, owner reporting.</p></div>
          </div>
          <div className="three-col" style={{marginTop:'24px',gridTemplateColumns:'1fr 2fr'}}>
            <div className="three-card"><div className="three-num">Month 6</div><h3>Optimize &amp; hand off</h3><p>Tune based on real data. Train the team. Transfer every account. You leave owning a business that runs without you in the loop.</p></div>
            <div className="three-card" style={{background:'var(--ink)',color:'#F4F1EA',border:'none'}}>
              <div className="three-num" style={{color:'rgba(244,241,234,.5)'}}>The giveaway</div>
              <h3 style={{color:'#F4F1EA'}}>Win this program free.</h3>
              <p style={{color:'rgba(244,241,234,.75)'}}>The full 6-Month Growth Explosion is the grand prize in our giveaway — advertised at its stacked value of [PRIZE VALUE]. Enter free. Refer another owner for bonus entries.</p>
              <a className="btn btn--invert" href="/giveaway/" style={{marginTop:'20px',display:'inline-flex'}}>Enter the giveaway →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <span className="label">Custom DFY</span>
          <h2 style={{marginTop:'14px'}}>Larger or atypical jobs are bid individually.</h2>
          <p style={{marginTop:'18px',fontSize:'17px',color:'var(--muted)',lineHeight:'1.7'}}>If your business is outside the flagship scope — multi-location, complex integrations, franchise setup, or a very large team — we scope and bid per business. Apply and we'll tell you which path fits.</p>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Apply to see if you qualify.</h2>
          <p className="sub">Short form. No pressure. We'll tell you honestly if this is the right fit — or point you somewhere better if it's not.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/giveaway/">Enter to win it free →</a>
            <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Add DFY grid CSS to globals.css**

```css
.dfy-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;align-items:start}
.dfy-primary,.dfy-secondary,.dfy-delivery{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:28px}
.dfy-primary{border-top:3px solid var(--c-e)}
.dfy-label{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:700;margin-bottom:16px}
.dfy-list{display:flex;flex-direction:column;gap:10px;padding-left:0;list-style:none}
.dfy-list li{font-size:15px;color:var(--text);line-height:1.5;padding-left:20px;position:relative}
.dfy-list li::before{content:'→';position:absolute;left:0;color:var(--c-e);font-weight:700}
@media(max-width:900px){.dfy-grid{grid-template-columns:1fr}}
```

- [ ] **Step 3: Commit**

```
git add app/done-for-you/page.jsx app/globals.css
git commit -m "feat: /done-for-you page — 6-Month Growth Explosion"
```

---

## Task 11 — /mentorship

**Files:**
- Create: `app/mentorship/page.jsx`

- [ ] **Step 1: Create the page** (no prices — Apply CTA)

```jsx
export const metadata = {
  title: 'Operator Mentorship | S.Y.S.T.E.M. KC',
  description: 'We install the initial system with you, then mentor you through running your own money model and growth engine. You own everything. Apply to see if you qualify.',
};

export default function Page() {
  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Mentorship</span></div></div>

      <header className="page-hero">
        <div className="wrap">
          <span className="label">Learn · Mentorship program</span>
          <h1>We teach you to think like an operator about your own money model. <em>Then we show you how to run it.</em></h1>
          <p className="lede">Not a software tutorial. Not a course. A working relationship between operators — where we install the initial system with you, then stay alongside as you run and improve it.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply to work together <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="/contact/">Book a call first →</a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="mentorship-cols">
            <div>
              <span className="label">Phase 1</span>
              <h2 style={{marginTop:'14px'}}>The installation intensive</h2>
              <p style={{marginTop:'16px',color:'var(--muted)',fontSize:'17px',lineHeight:'1.7'}}>Upfront fee. We onboard your business, do the initial money-model audit, set up the foundational systems alongside you, build your SOPs, and hand you a written roadmap. You understand every piece — because we built it with you, not for you.</p>
              <ul style={{marginTop:'24px',display:'flex',flexDirection:'column',gap:'12px',color:'var(--muted)',fontSize:'16px',lineHeight:'1.6'}}>
                <li>Money-model audit + profitability map</li>
                <li>Initial system setup — built side-by-side</li>
                <li>SOPs written in plain English (hand-off-ready)</li>
                <li>Roadmap: what to build next, in what order</li>
              </ul>
            </div>
            <div>
              <span className="label">Phase 2</span>
              <h2 style={{marginTop:'14px'}}>Ongoing mentorship</h2>
              <p style={{marginTop:'16px',color:'var(--muted)',fontSize:'17px',lineHeight:'1.7'}}>Monthly. Accountability, optimization, calls, and direct access to the operator. We stay alongside as you build the next layer — and we're honest when something isn't working.</p>
              <ul style={{marginTop:'24px',display:'flex',flexDirection:'column',gap:'12px',color:'var(--muted)',fontSize:'16px',lineHeight:'1.6'}}>
                <li>Monthly strategy + accountability call</li>
                <li>Next-system guidance and build support</li>
                <li>Direct access — text, voice, async</li>
                <li>Month-to-month — leave anytime, keep everything</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who this is for</span>
          <h2 style={{marginTop:'14px'}}>Right if you want to understand your own systems.</h2>
          <p style={{marginTop:'18px',color:'var(--muted)',fontSize:'17px',lineHeight:'1.7'}}>If you want to hand off the SOPs to a new hire someday — or if you just refuse to be dependent on an outside vendor for things your business runs on — the mentorship is built for that. You'll understand the money model and the systems end-to-end, not just how to log in.</p>
          <div className="trust-grid" style={{marginTop:'36px'}}>
            {[
              ['You own everything','Every workflow, SOP, automation, and account transfers into your name. No lock-in.'],
              ['Month-to-month','No long-term contract. If you leave the mentorship, you carry on with a fully documented system.'],
              ['Operator to operator','We mentor the way someone who runs businesses mentors — not the way a consultant teaches.'],
              ['Plain English','We explain everything so you can teach it to your team. No jargon required.'],
            ].map(([title,desc])=>(
              <div className="trust-cell" key={title}>
                <div className="tc-check">✓</div>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Apply to see if mentorship is the right fit.</h2>
          <p className="sub">Short form. We'll be honest about whether this is the right path for where your business is right now.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Add mentorship CSS to globals.css**

```css
.mentorship-cols{display:grid;grid-template-columns:1fr 1fr;gap:64px}
@media(max-width:760px){.mentorship-cols{grid-template-columns:1fr;gap:40px}}
```

- [ ] **Step 3: Commit**

```
git add app/mentorship/page.jsx app/globals.css
git commit -m "feat: /mentorship page"
```

---

## Task 12 — GiveawayForm component + ReferralShare component

**Files:**
- Create: `app/components/GiveawayForm.jsx`
- Create: `app/components/ReferralShare.jsx`

- [ ] **Step 1: Create GiveawayForm.jsx**

```jsx
'use client';
import { useState } from 'react';
import ReferralShare from './ReferralShare';

export default function GiveawayForm({ referredBy }) {
  const [state, setState] = useState('idle'); // idle | submitting | success | error
  const [referralCode, setReferralCode] = useState('');
  const [fields, setFields] = useState({ name: '', business: '', email: '', phone: '' });

  function update(e) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function submit(e) {
    e.preventDefault();
    setState('submitting');
    try {
      const res = await fetch('/api/giveaway/enter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, referred_by: referredBy || null }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setReferralCode(data.referral_code);
      setState('success');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return <ReferralShare referralCode={referralCode} name={fields.name} />;
  }

  return (
    <form onSubmit={submit} className="giveaway-form">
      <div className="form-row">
        <label htmlFor="gw-name">Your name *</label>
        <input id="gw-name" name="name" type="text" required value={fields.name} onChange={update} placeholder="First and last name" />
      </div>
      <div className="form-row">
        <label htmlFor="gw-business">Business name *</label>
        <input id="gw-business" name="business" type="text" required value={fields.business} onChange={update} placeholder="Your company name" />
      </div>
      <div className="form-row">
        <label htmlFor="gw-email">Email address *</label>
        <input id="gw-email" name="email" type="email" required value={fields.email} onChange={update} placeholder="you@yourcompany.com" />
      </div>
      <div className="form-row">
        <label htmlFor="gw-phone">Phone (optional — for winner contact)</label>
        <input id="gw-phone" name="phone" type="tel" value={fields.phone} onChange={update} placeholder="(816) 000-0000" />
      </div>
      {state === 'error' && <p className="form-error">Something went wrong. Try again or call Jason at (816) 962-2111.</p>}
      <button type="submit" className="btn btn--primary" disabled={state === 'submitting'} style={{marginTop:'8px',width:'100%',justifyContent:'center'}}>
        {state === 'submitting' ? 'Entering…' : 'Enter the Giveaway →'}
      </button>
      <p style={{marginTop:'12px',fontSize:'13px',color:'var(--muted)',lineHeight:'1.5'}}>By entering you agree to receive occasional messages from S.Y.S.T.E.M. KC about the giveaway and business systems content. No spam. Unsubscribe anytime. See <a href="/privacy-policy/">Privacy Policy</a> and <a href="/terms/">Terms &amp; SMS</a>.</p>
    </form>
  );
}
```

- [ ] **Step 2: Create ReferralShare.jsx**

```jsx
'use client';
import { useState } from 'react';

export default function ReferralShare({ referralCode, name }) {
  const [copied, setCopied] = useState(false);
  const firstName = name?.split(' ')[0] || 'You';
  const referralUrl = `${typeof window !== 'undefined' ? window.location.origin : 'https://systemkc.com'}/giveaway/?ref=${referralCode}`;

  async function copy() {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="referral-success">
      <div className="rs-icon">🎉</div>
      <h3>You're in, {firstName}!</h3>
      <p>Your entry is confirmed. Now share your referral link — every owner you refer earns you bonus entries. The more you share, the better your odds.</p>
      <div className="rs-link-box">
        <input type="text" readOnly value={referralUrl} className="rs-link-input" onFocus={e => e.target.select()} />
        <button className="btn btn--primary" onClick={copy} style={{flexShrink:0}}>
          {copied ? '✓ Copied' : 'Copy link'}
        </button>
      </div>
      <div className="rs-share-row">
        <a className="btn btn--ghost" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
        <a className="btn btn--ghost" href={`sms:?body=I just entered to win a free 6-month business growth program from SYSTEM KC. Enter here and we both get bonus entries: ${referralUrl}`}>Share via Text</a>
      </div>
      <p style={{marginTop:'20px',fontSize:'14px',color:'var(--muted)'}}>Your referral code: <strong style={{fontFamily:'var(--mono)',color:'var(--ink)'}}>{referralCode}</strong></p>
    </div>
  );
}
```

- [ ] **Step 3: Add giveaway form + referral CSS to globals.css**

```css
.giveaway-form{display:flex;flex-direction:column;gap:18px;margin-top:28px}
.referral-success{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:36px;text-align:center}
.rs-icon{font-size:48px;margin-bottom:16px}
.referral-success h3{font-size:28px;letter-spacing:-.02em;margin-bottom:12px}
.referral-success p{color:var(--muted);font-size:16px;line-height:1.6;max-width:48ch;margin:0 auto}
.rs-link-box{display:flex;gap:12px;margin-top:24px;align-items:center}
.rs-link-input{flex:1;border:1.5px solid var(--rule);border-radius:8px;padding:12px 16px;font-family:var(--mono);font-size:13px;background:var(--paper-2);color:var(--ink)}
.rs-share-row{display:flex;gap:12px;margin-top:16px;justify-content:center;flex-wrap:wrap}
```

- [ ] **Step 4: Commit**

```
git add app/components/GiveawayForm.jsx app/components/ReferralShare.jsx app/globals.css
git commit -m "feat: GiveawayForm and ReferralShare client components"
```

---

## Task 13 — /giveaway and /giveaway/refer pages

**Files:**
- Create: `app/giveaway/page.jsx`
- Create: `app/giveaway/refer/page.jsx`

- [ ] **Step 1: Create app/giveaway/page.jsx**

```jsx
import GiveawayForm from '../components/GiveawayForm';

export const metadata = {
  title: 'Win the 6-Month Growth Explosion — Free | S.Y.S.T.E.M. KC Giveaway',
  description: 'Enter to win the full 6-Month Growth Explosion program — money model audit, profitability redesign, custom growth engine, and full automation install. One winner drawn each cycle.',
};

export default function Page({ searchParams }) {
  const referredBy = searchParams?.ref || null;

  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Giveaway</span></div></div>

      {/* HERO */}
      <header className="page-hero" style={{background:'var(--ink)',color:'#F4F1EA',borderBottom:'none'}}>
        <div className="wrap">
          <span className="label" style={{color:'rgba(244,241,234,.6)'}}>🎁 The Giveaway</span>
          <h1 style={{color:'#F4F1EA',marginTop:'18px'}}>Win the full <em style={{color:'var(--c-e)'}}>6-Month Growth Explosion</em> — free.</h1>
          <p className="lede" style={{color:'rgba(244,241,234,.8)',marginTop:'18px'}}>One winner receives the complete program: money-model audit, profitability redesign, custom growth engine, and full automation install. Stacked value: <strong style={{color:'#F4F1EA'}}>[PRIZE VALUE]</strong>.</p>
          <p style={{marginTop:'16px',fontSize:'16px',color:'rgba(244,241,234,.6)'}}>Entry is free. Refer another business owner and earn bonus entries — for both of you.</p>
        </div>
      </header>

      {/* WHAT THEY WIN */}
      <section className="section">
        <div className="wrap">
          <span className="label">What the winner receives</span>
          <h2 style={{marginTop:'14px'}}>The complete 6-Month Growth Explosion.</h2>
          <div className="three-col" style={{marginTop:'40px'}}>
            <div className="three-card">
              <div className="three-num">Primary · The money</div>
              <h3>Money model + profitability</h3>
              <p>Full audit of how the business makes money. Pricing, offer structure, upsells, dead-lead reactivation, profitability redesign. The goal: find revenue already in the pipeline.</p>
            </div>
            <div className="three-card">
              <div className="three-num">Secondary · The growth</div>
              <h3>Custom growth engine</h3>
              <p>Lead flow, offer design, and follow-up sequence built specifically for the winner's business. Not a template. Theirs to own.</p>
            </div>
            <div className="three-card">
              <div className="three-num">Systems · The engine</div>
              <h3>Full automation install</h3>
              <p>CRM, missed-call recovery, AI follow-up, booking, reviews, owner reporting — plus SOPs, team training, and full account transfer at month 6.</p>
            </div>
          </div>
          <p style={{marginTop:'28px',fontFamily:'var(--mono)',fontSize:'13px',color:'var(--muted)',textAlign:'center',letterSpacing:'.05em'}}>STACKED VALUE: [PRIZE VALUE] · ONE WINNER PER [GIVEAWAY CADENCE]</p>
        </div>
      </section>

      {/* ENTRY FORM */}
      <section className="section section--alt" id="enter">
        <div className="wrap">
          <div className="giveaway-layout">
            <div>
              <span className="label">Enter free</span>
              <h2 style={{marginTop:'14px'}}>Fill out the short form to enter.</h2>
              {referredBy && (
                <p style={{marginTop:'12px',padding:'12px 16px',background:'var(--c-e)',color:'#fff',borderRadius:'8px',fontSize:'15px'}}>
                  You were referred! You and your referrer will both earn a bonus entry when you submit.
                </p>
              )}
              <GiveawayForm referredBy={referredBy} />
            </div>
            <div className="giveaway-aside">
              <div className="aside-card">
                <div className="ac-label">Referral bonus</div>
                <h3 style={{marginTop:'8px',fontSize:'22px'}}>Refer. Earn more entries.</h3>
                <p className="ac-note">After you enter, you'll get a unique referral link. Every business owner who enters through your link earns you both a bonus entry. Top referrer each cycle wins [TOP REFERRER PRIZE].</p>
              </div>
              <div className="aside-card">
                <div className="ac-label">Drawing cadence</div>
                <p className="ac-note">One winner drawn each [GIVEAWAY CADENCE]. All entrants are notified. Non-winners may receive a time-limited offer — see terms.</p>
              </div>
              <div className="aside-card">
                <div className="ac-label">Questions?</div>
                <p className="ac-note">Call or text Jason at <a href="tel:8169622111" style={{color:'var(--c-e)',fontWeight:'700'}}>(816) 962-2111</a> or email <a href="mailto:jason@systemkc.com" style={{color:'var(--c-e)'}}>jason@systemkc.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Not ready to enter yet? Apply to work together directly.</h2>
          <p className="sub">The giveaway is the front door. The application is the other door. Both lead to the same conversation.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now →</a>
            <a className="btn btn--ghost-invert" href="/done-for-you/">About the program →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Create app/giveaway/refer/page.jsx** (share/confirmation page for referrers to share)

```jsx
export const metadata = {
  title: 'Share Your Referral Link | S.Y.S.T.E.M. KC Giveaway',
  description: 'Share your referral link and earn bonus giveaway entries for every business owner who enters.',
};

export default function Page() {
  return (
    <main>
      <section className="section">
        <div className="wrap-narrow" style={{textAlign:'center'}}>
          <h1 style={{marginTop:'40px'}}>Share your link. Earn more entries.</h1>
          <p className="lede" style={{marginTop:'18px'}}>Every business owner who enters through your referral link earns you both a bonus entry. The more you share, the better your odds of winning the full 6-Month Growth Explosion.</p>
          <p style={{marginTop:'20px',color:'var(--muted)'}}>Your referral link was shown on the entry confirmation page. Check your inbox — we sent it there too. Or <a href="/giveaway/" style={{color:'var(--c-e)'}}>re-enter with your email</a> and we'll show it again.</p>
          <div style={{marginTop:'36px'}}>
            <a className="btn btn--primary" href="/giveaway/#enter">Back to the giveaway →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Add giveaway layout CSS to globals.css**

```css
.giveaway-layout{display:grid;grid-template-columns:1.4fr 1fr;gap:56px;align-items:start}
.giveaway-aside{display:flex;flex-direction:column;gap:16px;position:sticky;top:96px}
@media(max-width:860px){.giveaway-layout{grid-template-columns:1fr}.giveaway-aside{position:static}}
```

- [ ] **Step 4: Commit**

```
git add app/giveaway/page.jsx app/giveaway/refer/page.jsx app/globals.css
git commit -m "feat: /giveaway page and /giveaway/refer page"
```

---

## Task 14 — ApplyForm component + /apply page

**Files:**
- Create: `app/components/ApplyForm.jsx`
- Create: `app/apply/page.jsx`

- [ ] **Step 1: Create ApplyForm.jsx**

```jsx
'use client';
import { useState } from 'react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_APPLY_FORMSPREE_ID || 'xdajgpod';

export default function ApplyForm() {
  const [status, setStatus] = useState('idle');

  async function submit(e) {
    e.preventDefault();
    setStatus('submitting');
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus('success');
      else throw new Error();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" style={{marginTop:'28px'}}>
        <h3>Application received.</h3>
        <p>We'll review it and reach out within one business day to schedule a conversation. If you want to move faster, call or text Jason at <a href="tel:8169622111">(816) 962-2111</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="apply-form">
      <div className="form-row">
        <label htmlFor="ap-name">Your name *</label>
        <input id="ap-name" name="name" type="text" required placeholder="First and last name" />
      </div>
      <div className="form-row">
        <label htmlFor="ap-business">Business name *</label>
        <input id="ap-business" name="business" type="text" required placeholder="Your company name" />
      </div>
      <div className="form-row">
        <label htmlFor="ap-industry">Industry / type of business *</label>
        <input id="ap-industry" name="industry" type="text" required placeholder="e.g. HVAC, roofing, real estate, restaurant" />
      </div>
      <div className="form-row">
        <label htmlFor="ap-employees"># of employees</label>
        <select id="ap-employees" name="employees">
          <option value="">Select…</option>
          <option>Just me</option>
          <option>2–5</option>
          <option>6–15</option>
          <option>16–50</option>
          <option>50+</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="ap-revenue">Approximate annual revenue</label>
        <select id="ap-revenue" name="revenue">
          <option value="">Select…</option>
          <option>Under $250k</option>
          <option>$250k–$500k</option>
          <option>$500k–$1M</option>
          <option>$1M–$3M</option>
          <option>$3M+</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="ap-bottleneck">Biggest growth bottleneck right now *</label>
        <textarea id="ap-bottleneck" name="bottleneck" required rows={3} placeholder="What's the thing that's costing you the most — time, money, or stress?" />
      </div>
      <div className="form-row">
        <label htmlFor="ap-fix">What do you most want fixed first?</label>
        <textarea id="ap-fix" name="fix_first" rows={2} placeholder="Lead follow-up, pricing, systems, owner visibility…" />
      </div>
      <div className="form-row">
        <label htmlFor="ap-timeline">Timeline</label>
        <select id="ap-timeline" name="timeline">
          <option value="">Select…</option>
          <option>Ready now</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>Just exploring</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="ap-location">Location (city/state) *</label>
        <input id="ap-location" name="location" type="text" required placeholder="e.g. Kansas City, MO" />
      </div>
      <div className="form-row">
        <label htmlFor="ap-email">Email *</label>
        <input id="ap-email" name="email" type="email" required placeholder="you@yourcompany.com" />
      </div>
      <div className="form-row">
        <label htmlFor="ap-phone">Phone</label>
        <input id="ap-phone" name="phone" type="tel" placeholder="(816) 000-0000" />
      </div>
      {status === 'error' && <p className="form-error">Something went wrong. Call Jason directly at (816) 962-2111.</p>}
      <button type="submit" className="btn btn--primary" disabled={status === 'submitting'} style={{marginTop:'8px',width:'100%',justifyContent:'center'}}>
        {status === 'submitting' ? 'Sending…' : 'Submit Application →'}
      </button>
      <p style={{marginTop:'12px',fontSize:'13px',color:'var(--muted)'}}>We read every application. We reply within one business day. No spam.</p>
    </form>
  );
}
```

- [ ] **Step 2: Create app/apply/page.jsx**

```jsx
import ApplyForm from '../components/ApplyForm';

export const metadata = {
  title: 'Apply to Work Together | S.Y.S.T.E.M. KC',
  description: 'Short application to work with S.Y.S.T.E.M. KC on the 6-Month Growth Explosion or Operator Mentorship. We reply within one business day.',
};

export default function Page() {
  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Apply</span></div></div>

      <header className="page-hero">
        <div className="wrap">
          <span className="label">Work together</span>
          <h1>Tell us about your business.</h1>
          <p className="lede">Short form. No trick questions. We want to understand where you are and what you want to fix — then we'll tell you honestly if we're the right fit.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:'64px',alignItems:'start'}}>
            <div>
              <ApplyForm />
            </div>
            <aside style={{position:'sticky',top:'96px',display:'flex',flexDirection:'column',gap:'20px'}}>
              <div className="aside-card">
                <div className="ac-label">What happens next</div>
                <ol style={{paddingLeft:'20px',display:'flex',flexDirection:'column',gap:'10px',color:'var(--muted)',fontSize:'15px',lineHeight:'1.6',marginTop:'12px'}}>
                  <li>We read your application within one business day</li>
                  <li>If there's a fit, we reach out to schedule a 20-minute conversation</li>
                  <li>On the call: we map your situation and tell you what we'd do first</li>
                  <li>You decide if you want to move forward — zero pressure</li>
                </ol>
              </div>
              <div className="aside-card">
                <div className="ac-label">Prefer to talk first?</div>
                <a href="tel:8169622111" style={{display:'block',marginTop:'8px',fontSize:'26px',fontWeight:'900',letterSpacing:'-.02em',color:'var(--ink)',textDecoration:'none'}}>(816) 962-2111</a>
                <p className="ac-note">Call or text Jason. Texting often gets a faster reply.</p>
              </div>
              <div className="aside-card">
                <div className="ac-label">Or enter the giveaway</div>
                <p className="ac-note">Win the full 6-Month Growth Explosion free. Entry takes 60 seconds.</p>
                <a className="btn btn--ghost" href="/giveaway/" style={{marginTop:'12px',display:'inline-flex'}}>Enter the Giveaway →</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Add apply form CSS to globals.css**

```css
.apply-form{display:flex;flex-direction:column;gap:18px;margin-top:8px}
```

- [ ] **Step 4: Commit**

```
git add app/components/ApplyForm.jsx app/apply/page.jsx app/globals.css
git commit -m "feat: /apply page with application gate form"
```

---

## Task 15 — Rebuild /results

**Files:**
- Replace: `app/results/page.jsx`

- [ ] **Step 1: Replace results page with operator-first proof framing**

```jsx
export const metadata = {
  title: 'Results | S.Y.S.T.E.M. KC',
  description: 'Real results from real businesses — starting with the operator\'s own company. No invented stats. Placeholders where real numbers will be supplied.',
};

export default function Page() {
  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Results</span></div></div>

      <header className="page-hero">
        <div className="wrap">
          <span className="label">Proof</span>
          <h1>Results from real businesses.</h1>
          <p className="lede">We show the owner's own company results first — because we don't ask clients to take a risk we haven't already taken ourselves.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <span className="label">The operator's own company first</span>
          <h2 style={{marginTop:'14px'}}>[SERVICE COMPANY NAME] · [SERVICE COMPANY INDUSTRY] · [# LOCATIONS] locations</h2>
          <p style={{marginTop:'18px',color:'var(--muted)',fontSize:'17px',lineHeight:'1.7',maxWidth:'60ch'}}>These are the numbers from the owner's own operation — the systems, the money model work, and the growth engine we built and run ourselves before we bring it to clients.</p>
          <div className="results-placeholder" style={{marginTop:'36px',padding:'36px',background:'var(--card)',border:'2px dashed var(--rule)',borderRadius:'10px',textAlign:'center'}}>
            <p style={{fontFamily:'var(--mono)',fontSize:'13px',color:'var(--muted)',letterSpacing:'.08em'}}>[ REAL RESULT NUMBERS — owner to supply before launch ]</p>
            <p style={{marginTop:'12px',fontSize:'15px',color:'var(--muted)'}}>Examples: revenue growth %, lead response improvement, jobs recovered from missed calls, review count increase, hours saved per week.</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <span className="label">Client wins</span>
          <h2 style={{marginTop:'14px'}}>Kansas City businesses — real results, no invented numbers.</h2>
          <div className="card-grid" style={{marginTop:'40px'}}>
            <div className="card">
              <span className="tag">HVAC · Independence, MO</span>
              <h3>[REAL RESULT NUMBERS]</h3>
              <p>Placeholder — owner to supply verified client result before launch. No invented figures.</p>
            </div>
            <div className="card">
              <span className="tag">Real Estate · Overland Park, KS</span>
              <h3>[REAL RESULT NUMBERS]</h3>
              <p>Placeholder — owner to supply verified client result before launch.</p>
            </div>
            <div className="card">
              <span className="tag">Dental · Lee's Summit, MO</span>
              <h3>[REAL RESULT NUMBERS]</h3>
              <p>Placeholder — owner to supply verified client result before launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap inner">
          <h2>See what this looks like for <em>your</em> business.</h2>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now →</a>
            <a className="btn btn--ghost-invert" href="/giveaway/">Enter the Giveaway →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```
git add app/results/page.jsx
git commit -m "feat: rebuild /results with operator-first proof framing and placeholders"
```

---

## Task 16 — Rebuild /about

**Files:**
- Replace: `app/about/page.jsx`

- [ ] **Step 1: Replace about page**

```jsx
export const metadata = {
  title: 'About | Jason Dillon | S.Y.S.T.E.M. KC',
  description: '20 years building businesses. Still operating a multi-location service company across the Midwest. This is not consulting from a course — it\'s operator to operator.',
};

export default function Page() {
  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">About</span></div></div>

      <header className="page-hero">
        <div className="wrap">
          <span className="label">The operator</span>
          <h1>20 years building businesses. <em>Still in the trenches.</em></h1>
          <p className="lede">This isn't consulting from a course someone bought. It's one operator talking to another — about the same problems, using the same tools, in a real operating business.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'64px',alignItems:'start'}}>
            <div>
              <img src="/assets/founder-portrait.png" alt="Jason Dillon, founder of S.Y.S.T.E.M. KC" style={{width:'100%',borderRadius:'10px',display:'block'}} />
            </div>
            <div>
              <h2>Jason Dillon</h2>
              <p style={{marginTop:'8px',fontFamily:'var(--mono)',fontSize:'13px',letterSpacing:'.08em',color:'var(--muted)',textTransform:'uppercase'}}>Founder, S.Y.S.T.E.M. KC · Operator, [SERVICE COMPANY NAME]</p>
              <blockquote className="op-quote" style={{marginTop:'28px'}}>
                "I've spent 20 years building businesses, and I still own [SERVICE COMPANY NAME], a [# LOCATIONS]-location [SERVICE COMPANY INDUSTRY] company across the Midwest. I don't teach this from a course I bought — I run it."
              </blockquote>
              <p style={{marginTop:'28px',color:'var(--muted)',fontSize:'17px',lineHeight:'1.8'}}>The systems we install for clients are the same systems running our own operation. The money-model work comes from having redesigned our own pricing, offer structure, and lead flow — and watching what actually compounded versus what just looked good in a YouTube video.</p>
              <p style={{marginTop:'20px',color:'var(--muted)',fontSize:'17px',lineHeight:'1.8'}}>S.Y.S.T.E.M. KC exists because too many good service businesses are leaving serious money on the table — not because they're bad at the work, but because nobody has sat down with them and mapped out what's actually leaking and in what order to fix it.</p>
              <p style={{marginTop:'20px',color:'var(--muted)',fontSize:'17px',lineHeight:'1.8'}}>That's the conversation we have. Operator to operator. Plain English. No software sales pitch at the end.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">How we work</span>
          <h2 style={{marginTop:'14px'}}>The things we don't do.</h2>
          <div className="trust-grid" style={{marginTop:'36px'}}>
            {[
              ['No long-term contracts','Month-to-month on retainer. If we part ways, every account and workflow transfers to you. You own your operation.'],
              ['No invented stats','We use verified numbers from real clients or clearly marked placeholders. You'll never see a "287% increase" without knowing where it came from.'],
              ['No software pitch at the end','We look at the workflow before recommending any tool. We don't have affiliate deals that influence what we suggest.'],
              ['No AI hype','AI and automation are real tools. We use them where they help. We don't lead with them because they don't fix a broken money model.'],
            ].map(([title,desc])=>(
              <div className="trust-cell" key={title}>
                <div className="tc-check">✓</div>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Ready for an operator-to-operator conversation?</h2>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply to work together →</a>
            <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```
git add app/about/page.jsx
git commit -m "feat: rebuild /about with 20-year operator story and credibility framing"
```

---

## Task 17 — Update /contact CTAs

**Files:**
- Modify: `app/contact/page.jsx`

- [ ] **Step 1: Update the hero copy and CTA text to match new positioning**

Change the hero headline from `Book a free 20-minute automation discovery call` to:

```
Book a call — let's talk about your business.
```

Change lede to:

```
20 minutes. No pitch. We'll ask about where your business is, what's costing you the most right now, and whether there's a fit. You leave knowing more than you came in with — regardless of what you decide.
```

Change the CTA in the contact form section to also link to `/apply/` as an alternative:

Add below the form:
```jsx
<p style={{marginTop:'16px',fontSize:'15px',color:'var(--muted)'}}>Prefer to apply first? <a href="/apply/" style={{color:'var(--c-e)',fontWeight:'600'}}>Submit a short application →</a></p>
```

- [ ] **Step 2: Commit**

```
git add app/contact/page.jsx
git commit -m "feat: update contact page CTAs for new positioning"
```

---

## Task 18 — Add NEXT_PUBLIC_APPLY_FORMSPREE_ID env var, final env documentation

**Files:**
- Modify: `.env.local`

- [ ] **Step 1: Add apply form env var**

```
NEXT_PUBLIC_APPLY_FORMSPREE_ID=xdajgpod
```

Owner may want a separate Formspree endpoint for apply vs. contact. Document in README.

- [ ] **Step 2: Update README with all required env vars and Supabase setup instructions**

The README should include:
```markdown
## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `NEXT_PUBLIC_APPLY_FORMSPREE_ID` | Formspree form ID for /apply |

## Supabase Setup
1. Create a project at supabase.com
2. Run `supabase/migrations/001_giveaway.sql` in the SQL editor
3. Run the `increment_entry_count` RPC function (also in the migration file)
4. Copy the project URL and keys to `.env.local`
```

- [ ] **Step 3: Commit**

```
git add .env.local README.md
git commit -m "docs: env var documentation and Supabase setup instructions"
```

---

## Task 19 — Final verification pass

- [ ] **Step 1: Run production build**

```
npm run build
```
Expected: no errors. All 60+ routes compile.

- [ ] **Step 2: Check all redirects work**

```
curl -I http://localhost:3000/services/system-audit-kansas-city/
```
Expected: 301 to `/apply/`

- [ ] **Step 3: Test giveaway entry end-to-end**

- Go to `/giveaway/`
- Submit the form
- Verify `referral_code` returned and ReferralShare renders
- Check Supabase table for the row

- [ ] **Step 4: Test referral bonus**

- Copy referral link
- Open in incognito, enter with a different email
- Verify `referred_by` is set and original entrant's `entry_count` incremented

- [ ] **Step 5: Test apply form**

- Go to `/apply/`
- Submit form
- Verify Formspree receives it (check Formspree dashboard)

- [ ] **Step 6: Test geo banner**

- Go to `/` — banner shows
- Click dismiss — banner gone
- Reload — banner gone (sessionStorage persists across reload in same tab)
- New tab — banner shows again

- [ ] **Step 7: Verify old URLs redirect correctly** in browser

- [ ] **Step 8: Mobile check — nav, forms, giveaway all usable on 390px width**

- [ ] **Step 9: Final commit and push**

```
git add -A
git commit -m "feat: complete site rebuild — money-model-first positioning, giveaway, apply gate"
git push
```

---

## Self-review against spec

| Spec requirement | Covered in task |
|---|---|
| Money model first positioning | Task 7 (national homepage), Task 9 (/the-system) |
| Operator credibility | Task 7, 8, 16 |
| Two homepages (national + KC) | Task 7, 8 |
| KC banner (no hard redirect) | Task 6 |
| No public pricing | All offer pages — Apply CTA only |
| Giveaway with referral | Tasks 12, 13, 3, 4 |
| Application gate | Task 14 |
| /the-system | Task 9 |
| /done-for-you | Task 10 |
| /mentorship | Task 11 |
| /results rebuilt | Task 15 |
| /about rebuilt | Task 16 |
| /contact updated | Task 17 |
| 301 redirects for old URLs | Task 1 |
| Supabase schema | Task 2 |
| API routes for giveaway | Tasks 3, 4 |
| Static export removed | Task 1 |
| Industries/blog/legal preserved | No tasks needed — existing files untouched |
| S.Y.S.T.E.M. acronym preserved | Tasks 7, 8 |
| Stat wall preserved + reframed | Tasks 7, 8 |
| Trust block preserved | Tasks 7, 8, 16 |
| No invented numbers | Placeholders used throughout |
| Env var documentation | Task 18 |
