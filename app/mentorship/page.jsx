export const metadata = {
  title: 'Do It With You — Monthly Business Systems Coaching | S.Y.S.T.E.M. KC',
  description: 'Monthly coaching and system support starting at $399/month. We walk alongside you every step — guiding decisions, reviewing your builds, keeping you in the right sequence.',
};

export default function Page() {
  return (
    <main>

      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Mentorship</span></div></div>

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">Do It With You · Starts at $399 / month</span>
          <h1 className="nat-h1">We walk alongside you every step. You build it. We make sure you're building the right things.</h1>
          <p className="nat-lede">Monthly working sessions where we go through your business together — revenue model, operations, automations, and strategy. You do the work. We guide every decision and keep you from building in the wrong order.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply to get started <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who this is for</span>
          <h2 style={{marginTop: '14px'}}>The owner who wants to understand what they're building — not just have it handed to them.</h2>
          <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Some owners want someone to build it and hand it over. Others want to build it themselves, but with someone in their corner who's done it before — so they don't waste time guessing at the sequence, buying the wrong tools, or automating the wrong things first.</p>
          <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Do It With You is for the second group. You're capable. You just want the map, the accountability, and someone to call when you're not sure which move to make next.</p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">What mentorship includes</span>
          <h2 style={{marginTop: '14px'}}>Monthly sessions. Ongoing access. Real accountability.</h2>
          <div className="mentorship-cols" style={{marginTop: '40px'}}>
            <div>
              <h3>Monthly Strategy Sessions</h3>
              <p>One focused session each month — video or in person for KC clients. We work on one priority area at a time: revenue model, a specific workflow, an automation you're building, a pricing problem. No generic advice. Everything is specific to your business.</p>
            </div>
            <div>
              <h3>In-Between Access</h3>
              <p>You're not waiting 30 days to ask a question. Between sessions you have direct access for quick questions, gut-checks, and "does this make sense?" moments. Response within one business day.</p>
            </div>
            <div>
              <h3>System Reviews</h3>
              <p>Bring the automations, SOPs, or workflows you've built and we'll review them. We'll catch what's missing, what could break, and what to build next.</p>
            </div>
            <div>
              <h3>Priority Roadmap</h3>
              <p>At the start of every engagement we build a priority list — what to tackle in what order. We update it as your business changes. You always know what to work on next and why.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">How it works</span>
          <h2 style={{marginTop: '14px'}}>Month by month. No contracts.</h2>
          <div className="process-steps" style={{marginTop: '36px'}}>
            <div className="proc-step">
              <div className="proc-month">Month 1</div>
              <div><p>We start with the money model — same audit as Done For You, but you're present for all of it and we walk through the methodology as we go. You leave month one with a clear priority list and understanding of why.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Month 2–3</div>
              <div><p>We work through operations — documenting your core workflows, identifying where the owner is the single point of failure, and starting to build standard processes you can hand off.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Month 4+</div>
              <div><p>Automation phase — building and installing the systems we've designed. By this point you understand why each automation exists and what it's replacing, so you can maintain and extend them yourself.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Ongoing</div>
              <div><p>Monthly check-ins, new system reviews, strategic sounding board. Stay as long as the work is producing value. Leave any time — everything you've built comes with you.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">Pricing</span>
          <h2 style={{marginTop: '14px'}}>Only pay for what you need.</h2>
          <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Do It With You starts at <strong style={{color: 'var(--text)'}}>$399 per month</strong> — month-to-month, no long-term contract. What's included each month scales with where your business is and what you're working on. We don't have a one-size-fits-all package because businesses aren't one size.</p>
          <div className="trust-grid" style={{marginTop: '36px'}}>
            {[
              ['Starts at $399 / month', 'Month-to-month. No annual commitment. Scope adjusts as your business grows and what you need changes.'],
              ['No long-term contract', 'Cancel any time. Everything you\'ve built comes with you — we don\'t hold your work hostage.'],
              ['In person when geography allows', 'Where we can meet in person, we do. Remote clients get the same depth over video — the work is identical.'],
              ['Not a course. Not a group.', 'This is one-on-one. You get access to someone who has actually built and run businesses — not a curriculum someone designed in a weekend.'],
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
          <h2>Ready to have someone in your corner every month?</h2>
          <p className="sub">Apply and tell us where your business is. We'll tell you if Do It With You is the right fit or if Done For You makes more sense for your situation.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/done-for-you/">Compare: Done For You →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
