import FaqAccordion from '../components/FaqAccordion';

export const metadata = {
  title: 'Services | AI Automation for Kansas City Small Businesses | S.Y.S.T.E.M. KC',
  description: 'Four ways to work together: the S.Y.S.T.E.M. Audit ($397), Teach Me training, Build It For Me done-for-you, and a monthly retainer that covers your software subscriptions.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Services</span></div></div>

<header className="page-hero">
  <div className="wrap">
    <span className="label">The menu</span>
    <h1>AI automation services for <em>Kansas City</em> small businesses.</h1>
    <p className="lede">Four ways to work together — pick the one that fits where you are right now. Most clients start with an audit and decide from there. Pricing is anchored, predictable, and discussed before any work starts.</p>
    <div className="actions">
      <a className="btn btn--primary" href="/contact/">Book a free 20-min call <span className="arrow">→</span></a>
      <a className="btn btn--ghost" href="#which">Which service is right for me?</a>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div className="card-grid card-grid--2" style={{gridTemplateColumns: '1fr 1fr'}}>
      <a className="card" href="/services/system-audit-kansas-city/" style={{textDecoration: 'none'}}>
        <span className="tag">01 · From $397 · Entry point</span>
        <h3>The S.Y.S.T.E.M. Audit</h3>
        <p>2–3 hour in-person deep dive into your business. We map every leak — quoting, follow-up, scheduling, billing, social — and you walk away with a written, prioritized plan. The plan is yours whether you run it yourself, hire us to teach you, or hire us to build it.</p>
        <span className="more">Read more →</span>
      </a>
      <a className="card" href="/services/ai-training-kansas-city/" style={{textDecoration: 'none'}}>
        <span className="tag">02 · Hourly · For the DIY owner</span>
        <h3>Teach Me</h3>
        <p>Side-by-side sessions using your real data and workflows. We build the automations together, record everything, and write plain-English SOPs. You walk away understanding (and controlling) your own systems. 30 days of email support included.</p>
        <span className="more">Read more →</span>
      </a>
      <a className="card" href="/services/done-for-you-automation-kansas-city/" style={{textDecoration: 'none'}}>
        <span className="tag">03 · From $500 · For the busy owner</span>
        <h3>Build It For Me</h3>
        <p>Done-for-you automation. CRM setup, AI follow-ups, lead capture, onboarding, invoicing, social scheduling — whatever the audit found. Delivered with a video walkthrough and 30 days of support. Builds start as low as $500 for a single automation and scale up from there.</p>
        <span className="more">Read more →</span>
      </a>
      <a className="card" href="/services/monthly-automation-support-kansas-city/" style={{textDecoration: 'none'}}>
        <span className="tag">04 · From $450/mo · For the long haul</span>
        <h3>Monthly Retainer</h3>
        <p>Ongoing automation work tuned to your business each month. We cover the cost of the underlying subscriptions and most AI usage — one predictable bill instead of a stack of SaaS invoices. Monthly check-in, priority support, month-to-month.</p>
        <span className="more">Read more →</span>
      </a>
    </div>
  </div>
</section>

<section className="section section--alt" id="which">
  <div className="wrap">
    <div className="section-head">
      <div><span className="label">Decision guide</span><h2 style={{marginTop: '14px'}}>Which tier is right for you?</h2></div>
    </div>
    <div style={{overflowX: 'auto', border: '1px solid var(--rule)', borderRadius: '8px', background: 'var(--card)'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '16px', minWidth: '780px'}}>
        <thead>
          <tr style={{background: 'var(--paper-2)', textAlign: 'left'}}>
            <th style={{padding: '18px 22px', fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700'}}>If you're…</th>
            <th style={{padding: '18px 22px', fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700', borderLeft: '1px solid var(--rule)'}}>Start with</th>
            <th style={{padding: '18px 22px', fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: '700', borderLeft: '1px solid var(--rule)'}}>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', fontWeight: '600'}}>Curious but unsure</td><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)'}}>Audit</td><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)', color: 'var(--muted)'}}>Lowest commitment. You get a written plan worth $5k+ in clarity.</td></tr>
          <tr><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', fontWeight: '600'}}>Hands-on, wants to learn</td><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)'}}>Audit → Teach Me</td><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)', color: 'var(--muted)'}}>You'll understand your systems end-to-end. SOPs to hand to a new hire.</td></tr>
          <tr><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', fontWeight: '600'}}>Busy, wants it done</td><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)'}}>Audit → Build It For Me</td><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)', color: 'var(--muted)'}}>You don't have to learn the tools. We deliver, you operate.</td></tr>
          <tr><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', fontWeight: '600'}}>Wants a long-term partner</td><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)'}}>Audit → Retainer</td><td style={{padding: '18px 22px', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)', color: 'var(--muted)'}}>Ongoing improvements. One bill covers subscriptions and AI usage.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head"><div><span className="label">Common questions</span><h2 style={{marginTop: '14px'}}>Before you book.</h2></div></div>
    <FaqAccordion>
      <div className="faq-item open"><button className="faq-q"><span className="qnum">Q.01</span><span className="qtxt">Do I need to be technical?</span><span className="qicn">+</span></button><div className="faq-a">Nope. If you can use email and a smartphone, you can run everything we build. SOPs are written in plain English — the same kind you'd hand a new hire.</div></div>
      <div className="faq-item"><button className="faq-q"><span className="qnum">Q.02</span><span className="qtxt">How long does a typical build take?</span><span className="qicn">+</span></button><div className="faq-a">Most builds run 2–4 weeks from kickoff to delivery. We ship in small working pieces so you feel progress every week, not just at the end.</div></div>
      <div className="faq-item"><button className="faq-q"><span className="qnum">Q.03</span><span className="qtxt">What if I want to leave the retainer later?</span><span className="qicn">+</span></button><div className="faq-a">On retainer, your subscriptions and AI usage are bundled in. If you leave, we transfer accounts into your name and you carry on without us. Month-to-month, always.</div></div>
      <div className="faq-item"><button className="faq-q"><span className="qnum">Q.04</span><span className="qtxt">Do you work with my industry?</span><span className="qicn">+</span></button><div className="faq-a">If you have 1–50 employees and a Kansas City zip code, almost certainly. See the <a href="/industries/">industries we serve</a> for examples — but the list isn't exhaustive.</div></div>
    </FaqAccordion>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap inner">
    <h2>Start with an <em>audit</em>.</h2>
    <p className="sub">$397 gets us in your business for 2–3 hours and you walk away with a ranked, written plan you can run yourself or hand to anyone else.</p>
    <div className="actions">
      <a className="btn btn--invert" href="/contact/">Book the audit <span className="arrow">→</span></a>
      <a className="btn btn--ghost-invert" href="/free-audit/">Or grab a free 20-min call first</a>
    </div>
  </div>
</section>
    </main>
  );
}