import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  let email = '';
  try {
    const body = await req.json();
    email = String(body?.email ?? '').trim();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 });
  }
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
  }
  // Stub — replace with Resend / Klaviyo audience append in production
  return NextResponse.json({ ok: true, message: 'Welcome to the boutique.' });
}
