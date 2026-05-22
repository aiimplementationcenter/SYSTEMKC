'use client';

import { useState } from 'react';

/**
 * ContactForm
 * Renders the S.Y.S.T.E.M. KC contact form and posts to Formspree.
 * Used on /contact, /free-audit, and /free-guide pages.
 */
export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    try {
      const res = await fetch('https://formspree.io/f/xdajgpod', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="form" style={{marginTop: '32px'}} onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" required placeholder="Pat Smith" />
      </div>
      <div className="form-row">
        <label htmlFor="biz">Business name</label>
        <input id="biz" name="business" type="text" placeholder="Smith HVAC" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@business.com" />
      </div>
      <div className="form-row">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" placeholder="(816) 555-0123" />
      </div>
      <label className="form-checkbox">
        <input type="checkbox" name="sms_consent" value="yes" />
        {' '}<span>By providing your phone number, you consent to receive text messages from S.Y.S.T.E.M. KC regarding your inquiry. Message and data rates may apply. Reply STOP to opt out, HELP for help.</span>
      </label>
      <label className="form-checkbox">
        <input type="checkbox" name="marketing_sms_consent" value="yes" />
        {' '}<span>I&apos;d also like to receive occasional marketing texts from S.Y.S.T.E.M. KC (optional). Message frequency may vary. Reply STOP to unsubscribe.</span>
      </label>
      <div className="form-row">
        <label htmlFor="msg">What&apos;s the one thing eating your time?</label>
        <textarea id="msg" name="message" placeholder="e.g. 'I&apos;m spending 8 hours a week on quote follow-ups'"></textarea>
      </div>
      {status !== 'success' && (
        <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : <>Send → we&apos;ll reply within 1 business day <span className="arrow">→</span></>}
        </button>
      )}
      {status === 'success' && (
        <div style={{padding: '16px 20px', background: '#EAF6EE', border: '1px solid #A0CCAA', borderRadius: '8px', color: '#1A5028', fontWeight: '500'}}>
          Thanks — got your message. We&apos;ll be in touch within one business day.
        </div>
      )}
      {status === 'error' && (
        <div style={{padding: '16px 20px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', color: '#991B1B', fontWeight: '500'}}>
          Sorry, something went wrong. Please email <a href="mailto:jason@systemkc.com" style={{textDecoration: 'underline'}}>jason@systemkc.com</a> or text <a href="tel:8169622111" style={{textDecoration: 'underline'}}>(816) 962-2111</a>.
        </div>
      )}
      <p className="form-foot">
        By submitting this form you agree to our <a href="/privacy-policy/">Privacy Policy</a> and <a href="/terms/">Terms &amp; Conditions</a>. Your information will not be sold or shared with third parties.
      </p>
    </form>
  );
}
