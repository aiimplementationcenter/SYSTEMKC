export const metadata = {
  title: 'The 60-Day Profit Sprint | Add $20,000 in New Revenue | S.Y.S.T.E.M. KC',
  description: 'Live 1-on-1 business growth training — 60 days, $20,000 in new revenue guaranteed or we work for free. Six pillars: offers, marketing, sales, speed-to-lead, referrals, and automation.',
};

export default function SprintPage() {
  return (
    <main>

      {/* ── BREADCRUMBS ── */}
      <div className="wrap">
        <nav className="crumbs">
          <a href="/">Home</a>
          <span className="sep">→</span>
          <span className="here">The Sprint</span>
        </nav>
      </div>

      {/* ── HERO ── */}
      <section className="nat-hero nat-hero--gradient">
        <div className="wrap">
          <span className="label">The 60-Day Profit Sprint</span>
          <h1 className="nat-h1">Live 1-on-1 training. $20,000 in new revenue in 60 days. Guaranteed.</h1>
          <p className="nat-lede">This isn't a course with homework. It's live sessions with you and your management team — where we build your growth playbook, redesign your offer, and install the systems that run it automatically. Start to finish, in 60 days.</p>
          <div className="actions" style={{marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center'}}>
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="#curriculum">Scroll to see what's included ↓</a>
          </div>
          <div className="scarcity-counter" style={{marginTop: '24px'}}>
            <span className="scarcity-dot"></span>
            3 of 5 client spots currently open
          </div>
        </div>
      </section>

      {/* ── GUARANTEE BLOCK ── */}
      <section className="section" style={{background: 'var(--bg-green-tint)'}}>
        <div className="wrap-narrow">
          <div className="guarantee-block">
            <div className="guarantee-block-inner">
              <div className="guarantee-label">The Guarantee</div>
              <div className="guarantee-number">$20,000</div>
              <p className="guarantee-text">You'll add $20,000 in new revenue in 60 days — or I work for free until you do.</p>
              <p className="guarantee-sub">No contracts. No fine print. If the model we build together doesn't produce results, I keep working. You don't pay more.</p>
              <div style={{marginTop: '28px'}}>
                <a className="btn btn--primary" href="/apply/">Apply for a free fit call →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FORMAT ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Not a course</span>
          <h2 style={{marginTop: '14px'}}>Live. 1-on-1. You and your team, together.</h2>
          <div className="three-col" style={{marginTop: '44px'}}>
            <div className="three-card">
              <div className="three-num" style={{color: 'var(--muted)', textDecoration: 'line-through'}}>NOT THIS</div>
              <h3 style={{color: 'var(--muted)', fontWeight: '400', fontSize: '18px'}}>A course with video lessons to watch on your own time</h3>
              <p style={{marginTop: '16px', fontWeight: '700', color: 'var(--ink)', fontSize: '17px'}}>Live sessions scheduled around your business</p>
            </div>
            <div className="three-card">
              <div className="three-num" style={{color: 'var(--muted)', textDecoration: 'line-through'}}>NOT THIS</div>
              <h3 style={{color: 'var(--muted)', fontWeight: '400', fontSize: '18px'}}>Generic frameworks that might apply to your industry</h3>
              <p style={{marginTop: '16px', fontWeight: '700', color: 'var(--ink)', fontSize: '17px'}}>Built specifically for your business, your numbers, your market</p>
            </div>
            <div className="three-card">
              <div className="three-num" style={{color: 'var(--muted)', textDecoration: 'line-through'}}>NOT THIS</div>
              <h3 style={{color: 'var(--muted)', fontWeight: '400', fontSize: '18px'}}>Homework you'll never get to after a 12-hour work day</h3>
              <p style={{marginTop: '16px', fontWeight: '700', color: 'var(--ink)', fontSize: '17px'}}>We build it together — you leave each session with something done</p>
            </div>
          </div>
          <p style={{marginTop: '36px', fontSize: '18px', color: 'var(--text)', lineHeight: '1.65', maxWidth: '64ch'}}>Jason works directly with you and your management team — not a junior coach, not a call center. Every session is tailored to your specific business, your specific numbers, and your specific growth gaps.</p>
        </div>
      </section>

      {/* ── SIX-PILLAR CURRICULUM ── */}
      <section className="section section--alt" id="curriculum">
        <div className="wrap">
          <span className="label">The curriculum</span>
          <h2 style={{marginTop: '14px'}}>Six pillars. Everything it takes to add $20,000 in new revenue in 60 days.</h2>
          <div className="process-steps" style={{marginTop: '48px'}}>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 1</div>
              <h3>Offers &amp; Money Model</h3>
              <p>We start where the money is: your pricing, your offer, and where revenue is currently leaking. We audit what you charge vs. what the market will bear, redesign your offer for maximum clarity and conversion, and identify the 2–3 highest-ROI changes you can make this week. Most clients find $5,000–$15,000 in additional annual revenue just from the pricing conversation alone.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 2</div>
              <h3>Marketing &amp; Lead Gen</h3>
              <p>We map every channel where your customers actually exist — Google, Facebook, Instagram, TikTok, Nextdoor, email, your existing database. You'll know exactly what to post, where to post it, and how to measure whether it's working. We also show you how to create content that attracts local customers without spending hours on it.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 3</div>
              <h3>Sales &amp; Conversion</h3>
              <p>What you say when a lead comes in, how you quote, how you handle objections — this is where most service businesses lose deals they should win. We redesign your pitch, your follow-up sequence, and your quote process so leads that used to die get closed instead.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 4</div>
              <h3>Speed-to-Lead &amp; Follow-Up</h3>
              <p>78% of buyers go with whoever responds first. We build the response system that makes sure you're always first — automated acknowledgment within seconds, follow-up for days and weeks, and the conversion sequence that closes leads who went quiet. This is usually the fastest-payback piece of the whole Sprint.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 5</div>
              <h3>Referral &amp; Review Systems</h3>
              <p>Your existing customers are your highest-converting lead source — and most businesses never ask them properly. We design and install a referral program and review engine that run automatically: after every completed job, a trigger fires that asks for the review and plants the referral seed. No one has to remember to ask.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 6</div>
              <h3>Operations &amp; Automation</h3>
              <p>The final pillar executes everything above: missed-call text-back, lead nurture sequences, appointment reminders, rebooking campaigns, and the SOPs that let your team run the business without you narrating every step. Automation without strategy is busywork — but automation after the strategy is how you scale.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW THE 60 DAYS WORK ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">The timeline</span>
          <h2 style={{marginTop: '14px'}}>Week by week. Start to running system.</h2>
          <div className="process-steps" style={{marginTop: '48px'}}>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 1–2</div>
              <h3>Full money model audit</h3>
              <p>We map your revenue, pricing, lead sources, conversion rate, and the gaps costing you the most. You get a written priority list.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 3–4</div>
              <h3>Offer redesign and marketing plan</h3>
              <p>We rewrite the offer, build the marketing calendar, and launch the first high-ROI change.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 5–6</div>
              <h3>Sales process and speed-to-lead system</h3>
              <p>Follow-up sequences built and active. Quote process redesigned.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 7–8</div>
              <h3>Referral and review systems installed</h3>
              <p>Your existing customers become your best lead source — running automatically after every job.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 9–10</div>
              <h3>Full automation install</h3>
              <p>Every workflow, SOP, and automation built, tested, and live.</p>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 11–12 (Buffer)</div>
              <h3>Polish, team training, and handoff</h3>
              <p>Edge cases addressed, team trained, handoff documentation complete. The system runs without us.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who it works for</span>
          <h2 style={{marginTop: '14px'}}>Any local service business ready to grow.</h2>
          <p style={{marginTop: '18px', fontSize: '18px', color: 'var(--muted)', lineHeight: '1.65', maxWidth: '60ch'}}>The Sprint works for any owner of a local service business who's serious about the 60 days. The growth playbook is the same whether you cut hair, fix furnaces, or represent clients in court.</p>
          <p style={{marginTop: '20px', fontSize: '16px', color: 'var(--muted)', lineHeight: '1.8'}}>HVAC · Plumbing · Roofing · Real estate · Dental · Medical · Salons · Nail salons · Barber shops · Spas · Massage therapists · Hair stylists · Restaurants · Landscapers · Pest control · Law firms · Auto repair · Gyms · Cleaning services</p>
        </div>
      </section>

      {/* ── THE OWNER ── */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">Who you're working with</span>
          <h2 style={{marginTop: '14px'}}>Jason Dillon — 20-year operator.</h2>
          <blockquote className="op-quote">
            "I still own and operate a multi-location service company. Every strategy I teach, I use in my own business today. I built the Sprint because the kind of help I needed when I was scaling didn't exist — someone who would walk into my operation, look at my actual numbers, and tell me what to fix first. That's exactly what the Sprint is."
          </blockquote>
        </div>
      </section>

      {/* ── FINAL CTA STRIP ── */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>3 of 5 spots currently open.</h2>
          <p className="sub">Apply for a free fit call. We look at your business and tell you exactly what the Sprint would produce for you — before you commit to anything.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/contact/">Or just reach out →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
