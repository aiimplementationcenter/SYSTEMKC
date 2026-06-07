import { createServerClient } from '../../../../lib/supabase-server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return Response.json({ valid: false }, { status: 400 });
  }

  const supabase = createServerClient();
  const { data } = await supabase
    .from('giveaway_entries')
    .select('name, referral_code')
    .eq('referral_code', code)
    .maybeSingle();

  if (!data) {
    return Response.json({ valid: false });
  }

  return Response.json({ valid: true, referrer_name: data.name.split(' ')[0] });
}
