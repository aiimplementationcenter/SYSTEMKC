import FaqAccordion from '../../components/FaqAccordion';

export const metadata = {
  title: 'The 60-Day Profit Challenge for HVAC &amp; Plumbing Companies | S.Y.S.T.E.M. KC',
  description: 'Live 1-on-1 business growth training for HVAC, plumbing and home-services owners . Add $20,000 in new trades revenue in 60 days &mdash; guaranteed.',
};

export default function Page() {
  return (
    <main>

      {/* BREADCRUMBS */}
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">&middot;</span><a href="/industries/">Industries</a><span className="sep">&middot;</span><span className="here">HVAC, Plumbing &amp; Home Services</span></div></div>

      {/* HERO */}
      <header className="page-hero">
        <div className="wrap">
          <span className="label">For HVAC, Plumbing &amp; Home Services </span>
          <h1>Stop losing jobs to voicemail. Add $20,000 in new trades revenue in 60 days.</h1>
          <p className="lede">You are under a sink when the phone rings. By the time you call back, they booked your competitor. The 60-Day Profit Challenge teaches HVAC and plumbing owners how to fix their money model, capture every lead, and build a shop that grows without them babysitting it.</p>
          <p style={{fontStyle: 'italic', fontSize: '16px', color: 'var(--muted)', marginTop: '12px'}}>Add $20,000 in new revenue in 60 days &mdash; or I work for free until you do.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/apply/">Apply Now &rarr;</a>
            <a className="btn btn--ghost" href="/the-challenge/">See the Challenge</a>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="section">
        <div className="wrap">
          <div className="prose" style={{maxWidth: '72ch'}}>
            <h2 style={{marginTop: '0'}}>The lead loss problem (specific to trades).</h2>
            <p>You are under a sink. The phone rings. By the time you towel off and call back, that homeowner has already booked your competitor. <strong>Industry research puts the missed-call rate for small home-services businesses at 62%</strong> &mdash; and 85% of those callers never try you again.</p>
            <p>Add to that: quote follow-up that lives on sticky notes. Reviews that &ldquo;we keep meaning to ask for.&rdquo; A scheduling system that is really just whoever happens to be in the office that day.</p>
            <p>None of this is a moral failing. You are running a trades business &mdash; you are <em>supposed</em> to be on job sites. The leak is structural: there is no system handling the inbound while you are swinging a wrench. That is exactly what we fix in the 60-Day Challenge.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGE CARDS */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">Inside the 60-Day Challenge</span>
              <h2 style={{marginTop: '14px'}}>Built for trades shops with 1&ndash;20 trucks.</h2>
            </div>
          </div>
          <div className="card-grid">
            <div className="card">
              <span className="tag">01 &middot; Offer &amp; Pricing</span>
              <h3>What you charge vs. what the market will pay</h3>
              <p>Most trades shops are underpriced and don&rsquo;t know it. We rebuild your offer structure &mdash; service tiers, flat-rate vs. T&amp;M, membership models &mdash; so you earn more from every job you already run.</p>
            </div>
            <div className="card">
              <span className="tag">02 &middot; Customer Acquisition</span>
              <h3>Get found by more local homeowners</h3>
              <p>Google Business Profile, local SEO, Nextdoor, neighborhood marketing. We map where your customers actually search and build the system that keeps you at the top of it.</p>
            </div>
            <div className="card">
              <span className="tag">03 &middot; Speed-to-Lead</span>
              <h3>The call that gets answered wins the job</h3>
              <p>62% of calls to trades businesses go to voicemail. Every missed call triggers an automatic response within 30 seconds. You stop losing jobs to whoever picks up the phone first.</p>
            </div>
            <div className="card">
              <span className="tag">04 &middot; Sales Conversion</span>
              <h3>Quote sent is not revenue. Closed quote is.</h3>
              <p>Quote follow-up, price objection scripts, the right close language for a trades job. We redesign the pitch and the process so more estimates turn into work.</p>
            </div>
            <div className="card">
              <span className="tag">05 &middot; Referrals &amp; Reviews</span>
              <h3>Your best customers should be sending you jobs</h3>
              <p>A structured referral program and automated post-job review requests. Steady 5-star velocity keeps you at the top of the map pack &mdash; and referrals become a real channel, not an accident.</p>
            </div>
            <div className="card">
              <span className="tag">06 &middot; Systems &amp; Operations</span>
              <h3>Run the shop without narrating every step</h3>
              <p>SOPs for dispatch, job handoff, and customer follow-up. Once the strategy is built, we install the workflows that execute it so your team can run the business without you in the middle of every decision.</p>
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
              <h2 style={{marginTop: '14px'}}>A 6-truck HVAC shop, 90 days in.</h2>
            </div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px'}}>
            <div>
              <h3 style={{fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '.12em', color: '#D4322E', textTransform: 'uppercase', fontWeight: '700'}}>Before</h3>
              <ul style={{marginLeft: '18px', color: 'var(--text)', fontSize: '17px', lineHeight: '1.7'}}>
                <li>Phone rings; voicemail picks up.</li>
                <li>Owner checks voicemails on the drive home.</li>
                <li>Five quotes sitting unsent in the inbox.</li>
                <li>Reviews? Whoever the front-desk person feels like asking.</li>
                <li>Owner working 12-hour days. Spouse is over it.</li>
              </ul>
            </div>
            <div>
              <h3 style={{fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '.12em', color: '#1F8A99', textTransform: 'uppercase', fontWeight: '700'}}>After</h3>
              <ul style={{marginLeft: '18px', color: 'var(--text)', fontSize: '17px', lineHeight: '1.7'}}>
                <li>Missed call &rarr; text in 30 sec. Customer books online.</li>
                <li>Quote auto-followed up four times across a week.</li>
                <li>Job completes &rarr; review request fires the next morning.</li>
                <li>Owner sees the day&rsquo;s booking summary on his phone at 7pm.</li>
                <li>$31k/mo added revenue. New 7th truck. Owner home by 6.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section style={{background: 'var(--bg-green-tint)', padding: '80px 0'}}>
        <div className="wrap-narrow">
          <div style={{background: 'var(--blue-deep)', borderRadius: '16px', padding: '52px 48px', textAlign: 'center'}}>
            <div style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '20px'}}>The 60-Day Profit Challenge &mdash; Guarantee</div>
            <div style={{fontFamily: 'var(--sans)', fontSize: '72px', fontWeight: '900', color: '#fff', lineHeight: '1', marginBottom: '24px'}}>$20,000</div>
            <p style={{fontSize: '20px', color: '#fff', lineHeight: '1.6', maxWidth: '52ch', margin: '0 auto 12px'}}>Add $20,000 in new revenue in 60 days. If you don&rsquo;t, I keep working with you for free until you do. No fine print.</p>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px'}}>
              <a className="btn btn--primary" href="/apply/">Apply Now &rarr;</a>
              <a className="btn btn--ghost" href="/the-challenge/">See everything in the Challenge</a>
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
              <h2 style={{marginTop: '14px'}}>From trades owners.</h2>
            </div>
          </div>
          <FaqAccordion>
            <div className="faq-item open">
              <button className="faq-q"><span className="qnum">Q.01</span><span className="qtxt">What exactly is the 60-Day Profit Challenge?</span><span className="qicn">+</span></button>
              <div className="faq-a">The 60-Day Profit Challenge is a live, 1-on-1 business growth program for trades owners. Over 60 days, we work through your money model, customer acquisition, lead conversion, referral system, and operational workflows &mdash; together, in live sessions, with you and your team. It is not a course. Not homework. Live strategy sessions built around your specific shop.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.02</span><span className="qtxt">How does this work for HVAC and plumbing companies?</span><span className="qicn">+</span></button>
              <div className="faq-a">For HVAC and plumbing companies, the Challenge focuses on the high-leverage moves that are specific to trades: offer structure and flat-rate pricing, capturing every lead that calls, quote follow-up, your referral and review engine, and the SOPs that mean jobs get dispatched and completed without you in the middle. We have worked with trades shops across the country and the playbook is built for how a 1&ndash;20 truck operation actually runs.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.03</span><span className="qtxt">Is this a course or a coach?</span><span className="qicn">+</span></button>
              <div className="faq-a">Neither &mdash; it is a working engagement. We build the actual strategy for your business, install the systems, and stay in live sessions until the $20,000 in new revenue is added. You are not watching videos. You are building a real growth plan with a real operator.</div>
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
          <h2>Ready to add $20,000 in new <em>trades revenue</em>?</h2>
          <p className="sub">Apply to see if your shop qualifies. First conversation is free.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now &rarr;</a>
          </div>
        </div>
      </section>

    </main>
  );
}
