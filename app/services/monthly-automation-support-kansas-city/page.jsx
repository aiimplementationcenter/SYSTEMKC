export const metadata = {
  title: 'Monthly Automation Retainer for KC Businesses | S.Y.S.T.E.M. KC',
  description: 'Monthly automation retainer from $450/mo. Covers subscription costs and most AI usage. Month-to-month, cancel anytime. Your fractional automation department in Kansas City.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><a href="/">Services</a><span className="sep">·</span><span className="here">Monthly Retainer</span></div></div>
<header className="page-hero">
  <div className="wrap">
    <span className="label">From $450/mo · month-to-month</span>
    <h1>Ongoing automation <em>support</em> for KC businesses.</h1>
    <p className="lede">Your fractional automation department. One new automation a month, a monthly check-in, priority text support — and we cover the cost of the underlying software subscriptions and most AI usage so you have one predictable bill.</p>
    <div className="actions">
      <a className="btn btn--primary" href="/contact/">Talk retainer <span className="arrow">→</span></a>
      <span className="micro">Subscriptions included · Cancel anytime · No long-term contract</span>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div style={{display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start'}}>
      <div className="prose">
        <h2 style={{marginTop: '0'}}>Why a retainer makes sense</h2>
        <p>A one-time build is great. But the businesses that get the most out of automation are the ones that <strong>keep improving</strong>. Last month's automation reveals next month's bottleneck. New seasons surface new needs.</p>
        <p>The retainer is structured around the idea that your business will change, and your systems should keep up — without you having to source a new consultant every six months.</p>
        <h2>What's included every month</h2>
        <ul>
          <li><strong>One new automation built or modified.</strong> Could be a new sequence, a new integration, a new dashboard. You pick.</li>
          <li><strong>60-minute monthly check-in.</strong> What's working, what's not, what's next.</li>
          <li><strong>Priority text support.</strong> Reply within 4 business hours, typically same-day.</li>
          <li><strong>Subscription costs covered.</strong> The CRM, scheduler, AI tools, SMS sending — all bundled. One bill from us.</li>
          <li><strong>Most AI model usage included.</strong> Unless you're doing very heavy AI workloads, your usage is bundled in.</li>
          <li><strong>Access to the S.Y.S.T.E.M. KC client platform.</strong> Reports, SOPs, request tickets, history.</li>
        </ul>
        <h2>What's not included</h2>
        <p>If you need 4 new automations a month or you're doing massive AI workloads (think: 100k+ AI calls a month), we'll bump you to a higher tier. We tell you before any bill changes. No surprise overage fees.</p>
        <h2>Why one bill matters</h2>
        <p>The dirty secret of automation: by the time you piece together a CRM, a scheduler, an SMS provider, an email provider, and AI API access, you're paying 5–8 different SaaS bills. Each one auto-renews, each one charges by the seat or by the message, and none of them talk to each other for billing.</p>
        <p>One predictable monthly bill is genuinely simpler. <strong>Cancel the retainer and the accounts transfer into your name</strong> — you take over the individual subscriptions and carry on without us.</p>
      </div>
      <aside style={{background: 'var(--card)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '32px', position: 'sticky', top: '96px'}}>
        <span className="label">Pricing</span>
        <div style={{marginTop: '14px', fontFamily: 'var(--sans)', fontWeight: '900', fontSize: '48px', letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: '1'}}>From $450<span style={{fontSize: '18px', color: 'var(--muted)', fontWeight: '700'}}>/mo</span></div>
        <p style={{marginTop: '8px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.5'}}>Scales with scope. We quote your specific situation up front and write it into the agreement.</p>
        <hr className="rule" style={{margin: '24px 0'}} />
        <span className="label">Includes</span>
        <ul style={{marginTop: '14px', marginLeft: '18px', fontSize: '14px', color: 'var(--text)', lineHeight: '1.7'}}>
          <li>1 new automation / month</li>
          <li>Subscription costs bundled</li>
          <li>Most AI usage included</li>
          <li>Monthly check-in (60 min)</li>
          <li>Priority text support</li>
          <li>Client platform access</li>
        </ul>
        <a className="btn btn--primary" href="/contact/" style={{marginTop: '24px', width: '100%', justifyContent: 'center'}}>Get a quote <span className="arrow">→</span></a>
        <p style={{marginTop: '16px', fontSize: '12px', color: 'var(--dim)', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: '700'}}>Month-to-month · cancel anytime</p>
      </aside>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap inner">
    <h2>A team in your <em>corner</em>.</h2>
    <p className="sub">Less than the cost of a part-time hire. More flexible than an agency. Cancel any month if it's not earning its keep — and the systems stay with you.</p>
    <div className="actions">
      <a className="btn btn--invert" href="/contact/">Talk retainer <span className="arrow">→</span></a>
    </div>
  </div>
</section>
    </main>
  );
}