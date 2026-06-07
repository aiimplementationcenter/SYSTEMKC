export const metadata = {
  title: 'Business Systems Mentorship | S.Y.S.T.E.M. KC',
  description: 'Monthly mentorship and ongoing system support for small business owners. We work through your business together — so you understand what you\'re building, not just have it handed to you.',
};

export default function Page() {
  return (
    <main>

      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Mentorship</span></div></div>

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">Mentorship</span>
          <h1 className="nat-h1">You want to understand what you're building — not just have someone hand it to you.</h1>
          <p className="nat-lede">Monthly working sessions where we go through your business together — revenue model, operations, automations, and strategy. You do the work. We guide the decisions and keep you from building in the wrong order.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply for mentorship <span className="arrow">→</span></a>
            <a className="btn btn--ghost" href="tel:8169622111">Call Jason: (816) 962-2111</a>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who this is for</span>
          <h2 style={{marginTop: '14px'}}>The owner who wants the knowledge, not just the deliverable.</h2>
          <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Some owners want someone to build it and hand it over. Others want to build it themselves, but with someone in their corner who's done it before — so they don't waste time figuring out the sequence, buying the wrong tools, or automating the wrong things.</p>
          <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Mentorship is for the second group. You're capable. You just want the map.</p>
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

      {/* ── TRUST ── */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">The fine print</span>
          <h2 style={{marginTop: '14px'}}>Month-to-month. Plain English. No surprises.</h2>
          <div className="trust-grid" style={{marginTop: '36px'}}>
            {[
              ['No long-term contract', 'Month-to-month. Cancel any time. Everything you\'ve built comes with you — we don\'t hold work hostage.'],
              ['No pricing posted publicly', 'Apply and we\'ll tell you what makes sense. What you need depends on where your business is right now.'],
              ['In person for KC clients', 'Kansas City clients can meet in person. Remote clients get the same depth over video.'],
              ['Not a course or a group program', 'This is one-on-one. You get access to someone who has actually built and run businesses — not someone who teaches from a curriculum.'],
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
          <h2>Apply for mentorship.</h2>
          <p className="sub">Tell us where your business is. We'll tell you if mentorship is the right fit or if Done For You makes more sense for your situation.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/done-for-you/">Compare: Done For You →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
