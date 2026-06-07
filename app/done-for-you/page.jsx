export const metadata = {
  title: 'Done For You Business Systems | S.Y.S.T.E.M. KC',
  description: 'We build and install your entire business system — money model audit, SOPs, automations, follow-up sequences — and hand it off running. You own everything.',
};

export default function Page() {
  return (
    <main>

      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Done For You</span></div></div>

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">Done For You</span>
          <h1 className="nat-h1">You approve it. We build it. You walk away running it.</h1>
          <p className="nat-lede">The full S.Y.S.T.E.M. method — money model audit, operational documentation, and working automations — built and installed for your business. No homework. No tech stack to figure out. Just results.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply to work together <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who this is for</span>
          <h2 style={{marginTop: '14px'}}>The operator who wants the result — not the process.</h2>
          <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Done For You is for business owners who already have enough on their plate. You know the operation needs fixing. You just don't have 20 hours to learn new software and figure out what to automate first. That's our job.</p>
          <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>You make the decisions. We do the work. You walk away with a system you own and understand.</p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">What's included</span>
          <h2 style={{marginTop: '14px'}}>Everything your business needs. Nothing you don't.</h2>
          <div className="dfy-grid" style={{marginTop: '44px'}}>
            <div className="dfy-primary">
              <span className="tag">Foundation</span>
              <h3>Money Model Audit</h3>
              <p>We map your revenue top to bottom — pricing, lead sources, conversion rate, job size, repeat business. You'll see your profit picture drawn clearly, probably for the first time.</p>
              <ul className="dfy-list">
                <li>Revenue mapping session (in person or video)</li>
                <li>Profit leak identification</li>
                <li>Pricing strategy review</li>
                <li>Top-3 priority fix list with estimated impact</li>
              </ul>
            </div>
            <div className="dfy-secondary">
              <span className="tag">Operations</span>
              <h3>Workflow Documentation</h3>
              <p>We document the workflows that run your business so they can run without you narrating every step.</p>
              <ul className="dfy-list">
                <li>Core process SOPs (written + visual)</li>
                <li>Lead handling workflow</li>
                <li>Job delivery checklist</li>
                <li>Follow-up sequence documentation</li>
              </ul>
            </div>
            <div className="dfy-secondary">
              <span className="tag">Automation</span>
              <h3>Systems Build</h3>
              <p>We build and install the automations that cover your highest-priority gaps — tested, running, and yours.</p>
              <ul className="dfy-list">
                <li>Missed-call text-back</li>
                <li>Lead follow-up sequences</li>
                <li>Appointment / quote reminders</li>
                <li>Review request automation</li>
              </ul>
            </div>
            <div className="dfy-delivery">
              <span className="tag">Delivery</span>
              <h3>Handoff + 30-Day Support</h3>
              <p>We walk you through everything live. Then we stay available for 30 days to catch any edge cases and answer questions from your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">How it works</span>
          <h2 style={{marginTop: '14px'}}>Four stages. Start to running system.</h2>
          <div className="process-steps" style={{marginTop: '36px'}}>
            <div className="proc-step">
              <div className="proc-month">Stage 1</div>
              <div><h4>Application & Fit Call</h4><p>We talk before we commit. You tell us what's broken. We tell you whether we can fix it and how. If it's not a good fit, we'll tell you that too.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Stage 2</div>
              <div><h4>Audit & Money Model</h4><p>Deep dive into your business — revenue, operations, and the biggest gaps. You get a written summary of what we found and what to fix first.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Stage 3</div>
              <div><h4>Build & Review</h4><p>We build the workflows, SOPs, and automations. You approve at each stage. Nothing goes live until it works and you've seen it run.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Stage 4</div>
              <div><h4>Handoff & Support</h4><p>We hand off everything — documented, running, and yours. 30-day support included. After that, you own it completely.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">Our commitments</span>
          <h2 style={{marginTop: '14px'}}>No contracts. No lock-in. You own everything.</h2>
          <div className="trust-grid" style={{marginTop: '36px'}}>
            {[
              ['You own it all', 'Every automation, SOP, workflow, and data asset transfers to you completely. What we build together stays with you.'],
              ['No long-term contracts', 'Month-to-month for ongoing support. If you leave, the system stays with you.'],
              ['In person when it matters', 'Where geography allows, we come to you — we see how your business actually runs, not how you describe it. Remote clients get the same depth over video.'],
              ['Only pay for what you need', 'What you need depends on your business. Apply and we\'ll tell you what makes sense before you spend a dollar.'],
            ].map(([title, desc]) => (
              <div className="trust-cell" key={title}>
                <div className="tc-check">✓</div>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Apply to have it built for you.</h2>
          <p className="sub">First conversation is free. We figure out what your business needs before we talk about cost or scope.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>

    </main>
  );
}
