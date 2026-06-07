import ApplyForm from '../components/ApplyForm';

export const metadata = {
  title: 'Apply to Work Together | S.Y.S.T.E.M. KC',
  description: 'Apply to work with S.Y.S.T.E.M. KC. Tell us what\'s broken in your business. First conversation is free — we figure out what you actually need before you spend anything.',
};

export default function Page() {
  return (
    <main>

      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Apply</span></div></div>

      <section className="section">
        <div className="wrap">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start'}} className="apply-layout">

            {/* Left: Form */}
            <div>
              <span className="label">Apply to work together</span>
              <h1 style={{marginTop: '14px', fontSize: 'clamp(28px,4vw,42px)', lineHeight: '1.2', fontFamily: 'var(--serif)'}}>Tell us what's broken. First conversation is free.</h1>
              <p style={{marginTop: '16px', color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px'}}>We review every application personally. If your situation is something we can help with, Jason will reach out to schedule a call. If it's not the right fit, we'll tell you that honestly and point you somewhere better.</p>
              <ApplyForm />
            </div>

            {/* Right: Sidebar */}
            <div style={{position: 'sticky', top: '96px'}}>
              <div className="contact-card" style={{marginBottom: '24px'}}>
                <h4>Prefer to call?</h4>
                <p style={{color: 'var(--muted)', marginTop: '8px', fontSize: '15px'}}>Jason answers his own phone during business hours.</p>
                <a href="tel:8169622111" className="btn btn--primary" style={{marginTop: '16px', width: '100%', justifyContent: 'center'}}>
                  (816) 962-2111
                </a>
                <p style={{marginTop: '10px', fontSize: '13px', color: 'var(--muted)'}}>Feel free to text this number too.</p>
              </div>

              <div className="contact-card">
                <h4>What happens after you apply</h4>
                <div className="process-steps" style={{marginTop: '16px'}}>
                  <div className="proc-step" style={{paddingBottom: '14px'}}>
                    <div className="proc-month" style={{fontSize: '11px'}}>Step 1</div>
                    <div style={{fontSize: '14px', lineHeight: '1.6', color: 'var(--muted)'}}>Jason reviews your application — usually within one business day.</div>
                  </div>
                  <div className="proc-step" style={{paddingBottom: '14px'}}>
                    <div className="proc-month" style={{fontSize: '11px'}}>Step 2</div>
                    <div style={{fontSize: '14px', lineHeight: '1.6', color: 'var(--muted)'}}>If it's a fit, he'll reach out to schedule a free 20-minute call.</div>
                  </div>
                  <div className="proc-step" style={{paddingBottom: '0'}}>
                    <div className="proc-month" style={{fontSize: '11px'}}>Step 3</div>
                    <div style={{fontSize: '14px', lineHeight: '1.6', color: 'var(--muted)'}}>On the call, we figure out what your business actually needs — before you spend anything.</div>
                  </div>
                </div>
              </div>

              <div style={{marginTop: '24px', padding: '20px', background: 'var(--bg-alt)', borderRadius: '8px', borderLeft: '3px solid var(--c-e)'}}>
                <p style={{fontSize: '14px', lineHeight: '1.7', color: 'var(--muted)'}}>
                  <strong style={{color: 'var(--fg)'}}>Looking for the scholarship?</strong> If cost is a barrier, apply for the <a href="/giveaway/" style={{color: 'var(--c-e)', fontWeight: '600'}}>SYSTEM KC Business Scholarship</a> instead — the full Done-For-You program awarded to the owner who demonstrates the greatest need.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
