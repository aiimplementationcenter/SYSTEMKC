'use client';

import { useState } from 'react';

export default function AuditLandingForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xdajgpod', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{padding: '32px', background: '#EAF6EE', border: '1px solid #A0CCAA', borderRadius: '10px', color: '#1A5028'}}>
        <div style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '12px'}}>Request received</div>
        <p style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>You're on the list.</p>
        <p style={{fontSize: '16px', lineHeight: '1.6'}}>Jason will follow up within one business day. If you need to reach him sooner, text <a href="tel:8169622111" style={{fontWeight: '700', textDecoration: 'underline'}}>(816) 962-2111</a>.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} style={{maxWidth: '100%'}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
        <div className="form-row">
          <label htmlFor="af-name">Your name</label>
          <input id="af-name" name="name" type="text" required placeholder="Pat Smith" />
        </div>
        <div className="form-row">
          <label htmlFor="af-company">Company name</label>
          <input id="af-company" name="company" type="text" required placeholder="Smith HVAC" />
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
        <div className="form-row">
          <label htmlFor="af-phone">Phone</label>
          <input id="af-phone" name="phone" type="tel" required placeholder="(816) 555-0123" />
        </div>
        <div className="form-row">
          <label htmlFor="af-email">Email</label>
          <input id="af-email" name="email" type="email" required placeholder="you@company.com" />
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="af-website">Website (optional)</label>
        <input id="af-website" name="website" type="url" placeholder="https://yourcompany.com" />
      </div>
      <div className="form-row">
        <label htmlFor="af-industry">What kind of work do you do?</label>
        <select id="af-industry" name="industry" required>
          <option value="">Select your trade…</option>
          <option>HVAC</option>
          <option>Plumbing</option>
          <option>Electrical</option>
          <option>Roofing</option>
          <option>Pest Control</option>
          <option>Garage Door</option>
          <option>Restoration</option>
          <option>Landscaping / Lawn Care</option>
          <option>Other home service</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="af-stress">What causes the most office stress right now?</label>
        <textarea id="af-stress" name="stress" placeholder="e.g. 'Missed calls never get followed up and quotes go cold'" style={{minHeight: '110px'}} />
      </div>
      <label className="form-checkbox">
        <input type="checkbox" name="sms_consent" value="yes" required />
        <span>By providing your phone number, you consent to receive text messages from S.Y.S.T.E.M. KC about your audit request. Message and data rates may apply. Reply STOP to opt out.</span>
      </label>

      <button
        className="btn btn--primary"
        type="submit"
        disabled={status === 'submitting'}
        style={{width: '100%', justifyContent: 'center', fontSize: '17px', padding: '18px 28px'}}
      >
        {status === 'submitting' ? 'Sending…' : 'Get My Free SYSTEM Audit →'}
      </button>

      {status === 'error' && (
        <div style={{padding: '16px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', color: '#991B1B', fontSize: '15px'}}>
          Something went wrong. Email <a href="mailto:jason@systemkc.com" style={{textDecoration: 'underline'}}>jason@systemkc.com</a> or text <a href="tel:8169622111" style={{textDecoration: 'underline'}}>(816) 962-2111</a>.
        </div>
      )}

      <p className="form-foot">
        By submitting you agree to our <a href="/privacy-policy/">Privacy Policy</a> and <a href="/terms/">Terms</a>. Your information is never sold or shared.
      </p>
    </form>
  );
}
