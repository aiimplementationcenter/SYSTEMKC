import AuditLandingForm from '../components/AuditLandingForm';
import FaqAccordion from '../components/FaqAccordion';

export const metadata = {
  title: 'Free SYSTEM Audit for Kansas City Home Service Companies | SYSTEM KC',
  description: 'Find where missed calls, slow follow-up, manual admin, and disconnected workflows are costing your Kansas City home service business stress, time, energy, and money.',
};

export default function Page() {
  return (
    <main>

      {/* ── 1. HERO ── */}
      <section className="audit-hero">
        <div className="wrap">
          <div className="audit-hero-inner">
            <div>
              <span className="label label--invert">Free for Kansas City home service companies</span>
              <h1 style={{marginTop: '18px'}}>Find the leaks before buying more software.</h1>
              <p className="sub">We'll review how your business handles calls, forms, quotes, scheduling, reviews, customer communication, and office handoffs — then show you the first system we'd fix.</p>
              <div className="actions">
                <a className="btn btn--invert" href="#audit-form">Get My Free SYSTEM Audit <span className="arrow">→</span></a>
                <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
              </div>
              <p className="trust" style={{marginTop: '28px'}}>Built locally in Kansas City for service businesses that are tired of guessing and want to actually understand what their operation needs.</p>
            </div>

            <div className="audit-hero-card">
              <h3>We look at your entire workflow — including:</h3>
              <ul>
                <li>How you handle missed calls</li>
                <li>Speed of follow-up on new leads</li>
                <li>Quote and estimate follow-up</li>
                <li>Scheduling handoffs and reminders</li>
                <li>How reviews get requested</li>
                <li>Admin tasks eating up office time</li>
                <li>What the owner can actually see</li>
                <li>Where software is missing or overlapping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PAIN ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Real problems, real pain</span>
          <h2 style={{marginTop: '14px', maxWidth: '20ch'}}>You may not need more leads. You may need fewer leaks.</h2>
          <p className="lede" style={{marginTop: '18px'}}>Most home service companies aren't losing because of competition. They're losing because the back office isn't keeping up with the front office.</p>

          <div className="pain-grid">
            <div className="pain-item">
              <div className="pain-icon">📞</div>
              <div>
                <strong>Missed calls that never get followed up</strong>
                <p>A call comes in after hours or during a job. Nobody calls back. That job goes to whoever answered.</p>
              </div>
            </div>
            <div className="pain-item">
              <div className="pain-icon">📋</div>
              <div>
                <strong>Contact forms that sit too long</strong>
                <p>Someone fills out your website form. By the time you respond, they've already booked someone else.</p>
              </div>
            </div>
            <div className="pain-item">
              <div className="pain-icon">💸</div>
              <div>
                <strong>Quotes that go cold after the first conversation</strong>
                <p>You send a quote, then nothing. A simple follow-up sequence could close a third of those jobs.</p>
              </div>
            </div>
            <div className="pain-item">
              <div className="pain-icon">📆</div>
              <div>
                <strong>Scheduling details scattered across texts, notes, and memory</strong>
                <p>Appointments exist in three different places. Someone always has wrong information on job day.</p>
              </div>
            </div>
            <div className="pain-item">
              <div className="pain-icon">⭐</div>
              <div>
                <strong>Reviews that only happen when someone remembers to ask</strong>
                <p>You do great work. Half your customers would leave a review — if someone just asked at the right moment.</p>
              </div>
            </div>
            <div className="pain-item">
              <div className="pain-icon">🔍</div>
              <div>
                <strong>Owners guessing instead of seeing clearly</strong>
                <p>How many leads came in this week? How many quoted? How many closed? Without a system, you're estimating.</p>
              </div>
            </div>
            <div className="pain-item">
              <div className="pain-icon">🗂️</div>
              <div>
                <strong>Office staff buried in repetitive admin work</strong>
                <p>Same tasks typed in manually every day. Copy-paste from one app to another. Time that could be automated.</p>
              </div>
            </div>
            <div className="pain-item">
              <div className="pain-icon">🔗</div>
              <div>
                <strong>Workflows that don't talk to each other</strong>
                <p>Your CRM, your calendar, your invoicing, your phone — all running separately. Nothing is connected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE CHECK ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">What the audit covers</span>
          <h2 style={{marginTop: '14px'}}>What we check during your SYSTEM Audit.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '58ch'}}>We look for places where a simple system could save time, reduce stress, or stop money from slipping through the cracks.</p>

          <div className="check-grid">
            {[
              'Missed call handling',
              'Website form response speed',
              'Quote follow-up process',
              'Scheduling handoffs',
              'Appointment reminders',
              'Review request workflow',
              'Customer communication',
              'Admin task load',
              'Owner visibility and reporting',
              'Software gaps and overlap',
            ].map((item) => (
              <div className="check-item" key={item}>
                <div className="ck">
                  <svg viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3" /></svg>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT THEY RECEIVE ── */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">What you walk away with</span>
          <h2 style={{marginTop: '14px'}}>A plain-English fix list — not a software pitch.</h2>
          <p className="lede" style={{marginTop: '18px'}}>No confusing AI jargon. No pressure to buy anything. Just a clear look at where your business is leaking and what to fix first.</p>

          <div className="receive-list">
            {[
              ['3–5 system leaks we found', 'The specific places in your workflow where time, money, or leads are slipping out.'],
              ['Your biggest missed revenue or time-waste risk', 'The one thing costing you the most right now — quantified in plain terms.'],
              ['A ranked list of what to fix first', 'Prioritized by impact and simplicity. Not everything at once.'],
              ['The first system we recommend installing', 'One specific, actionable starting point — simple enough to run next week.'],
              ['A simple estimate of what it could save', "Realistic, honest. No fake ROI numbers. Just what we've seen work for similar companies."],
              ['No obligation, no sales script', "You leave with useful information whether you hire us or not. That's the point."],
            ].map(([title, desc], i) => (
              <div className="receive-item" key={i}>
                <div className="ri-num">0{i + 1}</div>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FIRST SYSTEM ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">Where most companies start</span>
          <h2 style={{marginTop: '14px'}}>Most companies start with one simple system.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '58ch'}}>You don't need to overhaul everything at once. One well-built system can change how calls, leads, and jobs move through your business.</p>

          <div className="feature-box">
            <div className="feature-box-inner">
              <div>
                <div style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--c-e)', fontWeight: '700', marginBottom: '14px'}}>Most popular first install</div>
                <h3>Missed Lead Recovery SYSTEM</h3>
                <p className="fbox-sub">A simple first system that helps home service companies respond faster, follow up better, and keep the owner in the loop — without hiring more staff.</p>
                <div className="feature-note">If this saves one missed job, it can often pay for itself.</div>
              </div>
              <div>
                <div style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#9A9387', fontWeight: '700', marginBottom: '16px'}}>What's included</div>
                <ul className="feature-box-list">
                  <li>Missed-call text-back — so no call goes cold</li>
                  <li>New lead auto-reply — instant response, any hour</li>
                  <li>Quote follow-up sequence — 2–3 touches, automated</li>
                  <li>Appointment reminders — reduces no-shows</li>
                  <li>Review request after the job closes</li>
                  <li>Daily owner summary — see what happened without asking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section style={{background: 'var(--paper-2)', borderBottom: '1px solid var(--rule)', padding: '56px 0'}}>
        <div className="wrap" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px', flexWrap: 'wrap'}}>
          <div>
            <h2 style={{fontFamily: 'var(--sans)', fontWeight: '900', fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-.03em', color: 'var(--ink)', marginBottom: '8px'}}>Simple systems. Less chasing. Faster follow-up.</h2>
            <p style={{fontSize: '17px', color: 'var(--muted)'}}>Find the leaks before buying more software.</p>
          </div>
          <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', flexShrink: '0'}}>
            <a className="btn btn--primary" href="#audit-form">Get My Free SYSTEM Audit <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="tel:8169622111">Call Jason</a>
          </div>
        </div>
      </section>

      {/* ── 6. WHY SYSTEM KC ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Why SYSTEM KC</span>
          <h2 style={{marginTop: '14px', maxWidth: '22ch'}}>Built for Kansas City businesses that want practical systems, not more software chaos.</h2>

          <div className="acro-strip">
            {[['S','#1E3A5F','Save'],['Y','#7BB13C','Yourself'],['S','#E88B25','Stress'],['T','#6B2E91','Time'],['E','#1F8A99','Energy'],['M','#D4322E','Money']].map(([letter, color, word]) => (
              <div className="acro-cell" key={letter + word}>
                <div className="ac-letter" style={{color}}>{letter}</div>
                <div className="ac-word">{word}</div>
              </div>
            ))}
          </div>

          <div className="why-grid">
            <div className="why-item">
              <div className="wi-label">Local</div>
              <p>Kansas City company working with Kansas City businesses. We're not a remote agency sending you templates.</p>
            </div>
            <div className="why-item">
              <div className="wi-label">Workflow first</div>
              <p>We look at the way your business actually runs before recommending any tool. The workflow leads — the software follows.</p>
            </div>
            <div className="why-item">
              <div className="wi-label">Find the leak first</div>
              <p>We map the leak before we recommend a fix. Buying software before understanding the problem is how you waste money.</p>
            </div>
            <div className="why-item">
              <div className="wi-label">Teach or build</div>
              <p>We can teach your team to run the systems themselves, or build and hand it off. You pick what fits your situation.</p>
            </div>
            <div className="why-item">
              <div className="wi-label">Simple first fix</div>
              <p>We keep the first install simple enough to be running next week — not a six-month project that never ships.</p>
            </div>
            <div className="why-item">
              <div className="wi-label">No jargon</div>
              <p>We explain everything in plain English. No AI buzzwords, no confusing acronyms, no fake dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. HOW IT WORKS ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">The process</span>
          <h2 style={{marginTop: '14px'}}>How the free audit works.</h2>

          <div className="steps-row">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Request the audit</h3>
              <p>Fill out the short form below or call Jason directly. Takes about two minutes. No commitment required.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>We review your workflow</h3>
              <p>We look at calls, forms, follow-up, scheduling, reviews, and admin handoffs. Usually starts with a 20-minute conversation.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>You get your fix list</h3>
              <p>We show you the biggest leaks and the first system we'd install. Yours to keep whether or not you hire us.</p>
              <p className="step-note">If it makes sense, we can build the first system for you. If not, you still leave with a clear, useful plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FORM ── */}
      <section className="section" id="audit-form">
        <div className="wrap">
          <div className="audit-form-section">
            <div>
              <span className="label">Request your free audit</span>
              <h2 style={{marginTop: '14px', marginBottom: '6px'}}>Get My Free SYSTEM Audit.</h2>
              <p style={{color: 'var(--muted)', fontSize: '17px', maxWidth: '52ch', lineHeight: '1.6'}}>Too many business owners are stuck in a loop — trying whatever sounded good on YouTube or a Facebook ad, then wondering why nothing stuck. The audit is how we help you cut through that and actually understand what your business needs.</p>
              <AuditLandingForm />
            </div>

            <div className="audit-form-aside">
              <div className="aside-card">
                <div className="ac-label">Call or text Jason</div>
                <a href="tel:8169622111" className="ac-value" style={{display: 'block', color: 'var(--ink)', textDecoration: 'none'}}>(816) 962-2111</a>
                <p className="ac-note">Texting often gets a faster reply. Honest.</p>
              </div>
              <div className="aside-card">
                <div className="ac-label">Email</div>
                <a href="mailto:jason@systemkc.com" style={{display: 'block', fontSize: '17px', fontWeight: '700', color: 'var(--c-e)', marginBottom: '4px'}}>jason@systemkc.com</a>
                <p className="ac-note">We reply within one business day.</p>
              </div>
              <div className="aside-card">
                <div className="ac-label">Best for</div>
                <p className="ac-note" style={{fontSize: '15px', lineHeight: '1.65'}}>HVAC, plumbing, electrical, roofing, pest control, garage door, restoration, landscaping, and other home service companies in the Kansas City metro.</p>
              </div>
              <div className="aside-trust">
                <strong style={{display: 'block', color: 'var(--ink)', marginBottom: '6px'}}>Why free?</strong>
                Most business owners we talk to have tried three or four tools they heard about online — and still aren't sure what's actually working. We'd rather help you understand your options clearly than watch you guess your way through another purchase.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Common questions</span>
          <h2 style={{marginTop: '14px', marginBottom: '8px'}}>Before you request the audit.</h2>
          <FaqAccordion>
            <div className="faq-item open">
              <button className="faq-q"><span className="qnum">Q.01</span><span className="qtxt">Is this really free?</span><span className="qicn">+</span></button>
              <div className="faq-a">Yes. The audit costs nothing. We do it because most business owners we talk to are already spending money on tools that aren't solving the right problem — and we'd rather help you understand what's actually going on before recommending anything. No catch, no credit card, no obligation to hire us afterward.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.02</span><span className="qtxt">Is this an AI sales pitch?</span><span className="qicn">+</span></button>
              <div className="faq-a">No. We look at your current workflow first. If AI or automation genuinely helps, we'll explain it in plain terms. If a simpler system solves the problem — a checklist, a template, a different process — we'll recommend that instead.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.03</span><span className="qtxt">How long does it take?</span><span className="qicn">+</span></button>
              <div className="faq-a">The first conversation usually takes about 20 minutes. If there's a fit, we'll do a deeper workflow review and follow up with a plain-English fix list within a few business days.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.04</span><span className="qtxt">Do I have to change all my software?</span><span className="qicn">+</span></button>
              <div className="faq-a">No. The goal is to improve the way your current workflow runs before adding anything new. Most businesses have more than enough tools — they just aren't connected or used consistently.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.05</span><span className="qtxt">What happens after the audit?</span><span className="qicn">+</span></button>
              <div className="faq-a">You'll get a ranked list of system leaks and the first fix we recommend. If you want help building it, SYSTEM KC can do that. If you want to handle it yourself, you'll have everything you need to get started.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.06</span><span className="qtxt">Who is this best for?</span><span className="qicn">+</span></button>
              <div className="faq-a">HVAC, plumbing, electrical, roofing, pest control, garage door, restoration, landscaping, and other Kansas City-area service companies that handle calls, quotes, scheduling, follow-up, or admin work. If your business runs on service calls, this audit is built for you.</div>
            </div>
          </FaqAccordion>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Know your options before you buy <em>anything else.</em></h2>
          <p className="sub">The audit gives you a clear picture of where your business is leaking — and what to actually do about it. No tools pushed, no jargon. Just an honest look at your workflow from someone who's seen a lot of them.</p>
          <div className="actions">
            <a className="btn btn--invert" href="#audit-form">Get My Free SYSTEM Audit <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>

    </main>
  );
}
