import { createServerClient } from '../../../../lib/supabase-server';

function generateCode(length = 7) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function POST(request) {
  const {
    name,
    business,
    industry,
    employees,
    email,
    phone,
    reason,
    biggest_challenge,
    what_would_change,
    referred_by,
  } = await request.json();

  if (!name || !business || !email) {
    return Response.json({ error: 'name, business, and email are required' }, { status: 400 });
  }

  if (!reason || !biggest_challenge || !what_would_change) {
    return Response.json({ error: 'All need-based questions are required' }, { status: 400 });
  }

  const supabase = createServerClient();

  // Check for duplicate email — return their existing code
  const { data: existing } = await supabase
    .from('giveaway_entries')
    .select('id, referral_code')
    .eq('email', email)
    .maybeSingle();

  if (existing) {
    return Response.json({ referral_code: existing.referral_code, duplicate: true });
  }

  // Generate a unique referral code
  let referral_code;
  let attempts = 0;
  do {
    referral_code = generateCode();
    const { data: collision } = await supabase
      .from('giveaway_entries')
      .select('id')
      .eq('referral_code', referral_code)
      .maybeSingle();
    if (!collision) break;
    attempts++;
  } while (attempts < 10);

  // If referred_by is valid, increment the referrer's count
  if (referred_by) {
    await supabase.rpc('increment_referral_count', { code: referred_by });
  }

  const { data, error } = await supabase
    .from('giveaway_entries')
    .insert({
      name,
      business,
      industry: industry || null,
      employees: employees || null,
      email,
      phone: phone || null,
      reason,
      biggest_challenge,
      what_would_change,
      referral_code,
      referred_by: referred_by || null,
    })
    .select('referral_code')
    .single();

  if (error) {
    console.error('Giveaway insert error:', error);
    return Response.json({ error: 'Failed to save application' }, { status: 500 });
  }

  return Response.json({ referral_code: data.referral_code });
}
