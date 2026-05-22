import FaqAccordion from '../../components/FaqAccordion';

export const metadata = {
  title: 'The S.Y.S.T.E.M. Audit | Kansas City Business Automation Audit | S.Y.S.T.E.M. KC',
  description: '2–3 hour in-person business automation audit in Kansas City. $397. Written, ranked roadmap of every leak. Yours whether you DIY, hire us to teach you, or hire us to build it.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><a href="/">Services</a><span className="sep">·</span><span className="here">The S.Y.S.T.E.M. Audit</span></div></div>
<header className="page-hero">
  <div className="wrap">
    <span className="label">From $397 · 2–3 hours · in person</span>
    <h1>The S.Y.S.T.E.M. <em>Audit</em>.</h1>
    <p className="lede">We come to your business. Two to three hours, in person, with a notepad and questions. You walk away with a written, ranked roadmap of every place AI could save you stress, time, energy and money — usable whether or not you ever hire us.</p>
    <div className="actions">
      <a className="btn btn--primary" href="/contact/">Book the audit <span className="arrow">→</span></a>
      <a className="btn btn--ghost" href="#what">See what we find</a>
      <span className="micro">Most clients say it pays for itself before they implement a thing</span>
    </div>
  </div>
</header>

<section className="section" id="what">
  <div className="wrap">
    <div className="section-head"><div><span className="label">What we look at</span><h2 style={{marginTop: '14px'}}>Every leak we can find in 3 hours.</h2></div></div>
    <div className="card-grid">
      <div className="card"><span className="tag">Lead capture</span><h3>Where leads enter (and disappear)</h3><p>Phone, website forms, Google Business, social DMs, walk-ins. We map every entry point and which ones go to voicemail or nowhere.</p></div>
      <div className="card"><span className="tag">Follow-up</span><h3>Quote &amp; lead nurture</h3><p>How fast quotes go out. Whether anyone follows up at all. What it'd cost to add a 3-step text sequence and a 7-day re-engagement loop.</p></div>
      <div className="card"><span className="tag">Scheduling</span><h3>Booking &amp; reminders</h3><p>How appointments get on the calendar. Confirmation flow. No-show rate. The reminder sequence that would cut it 30–50%.</p></div>
      <div className="card"><span className="tag">Reviews</span><h3>Reputation engine</h3><p>How many Google reviews you've earned in 90 days vs. how many your competitors have. Automated review request setup.</p></div>
      <div className="card"><span className="tag">Billing</span><h3>Invoicing &amp; payments</h3><p>Where invoices stall. Auto-reminders for unpaid balances. Recurring billing setup if relevant.</p></div>
      <div className="card"><span className="tag">Internal ops</span><h3>SOPs &amp; handoffs</h3><p>The 5 tasks you keep doing personally that a $40/month tool would handle. The handoffs between you and your team that are dropping balls.</p></div>
    </div>
  </div>
</section>

<section className="section section--alt">
  <div className="wrap">
    <div className="section-head"><div><span className="label">How it goes</span><h2 style={{marginTop: '14px'}}>Hour by hour.</h2></div></div>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0', borderTop: '1.5px solid var(--ink)'}}>
      <div style={{padding: '28px', borderRight: '1px solid var(--rule)'}}>
        <div style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', color: 'var(--muted)', fontWeight: '700'}}>HOUR 1</div>
        <h3 style={{marginTop: '14px', fontSize: '24px', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--ink)'}}>Walk-through &amp; listen</h3>
        <p style={{marginTop: '12px', color: 'var(--muted)', fontSize: '16px', lineHeight: '1.55'}}>You walk us through your business as it actually runs. Phone systems, calendars, the actual tools your team opens at 8am. We ask, you talk, we take notes.</p>
      </div>
      <div style={{padding: '28px', borderRight: '1px solid var(--rule)'}}>
        <div style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', color: 'var(--muted)', fontWeight: '700'}}>HOUR 2</div>
        <h3 style={{marginTop: '14px', fontSize: '24px', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--ink)'}}>Map the leaks</h3>
        <p style={{marginTop: '12px', color: 'var(--muted)', fontSize: '16px', lineHeight: '1.55'}}>We pull up your numbers — call logs, conversion rates, no-show rate, response time. We identify and rank the highest-ROI fixes for your specific situation.</p>
      </div>
      <div style={{padding: '28px'}}>
        <div style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', color: 'var(--muted)', fontWeight: '700'}}>HOUR 3</div>
        <h3 style={{marginTop: '14px', fontSize: '24px', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--ink)'}}>Deliver the plan</h3>
        <p style={{marginTop: '12px', color: 'var(--muted)', fontSize: '16px', lineHeight: '1.55'}}>You walk away with a written, ranked roadmap. Top 3 quick wins, mid-term automations, long-term systems. Yours to run, hand to a developer, or hire us to build.</p>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head"><div><span className="label">Real audit findings</span><h2 style={{marginTop: '14px'}}>What we've found in actual KC businesses.</h2></div></div>
    <div className="card-grid">
      <div className="card" style={{cursor: 'default'}}><span className="tag">HVAC · 6 trucks</span><h3>$310/mo in lost calls</h3><p>Missing 4–6 inbound calls a day at peak. Owner had no idea. Fix: $39/mo missed-call text-back. Recovered $14k in the first month.</p></div>
      <div className="card" style={{cursor: 'default'}}><span className="tag">Real estate · solo</span><h3>11 hrs/wk on lead nurture</h3><p>Manually texting and emailing every lead. Half the time forgetting. Fix: 7-touch automated nurture sequence. Won the time back, closed 2 more deals/quarter.</p></div>
      <div className="card" style={{cursor: 'default'}}><span className="tag">Dental · 4-chair</span><h3>17% no-show rate</h3><p>Single reminder text 1 day out. Fix: 3-touch sequence at -7d, -2d, -2h. Dropped no-shows to 7% inside 60 days.</p></div>
    </div>
  </div>
</section>

<section className="section section--alt">
  <div className="wrap">
    <div className="section-head"><div><span className="label">Common questions</span><h2 style={{marginTop: '14px'}}>About the audit.</h2></div></div>
    <FaqAccordion>
      <div className="faq-item open"><button className="faq-q"><span className="qnum">Q.01</span><span className="qtxt">How long does it take?</span><span className="qicn">+</span></button><div className="faq-a">2–3 hours on-site, then the written plan is delivered within 5 business days.</div></div>
      <div className="faq-item"><button className="faq-q"><span className="qnum">Q.02</span><span className="qtxt">Do you come to me?</span><span className="qicn">+</span></button><div className="faq-a">Yes. Every audit is in-person. We drive to you anywhere within 90 minutes of Kansas City.</div></div>
      <div className="faq-item"><button className="faq-q"><span className="qnum">Q.03</span><span className="qtxt">Is the audit fee credited toward a build?</span><span className="qicn">+</span></button><div className="faq-a">If you sign on for a build or retainer within 30 days, we credit the audit fee toward the first invoice.</div></div>
      <div className="faq-item"><button className="faq-q"><span className="qnum">Q.04</span><span className="qtxt">Will the plan work if I don't hire you?</span><span className="qicn">+</span></button><div className="faq-a">Yes — and that's intentional. The plan is written in plain English with specific tool recommendations and step counts. You can hand it to any competent developer or run it yourself.</div></div>
    </FaqAccordion>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap inner">
    <h2>Find your <em>leaks</em>.</h2>
    <p className="sub">$397. 2–3 hours. A written, ranked roadmap that's yours forever. The cheapest piece of business advice you'll ever buy.</p>
    <div className="actions">
      <a className="btn btn--invert" href="/contact/">Book the audit <span className="arrow">→</span></a>
    </div>
  </div>
</section>
    </main>
  );
}