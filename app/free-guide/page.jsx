import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Free Guide: 10 Automations Every KC Small Business Should Be Running | S.Y.S.T.E.M. KC',
  description: 'Free 12-page PDF with the exact 10 automations we install for Kansas City small business clients, plus the tools and typical costs.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Free guide</span></div></div>
<header className="page-hero" style={{borderBottom: '0', paddingBottom: '32px'}}><div className="wrap"><span className="label">Free download</span><h1>10 automations every <em>Kansas City</em> small business should be running.</h1><p className="lede">A 12-page PDF with the exact 10 automations we install for our KC clients, the tools we use to run each one, and the typical cost. Use it as a checklist for your own business or to brief a developer.</p></div></header>
<section className="section" style={{paddingTop: '24px'}}><div className="wrap"><div style={{display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '64px', alignItems: 'start'}}>
<div>
<h2 style={{fontSize: '28px', fontWeight: '700', letterSpacing: '-.02em', color: 'var(--ink)'}}>What's inside</h2>
<ul style={{marginTop: '18px', marginLeft: '18px', fontSize: '18px', lineHeight: '1.8', color: 'var(--text)'}}>
<li>The missed-call text-back setup (and what to send)</li>
<li>Quote &amp; estimate follow-up sequences that actually convert</li>
<li>The 3-touch appointment reminder that cuts no-shows ~40%</li>
<li>Review-request automation that respects how customers actually behave</li>
<li>Internal job-handoff alerts (the easy ROI everyone skips)</li>
<li>Lead nurture for sales-cycle businesses (real estate, professional services)</li>
<li>Invoice follow-up that politely chases unpaid balances</li>
<li>The "stop forgetting customers" 90-day re-engagement sequence</li>
<li>Birthday + return-visit triggers for hospitality / personal care</li>
<li>How to bundle subscription costs into one monthly bill</li>
</ul>
<p style={{marginTop: '28px', color: 'var(--muted)', fontSize: '15px'}}>Written specifically for Kansas City small businesses. No fluff, no "what is AI?" intro. Just the 10 things and how to set them up.</p>
</div>
<aside style={{background: 'var(--card)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '32px', position: 'sticky', top: '96px'}}>
<span className="label">Get the guide</span>
<h3 style={{marginTop: '14px', fontSize: '24px', fontWeight: '700', color: 'var(--ink)'}}>Free PDF · ~12 pages</h3>
<ContactForm />
</aside>
</div></div></section>
    </main>
  );
}