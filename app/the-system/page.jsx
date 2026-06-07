export const metadata = {
  title: 'How It Works | The S.Y.S.T.E.M. Method | S.Y.S.T.E.M. KC',
  description: 'How the S.Y.S.T.E.M. KC method works — money model first, operations second, automation third. The sequence that actually fixes a business.',
};

export default function Page() {
  return (
    <main>

      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">How It Works</span></div></div>

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">The method</span>
          <h1 className="nat-h1">Most businesses automate the wrong things — and wonder why nothing changes.</h1>
          <p className="nat-lede">The sequence matters. You don't fix automation before you fix operations. You don't fix operations before you fix the money model. Most consultants skip straight to the tools. We don't.</p>
        </div>
      </section>

      {/* ── THREE LAYERS ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">The sequence</span>
          <h2 style={{marginTop: '14px'}}>Three layers. In order.</h2>

          <div className="process-steps" style={{marginTop: '48px'}}>

            <div className="proc-step">
              <div className="proc-month">Layer 1</div>
              <div>
                <h3>Money Model</h3>
                <p>Before any system or tool, we map your revenue — where it comes from, where it escapes, and what the actual high-leverage opportunity is. We look at pricing, lead flow, conversion rate, average job size, and repeat purchase behavior. Most owners have never seen all of this drawn out at once.</p>
                <p style={{marginTop: '14px', color: 'var(--muted)'}}>Output: A clear profit map showing the top 1–3 fixes and their estimated revenue impact.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month">Layer 2</div>
              <div>
                <h3>Operations</h3>
                <p>Once we know what to protect and grow, we document and tighten the workflows that deliver it. This means SOPs, role clarity, communication standards, and quality checkpoints. The boring stuff — that also happens to be the stuff that lets you eventually step back from day-to-day operations.</p>
                <p style={{marginTop: '14px', color: 'var(--muted)'}}>Output: Documented workflows and SOPs your team can run without you narrating every step.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month">Layer 3</div>
              <div>
                <h3>Automation</h3>
                <p>Now automation is useful — because we know exactly what to automate and why. Missed-call text-back, lead follow-up sequences, appointment reminders, review requests, internal task triggers. Tools that earn their keep because they're solving a defined, documented problem.</p>
                <p style={{marginTop: '14px', color: 'var(--muted)'}}>Output: Running automations connected to your existing tools — not a stack you have to learn from scratch.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT IT'S NOT ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">What this is not</span>
          <h2 style={{marginTop: '14px'}}>We are not a software subscription.</h2>
          <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>We don't have a dashboard you pay for monthly. We don't lock you into our platform. We don't resell software we marked up. We figure out what your business actually needs, build it using tools that already exist, and then hand it to you — so you own it and run it.</p>
          <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>If you leave, everything comes with you. That's the deal we offer to every client.</p>
        </div>
      </section>

      {/* ── WHAT THIS FIXES ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">What we actually fix</span>
          <h2 style={{marginTop: '14px'}}>The same problems keep appearing.</h2>
          <div className="three-col" style={{marginTop: '40px'}}>
            {[
              ['Missed calls & slow follow-up', 'Your phone rings while you\'re on a job. Nobody answers. The lead calls someone else. We fix this at the system level — not by hiring another person.'],
              ['No follow-up after quotes', 'You send a quote. You hear nothing. You move on. Most of those leads aren\'t dead — they just weren\'t followed up. Automated sequences fix this.'],
              ['Owner as single point of failure', 'If you leave for a week, does the business run? If the answer is no, that\'s not a staffing problem — it\'s a documentation and workflow problem. We document it.'],
              ['Reviews left on the table', '70% of happy customers will leave a review if asked at the right moment. Almost nobody asks at the right moment. We automate the ask.'],
              ['Pricing that undercuts profit', 'Sometimes the problem isn\'t lead volume — it\'s margin. Pricing strategy review is part of every money model audit.'],
              ['Repeat business you\'re not capturing', 'Past customers are your cheapest source of new revenue. Most service businesses have no system for re-engaging them. We build one.'],
            ].map(([title, desc]) => (
              <div className="three-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">What to expect</span>
          <h2 style={{marginTop: '14px'}}>A typical Done-For-You engagement looks like this.</h2>
          <div className="process-steps" style={{marginTop: '36px'}}>
            <div className="proc-step">
              <div className="proc-month">Week 1–2</div>
              <div><p>Initial business audit — money model, lead flow, operations review. We map what exists, what's working, and what's costing you the most.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Week 3–4</div>
              <div><p>Priority fixes — we address the highest-ROI item first. Usually that's a combination of lead follow-up and one core operational bottleneck.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Month 2</div>
              <div><p>System build — automations, SOPs, and workflows built and tested. You approve at each stage. Nothing goes live until you've seen it and it works.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Month 3+</div>
              <div><p>Handoff and ongoing support — the system runs. We monitor, adjust, and continue building as your business grows. Everything you own, you can keep running after we're done.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Ready to start with the money model audit?</h2>
          <p className="sub">Apply to work together. First conversation is free — we figure out what your business actually needs before we talk about anything else.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/done-for-you/">See Done-For-You →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
