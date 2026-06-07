import GeoBanner from './components/GeoBanner';

export const metadata = {
  title: 'S.Y.S.T.E.M. KC — More Customers. More Profit. Less Guessing.',
  description: 'We teach local service businesses how to get more customers, earn more from each one, and build the kind of profit that doesn\'t require working more hours.',
};

export default function Page() {
  return (
    <main>

      <GeoBanner />

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">Local service businesses · Growth strategy · Profit first</span>
          <h1 className="nat-h1">More customers. More money per customer. Profits that don't require more hours.</h1>
          <p className="nat-lede">We teach local service business owners the exact playbook for attracting more customers, getting more out of every one you already have, and building a business that doesn't fall apart when you step away.</p>
          <p className="nat-sub">The tools and automations? Those come last — and they're just how we make the whole thing run without you doing it manually every day.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply to work together <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="/the-system/">See the full playbook</a>
          </div>
          <p className="nat-trust">Built by a 20-year operator who still runs a multi-location service business today.</p>
        </div>
      </section>

      {/* ── OPERATOR CREDIBILITY ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who you're talking to</span>
          <h2 style={{marginTop: '14px'}}>This isn't taught from a course. It's run from a business.</h2>
          <blockquote className="op-quote">
            "I've spent 20 years building businesses — and I still own and operate a multi-location service company across the Midwest. Every growth strategy I teach, I use. Every system I recommend, I've tested. I'm not a consultant who figured this out in a classroom."
          </blockquote>
          <p style={{marginTop: '24px', color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7'}}>S.Y.S.T.E.M. KC exists because I kept watching capable business owners grind themselves into the ground — not because they lacked work ethic, but because nobody had ever shown them the actual playbook for growing a local service business. So I wrote it.</p>
        </div>
      </section>

      {/* ── THE REAL PROBLEM ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">The real problem</span>
          <h2 style={{marginTop: '14px', maxWidth: '26ch'}}>You're working hard. The problem is you're missing the playbook.</h2>
          <div className="stat-wall" style={{marginTop: '40px'}}>
            <div className="stat-cell"><div className="stat-num">62%</div><div className="stat-desc">of calls to local service businesses go unanswered — each one a job that went somewhere else<sup>1</sup></div></div>
            <div className="stat-cell"><div className="stat-num">&lt;5 min</div><div className="stat-desc">response time makes you 21× more likely to close — most owners don't have a system for this<sup>2</sup></div></div>
            <div className="stat-cell"><div className="stat-num">78%</div><div className="stat-desc">of buyers choose whoever responds first — not who does the best work or has the best reviews<sup>3</sup></div></div>
            <div className="stat-cell"><div className="stat-num">85%</div><div className="stat-desc">of happy customers will never refer anyone unless you have a system that asks them to<sup>4</sup></div></div>
          </div>
          <div className="stat-wall" style={{marginTop: '24px', borderTop: '1px solid var(--rule)', paddingTop: '24px'}}>
            <div className="stat-cell"><div className="stat-num">5%</div><div className="stat-desc">more customer retention increases profits by 25–95% — retention is the most underused growth lever in service businesses<sup>5</sup></div></div>
            <div className="stat-cell"><div className="stat-num">200%</div><div className="stat-desc">more lifetime spend from referred customers vs. non-referred — your referral program is your highest-ROI marketing channel<sup>6</sup></div></div>
            <div className="stat-cell"><div className="stat-num">3–5×</div><div className="stat-desc">higher ad conversion when your offer is clear and differentiated — fixing the offer makes every marketing dollar go further<sup>7</sup></div></div>
            <div className="stat-cell"><div className="stat-num">5–9%</div><div className="stat-desc">revenue increase per additional star on Google — reviews aren't a vanity metric, they're a revenue driver<sup>8</sup></div></div>
          </div>
          <p className="stat-sources">Sources: <sup>1</sup>Invoca 2023 · <sup>2</sup>Harvard Business Review · <sup>3</sup>Velocify · <sup>4</sup>Clutch research · <sup>5</sup>Bain &amp; Company · <sup>6</sup>McKinsey · <sup>7</sup>CXL Institute · <sup>8</sup>Harvard Business School</p>
        </div>
      </section>

      {/* ── WHAT WE ACTUALLY TEACH ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">What we teach</span>
          <h2 style={{marginTop: '14px'}}>Three things. In the right order.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '60ch'}}>Most consultants sell you software. We teach you a growth strategy — then show you which tools make it run without you doing everything by hand.</p>
          <div className="three-col" style={{marginTop: '44px'}}>
            <div className="three-card">
              <div className="three-num">01</div>
              <h3>How to Get More Customers</h3>
              <p>Local visibility, Google presence, review generation, referral programs, paid and organic marketing that actually works for service businesses. We map exactly where your customers come from today — and build the strategy to multiply that flow.</p>
              <p style={{marginTop: '12px', fontSize: '14px', color: 'var(--muted)'}}>No guessing. No wasting money on ads before the foundation is right.</p>
            </div>
            <div className="three-card">
              <div className="three-num">02</div>
              <h3>How to Make More From Each One</h3>
              <p>Pricing strategy, upsells, repeat visits, customer lifetime value, and retention. Most service businesses are leaving 30–50% of their potential revenue on the table from customers they've already won. We show you exactly where and how to capture it.</p>
              <p style={{marginTop: '12px', fontSize: '14px', color: 'var(--muted)'}}>The customer you already have is the cheapest sale you'll ever make.</p>
            </div>
            <div className="three-card">
              <div className="three-num">03</div>
              <h3>How to Run It Without You</h3>
              <p>Once the growth strategy is clear, we install the tools and automations that execute it on autopilot — missed-call text-back, follow-up sequences, review requests, rebooking campaigns. This is the last step, not the first.</p>
              <p style={{marginTop: '12px', fontSize: '14px', color: 'var(--muted)'}}>Automation without strategy is just expensive busywork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Who this works for</span>
          <h2 style={{marginTop: '14px', maxWidth: '28ch'}}>Any local service business ready to grow.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '60ch'}}>The growth playbook is the same whether you cut hair, fix furnaces, or represent clients in court. Here's where we see the biggest results:</p>
          <div className="stat-wall" style={{marginTop: '40px', gridTemplateColumns: 'repeat(4, 1fr)'}}>
            <div className="stat-cell"><strong style={{display:'block',fontSize:'17px',marginBottom:'8px'}}>HVAC & Plumbing</strong><div className="stat-desc">Faster response + better referral systems + review automation = a full schedule without more ad spend.</div></div>
            <div className="stat-cell"><strong style={{display:'block',fontSize:'17px',marginBottom:'8px'}}>Roofing & Contractors</strong><div className="stat-desc">Better follow-up, smarter quoting, and a referral engine that turns every finished job into the next one.</div></div>
            <div className="stat-cell"><strong style={{display:'block',fontSize:'17px',marginBottom:'8px'}}>Real Estate</strong><div className="stat-desc">Speed-to-lead strategy, past-client reactivation, and a referral system that makes your database a growth engine.</div></div>
            <div className="stat-cell"><strong style={{display:'block',fontSize:'17px',marginBottom:'8px'}}>Medical & Dental</strong><div className="stat-desc">Cut no-shows, fill cancellations, and build the patient communication system that keeps people coming back.</div></div>
            <div className="stat-cell"><strong style={{display:'block',fontSize:'17px',marginBottom:'8px'}}>Salons & Nail Salons</strong><div className="stat-desc">Rebooking strategy, review generation, and a referral program that turns regulars into your best marketers.</div></div>
            <div className="stat-cell"><strong style={{display:'block',fontSize:'17px',marginBottom:'8px'}}>Barber Shops</strong><div className="stat-desc">Loyalty strategy, automated reminders, and the marketing systems that keep chairs full on slow days.</div></div>
            <div className="stat-cell"><strong style={{display:'block',fontSize:'17px',marginBottom:'8px'}}>Spas & Massage Therapists</strong><div className="stat-desc">Repeat-visit strategy is everything here. We build the re-engagement system that keeps your books full month after month.</div></div>
            <div className="stat-cell"><strong style={{display:'block',fontSize:'17px',marginBottom:'8px'}}>Hair Stylists & Studios</strong><div className="stat-desc">Client retention + referral programs + local visibility = a full book without paying for every new client.</div></div>
          </div>
          <p style={{marginTop: '24px', padding: '16px 20px', background: 'var(--paper-2)', borderRadius: '8px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.7'}}>
            Also: restaurants, landscapers, pest control, insurance agents, gyms, law firms, veterinarians, auto repair, cleaning services — <strong style={{color: 'var(--text)'}}>if you sell a local service, the playbook works.</strong> <a href="/contact/" style={{color: 'var(--c-e)', fontWeight: '600'}}>Ask us about your industry →</a>
          </p>
        </div>
      </section>

      {/* ── OFFER GRID ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">How we work together</span>
          <h2 style={{marginTop: '14px'}}>Only pay for what you need.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '60ch'}}>No one-size-fits-all packages. Some owners want it built for them. Some want to learn as they go. Some just need someone in their corner each month. We have an option for each.</p>
          <div className="offer-grid" style={{marginTop: '44px'}}>
            <a className="offer-card offer-card--featured" href="/done-for-you/">
              <span className="tag">Most popular</span>
              <h3>Done For You</h3>
              <p>We build your entire growth and operations system — strategy, SOPs, and all the automations — then hand it off running. Best for owners who want the result without doing the build work themselves.</p>
              <span className="more">See what's included →</span>
            </a>
            <a className="offer-card" href="/mentorship/">
              <h3>Do It With You</h3>
              <p>We coach you through the playbook every month — growth strategy, customer retention, marketing, operations, and the tools that tie it together. You build it. We make sure you build the right things.</p>
              <p style={{marginTop: '12px', fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: '700', color: 'var(--c-e)'}}>Starts at $399 / month</p>
              <span className="more">Learn more →</span>
            </a>
            <a className="offer-card offer-card--giveaway" href="/giveaway/">
              <span className="tag">Free · $20,000 value</span>
              <h3>The Scholarship</h3>
              <p>The full 6-month Done-For-You program — $20,000 in business growth services — awarded each cycle to the owner who demonstrates the greatest need. No purchase necessary.</p>
              <p style={{marginTop: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--c-m)'}}>Refer someone who wins → you also win the full scholarship.</p>
              <span className="more">Apply for the $20,000 scholarship →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BLOCK ── */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">How we work</span>
          <h2 style={{marginTop: '14px'}}>Honest. Practical. You own everything.</h2>
          <div className="trust-grid" style={{marginTop: '36px'}}>
            {[
              ['Growth strategy first', 'We don\'t touch tools until we know exactly what you\'re trying to grow and why. Strategy drives everything.'],
              ['You own all of it', 'Every playbook, workflow, automation, and document we build is yours — you stay in control of everything we configure together.'],
              ['No long-term contracts', 'Month-to-month. If you leave, everything transfers to you and keeps running.'],
              ['Plain English', 'No jargon. No AI hype. One business owner talking to another about what actually produces results.'],
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
          <h2>Ready to stop guessing and start growing?</h2>
          <p className="sub">Apply to work with us. First conversation is free — we look at your business and tell you exactly what the highest-leverage move is before you spend a dollar.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/the-system/">See the full playbook</a>
            <a className="btn btn--ghost-invert" href="/giveaway/">Enter the Scholarship →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
