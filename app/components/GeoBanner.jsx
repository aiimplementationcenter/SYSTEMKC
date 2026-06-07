'use client';
import { useState, useEffect } from 'react';

export default function GeoBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('geo-banner-dismissed');
    if (!dismissed) setShow(true);
  }, []);

  function dismiss() {
    sessionStorage.setItem('geo-banner-dismissed', '1');
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="geo-banner" role="alert">
      <span>In the Kansas City area? We offer in-person, on-site engagements for local businesses. &nbsp;<a href="/kansas-city/">See KC services →</a></span>
      <button onClick={dismiss} aria-label="Dismiss" className="geo-dismiss">✕</button>
    </div>
  );
}
