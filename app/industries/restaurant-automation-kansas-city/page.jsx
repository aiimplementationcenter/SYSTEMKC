import FaqAccordion from '../../components/FaqAccordion';

export const metadata = {
  title: 'The 60-Day Profit Challenge for Restaurant Owners | S.Y.S.T.E.M. KC',
  description: 'Live 1-on-1 business growth training for independent restaurant owners. Add $20,000 in new restaurant revenue in 60 days &mdash; guaranteed.',
};

export default function Page() {
  return (
    <main>

      {/* BREADCRUMBS */}
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">&middot;</span><a href="/industries/">Industries</a><span className="sep">&middot;</span><span className="here">Restaurants &amp; Food Service</span></div></div>

      {/* HERO */}
      <header className="page-hero">
        <div className="wrap">
          <span className="label">For Restaurants &amp; Food Service </span>
          <h1>The 60-Day Restaurant $20,000 Profit Challenge</h1>
          <p className="lede">Independent restaurant operators &mdash; and the operators running it are exhausted. The 60-Day Profit Challenge teaches restaurant owners how to fix the money model, fill the dining room, and build the operational layer that means you can actually take a Tuesday off.</p>
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
              <h2 style={{fontFamily: 'var(--sans)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-.03em', color: 'var(--blue-deep)'}}>Built for operators who are done being the last one to leave every night.</h2>
              <p style={{marginTop: '24px', fontSize: '18px', lineHeight: '1.75', color: 'var(--muted)'}}>Restaurant owners didn&rsquo;t open their doors to run doubles seven days a week and watch no-shows eat the margin. The operational chaos isn&rsquo;t the cost of doing business &mdash; it&rsquo;s the cost of not having a system. The passion is there. The model needs fixing.</p>
              <p style={{marginTop: '16px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '22px', color: 'var(--blue-deep)', lineHeight: '1.35'}}>Success isn&rsquo;t about working harder &mdash; it&rsquo;s about building the right model so the dining room fills itself.</p>
            </div>
            <div style={{background: 'var(--blue-deep)', borderRadius: '20px', padding: '44px 40px', textAlign: 'center'}}>
              <p style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: '700', marginBottom: '8px'}}>The 60-Day Restaurant Profit Challenge &mdash; Guarantee</p>
              <div style={{fontFamily: 'var(--serif)', fontSize: 'clamp(56px, 8vw, 88px)', fontWeight: '900', lineHeight: '1', color: '#fff', letterSpacing: '-.03em'}}>$20,000</div>
              <p style={{marginTop: '16px', fontSize: '19px', fontWeight: '700', color: '#fff', lineHeight: '1.4'}}>in new revenue in 60 days &mdash; or I work for free until you do.</p>
              <p style={{marginTop: '14px', fontSize: '14px', color: 'rgba(255,255,255,.6)', lineHeight: '1.6'}}>No contracts. No fine print. We build your money model, marketing, sales system, referrals, and operations together &mdash; live and 1-on-1. If it doesn&rsquo;t produce, I keep working at no extra cost.</p>
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
              <h2 style={{marginTop: '14px'}}>Built for independent restaurants and small groups.</h2>
            </div>
          </div>
          <div className="card-grid">
            <div className="card">
              <span className="tag">01 &middot; Offer &amp; Menu Engineering</span>
              <h3>Most menus leave 15&ndash;25% of revenue on the table</h3>
              <p>Item placement, price anchoring, margin-first menu design, upsell scripting for servers. We rebuild the offer so the same covers produce more revenue.</p>
            </div>
            <div className="card">
              <span className="tag">02 &middot; Customer Acquisition</span>
              <h3>Get found by more local diners</h3>
              <p>Google Business Profile, Yelp, Instagram, local SEO. We map where your customers are searching and build the system that keeps you at the top of results on a Friday night.</p>
            </div>
            <div className="card">
              <span className="tag">03 &middot; No-Show Reduction</span>
              <h3>An empty reserved table at 7pm Saturday is money lost</h3>
              <p>Multi-touch reservation reminders, easy reschedule links, confirmation flows. Restaurants typically see no-shows drop 30&ndash;50% in 60 days.</p>
            </div>
            <div className="card">
              <span className="tag">04 &middot; Customer Retention</span>
              <h3>The best diner acquisition is the one you already have</h3>
              <p>Return-visit triggers, birthday offers, loyalty mechanics, slow-day outreach. We build the system that keeps your regulars coming back on a schedule.</p>
            </div>
            <div className="card">
              <span className="tag">05 &middot; Reviews &amp; Reputation</span>
              <h3>One unanswered 1-star review costs you more than you think</h3>
              <p>Post-visit review requests, response workflows, steady 5-star velocity. Reviews are not vanity &mdash; they are the difference between a full dining room and a slow Tuesday.</p>
            </div>
            <div className="card">
              <span className="tag">06 &middot; Operations &amp; Systems</span>
              <h3>Ten manager-hours a week on small fires is a staffing problem</h3>
              <p>SOPs, hiring flows, scheduling systems, catering inquiry follow-up. We build the operational layer around the kitchen so the manager runs the night, not the admin.</p>
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
              <h2 style={{marginTop: '14px'}}>A 40-seat restaurant, after 60 days.</h2>
            </div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px'}}>
            <div>
              <h3 style={{fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '.12em', color: '#D4322E', textTransform: 'uppercase', fontWeight: '700'}}>Before</h3>
              <ul style={{marginLeft: '18px', color: 'var(--text)', fontSize: '17px', lineHeight: '1.7'}}>
                <li>4 no-shows on a Saturday. ~$1,200 lost.</li>
                <li>One-star review hits at 11am Sunday. Nobody responds till Tuesday.</li>
                <li>Instagram has not been posted to in 3 weeks.</li>
                <li>Manager closes at midnight, opens at 9am.</li>
              </ul>
            </div>
            <div>
              <h3 style={{fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '.12em', color: '#1F8A99', textTransform: 'uppercase', fontWeight: '700'}}>After</h3>
              <ul style={{marginLeft: '18px', color: 'var(--text)', fontSize: '17px', lineHeight: '1.7'}}>
                <li>No-show rate down to ~5%. Saturday packed.</li>
                <li>Reviews answered within 90 min &mdash; staff sees it, customers feel heard.</li>
                <li>3 posts/week, scheduled in 30 min on Monday morning.</li>
                <li>Manager done at 11pm. Owner finally takes a Tuesday off.</li>
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
              <h2 style={{marginTop: '14px'}}>From restaurant owners.</h2>
            </div>
          </div>
          <FaqAccordion>
            <div className="faq-item open">
              <button className="faq-q"><span className="qnum">Q.01</span><span className="qtxt">What exactly is the 60-Day Profit Challenge?</span><span className="qicn">+</span></button>
              <div className="faq-a">The 60-Day Profit Challenge is a live, 1-on-1 business growth program for independent restaurant owners and small groups. Over 60 days, we work through your revenue model, customer acquisition, retention, reviews, and operations &mdash; together, in live sessions, built around your specific restaurant. Not a course. Not a consultant&rsquo;s report. Real work, real results.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.02</span><span className="qtxt">How does this work for restaurants?</span><span className="qicn">+</span></button>
              <div className="faq-a">For restaurants, the Challenge focuses on the highest-leverage revenue moves: menu engineering and ticket size, filling the dining room (Google, social, local SEO), no-show reduction, customer retention mechanics, and the review engine that makes you the obvious choice when someone searches for dinner on Friday. We have worked with restaurant owners across the country and the playbook is built for independent operators, not chains.</div>
            </div>
            <div className="faq-item">
              <button className="faq-q"><span className="qnum">Q.03</span><span className="qtxt">Is this a course or a coach?</span><span className="qicn">+</span></button>
              <div className="faq-a">Neither &mdash; it is a working engagement. We build the actual strategy for your restaurant, install the systems, and stay in live sessions until the $20,000 in new revenue is added. You are not watching videos. You are building a real growth plan with a real operator who has run businesses in this market.</div>
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
          <h2>Ready to add $20,000 in new <em>restaurant revenue</em>?</h2>
          <p className="sub">Apply to see if your restaurant qualifies. First conversation is free.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now &rarr;</a>
          </div>
        </div>
      </section>

    </main>
  );
}
