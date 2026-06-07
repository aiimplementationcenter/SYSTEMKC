export const metadata = {
  title: 'Kansas City Business Systems & Automation | S.Y.S.T.E.M. KC',
  description: 'Local, in-person business systems consulting for Kansas City small businesses. We walk into your business, find the profit leaks, and fix them.',
};

export default function Page() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">Kansas City · In-person · Local businesses</span>
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
            "I've spent 20 years building businesses, and I still own and operate a multi-location service company across the Midwest. I don't teach this from a course I bought — I run it."
          </blockquote>
          <p style={{marginTop: '24px', color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7'}}>We're not a remote agency. We're not a software reseller. We're a Kansas City business working with Kansas City businesses — in person, in your operation, with your actual workflow.</p>
        </div>
      </section>

      {/* ── STAT WALL ── */}
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
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E0D2" strokeWidth=".5" />
                </pattern>
                <radialGradient id="zone" cx="55%" cy="54%" r="50%">
                  <stop offset="0%" stopColor="#D4322E" stopOpacity=".18" />
                  <stop offset="65%" stopColor="#D4322E" stopOpacity=".08" />
                  <stop offset="100%" stopColor="#D4322E" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="url(#g)" />
              <circle cx="220" cy="215" r="125" fill="url(#zone)" />
              <circle cx="220" cy="215" r="125" fill="none" stroke="#D4322E" strokeWidth="1" strokeDasharray="3 5" opacity=".5" />
              <path d="M 215 20 Q 217 80 215 200 L 220 215 L 245 240 Q 247 320 245 380" stroke="#C5B98C" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              <text x="228" y="30" fontFamily="Space Mono" fontSize="10" fill="#9A917E" fontWeight="700">MO</text>
              <text x="205" y="30" textAnchor="end" fontFamily="Space Mono" fontSize="10" fill="#9A917E" fontWeight="700">KS</text>
              <path d="M 30 150 Q 110 130 195 145 Q 230 160 290 130 T 380 110" stroke="#1F8A99" strokeWidth="1.5" fill="none" opacity=".4" />
              <path d="M 60 220 L 380 235" stroke="#D9D3C5" strokeWidth="5" fill="none" />
              <text x="372" y="248" textAnchor="end" fontFamily="Space Mono" fontSize="10" fill="#9A917E" fontWeight="700">I-70</text>
              <circle cx="140" cy="220" r="4" fill="#11110E" />
              <circle cx="210" cy="80" r="4" fill="#11110E" />
              <circle cx="295" cy="285" r="4" fill="#11110E" />
              <circle cx="170" cy="215" r="3" fill="#605849" />
              <circle cx="170" cy="155" r="3" fill="#605849" />
              <circle cx="355" cy="260" r="3" fill="#605849" />
              <circle cx="220" cy="215" r="22" fill="#D4322E" opacity=".15" />
              <circle cx="220" cy="215" r="9" fill="#D4322E" />
              <circle cx="220" cy="215" r="3" fill="#fff" />
            </svg>
            <div className="map-tag primary" style={{left: '55%', top: '54%'}}><span className="pin" style={{background: '#fff'}}></span>Kansas City</div>
            <div className="map-tag" style={{left: '35%', top: '55%'}}>Topeka</div>
            <div className="map-tag" style={{left: '52.5%', top: '20%'}}>St. Joseph</div>
            <div className="map-tag" style={{left: '73.75%', top: '71%'}}>Warrensburg</div>
            <div className="map-tag" style={{left: '42.5%', top: '62%'}}>Lawrence</div>
            <div className="map-tag" style={{left: '42.5%', top: '39%'}}>Atchison</div>
            <div className="map-tag" style={{left: '88.75%', top: '65%'}}>Sedalia</div>
            <div className="map-zone-label">~90 min service zone</div>
          </div>
        </div>
      </section>

      {/* ── TRUST BLOCK ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">How we work</span>
          <h2 style={{marginTop: '14px'}}>Local. In person. You own everything.</h2>
          <div className="trust-grid" style={{marginTop: '36px'}}>
            {[
              ['In person', 'We come to your location. We see how your business actually runs, not how you describe it over a Zoom call.'],
              ['No long-term contracts', 'Month-to-month. If you leave, everything transfers to you.'],
              ['You own all of it', 'Every workflow, SOP, automation, and data asset is yours.'],
              ['Plain English', 'No jargon. No AI hype. One business owner talking to another.'],
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
          <h2>Ready to find out what your KC business is leaving on the table?</h2>
          <p className="sub">Apply to work with us or call Jason directly. First conversation is always free.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
            <a className="btn btn--ghost-invert" href="/giveaway/">Enter the Scholarship →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
