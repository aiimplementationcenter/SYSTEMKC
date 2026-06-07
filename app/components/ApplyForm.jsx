'use client';
import { useState } from 'react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_APPLY_FORMSPREE_ID || 'xdajgpod';

export default function ApplyForm() {
  const [state, setState] = useState('idle');

  async function submit(e) {
    e.preventDefault();
    setState('submitting');
    const formData = new FormData(e.target);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error();
      setState('success');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="apply-success" style={{textAlign: 'center', padding: '48px 24px'}}>
        <div style={{fontSize: '40px', marginBottom: '16px'}}>✓</div>
        <h3 style={{marginBottom: '12px'}}>Application received.</h3>
        <p style={{color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7'}}>Jason will review what you submitted and reach out — typically within one business day. If you want to talk sooner, call <a href="tel:8169622111" style={{color: 'var(--c-e)', fontWeight: '600'}}>(816) 962-2111</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="apply-form">

      <div className="form-row">
        <label htmlFor="ap-name">Your name *</label>
        <input id="ap-name" name="name" type="text" required placeholder="First and last name" />
      </div>

      <div className="form-row">
        <label htmlFor="ap-business">Business name *</label>
        <input id="ap-business" name="business" type="text" required placeholder="Your company name" />
      </div>

      <div className="form-row">
        <label htmlFor="ap-industry">Industry / type of work *</label>
        <input id="ap-industry" name="industry" type="text" required placeholder="e.g. HVAC, roofing, plumbing, real estate" />
      </div>

      <div className="form-row">
        <label htmlFor="ap-interest">What are you most interested in? *</label>
        <select id="ap-interest" name="interest" required>
          <option value="">Select…</option>
          <option value="done-for-you">Done For You — build and install the full system</option>
          <option value="mentorship">Mentorship — monthly coaching and support</option>
          <option value="not-sure">Not sure yet — I need help figuring that out</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="ap-employees">Number of employees</label>
        <select id="ap-employees" name="employees">
          <option value="">Select…</option>
          <option>Just me</option>
          <option>2–5</option>
          <option>6–15</option>
          <option>16–50</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="ap-email">Email address *</label>
        <input id="ap-email" name="email" type="email" required placeholder="you@yourcompany.com" />
      </div>

      <div className="form-row">
        <label htmlFor="ap-phone">Phone *</label>
        <input id="ap-phone" name="phone" type="tel" required placeholder="(816) 000-0000" />
      </div>

      <div className="form-row">
        <label htmlFor="ap-situation">What's the main thing you want to fix? *</label>
        <textarea
          id="ap-situation"
          name="situation"
          required
          rows={4}
          placeholder="Missed calls, slow follow-up, owner doing everything, pricing problems — tell us what's actually costing you the most right now."
        />
      </div>

      <div className="form-row">
        <label htmlFor="ap-location">Are you in the Kansas City metro area?</label>
        <select id="ap-location" name="location">
          <option value="">Select…</option>
          <option value="yes-kc">Yes — KC metro or within 90 min</option>
          <option value="no-remote">No — I work remotely</option>
        </select>
      </div>

      <div className="form-row" style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
        <input id="ap-consent" name="sms_consent" type="checkbox" value="yes" style={{marginTop: '4px', flexShrink: 0}} />
        <label htmlFor="ap-consent" style={{fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6', cursor: 'pointer'}}>
          I agree to receive text messages from S.Y.S.T.E.M. KC about my application and services. Message &amp; data rates may apply. Reply STOP to opt out. See <a href="/terms/" style={{color: 'var(--c-e)'}}>Terms &amp; SMS</a>.
        </label>
      </div>

      {state === 'error' && (
        <p className="form-error">Something went wrong. Try again or call Jason at (816) 962-2111.</p>
      )}

      <button type="submit" className="btn btn--primary" disabled={state === 'submitting'} style={{marginTop: '8px', width: '100%', justifyContent: 'center'}}>
        {state === 'submitting' ? 'Submitting…' : 'Submit Application →'}
      </button>

      <p style={{marginTop: '12px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5'}}>
        By applying you agree to receive communication from S.Y.S.T.E.M. KC about your application. No spam. See our <a href="/privacy-policy/" style={{color: 'var(--c-e)'}}>Privacy Policy</a> and <a href="/terms/" style={{color: 'var(--c-e)'}}>Terms &amp; SMS</a>.
      </p>
    </form>
  );
}
