export const metadata = {
  title: 'AI Automation Training for KC Business Owners | S.Y.S.T.E.M. KC',
  description: 'Side-by-side AI automation training in Kansas City. We build with you using your real data, write plain-English SOPs, and leave you fully in control. 30-day support included.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><a href="/">Services</a><span className="sep">·</span><span className="here">Teach Me — AI Training</span></div></div>
<header className="page-hero">
  <div className="wrap">
    <span className="label">Hourly · Side-by-side · For the DIY owner</span>
    <h1>AI automation <em>training</em> for KC business owners.</h1>
    <p className="lede">For the owner who wants to understand and run their own systems. We sit beside you, use your real data, and build the automations together. You walk away with plain-English SOPs and full control — no dependency on a consultant.</p>
    <div className="actions">
      <a className="btn btn--primary" href="/contact/">Start training <span className="arrow">→</span></a>
      <span className="micro">Recorded · SOPs included · 30-day support</span>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div style={{display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start'}}>
      <div className="prose">
        <h2 style={{marginTop: '0'}}>Who this is for</h2>
        <p>You're the owner of a small business that's running fine but consuming too much of your time. You're technically curious. You don't want to outsource the system that knows your customers — you want to <strong>understand it</strong>.</p>
        <p>You've probably tried a CRM or two on your own. You hit the wall where "configure your pipeline" became a 40-tab nightmare and you gave up.</p>
        <h2>What we actually do</h2>
        <p>Three to ten 60-minute sessions, depending on scope. Sessions happen in person at your business or over a screen-share — your call. Every session is recorded so you can replay anything.</p>
        <p>Between sessions, you have homework — small, concrete tasks like "import your last 50 customers" or "write the first follow-up text in your voice." Real work that builds the system in front of you.</p>
        <h2>What you walk away with</h2>
        <ul>
          <li>A working CRM and automation stack configured around your actual business</li>
          <li>Plain-English SOPs for every automation — usable to train any new hire</li>
          <li>Session recordings you can replay anytime</li>
          <li>30 days of email support after we wrap (no extra charge)</li>
          <li>A future-proofed understanding of <em>why</em> things work — not just how to click buttons</li>
        </ul>
      </div>
      <aside style={{background: 'var(--card)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '32px', position: 'sticky', top: '96px'}}>
        <span className="label">Pricing</span>
        <div style={{marginTop: '14px', fontFamily: 'var(--sans)', fontWeight: '900', fontSize: '36px', letterSpacing: '-.02em', color: 'var(--ink)', lineHeight: '1'}}>Hourly</div>
        <p style={{marginTop: '8px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.5'}}>Quoted on intake based on scope. Most owners need 3–6 sessions. We'll tell you the total before we start — no surprises.</p>
        <hr className="rule" style={{margin: '24px 0'}} />
        <span className="label">Typical engagement</span>
        <ul style={{marginTop: '14px', marginLeft: '18px', fontSize: '15px', color: 'var(--text)', lineHeight: '1.7'}}>
          <li>1 hr discovery + planning</li>
          <li>3–8 hrs working sessions</li>
          <li>1 hr wrap-up + SOP review</li>
          <li>30 days follow-up support</li>
        </ul>
        <a className="btn btn--primary" href="/contact/" style={{marginTop: '28px', width: '100%', justifyContent: 'center'}}>Get a quote <span className="arrow">→</span></a>
      </aside>
    </div>
  </div>
</section>

<section className="section section--alt">
  <div className="wrap">
    <div className="section-head"><div><span className="label">Outcome</span><h2 style={{marginTop: '14px'}}>By the end, you can…</h2></div></div>
    <div className="card-grid">
      <div className="card" style={{cursor: 'default'}}><span className="tag">Self-sufficient</span><h3>Build a new automation yourself</h3><p>Not just edit ours — build a brand-new flow from scratch when your business needs change.</p></div>
      <div className="card" style={{cursor: 'default'}}><span className="tag">Self-sufficient</span><h3>Troubleshoot when things break</h3><p>You'll know where to look. CRM down? Text not sending? You'll diagnose 80% of issues without calling anyone.</p></div>
      <div className="card" style={{cursor: 'default'}}><span className="tag">Self-sufficient</span><h3>Train your team</h3><p>The SOPs are written so a competent new hire can pick up the system in a day — without retaining us.</p></div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap inner">
    <h2>Learn it <em>once</em>.</h2>
    <p className="sub">Most "consultants" want you to stay dependent. Our whole model is the opposite — we teach you so you don't need us. Strange business plan, but it's working.</p>
    <div className="actions">
      <a className="btn btn--invert" href="/contact/">Start training <span className="arrow">→</span></a>
      <a className="btn btn--ghost-invert" href="/services/system-audit-kansas-city/">Or start with an audit</a>
    </div>
  </div>
</section>
    </main>
  );
}