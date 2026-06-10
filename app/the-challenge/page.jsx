export const metadata = {
  title: 'The 60-Day Profit Challenge | Add $20,000 in New Revenue | S.Y.S.T.E.M. KC',
  description: 'Live 1-on-1 business growth training — 60 days, $20,000 in new revenue guaranteed or we work for free. Six pillars: offers, marketing, sales, speed-to-lead, referrals, and automation.',
};

export default function ChallengePage() {
  return (
    <main>

      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">&middot;</span><span className="here">The Challenge</span></div></div>

      {/* HERO */}
      <section className="nat-hero nat-hero--gradient">
        <div className="wrap">
          <span className="label">The 60-Day Profit Challenge</span>
          <h1 className="nat-h1">Live 1-on-1 training. $20,000 in new revenue in 60 days. Guaranteed.</h1>
          <p className="nat-lede">This isn't a course with homework. It's live sessions with you and your management team where we build your growth playbook, redesign your offer, and install the systems that run it automatically. Start to finish, in 60 days.</p>
          <div className="actions" style={{marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center'}}>
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">&rarr;</span></a>
            <a className="btn btn--ghost" href="#whats-included">See what's included &darr;</a>
          </div>
          <div className="scarcity-counter" style={{marginTop: '24px'}}>
            <span className="scarcity-dot"></span>
            3 of 5 client spots currently open
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR + GUARANTEE */}
      <section style={{background: 'var(--bg-green-tint)', padding: '80px 0', borderBottom: '1px solid var(--rule)'}}>
        <div className="wrap">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>
            <div>
              <p style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: '700', marginBottom: '20px'}}>Who this is for</p>
              <h2 style={{fontFamily: 'var(--sans)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-.03em', color: 'var(--blue-deep)'}}>We only work with owners who are serious about growth.</h2>
              <p style={{marginTop: '24px', fontSize: '18px', lineHeight: '1.75', color: 'var(--muted)'}}>Most business owners left a 40-hour job &mdash; and ended up working 100 hours a week to avoid going back. The hustle isn&rsquo;t the problem. The missing playbook is. We fix the model so the business grows without the grind.</p>
              <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.7', color: 'var(--muted)'}}>We work with local service business owners who are ready to stop guessing and start building a real growth system. If you&rsquo;re looking for a shortcut, this isn&rsquo;t it. If you&rsquo;re ready to do the work, we&rsquo;ll guarantee the result.</p>
              <p style={{marginTop: '16px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '22px', color: 'var(--blue-deep)', lineHeight: '1.35'}}>Success starts here &mdash; not with more hours, but with the right system.</p>
            </div>
            <div style={{background: 'var(--blue-deep)', borderRadius: '20px', padding: '44px 40px', textAlign: 'center'}}>
              <p style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: '700', marginBottom: '8px'}}>The 60-Day Profit Challenge &mdash; Guarantee</p>
              <div style={{fontFamily: 'var(--serif)', fontSize: 'clamp(56px, 8vw, 88px)', fontWeight: '900', lineHeight: '1', color: '#fff', letterSpacing: '-.03em'}}>$20,000</div>
              <p style={{marginTop: '16px', fontSize: '19px', fontWeight: '700', color: '#fff', lineHeight: '1.4'}}>in new revenue in 60 days &mdash; or I work for free until you do.</p>
              <p style={{marginTop: '14px', fontSize: '14px', color: 'rgba(255,255,255,.6)', lineHeight: '1.6'}}>No contracts. No fine print. We build your money model, marketing, sales system, referrals, and automation together &mdash; live and 1-on-1. If it doesn&rsquo;t produce, I keep working at no extra cost.</p>
              <div style={{marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                <a className="btn btn--primary" href="/apply/" style={{width: '100%', justifyContent: 'center', fontSize: '17px', padding: '16px 24px'}}>Apply for a free fit call &rarr;</a>
                <a href="#whats-included" style={{fontSize: '13px', color: 'rgba(255,255,255,.5)', fontFamily: 'var(--mono)', letterSpacing: '.06em'}}>See everything included in the Challenge &darr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="section">
        <div className="wrap">
          <span className="label">Not a course</span>
          <h2 style={{marginTop: '14px'}}>Live. 1-on-1. You and your team, together.</h2>
          <div className="three-col" style={{marginTop: '44px'}}>
            <div className="three-card">
              <div className="three-num" style={{color: 'var(--muted)', textDecoration: 'line-through'}}>NOT THIS</div>
              <h3 style={{color: 'var(--muted)', fontWeight: '400', fontSize: '18px'}}>A course with video lessons to watch on your own time</h3>
              <p style={{marginTop: '16px', fontWeight: '700', color: 'var(--ink)', fontSize: '17px'}}>Live sessions scheduled around your business</p>
            </div>
            <div className="three-card">
              <div className="three-num" style={{color: 'var(--muted)', textDecoration: 'line-through'}}>NOT THIS</div>
              <h3 style={{color: 'var(--muted)', fontWeight: '400', fontSize: '18px'}}>Generic frameworks that might apply to your industry</h3>
              <p style={{marginTop: '16px', fontWeight: '700', color: 'var(--ink)', fontSize: '17px'}}>Built specifically for your business, your numbers, your market</p>
            </div>
            <div className="three-card">
              <div className="three-num" style={{color: 'var(--muted)', textDecoration: 'line-through'}}>NOT THIS</div>
              <h3 style={{color: 'var(--muted)', fontWeight: '400', fontSize: '18px'}}>Homework you'll never get to after a 12-hour work day</h3>
              <p style={{marginTop: '16px', fontWeight: '700', color: 'var(--ink)', fontSize: '17px'}}>We build it together &mdash; you leave each session with something done</p>
            </div>
          </div>
          <p style={{marginTop: '36px', fontSize: '18px', color: 'var(--text)', lineHeight: '1.65', maxWidth: '64ch'}}>Jason works directly with you and your management team &mdash; not a junior coach, not a call center. Every session is tailored to your specific business, your specific numbers, and your specific growth gaps.</p>
          <p style={{marginTop: '16px', padding: '20px 24px', background: 'var(--bg-blue-tint)', borderRadius: '10px', fontSize: '16px', color: 'var(--text)', lineHeight: '1.7', maxWidth: '64ch', borderLeft: '4px solid var(--blue)'}}>This is done with you, one-on-one &mdash; Jason is in every build session &mdash; so he can only run 5 at once. When those are full, you join the waitlist for the next opening.</p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section section--alt" id="whats-included">
        <div className="wrap">
          <span className="label">What's included</span>
          <h2 style={{marginTop: '14px'}}>Nearly $39,000 of work and assets. One guarantee.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '60ch'}}>Every session is built around your business. The bonuses are yours to keep and use long after the 60 days are done.</p>

          {/* CORE TABLE */}
          <div style={{marginTop: '44px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
              <span className="label" style={{color: 'var(--blue)'}}>The core</span>
              <span style={{fontSize: '14px', color: 'var(--muted)'}}>We build it together, live &mdash; one-on-one with you and your management team</span>
            </div>
            <div style={{border: '1px solid var(--rule)', borderRadius: '12px', overflow: 'hidden'}}>
              {[
                ['The Profit Map', 'We audit your business and pinpoint exactly where the $20K is hiding', '$2,500'],
                ['Offer & Money Model', 'Redesigned with you &mdash; pricing, offer clarity, what the market will pay', '$4,000'],
                ['Marketing & Lead-Gen System', 'Google, Facebook, Instagram, TikTok, Nextdoor + content strategy, built with you', '$4,500'],
                ['Sales & Conversion System', 'Quote process, pitch, follow-up sequence &mdash; built with you', '$3,000'],
                ['Speed-to-Lead & Follow-Up', 'Response and nurture system set up with you &mdash; live within days', '$3,000'],
                ['Referral & Review Engine', 'Designed and installed with you &mdash; runs after every job automatically', '$2,500'],
                ['Operations & Automation', 'SOPs, workflows, and automations &mdash; built with you', '$3,500'],
                ['60 Days of Live 1-on-1 Sessions', 'Owner + management team, scheduled around your business', '$6,000'],
              ].map(([title, desc, value], i) => (
                <div key={title} style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', padding: '18px 24px', borderBottom: i < 7 ? '1px solid var(--rule)' : 'none', background: i % 2 === 0 ? 'var(--paper)' : 'var(--bg-blue-tint)', alignItems: 'center'}}>
                  <div>
                    <div style={{fontWeight: '700', color: 'var(--ink)', fontSize: '16px'}}>{title}</div>
                    <div style={{fontSize: '14px', color: 'var(--muted)', marginTop: '3px'}} dangerouslySetInnerHTML={{__html: desc}} />
                  </div>
                  <div style={{fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: '700', color: 'var(--blue)', whiteSpace: 'nowrap'}}>{value}</div>
                </div>
              ))}
              <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', padding: '18px 24px', background: 'var(--blue)', alignItems: 'center'}}>
                <div style={{fontWeight: '800', color: '#fff', fontSize: '16px'}}>Core subtotal</div>
                <div style={{fontFamily: 'var(--mono)', fontSize: '16px', fontWeight: '700', color: '#fff', whiteSpace: 'nowrap'}}>&asymp; $29,000</div>
              </div>
            </div>
          </div>

          {/* BONUS TABLE */}
          <div style={{marginTop: '36px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
              <span className="label" style={{color: 'var(--green)'}}>The bonuses</span>
              <span style={{fontSize: '14px', color: 'var(--muted)'}}>Included on top of the live work</span>
            </div>
            <div style={{border: '2px solid var(--green)', borderRadius: '12px', overflow: 'hidden'}}>
              {[
                ['★ Full Session Recording Library', 'Every build & optimization session recorded and yours to keep forever. Rewatch the exact setup. Train your team with it. A permanent, re-watchable playbook of your own business being built.', '$3,000', true],
                ['The Industry Offer Vault', 'Proven offers + ad and funnel templates for your trade', '$1,500', false],
                ['90-Day Content Playbook', 'What to post on each platform, with prompts and a posting calendar', '$1,500', false],
                ['Review & Referral Kit', 'Scripts, QR cards, and request templates', '$750', false],
                ['Team Delegation SOPs', 'Hand it to staff so it runs without you', '$1,000', false],
                ['30-Day Post-Challenge Tune-Up', 'A check-in session after the 60 days to catch anything that needs adjusting', '$750', false],
                ['Direct Operator Access', 'Text/Voxer hotline to Jason for the full 60 days', '$1,500', false],
              ].map(([title, desc, value, hero], i) => (
                <div key={title} style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', padding: hero ? '22px 24px' : '18px 24px', borderBottom: i < 6 ? '1px solid rgba(16,185,129,.2)' : 'none', background: hero ? 'var(--bg-green-tint)' : (i % 2 === 0 ? 'var(--paper)' : 'var(--bg-blue-tint)'), alignItems: 'start'}}>
                  <div>
                    <div style={{fontWeight: hero ? '800' : '700', color: hero ? 'var(--blue-deep)' : 'var(--ink)', fontSize: hero ? '17px' : '16px'}}>{title}</div>
                    <div style={{fontSize: '14px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.55'}}>{desc}</div>
                  </div>
                  <div style={{fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: '700', color: 'var(--green)', whiteSpace: 'nowrap'}}>{value}</div>
                </div>
              ))}
              <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', padding: '18px 24px', background: 'var(--green)', alignItems: 'center'}}>
                <div style={{fontWeight: '800', color: '#fff', fontSize: '16px'}}>Bonus subtotal</div>
                <div style={{fontFamily: 'var(--mono)', fontSize: '16px', fontWeight: '700', color: '#fff', whiteSpace: 'nowrap'}}>&asymp; $10,000</div>
              </div>
            </div>
          </div>

          {/* MATH BLOCK */}
          <div style={{marginTop: '36px', background: 'var(--blue-deep)', borderRadius: '16px', padding: '36px 40px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px'}}>
              {[
                ['Total value', '&asymp; $39,000'],
                ['Guaranteed return', '$20,000+ in new revenue, or I work free'],
                ['An agency forever', '$24K&ndash;$48K / year'],
                ['Your price', 'Revealed on the fit call'],
              ].map(([label, value]) => (
                <div key={label} style={{textAlign: 'center'}}>
                  <div style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: '8px'}}>{label}</div>
                  <div style={{fontFamily: 'var(--sans)', fontSize: '18px', fontWeight: '800', color: '#fff', lineHeight: '1.3'}} dangerouslySetInnerHTML={{__html: value}} />
                </div>
              ))}
            </div>
            <div style={{marginTop: '28px', textAlign: 'center'}}>
              <a className="btn btn--primary" href="/apply/" style={{fontSize: '18px', padding: '18px 36px'}}>Apply for a free fit call &rarr;</a>
            </div>
          </div>

          <p style={{marginTop: '24px', padding: '18px 24px', background: 'var(--bg-green-tint)', borderRadius: '10px', fontSize: '16px', color: 'var(--text)', lineHeight: '1.7', fontStyle: 'italic', borderLeft: '4px solid var(--green)'}}>
            You're not just getting coached &mdash; you're getting a permanent, recorded playbook of your own business being built and optimized, that you and your team can return to forever.
          </p>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="section" id="curriculum">
        <div className="wrap">
          <span className="label">The curriculum</span>
          <h2 style={{marginTop: '14px'}}>Six pillars. Everything it takes to add $20,000 in 60 days.</h2>
          <div className="process-steps" style={{marginTop: '48px'}}>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 1</div>
              <div>
                <h3>Offers &amp; Money Model</h3>
                <p>We start where the money is: your pricing, your offer, and where revenue is currently leaking. We audit what you charge vs. what the market will bear, redesign your offer for maximum clarity and conversion, and identify the 2&ndash;3 highest-ROI changes you can make this week. Most clients find $5,000&ndash;$15,000 in additional annual revenue just from the pricing conversation alone.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 2</div>
              <div>
                <h3>Marketing &amp; Lead Gen</h3>
                <p>We map every channel where your customers actually exist &mdash; Google, Facebook, Instagram, TikTok, Nextdoor, email, your existing database. You'll know exactly what to post, where to post it, and how to measure whether it's working. We also show you how to create content that attracts local customers without spending hours on it.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 3</div>
              <div>
                <h3>Sales &amp; Conversion</h3>
                <p>What you say when a lead comes in, how you quote, how you handle objections &mdash; this is where most service businesses lose deals they should win. We redesign your pitch, your follow-up sequence, and your quote process so leads that used to die get closed instead.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 4</div>
              <div>
                <h3>Speed-to-Lead &amp; Follow-Up</h3>
                <p>78% of buyers go with whoever responds first. We build the response system that makes sure you're always first &mdash; automated acknowledgment within seconds, follow-up for days and weeks, and the conversion sequence that closes leads who went quiet. This is usually the fastest-payback piece of the whole Challenge.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 5</div>
              <div>
                <h3>Referral &amp; Review Systems</h3>
                <p>Your existing customers are your highest-converting lead source &mdash; and most businesses never ask them properly. We design and install a referral program and review engine that run automatically: after every completed job, a trigger fires that asks for the review and plants the referral seed. No one has to remember to ask.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Pillar 6</div>
              <div>
                <h3>Operations &amp; Automation</h3>
                <p>The final pillar executes everything above: missed-call text-back, lead nurture sequences, appointment reminders, rebooking campaigns, and the SOPs that let your team run the business without you narrating every step. Automation without strategy is busywork &mdash; but automation after the strategy is how you scale.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">The timeline</span>
          <h2 style={{marginTop: '14px'}}>Week by week. Start to running system.</h2>
          <div className="process-steps" style={{marginTop: '48px'}}>
            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 1&ndash;2</div>
              <div><h4>Full money model audit</h4><p>We map your revenue, pricing, lead sources, conversion rate, and the gaps costing you the most. You get a written priority list.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 3&ndash;4</div>
              <div><h4>Offer redesign and marketing plan</h4><p>We rewrite the offer, build the marketing calendar, and launch the first high-ROI change.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 5&ndash;6</div>
              <div><h4>Sales process and speed-to-lead system</h4><p>Follow-up sequences built and active. Quote process redesigned.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 7&ndash;8</div>
              <div><h4>Referral and review systems installed</h4><p>Your existing customers become your best lead source &mdash; running automatically after every job.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 9&ndash;10</div>
              <div><h4>Full automation install</h4><p>Every workflow, SOP, and automation built, tested, and live.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month" style={{color: 'var(--blue)'}}>Week 11&ndash;12 (Buffer)</div>
              <div><h4>Polish, team training, and handoff</h4><p>Edge cases addressed, team trained, handoff documentation complete. The system runs without us.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="wrap-narrow">
          <span className="label">Who it works for</span>
          <h2 style={{marginTop: '14px'}}>Any local service business ready to grow.</h2>
          <p style={{marginTop: '18px', fontSize: '18px', color: 'var(--muted)', lineHeight: '1.65', maxWidth: '60ch'}}>The Challenge works for any owner of a local service business who's serious about the 60 days. The growth playbook is the same whether you cut hair, fix furnaces, or represent clients in court.</p>
          <p style={{marginTop: '20px', fontSize: '16px', color: 'var(--muted)', lineHeight: '1.8'}}>HVAC &middot; Plumbing &middot; Roofing &middot; Real estate &middot; Dental &middot; Medical &middot; Salons &middot; Nail salons &middot; Barber shops &middot; Spas &middot; Massage therapists &middot; Hair stylists &middot; Restaurants &middot; Landscapers &middot; Pest control &middot; Law firms &middot; Auto repair &middot; Gyms &middot; Cleaning services</p>
        </div>
      </section>

      {/* THE OWNER */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">Who you're working with</span>
          <h2 style={{marginTop: '14px'}}>Jason Dillon &mdash; 20-year operator.</h2>
          <blockquote className="op-quote">
            "I still own and operate a multi-location service company. Every strategy I teach, I use in my own business today. I built the Challenge because the kind of help I needed when I was scaling didn't exist &mdash; someone who would walk into my operation, look at my actual numbers, and tell me what to fix first. That's exactly what the Challenge is."
          </blockquote>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>3 of 5 spots currently open.</h2>
          <p className="sub">Apply for a free fit call. We look at your business and tell you exactly what the Challenge would produce for you &mdash; before you commit to anything.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">&rarr;</span></a>
            <a className="btn btn--ghost-invert" href="/contact/">Or just reach out &rarr;</a>
          </div>
        </div>
      </section>

    </main>
  );
}
