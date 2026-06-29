import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  let body: any = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 });
  }

  const items = Array.isArray(body?.items) ? body.items : [];
  if (items.length === 0) {
    return NextResponse.json({ ok: false, error: 'Cart is empty' }, { status: 400 });
  }

  const orderId = 'RG-' + Math.random().toString(36).slice(2, 8).toUpperCase();
  const paymentRef = 'pay_' + Math.random().toString(36).slice(2, 12);

  // Stub — in production: create Razorpay/Stripe payment intent
  return NextResponse.json({
    ok: true,
    orderId,
    paymentRef,
    amount: body?.amount ?? 0,
    currency: body?.currency ?? 'INR'
  });
}
