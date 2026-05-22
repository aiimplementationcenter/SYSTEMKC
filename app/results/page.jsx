export const metadata = {
  title: 'Results | Real KC Automation Case Studies | S.Y.S.T.E.M. KC',
  description: 'Real results from Kansas City small businesses we work with. HVAC, real estate, dental — actual numbers from actual clients across the KC region.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Results</span></div></div>

<header className="page-hero">
  <div className="wrap">
    <span className="label">Case notes</span>
    <h1>Real wins from <em>Kansas City</em> small businesses.</h1>
    <p className="lede">Every case below is from a real KC client. Some are anonymized at the client's request. Numbers are pulled from their actual systems — not from us. If a case looks like your business, that's because the same patterns repeat across the metro.</p>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div className="card-grid">
      <article className="card" style={{cursor: 'default'}}>
        <span className="tag">HVAC · Independence</span>
        <h3 style={{fontSize: '48px', fontWeight: '900', letterSpacing: '-.03em', lineHeight: '1', color: 'var(--ink)'}}>+22 <span style={{fontSize: '18px', color: 'var(--muted)'}}>jobs/mo</span></h3>
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '18px', color: 'var(--text)', lineHeight: '1.45'}}>"The missed-call text-back paid for the whole engagement in the first week. I had no idea how many calls I was losing at 2pm on a Tuesday."</p>
        <p style={{marginTop: 'auto'}}><strong>Mike R.</strong> · Owner · 6-truck HVAC company</p>
      </article>
      <article className="card" style={{cursor: 'default'}}>
        <span className="tag">Real Estate · Overland Park</span>
        <h3 style={{fontSize: '48px', fontWeight: '900', letterSpacing: '-.03em', lineHeight: '1', color: 'var(--ink)'}}>9 <span style={{fontSize: '18px', color: 'var(--muted)'}}>hrs/wk back</span></h3>
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '18px', color: 'var(--text)', lineHeight: '1.45'}}>"Lead nurture used to be the last thing I'd get to at 10pm. Now it just happens. I close more because I finally have a life again."</p>
        <p style={{marginTop: 'auto'}}><strong>Priya S.</strong> · Solo agent · JOCO</p>
      </article>
      <article className="card" style={{cursor: 'default'}}>
        <span className="tag">Dental · Lee's Summit</span>
        <h3 style={{fontSize: '48px', fontWeight: '900', letterSpacing: '-.03em', lineHeight: '1', color: 'var(--ink)'}}>−41<span style={{fontSize: '18px', color: 'var(--muted)'}}>% no-shows</span></h3>
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '18px', color: 'var(--text)', lineHeight: '1.45'}}>"Two-text reminder sequence cut no-shows almost in half in 60 days. That's not a marketing claim — that's our schedule."</p>
        <p style={{marginTop: 'auto'}}><strong>Dr. Chen</strong> · Office manager · 4-chair practice</p>
      </article>
    </div>
  </div>
</section>

<section className="section section--alt">
  <div className="wrap">
    <div className="section-head"><div><span className="label">Long-form case study</span><h2 style={{marginTop: '14px'}}>6-truck HVAC, Independence MO.</h2></div></div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px'}}>
      <div>
        <div className="stats-row" style={{gridTemplateColumns: '1fr', border: '1px solid var(--rule)', borderRadius: '8px', background: 'var(--card)'}}>
          <div className="stat-cell" style={{borderRight: '0', borderBottom: '1px solid var(--rule)'}}><div className="v">+22</div><div className="k">Jobs / month</div></div>
          <div className="stat-cell" style={{borderRight: '0', borderBottom: '1px solid var(--rule)'}}><div className="v">$31k</div><div className="k">Added monthly revenue</div></div>
          <div className="stat-cell" style={{borderRight: '0', borderBottom: '1px solid var(--rule)'}}><div className="v">12 days</div><div className="k">Audit → first win</div></div>
          <div className="stat-cell" style={{borderRight: '0'}}><div className="v">5x</div><div className="k">ROI in 90 days</div></div>
        </div>
      </div>
      <div className="prose">
        <h3 style={{marginTop: '0'}}>The problem</h3>
        <p>Mike's crew was running flat-out through peak summer. Two ladies in the office were drowning in phone calls — and still losing 3–5 jobs a week to voicemail. Quote follow-up was on a sticky-note system. Reviews were sporadic, even though customers loved the work.</p>
        <h3>What we built</h3>
        <ul>
          <li><strong>Missed-call text-back</strong> sending a personalized response within 30 seconds of any unanswered call.</li>
          <li><strong>Quote follow-up sequence</strong> — text + email at +2 hours, +24 hours, +3 days, +7 days, with a soft "still need help?" final touch at day 14.</li>
          <li><strong>Review request automation</strong> firing the morning after every completed job — text first, email backup.</li>
          <li><strong>Appointment confirmation flow</strong> for next-day jobs to cut no-shows and reduce day-of phone tag.</li>
        </ul>
        <h3>What changed</h3>
        <p>Inside two weeks Mike was personally booked solid from missed-call text-back leads alone. By month 3 the company added a 7th truck. Google reviews jumped from a steady ~5/month to ~22/month, lifting their map-pack ranking and dropping their cost per lead 38%.</p>
        <blockquote>"I'd been told for years I needed a CRM. I'd tried twice. This is the first time it actually fits how my shop runs."</blockquote>
      </div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap inner">
    <h2>Get results like <em>these</em>.</h2>
    <p className="sub">Start with the $397 audit. You'll know inside 3 hours exactly which automations would move the needle for your shop — and which ones aren't worth the trouble.</p>
    <div className="actions">
      <a className="btn btn--invert" href="/services/system-audit-kansas-city/">Book the audit <span className="arrow">→</span></a>
      <a className="btn btn--ghost-invert" href="/contact/">Or chat first</a>
    </div>
  </div>
</section>
    </main>
  );
}