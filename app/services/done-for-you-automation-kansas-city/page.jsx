export const metadata = {
  title: 'Done-For-You Business Automation in Kansas City | S.Y.S.T.E.M. KC',
  description: 'Done-for-you AI automation builds in Kansas City. Builds start at $500. Fixed-bid, 2–4 week delivery, video walkthrough, 30-day support. You don\\u2019t have to learn the tools.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><a href="/">Services</a><span className="sep">·</span><span className="here">Build It For Me</span></div></div>
<header className="page-hero">
  <div className="wrap">
    <span className="label">From $500 · Fixed-bid · 2–4 weeks</span>
    <h1>Done-for-you business <em>automation</em> in Kansas City.</h1>
    <p className="lede">For the owner who wants it built and doesn't want to learn the tools. We disappear for two to four weeks and hand back a working, tested system with a video walkthrough. You operate, we did the heavy lifting.</p>
    <div className="actions">
      <a className="btn btn--primary" href="/contact/">Scope a build <span className="arrow">→</span></a>
      <span className="micro">Fixed-bid · 30-day support · video walkthrough included</span>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div className="section-head"><div><span className="label">What gets built</span><h2 style={{marginTop: '14px'}}>A working system tuned to your shop.</h2></div></div>
    <div className="card-grid">
      <div className="card"><span className="tag">Lead flow</span><h3>Lead capture + missed-call text-back</h3><p>Every call, form, and DM lands in one place. Missed calls trigger an instant text within 30 seconds. No more "I thought we'd call them back."</p></div>
      <div className="card"><span className="tag">Nurture</span><h3>Follow-up sequences</h3><p>Multi-touch text + email cadences for new leads, dormant leads, and post-quote follow-up. Personalized in your voice, not template-y.</p></div>
      <div className="card"><span className="tag">Scheduling</span><h3>Booking + reminders</h3><p>Online booking that respects your calendar. Confirmation + reminder sequences that crater your no-show rate.</p></div>
      <div className="card"><span className="tag">Reputation</span><h3>Review request engine</h3><p>Automated review ask the morning after every completed job. Text first, email backup. Direct link to Google Business Profile.</p></div>
      <div className="card"><span className="tag">Admin</span><h3>Invoicing + billing reminders</h3><p>Quote → invoice → reminder cadence for unpaid bills. Recurring billing if you offer maintenance plans.</p></div>
      <div className="card"><span className="tag">Inside the business</span><h3>Internal workflows</h3><p>Tech dispatch, job handoffs, internal notifications — whatever shows up in the audit as a friction point.</p></div>
    </div>
  </div>
</section>

<section className="section section--alt">
  <div className="wrap">
    <div className="section-head"><div><span className="label">How a build runs</span><h2 style={{marginTop: '14px'}}>From scope to walkthrough.</h2></div></div>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1.5px solid var(--ink)'}}>
      <div style={{padding: '24px', borderRight: '1px solid var(--rule)'}}><div style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', color: 'var(--muted)', fontWeight: '700'}}>WEEK 0</div><h3 style={{marginTop: '12px', fontSize: '20px', fontWeight: '700', color: 'var(--ink)'}}>Scope &amp; quote</h3><p style={{marginTop: '10px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.55'}}>Audit → scoped list of automations → fixed-bid quote. You approve before any work starts.</p></div>
      <div style={{padding: '24px', borderRight: '1px solid var(--rule)'}}><div style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', color: 'var(--muted)', fontWeight: '700'}}>WEEK 1</div><h3 style={{marginTop: '12px', fontSize: '20px', fontWeight: '700', color: 'var(--ink)'}}>Setup &amp; build</h3><p style={{marginTop: '10px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.55'}}>CRM provisioned, data imported, automations wired. You see progress, but don't have to touch anything.</p></div>
      <div style={{padding: '24px', borderRight: '1px solid var(--rule)'}}><div style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', color: 'var(--muted)', fontWeight: '700'}}>WEEK 2–3</div><h3 style={{marginTop: '12px', fontSize: '20px', fontWeight: '700', color: 'var(--ink)'}}>Test &amp; tune</h3><p style={{marginTop: '10px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.55'}}>We run dummy leads through every flow. We send ourselves the texts. We catch the weird edge cases before your customers do.</p></div>
      <div style={{padding: '24px'}}><div style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', color: 'var(--muted)', fontWeight: '700'}}>WEEK 4</div><h3 style={{marginTop: '12px', fontSize: '20px', fontWeight: '700', color: 'var(--ink)'}}>Walkthrough &amp; go live</h3><p style={{marginTop: '10px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.55'}}>Video walkthrough of the whole system, SOPs delivered, you go live. 30 days of email support starts.</p></div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap inner">
    <h2>Skip the <em>learning curve</em>.</h2>
    <p className="sub">You don't need to know how a CRM works to benefit from one. Builds start at $500 for a single automation. Quoted up front. Delivered in 2–4 weeks.</p>
    <div className="actions">
      <a className="btn btn--invert" href="/contact/">Scope a build <span className="arrow">→</span></a>
    </div>
  </div>
</section>
    </main>
  );
}