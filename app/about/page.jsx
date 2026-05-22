export const metadata = {
  title: 'About | S.Y.S.T.E.M. KC | Local Kansas City AI Automation Consultant',
  description: 'S.Y.S.T.E.M. KC is a Kansas City team of automation consultants and builders, deliberately focused on local small businesses. In-person audits, plain English, no long-term contracts.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">About</span></div></div>

<header className="page-hero">
  <div className="wrap">
    <span className="label">The person behind it</span>
    <h1>Local Kansas City AI automation <em>consultant</em>.</h1>
    <p className="lede">S.Y.S.T.E.M. KC is a Kansas City team of consultants and builders, deliberately focused on local small businesses. We don't sell Fortune 500 dashboards to people who need a missed-call text-back — we sell working systems to people who fix furnaces, sell houses, and run dental practices.</p>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start'}}>
      <div style={{aspectRatio: '4/5', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--rule)', background: 'var(--card)', position: 'relative'}}>
        <img src="/assets/founder-portrait.png" alt="Jason Dillon, founder of S.Y.S.T.E.M. KC" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <div className="prose">
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '22px', lineHeight: '1.45', color: 'var(--ink)', marginBottom: '32px'}}>"I started S.Y.S.T.E.M. KC because I kept watching local owners I respected — friends, family, the guy who fixed my furnace — drown in admin work that genuinely shouldn't exist anymore."</p>
        <h2>The short version</h2>
        <p>I'm <strong>Jason Dillon</strong> — a Kansas City lifer and the founder of S.Y.S.T.E.M. KC. After years inside the small-business world, I kept seeing the same pattern: owners working 60-hour weeks doing tasks AI handles for $40/month. The gap between what's possible and what's actually installed in most KC shops is enormous — and it's growing.</p>
        <p>So we built a consulting practice with one focus: <strong>walk into a Kansas City small business, find the leaks, and fix them.</strong> In person. Plain English. No twelve-month contracts.</p>
        <h2>Why local</h2>
        <p>Every audit is in person. That's not a marketing line — it's a deliberate constraint. Remote agencies and offshore "ops teams" can't see your day-to-day. They can't watch your tech disappear into a crawlspace at 10am and miss the call from a homeowner with a burst pipe. We can. We've sat in the truck.</p>
        <p>Our radius is the Kansas City region: the full metro, Topeka, St. Joseph, Warrensburg, Lawrence, and the towns between. If we can't be at your door within 90 minutes, we're not a fit — and we'll happily refer you to someone who is.</p>
        <h2>How we work</h2>
        <p>Three principles, every engagement:</p>
        <ul>
          <li><strong>Plain English over jargon.</strong> If we can't explain it without acronyms, we don't sell it.</li>
          <li><strong>Yours either way.</strong> Workflows, SOPs, copy, data, and walkthroughs come with you — even if you fire us tomorrow.</li>
          <li><strong>Month-to-month.</strong> No twelve-month lock-ins, no proprietary black boxes, no contracts you can't get out of.</li>
        </ul>
        <h2>The tools we use</h2>
        <p>We're tool-agnostic. The platform that's right for your business depends on what you're trying to fix. A 3-truck HVAC shop and a 40-employee law firm don't need the same stack. What we promise: nothing we install requires you to keep paying <em>us</em>. On a retainer, your subscriptions and most AI usage are bundled into one monthly bill. Leave the retainer, and we transfer every account into your name.</p>
      </div>
    </div>
  </div>
</section>

<section className="section section--alt">
  <div className="wrap">
    <div className="section-head">
      <div><span className="label">By the numbers</span><h2 style={{marginTop: '14px'}}>Where we are today.</h2></div>
    </div>
    <div className="stats-row" style={{gridTemplateColumns: 'repeat(3,1fr)'}}>
      <div className="stat-cell"><div className="v">100<span className="unit">%</span></div><div className="k">In-person · local</div></div>
      <div className="stat-cell"><div className="v">0</div><div className="k">Long-term contracts</div></div>
      <div className="stat-cell"><div className="v">90<span className="unit">min</span></div><div className="k">Max drive radius</div></div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap inner">
    <h2>Let's find your <em>leaks</em>.</h2>
    <p className="sub">20 minutes on the phone. We map the top 2–3 things bleeding hours out of your week, and you decide if you want help fixing them. There is nothing to buy on this call.</p>
    <div className="actions">
      <a className="btn btn--invert" href="/contact/">Book a free 20-min call <span className="arrow">→</span></a>
      <a className="btn btn--ghost-invert" href="/services/">See what we do</a>
    </div>
  </div>
</section>
    </main>
  );
}