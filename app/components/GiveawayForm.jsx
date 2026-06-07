'use client';
import { useState } from 'react';
import ReferralShare from './ReferralShare';

export default function GiveawayForm({ referredBy }) {
  const [state, setState] = useState('idle'); // idle | submitting | success | error
  const [referralCode, setReferralCode] = useState('');
  const [fields, setFields] = useState({
    name: '',
    business: '',
    industry: '',
    employees: '',
    email: '',
    phone: '',
    reason: '',
    biggest_challenge: '',
    what_would_change: '',
  });

  function update(e) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function submit(e) {
    e.preventDefault();
    setState('submitting');
    try {
      const res = await fetch('/api/giveaway/enter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, referred_by: referredBy || null }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setReferralCode(data.referral_code);
      setState('success');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return <ReferralShare referralCode={referralCode} name={fields.name} />;
  }

  return (
    <form onSubmit={submit} className="giveaway-form">

      <div className="form-row">
        <label htmlFor="gw-name">Your name *</label>
        <input id="gw-name" name="name" type="text" required value={fields.name} onChange={update} placeholder="First and last name" />
      </div>

      <div className="form-row">
        <label htmlFor="gw-business">Business name *</label>
        <input id="gw-business" name="business" type="text" required value={fields.business} onChange={update} placeholder="Your company name" />
      </div>

      <div className="form-row">
        <label htmlFor="gw-industry">Industry / type of work *</label>
        <input id="gw-industry" name="industry" type="text" required value={fields.industry} onChange={update} placeholder="e.g. HVAC, roofing, plumbing, landscaping" />
      </div>

      <div className="form-row">
        <label htmlFor="gw-employees">Number of employees</label>
        <select id="gw-employees" name="employees" value={fields.employees} onChange={update}>
          <option value="">Select…</option>
          <option>Just me</option>
          <option>2–5</option>
          <option>6–15</option>
          <option>16–50</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="gw-email">Email address *</label>
        <input id="gw-email" name="email" type="email" required value={fields.email} onChange={update} placeholder="you@yourcompany.com" />
      </div>

      <div className="form-row">
        <label htmlFor="gw-phone">Phone (recommended — for winner contact)</label>
        <input id="gw-phone" name="phone" type="tel" value={fields.phone} onChange={update} placeholder="(816) 000-0000" />
      </div>

      <hr className="rule" style={{margin: '8px 0'}} />
      <p style={{fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6'}}>The questions below are how we determine need. Be specific and honest — this is how we select the business that will benefit most from the program.</p>

      <div className="form-row">
        <label htmlFor="gw-reason">Why does your business need this program? *</label>
        <textarea
          id="gw-reason"
          name="reason"
          required
          rows={5}
          value={fields.reason}
          onChange={update}
          placeholder="Tell us honestly where your business is right now — financially, operationally, what's breaking down, and why you can't easily fix it on your own. There's no right answer. We're looking for real situations, not polished pitches."
        />
      </div>

      <div className="form-row">
        <label htmlFor="gw-challenge">What's costing you the most right now — time, money, or stress? *</label>
        <textarea
          id="gw-challenge"
          name="biggest_challenge"
          required
          rows={3}
          value={fields.biggest_challenge}
          onChange={update}
          placeholder="Missed calls, quote follow-up, scheduling chaos, owner visibility, admin overload — be specific."
        />
      </div>

      <div className="form-row">
        <label htmlFor="gw-change">What would actually change in your business if you won this? *</label>
        <textarea
          id="gw-change"
          name="what_would_change"
          required
          rows={3}
          value={fields.what_would_change}
          onChange={update}
          placeholder="What does the other side of this look like for you? What could you do differently if the systems and money model were working?"
        />
      </div>

      {state === 'error' && (
        <p className="form-error">Something went wrong. Try again or call Jason at (816) 962-2111.</p>
      )}

      <button type="submit" className="btn btn--primary" disabled={state === 'submitting'} style={{marginTop: '8px', width: '100%', justifyContent: 'center'}}>
        {state === 'submitting' ? 'Submitting…' : 'Submit My Application →'}
      </button>

      <p style={{marginTop: '12px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5'}}>
        By applying you agree to receive communication from S.Y.S.T.E.M. KC about your application and business systems content. No spam. Unsubscribe anytime. See the <a href="/giveaway/rules/">Official Scholarship Rules</a>, <a href="/privacy-policy/">Privacy Policy</a>, and <a href="/terms/">Terms &amp; SMS</a>.
      </p>
    </form>
  );
}
