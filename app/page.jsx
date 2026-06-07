import GeoBanner from './components/GeoBanner';

export const metadata = {
  title: 'S.Y.S.T.E.M. KC — Build a More Profitable Business',
  description: 'We rebuild how your service business makes money, then install the systems and workflows that run it without you.',
};

export default function Page() {
  return (
    <main>

      <GeoBanner />

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">Business systems · Profitability · Kansas City</span>
          <h1 className="nat-h1">We rebuild how your business makes money. Then we install the systems that run it.</h1>
          <p className="nat-lede">Most service businesses aren't losing to better competition. They're losing to profit gaps nobody has mapped, missed calls nobody followed up, and operations that still depend entirely on the owner.</p>
          <p className="nat-sub">We come in, find the leaks, and fix them — in person or remotely, depending on where you are.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply to work together <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="/the-system/">How It Works</a>
          </div>
          <p className="nat-trust">Built by a 20-year operator for operators who are tired of guessing.</p>
        </div>
      </section>

      {/* ── OPERATOR CREDIBILITY ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who you're talking to</span>
          <h2 style={{marginTop: '14px'}}>Not a consultant. An operator who builds.</h2>
          <blockquote className="op-quote">
            "I've spent 20 years building businesses, and I still own and operate a multi-location service company across the Midwest. I don't teach this from a course I bought — I run it. Every system I show you, I use."
          </blockquote>
          <p style={{marginTop: '24px', color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7'}}>S.Y.S.T.E.M. KC started because I kept watching good business owners lose money to fixable problems — and I couldn't find anyone explaining the real cause. So I built the consulting practice I wished existed.</p>
        </div>
      </section>

      {/* ── STAT WALL ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Where the money is hiding</span>
          <h2 style={{marginTop: '14px', maxWidth: '24ch'}}>The profit you're leaving behind isn't a mystery. It's a pattern.</h2>
          <div className="stat-wall">
            <div className="stat-cell"><div className="stat-num">62%</div><div className="stat-desc">of calls to local service businesses go unanswered — each one a job that went somewhere else<sup>1</sup></div></div>
            <div className="stat-cell"><div className="stat-num">&lt;5 min</div><div className="stat-desc">response time makes you 21× more likely to close — most businesses take hours or days<sup>2</sup></div></div>
            <div className="stat-cell"><div className="stat-num">78%</div><div className="stat-desc">of buyers choose whoever responds first — not who does the best work<sup>3</sup></div></div>
            <div className="stat-cell"><div className="stat-num">85%</div><div className="stat-desc">of people who hit voicemail never call back — they just call the next number<sup>4</sup></div></div>
          </div>
          <p className="stat-sources">Sources: <sup>1</sup>Invoca 2023 · <sup>2</sup>Harvard Business Review · <sup>3</sup>Velocify · <sup>4</sup>Clutch research</p>
        </div>
      </section>

      {/* ── HOW IT WORKS / 3 LAYERS ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">The approach</span>
          <h2 style={{marginTop: '14px'}}>Three layers. In order. No shortcuts.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '60ch'}}>Most businesses try to automate before they've fixed the revenue model. That's why the automation doesn't help. We go in the right sequence.</p>
          <div className="three-col" style={{marginTop: '44px'}}>
            <div className="three-card">
              <div className="three-num">01</div>
              <h3>Money Model First</h3>
              <p>Before we touch a single tool, we map your revenue — where it comes from, where it leaks, and what the highest-leverage fix actually is. Most owners have never seen this drawn out clearly.</p>
            </div>
            <div className="three-card">
              <div className="three-num">02</div>
              <h3>Operations Second</h3>
              <p>Once we know what to protect and grow, we document and tighten the workflows that deliver it. SOPs. Checklists. Communication standards. The boring stuff that makes everything else work.</p>
            </div>
            <div className="three-card">
              <div className="three-num">03</div>
              <h3>Automation Third</h3>
              <p>Now automation makes sense — because we know exactly what to automate and why. Missed-call text-back, follow-up sequences, review requests, scheduling. Tools that earn their keep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFER GRID ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">How we work together</span>
          <h2 style={{marginTop: '14px'}}>Three ways in. No public pricing.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '58ch'}}>Every engagement starts with an application conversation. We don't post pricing because the right engagement depends on where your business is and what it actually needs.</p>
          <div className="offer-grid" style={{marginTop: '44px'}}>
            <a className="offer-card offer-card--featured" href="/done-for-you/">
              <span className="tag">Most popular</span>
              <h3>Done For You</h3>
              <p>We build and install your entire system. You approve. We configure, test, and hand it off running. Best for operators who want the result without doing the work themselves.</p>
              <span className="more">See what's included →</span>
            </a>
            <a className="offer-card" href="/mentorship/">
              <h3>Mentorship</h3>
              <p>Monthly coaching and ongoing system support. We work through your business together. Best for owners who want to understand what they're building, not just have it handed to them.</p>
              <span className="more">Learn more →</span>
            </a>
            <a className="offer-card offer-card--giveaway" href="/giveaway/">
              <span className="tag">Free</span>
              <h3>The Scholarship</h3>
              <p>The full Done-For-You program, awarded each cycle to the business owner who demonstrates the greatest need. No purchase necessary. Apply and explain your situation.</p>
              <span className="more">Apply for the scholarship →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ACRONYM ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">What S.Y.S.T.E.M. stands for</span>
          <h2 style={{marginTop: '14px'}}>Save Yourself Stress, Time, Energy, and Money.</h2>
          <p style={{marginTop: '20px', color: 'var(--muted)', fontSize: '17px', lineHeight: '1.8'}}>That's the only thing we care about measuring. If the work we do together doesn't save you at least one of those four things — and ideally all four — it wasn't worth doing.</p>
          <div className="actions" style={{marginTop: '32px'}}>
            <a className="btn btn--primary" href="/the-system/">How the system works →</a>
          </div>
        </div>
      </section>

      {/* ── TRUST BLOCK ── */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">How we work</span>
          <h2 style={{marginTop: '14px'}}>Local. Honest. You own everything.</h2>
          <div className="trust-grid" style={{marginTop: '36px'}}>
            {[
              ['No long-term contracts', 'Month-to-month. If you leave, everything we built transfers to you — tools, SOPs, workflows, all of it.'],
              ['You own all of it', 'Every automation, document, and data asset is yours from day one. We don\'t hold anything hostage.'],
              ['In person when it matters', 'Kansas City clients get on-site visits. Remote clients get deep-dive video calls. Either way, we see your actual operation.'],
              ['Plain English', 'No jargon. No AI hype. One business owner talking to another about what actually works.'],
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
          <h2>Ready to find out what your business is leaving on the table?</h2>
          <p className="sub">Apply to work with us or explore how the system works first. First conversation is always free.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/the-system/">How It Works</a>
            <a className="btn btn--ghost-invert" href="/giveaway/">Enter the Scholarship →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
