'use client';
import { useState } from 'react';
import ReferralShare from './ReferralShare';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_GIVEAWAY_FORMSPREE_ID || 'xdajgpod';

// Deterministic referral code from email — same email always gets same code, no storage needed
function codeFromEmail(email) {
  let hash = 5381;
  for (let i = 0; i < email.length; i++) {
    hash = ((hash << 5) + hash) + email.charCodeAt(i);
    hash = hash & hash;
  }
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  let h = Math.abs(hash);
  for (let i = 0; i < 7; i++) {
    code += chars[h % chars.length];
    h = Math.floor(h / chars.length);
  }
  return code;
}

export default function GiveawayForm({ referredBy }) {
  const [state, setState] = useState('idle');
  const [referralCode, setReferralCode] = useState('');
  const [name, setName] = useState('');

  async function submit(e) {
    e.preventDefault();
    setState('submitting');

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const submitterName = formData.get('name');

    // Add referred_by to submission so it shows in Formspree dashboard
    if (referredBy) formData.append('referred_by', referredBy);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error();
      setReferralCode(codeFromEmail(email));
      setName(submitterName);
      setState('success');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return <ReferralShare referralCode={referralCode} name={name} />;
  }

  return (
    <form onSubmit={submit} className="giveaway-form">

      <div className="form-row">
        <label htmlFor="gw-name">Your name *</label>
        <input id="gw-name" name="name" type="text" required placeholder="First and last name" onChange={e => setName(e.target.value)} />
      </div>

      <div className="form-row">
        <label htmlFor="gw-business">Business name *</label>
        <input id="gw-business" name="business" type="text" required placeholder="Your company name" />
      </div>

      <div className="form-row">
        <label htmlFor="gw-industry">Industry / type of work *</label>
        <input id="gw-industry" name="industry" type="text" required placeholder="e.g. HVAC, roofing, plumbing, landscaping" />
      </div>

      <div className="form-row">
        <label htmlFor="gw-employees">Number of employees</label>
        <select id="gw-employees" name="employees">
          <option value="">Select…</option>
          <option>Just me</option>
          <option>2–5</option>
          <option>6–15</option>
          <option>16–50</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="gw-email">Email address *</label>
        <input id="gw-email" name="email" type="email" required placeholder="you@yourcompany.com" />
      </div>

      <div className="form-row">
        <label htmlFor="gw-phone">Phone (recommended — for winner contact)</label>
        <input id="gw-phone" name="phone" type="tel" placeholder="(816) 000-0000" />
      </div>

      <hr className="rule" style={{margin: '8px 0'}} />
      <p style={{fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6'}}>
        The questions below carry the most weight in selection. Be honest and specific — we're looking for real situations, not polished pitches.
      </p>

      <div className="form-row">
        <label htmlFor="gw-reason">Why does your business need this program? *</label>
        <textarea
          id="gw-reason"
          name="reason"
          required
          rows={5}
          placeholder="Tell us honestly where your business is right now — financially, operationally, what's breaking down, and why you can't easily fix it on your own."
        />
      </div>

      <div className="form-row">
        <label htmlFor="gw-challenge">What's costing you the most right now — time, money, or stress? *</label>
        <textarea
          id="gw-challenge"
          name="biggest_challenge"
          required
          rows={3}
          placeholder="Missed calls, quote follow-up, scheduling chaos, admin overload — be specific."
        />
      </div>

      <div className="form-row">
        <label htmlFor="gw-change">What would actually change in your business if you received this scholarship? *</label>
        <textarea
          id="gw-change"
          name="what_would_change"
          required
          rows={3}
          placeholder="What does the other side of this look like for you?"
        />
      </div>

      {state === 'error' && (
        <p className="form-error">Something went wrong. Try again or call Jason at (816) 962-2111.</p>
      )}

      <button type="submit" className="btn btn--primary" disabled={state === 'submitting'} style={{marginTop: '8px', width: '100%', justifyContent: 'center'}}>
        {state === 'submitting' ? 'Submitting…' : 'Submit My Application →'}
      </button>

      <p style={{marginTop: '12px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5'}}>
        By applying you agree to receive communication from S.Y.S.T.E.M. KC about your application. No spam. See the <a href="/giveaway/rules/">Official Rules</a>, <a href="/privacy-policy/">Privacy Policy</a>, and <a href="/terms/">Terms &amp; SMS</a>.
      </p>
    </form>
  );
}
