import GeoBanner from './components/GeoBanner';

export const metadata = {
  title: 'S.Y.S.T.E.M. KC â€" Add $20,000 in New Revenue in 60 Days. Guaranteed.',
  description: 'Live 1-on-1 business growth training for local service businesses. We teach offers, marketing, sales, speed-to-lead, referrals, and automation â€" start to finish in 60 days.',
};

export default function Page() {
  return (
    <main>

      <GeoBanner />

      {/* â"€â"€ HERO â"€â"€ */}
      <section className="nat-hero nat-hero--gradient">
        <div className="wrap">
          <span className="label">The 60-Day Profit Challenge</span>
          <h1 className="nat-h1">Add $20,000 in new revenue in 60 days. Guaranteed.</h1>
          <p className="nat-lede">Fire your agency. We teach local service business owners live, 1-on-1 â€" how to fix their money model, explode their customer base, and build a business that doesn't fall apart when they step away. Not a course. Not homework. Live sessions with you and your team.</p>
          <p className="nat-sub">You'll add $20,000 in new revenue in 60 days â€" or I work for free until you do.</p>
          <div className="actions" style={{marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center'}}>
            <a className="btn btn--primary" href="/apply/">Apply Now <span className="arrow">â†'</span></a>
            <a className="btn btn--ghost" href="/the-challenge/">See How It Works</a>
          </div>
          <p className="nat-trust">Built by a 20-year operator who still runs a multi-location service business today.</p>
          <div className="scarcity-counter" style={{marginTop: '24px'}}>
            <span className="scarcity-dot"></span>
            3 of 5 client spots currently open
          </div>
        </div>
      </section>

      {/* â"€â"€ GUARANTEE BLOCK â"€â"€ */}
      <section style={{background: 'var(--bg-green-tint)', padding: '80px 0', borderBottom: '1px solid var(--rule)'}}>
        <div className="wrap">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>
            <div>
              <p style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: '700', marginBottom: '20px'}}>Who this is for</p>
              <h2 style={{fontFamily: 'var(--sans)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-.03em', color: 'var(--blue-deep)'}}>We only work with owners who are serious about growth.</h2>
              <p style={{marginTop: '24px', fontSize: '18px', lineHeight: '1.75', color: 'var(--muted)'}}>Most business owners left a 40-hour job &mdash; and ended up working 100 hours a week to avoid going back. The hustle isn't the problem. The missing playbook is.</p>
              <p style={{marginTop: '16px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '22px', color: 'var(--blue-deep)', lineHeight: '1.35'}}>Success starts here &mdash; not with more hours, but with the right system.</p>
            </div>
            <div style={{background: 'var(--blue-deep)', borderRadius: '20px', padding: '44px 40px', textAlign: 'center'}}>
              <p style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: '700', marginBottom: '8px'}}>The 60-Day Profit Challenge &mdash; Guarantee</p>
              <div style={{fontFamily: 'var(--serif)', fontSize: 'clamp(56px, 8vw, 88px)', fontWeight: '900', lineHeight: '1', color: '#fff', letterSpacing: '-.03em'}}>$20,000</div>
              <p style={{marginTop: '16px', fontSize: '19px', fontWeight: '700', color: '#fff', lineHeight: '1.4'}}>in new revenue in 60 days &mdash; or I work for free until you do.</p>
              <p style={{marginTop: '14px', fontSize: '14px', color: 'rgba(255,255,255,.6)', lineHeight: '1.6'}}>No contracts. No fine print. We build your money model, marketing, sales system, referrals, and automation together &mdash; live and 1-on-1. If it doesn't produce, I keep working at no extra cost.</p>
              <div style={{marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                <a className="btn btn--primary" href="/apply/" style={{width: '100%', justifyContent: 'center', fontSize: '17px', padding: '16px 24px'}}>Apply for a free fit call &rarr;</a>
                <a href="/the-challenge/" style={{fontSize: '13px', color: 'rgba(255,255,255,.5)', fontFamily: 'var(--mono)', letterSpacing: '.06em'}}>See everything included in the Challenge &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â"€â"€ THE REAL PROBLEM â"€â"€ */}
      <section className="section">
        <div className="wrap">
          <span className="label">The real problem</span>
          <h2 style={{marginTop: '14px', maxWidth: '26ch'}}>You're working hard. The problem is you're missing the playbook.</h2>
          <div className="stat-wall" style={{marginTop: '40px'}}>
            <div className="stat-cell"><div className="stat-num">62%</div><div className="stat-desc">of calls to local service businesses go unanswered â€" each one a job that went somewhere else<sup>1</sup></div></div>
            <div className="stat-cell"><div className="stat-num">&lt;5 min</div><div className="stat-desc">response time makes you 21Ã— more likely to close â€" most owners don't have a system for this<sup>2</sup></div></div>
            <div className="stat-cell"><div className="stat-num">78%</div><div className="stat-desc">of buyers choose whoever responds first â€" not who does the best work or has the best reviews<sup>3</sup></div></div>
            <div className="stat-cell"><div className="stat-num">85%</div><div className="stat-desc">of happy customers will never refer anyone unless you have a system that asks them to<sup>4</sup></div></div>
          </div>
          <div className="stat-wall" style={{marginTop: '24px', borderTop: '1px solid var(--rule)', paddingTop: '24px'}}>
            <div className="stat-cell"><div className="stat-num">5%</div><div className="stat-desc">more customer retention increases profits by 25â€"95% â€" retention is the most underused growth lever in service businesses<sup>5</sup></div></div>
            <div className="stat-cell"><div className="stat-num">200%</div><div className="stat-desc">more lifetime spend from referred customers vs. non-referred â€" your referral program is your highest-ROI marketing channel<sup>6</sup></div></div>
            <div className="stat-cell"><div className="stat-num">3â€"5Ã—</div><div className="stat-desc">higher ad conversion when your offer is clear and differentiated â€" fixing the offer makes every marketing dollar go further<sup>7</sup></div></div>
            <div className="stat-cell"><div className="stat-num">5â€"9%</div><div className="stat-desc">revenue increase per additional star on Google â€" reviews aren't a vanity metric, they're a revenue driver<sup>8</sup></div></div>
          </div>
          <p className="stat-sources">Sources: <sup>1</sup>Invoca 2023 Â· <sup>2</sup>Harvard Business Review Â· <sup>3</sup>Velocify Â· <sup>4</sup>Clutch Â· <sup>5</sup>Bain &amp; Company Â· <sup>6</sup>McKinsey Â· <sup>7</sup>CXL Institute Â· <sup>8</sup>Harvard Business School</p>
        </div>
      </section>

      {/* â"€â"€ SIX-PILLAR CURRICULUM â"€â"€ */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">What we teach</span>
          <h2 style={{marginTop: '14px'}}>Six pillars. Start to finish. In the right order.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '60ch'}}>Most owners buy software and hope it helps. We teach the actual business model â€" then add tools that execute it automatically.</p>
          <div className="three-col" style={{marginTop: '44px'}}>
            <div className="three-card">
              <div className="three-num">PILLAR 01</div>
              <h3>Offers &amp; Money Model</h3>
              <p>We audit exactly how your business makes money â€" pricing, margins, offer clarity, what you're charging vs. what the market will pay. This is where most growth is hiding.</p>
            </div>
            <div className="three-card">
              <div className="three-num">PILLAR 02</div>
              <h3>Marketing &amp; Lead Gen</h3>
              <p>Google visibility, local SEO, Facebook, Instagram, TikTok, Nextdoor â€" we map where your customers actually are and how to reach them without guessing or overspending.</p>
            </div>
            <div className="three-card">
              <div className="three-num">PILLAR 03</div>
              <h3>Sales &amp; Conversion</h3>
              <p>What you say, how you quote, what your offer looks like. A clearer offer converts 3â€"5Ã— better than a vague one. We redesign the pitch and the process.</p>
            </div>
          </div>
          <div className="three-col" style={{marginTop: '24px'}}>
            <div className="three-card">
              <div className="three-num">PILLAR 04</div>
              <h3>Speed-to-Lead &amp; Follow-Up</h3>
              <p>78% of buyers go with whoever responds first. We build the response and follow-up system that means you're always first â€" even at 2am on a Tuesday.</p>
            </div>
            <div className="three-card">
              <div className="three-num">PILLAR 05</div>
              <h3>Referral &amp; Review Systems</h3>
              <p>Happy customers only refer when you give them a path. We design and install referral programs and review engines that run automatically after every job.</p>
            </div>
            <div className="three-card">
              <div className="three-num">PILLAR 06</div>
              <h3>Operations &amp; Automation</h3>
              <p>Once the strategy is built, we install the tools that execute it â€" automations, SOPs, and workflows your team can run without you narrating every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* â"€â"€ WHO WE WORK WITH â"€â"€ */}
      <section className="section">
        <div className="wrap">
          <span className="label">Who this works for</span>
          <h2 style={{marginTop: '14px', maxWidth: '28ch'}}>Any local service business ready to grow.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '60ch'}}>The growth playbook is the same whether you cut hair, fix furnaces, or represent clients in court. Here's where we see the biggest results:</p>
          <div className="stat-wall" style={{marginTop: '40px', gridTemplateColumns: 'repeat(4, 1fr)'}}>
            <div className="stat-cell"><strong style={{display: 'block', fontSize: '17px', marginBottom: '8px'}}>HVAC &amp; Plumbing</strong><div className="stat-desc">Faster response + better referral systems + review automation = a full schedule without more ad spend.</div></div>
            <div className="stat-cell"><strong style={{display: 'block', fontSize: '17px', marginBottom: '8px'}}>Roofing &amp; Contractors</strong><div className="stat-desc">Better follow-up, smarter quoting, and a referral engine that turns every finished job into the next one.</div></div>
            <div className="stat-cell"><strong style={{display: 'block', fontSize: '17px', marginBottom: '8px'}}>Real Estate</strong><div className="stat-desc">Speed-to-lead strategy, past-client reactivation, and a referral system that makes your database a growth engine.</div></div>
            <div className="stat-cell"><strong style={{display: 'block', fontSize: '17px', marginBottom: '8px'}}>Medical &amp; Dental</strong><div className="stat-desc">Cut no-shows, fill cancellations, and build the patient communication system that keeps people coming back.</div></div>
            <div className="stat-cell"><strong style={{display: 'block', fontSize: '17px', marginBottom: '8px'}}>Salons &amp; Nail Salons</strong><div className="stat-desc">Rebooking strategy, review generation, and a referral program that turns regulars into your best marketers.</div></div>
            <div className="stat-cell"><strong style={{display: 'block', fontSize: '17px', marginBottom: '8px'}}>Barber Shops</strong><div className="stat-desc">Loyalty strategy, automated reminders, and the marketing systems that keep chairs full on slow days.</div></div>
            <div className="stat-cell"><strong style={{display: 'block', fontSize: '17px', marginBottom: '8px'}}>Spas &amp; Massage Therapists</strong><div className="stat-desc">Repeat-visit strategy is everything here. We build the re-engagement system that keeps your books full month after month.</div></div>
            <div className="stat-cell"><strong style={{display: 'block', fontSize: '17px', marginBottom: '8px'}}>Hair Stylists &amp; Studios</strong><div className="stat-desc">Client retention + referral programs + local visibility = a full book without paying for every new client.</div></div>
          </div>
          <p style={{marginTop: '24px', padding: '16px 20px', background: 'var(--paper-2)', borderRadius: '8px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.7'}}>
            Also: restaurants, landscapers, pest control, insurance agents, gyms, law firms, veterinarians, auto repair, cleaning services â€" <strong style={{color: 'var(--text)'}}>if you sell a local service, the playbook works.</strong> <a href="/contact/" style={{color: 'var(--c-e)', fontWeight: '600'}}>Ask us about your industry â†'</a>
          </p>
        </div>
      </section>

      {/* â"€â"€ OFFER SECTION â"€â"€ */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">How we work together</span>
          <h2 style={{marginTop: '14px'}}>One program. Built around you.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '68ch'}}>The 60-Day Profit Challenge is done <em>with</em> you &mdash; we build it together, live, one-on-one with you and your management team. In 60 days we rebuild your whole money model: offers, marketing, sales, follow-up, referrals, reviews, and the automations that run it all. You also keep <strong>recordings of every build and optimization session</strong> &mdash; a permanent playbook of your own business. Nearly <strong>$39,000 of work and assets</strong>, with one promise: you'll add $20,000 in new revenue in 60 days, or I work free until you do. Only 5 spots at a time.</p>
          <div className="offer-grid">
            <div className="offer-card offer-card--featured">
              <span className="tag" style={{display: 'inline-block', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--c-e)', fontWeight: '700', marginBottom: '12px'}}>Flagship offer</span>
              <h3>The 60-Day Profit Challenge</h3>
              <p>Live 1-on-1 training for you and your team. We build your money model, customer acquisition plan, referral and review systems, and full automation install â€" together, start to finish, in 60 days.</p>
              <p style={{marginTop: '14px', fontSize: '14px', fontStyle: 'italic', color: 'var(--muted)'}}>You'll add $20,000 in new revenue in 60 days â€" or I work for free until you do.</p>
              <div style={{marginTop: '20px'}}>
                <a className="btn btn--primary" href="/the-challenge/">Apply for the Challenge â†'</a>
              </div>
            </div>
            <div className="offer-card">
              <h3>Done For You</h3>
              <p>Prefer to hand it off? Our team builds and installs your full growth system â€" strategy, SOPs, and automations â€" then hands it off running. You approve decisions. We do the work.</p>
              <div style={{marginTop: '20px'}}>
                <a className="btn btn--ghost" href="/done-for-you/">Learn more â†'</a>
              </div>
            </div>
            <div className="offer-card">
              <h3>Not sure where to start?</h3>
              <p>Book a free 20-minute call. We look at your business and tell you exactly where the highest-leverage growth move is â€" before you spend anything.</p>
              <div style={{marginTop: '20px'}}>
                <a className="btn btn--ghost" href="/contact/">Book a free call â†'</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â"€â"€ OPERATOR CREDIBILITY â"€â"€ */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who you're talking to</span>
          <h2 style={{marginTop: '14px'}}>This isn't taught from a course. It's run from a business.</h2>
          <blockquote className="op-quote">
            "I've spent 20 years building businesses â€" and I still own and operate a multi-location service company across the Midwest. Every growth strategy I teach, I use. Every system I recommend, I've tested. I'm not a consultant who figured this out in a classroom."
          </blockquote>
          <p style={{marginTop: '24px', color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7'}}>S.Y.S.T.E.M. KC exists because I kept watching capable business owners grind themselves into the ground â€" not because they lacked work ethic, but because nobody had ever shown them the actual playbook for growing a local service business. So I wrote it.</p>
        </div>
      </section>

      {/* â"€â"€ TRUST BLOCK â"€â"€ */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">How we work</span>
          <h2 style={{marginTop: '14px'}}>Honest. Practical. You own everything.</h2>
          <div className="trust-grid" style={{marginTop: '36px'}}>
            {[
              ['Growth strategy first', "We don't touch tools until we know exactly what you're trying to grow and why."],
              ['You own all of it', 'Every playbook, workflow, automation, and document we build is yours â€" you stay in control of everything.'],
              ['No long-term contracts', "Month-to-month. If you leave, everything transfers to you and keeps running."],
              ['Plain English', "No jargon. No AI hype. One business owner talking to another about what actually produces results."],
            ].map(([title, desc]) => (
              <div className="trust-cell" key={title}>
                <div className="tc-check">âœ"</div>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ FINAL CTA â"€â"€ */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Ready to add $20,000 in new revenue?</h2>
          <p className="sub">Apply to work with us. First conversation is free â€" we look at your business and tell you exactly where the highest-leverage move is.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">â†'</span></a>
            <a className="btn btn--ghost-invert" href="/the-challenge/">See the Challenge</a>
          </div>
        </div>
      </section>

    </main>
  );
}
