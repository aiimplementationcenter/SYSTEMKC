import FaqAccordion from '../../components/FaqAccordion';

export const metadata = {
  title: 'The 60-Day Profit Challenge for Auto Parts Suppliers | S.Y.S.T.E.M. KC',
  description: 'Live 1-on-1 business growth training for auto parts suppliers and distributors. Add $20,000 in new revenue in 60 days &mdash; guaranteed.',
};

export default function Page() {
  return (
    <main>

      {/* BREADCRUMBS */}
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">&middot;</span><a href="/industries/">Industries</a><span className="sep">&middot;</span><span className="here">Auto Parts Suppliers</span></div></div>

      {/* HERO */}
      <header className="page-hero">
        <div className="wrap">
          <span className="label">For Auto Parts Suppliers &amp; Distributors</span>
          <h1>The 60-Day Auto Parts $20,000 Profit Challenge</h1>
          <p className="lede">A shop calls for a part. You have it. By the time you look it up, confirm the fitment, and call back &mdash; they already ordered it online. The 60-Day Profit Challenge teaches auto parts owners how to win on speed, lock in fleet and shop accounts, and build a counter business that doesn&rsquo;t depend on who picks up the phone first.</p>
          <p style={{fontStyle: 'italic', fontSize: '16px', color: 'var(--muted)', marginTop: '12px'}}>Add $20,000 in new revenue in 60 days &mdash; or I work for free until you do.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply Now &rarr;</a>
            <a className="btn btn--ghost" href="/the-challenge/">See the Challenge</a>
          </div>
        </div>
      </header>

      {/* WHO THIS IS FOR + GUARANTEE */}
      <section style={{background: 'var(--bg-green-tint)', padding: '80px 0', borderBottom: '1px solid var(--rule)'}}>
        <div className="wrap">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>
            <div>
              <p style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: '700', marginBottom: '20px'}}>Who this is for</p>
              <h2 style={{fontFamily: 'var(--sans)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-.03em', color: 'var(--blue-deep)'}}>Built for owners who are tired of losing to the internet on price instead of winning on service.</h2>
              <p style={{marginTop: '24px', fontSize: '18px', lineHeight: '1.75', color: 'var(--muted)'}}>Independent auto parts suppliers have something the big boxes will never have: a real person who knows the part, knows the fitment, and can get it to the shop in an hour. That advantage disappears the moment the phone goes to voicemail or the quote takes three days. The inventory is there. The relationships are there. The systems to capture that revenue are not.</p>
              <p style={{marginTop: '16px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '22px', color: 'var(--blue-deep)', lineHeight: '1.35'}}>You don&rsquo;t lose to AutoZone on product &mdash; you lose to them on process. That&rsquo;s the part we fix.</p>
            </div>
            <div style={{background: 'var(--blue-deep)', borderRadius: '20px', padding: '44px 40px', textAlign: 'center'}}>
              <p style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: '700', marginBottom: '8px'}}>The 60-Day Auto Parts Profit Challenge &mdash; Guarantee</p>
              <div style={{fontFamily: 'var(--serif)', fontSize: 'clamp(56px, 8vw, 88px)', fontWeight: '900', lineHeight: '1', color: '#fff', letterSpacing: '-.03em'}}>$20,000</div>
              <p style={{marginTop: '16px', fontSize: '19px', fontWeight: '700', color: '#fff', lineHeight: '1.4'}}>in new revenue in 60 days &mdash; or I work for free until you do.</p>
              <p style={{marginTop: '14px', fontSize: '14px', color: 'rgba(255,255,255,.6)', lineHeight: '1.6'}}>No contracts. No fine print. We build your fleet account strategy, counter sales system, reorder automation, and wholesale pipeline together &mdash; live and 1-on-1. If it doesn&rsquo;t produce, I keep working at no extra cost.</p>
              <div style={{marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                <a className="btn btn--primary" href="/apply/" style={{width: '100%', justifyContent: 'center', fontSize: '17px', padding: '16px 24px'}}>Apply for a free fit call &rarr;</a>
                <a href="/the-challenge/" style={{fontSize: '13px', color: 'rgba(255,255,255,.5)', fontFamily: 'var(--mono)', letterSpacing: '.06em'}}>See everything included in the Challenge &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE CARDS */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">Inside the 60-Day Challenge</span>
              <h2 style={{marginTop: '14px'}}>Built for independent parts suppliers with 1&ndash;5 locations.</h2>
            </div>
          </div>
          <div className="card-grid">
            <div className="card">
              <span className="tag">01 &middot; Offer &amp; Pricing</span>
              <h3>Margin, markup, and the accounts worth keeping</h3>
              <p>Most parts suppliers are underpriced on labor-intensive accounts and overpriced on commodity parts they&rsquo;ll lose anyway. We rebuild your pricing tiers &mdash; counter, shop account, fleet, and wholesale &mdash; so every transaction is profitable, not just busy.</p>
            </div>
            <div className="card">
              <span className="tag">02 &middot; Fleet &amp; Shop Accounts</span>
              <h3>Signed fleet accounts are worth ten walk-in customers</h3>
              <p>We build the outreach sequence, the fleet program structure, and the account management system that turns body shops, independent mechanics, and fleet managers into recurring monthly revenue &mdash; not one-off transactions.</p>
            </div>
            <div className="card">
              <span className="tag">03 &middot; Speed-to-Quote</span>
              <h3>The first quote that lands wins the job</h3>
              <p>When a shop texts for a part, the clock starts. We install the lookup-and-respond process that gets a confirmed quote back in under 10 minutes &mdash; so you stop losing jobs to whoever answers first instead of whoever has the part.</p>
            </div>
            <div className="card">
              <span className="tag">04 &middot; Reorder &amp; Retention</span>
              <h3>Your best customers should be ordering again automatically</h3>
              <p>A structured follow-up and reorder reminder system for your top shop and fleet accounts. Proactive outreach when they go quiet, loyalty incentives that make switching feel expensive, and a referral program that turns satisfied shops into your sales team.</p>
            </div>
            <div className="card">
              <span className="tag">05 &middot; Wholesale Pipeline</span>
              <h3>Turn your inventory into a regional distribution advantage</h3>
              <p>If you carry specialty, hard-to-find, or niche inventory, there are shops in your region who don&rsquo;t know you exist. We map the wholesale outreach strategy that gets your catalog in front of the right buyers and turns unique stock into a moat.</p>
            </div>
            <div className="card">
              <span className="tag">06 &middot; Systems &amp; Operations</span>
              <h3>Counter runs itself. Owner stops being the catalog.</h3>
              <p>SOPs for counter lookup, quote follow-up, delivery coordination, and account check-ins. Once the strategy is built, we install the workflows so your team executes it consistently &mdash; without you being the only one who knows where everything is.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">A day in the life</span>
              <h2 style={{marginTop: '14px'}}>A 2-location auto parts supplier, 90 days in.</h2>
            </div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px'}}>
            <div>
              <h3 style={{fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '.12em', color: '#D4322E', textTransform: 'uppercase', fontWeight: '700'}}>Before</h3>
              <ul style={{marginLeft: '18px', color: 'var(--text)', fontSize: '17px', lineHeight: '1.7'}}>
                <li>Shop texts for a part. Owner is at the other location.</li>
                <li>Quote comes back four hours later. Shop already ordered online.</li>
                <li>Three fleet accounts &mdash; all paying late, none under contract.</li>
                <li>Best mechanic customer moved shops. No one told the owner for two weeks.</li>
                <li>Owner working the counter six days a week because no one else knows the catalog.</li>
              </ul>
            </div>
            <div>
              <h3 style={{fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '.12em', color: '#1F8A99', textTransform: 'uppercase', fontWeight: '700'}}>After</h3>
              <ul style={{marginLeft: '18px', color: 'var(--text)', fontSize: '17px', lineHeight: '1.7'}}>
                <li>Shop texts &rarr; counter staff quotes within 8 minutes from a lookup SOP.</li>
                <li>Seven signed fleet accounts on net-30 terms with auto reorder reminders.</li>
                <li>Wholesale outreach landed two new body shop accounts in month one.</li>
                <li>Owner gets a weekly account health report &mdash; knows who&rsquo;s going quiet before they leave.</li>
                <li>$28k/mo added revenue. Owner off the counter by noon most days.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">Common questions</span>
              <h2 style={{marginTop: '14px'}}>From parts suppliers.</h2>
            </div>
          </div>
          <FaqAccordion>
            <div className="faq-item open">
              <button className="faq-q"><span className="qnum">Q.01</span><span className="qtxt">What exactly is the 60-Day Profit Challenge?</span><span className="qicn">+</span></button>
              <div className="faq-a">The 60-Day Profit Challenge is a live, 1-on-1 business growth program for parts suppliers and distributors. Over 60 days, we work through your pricing model, fleet and shop account strategy, speed-to-quote process, reorder and retention system, and operational workflows &mdash; together, in live sessions. Not a course. Not homework. Live strategy sessions built around your specific business and inventory.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.02</span><span className="qtxt">How does this work for auto parts businesses specifically?</span><span className="qicn">+</span></button>
              <div className="faq-a">For auto parts suppliers, the Challenge focuses on the revenue levers that are specific to your business: fleet and shop account acquisition and retention, speed-to-quote systems, pricing structure across counter and wholesale channels, and the account management process that keeps your best customers from drifting to the big boxes. The playbook is built around how an independent 1&ndash;5 location parts operation actually runs &mdash; not a generic sales framework.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.03</span><span className="qtxt">We already have steady counter traffic. Why do we need this?</span><span className="qicn">+</span></button>
              <div className="faq-a">Counter traffic is the floor, not the ceiling. The highest-margin, most loyal, and most defensible revenue in auto parts comes from fleet accounts, signed shop contracts, and wholesale relationships &mdash; not walk-in counter sales. Most independent suppliers have the inventory and the relationships to build these channels; what they lack is the system to pursue and retain them. That&rsquo;s exactly what the Challenge installs.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.04</span><span className="qtxt">What does the guarantee mean exactly?</span><span className="qicn">+</span></button>
              <div className="faq-a">If you do not add $20,000 in new revenue within 60 days, I keep working with you &mdash; live, 1-on-1 &mdash; for free until you do. No service credit. No conditions. I work for free until the number is hit.</div>
            </div>
          </FaqAccordion>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Ready to add $20,000 in new <em>parts revenue</em>?</h2>
          <p className="sub">Apply to see if your business qualifies. First conversation is free.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now &rarr;</a>
          </div>
        </div>
      </section>

    </main>
  );
}
