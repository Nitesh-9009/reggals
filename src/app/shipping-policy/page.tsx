export const metadata = { title: 'Shipping policy' };

export default function ShippingPolicyPage() {
  return (
    <section className="container-luxe py-20 max-w-3xl mx-auto">
      <p className="eyebrow mb-3">Shipping</p>
      <h1 className="font-display text-5xl balanced">Shipping policy</h1>
      <div className="mt-10 space-y-8 text-charcoal-muted">
        <ul className="space-y-3">
          <li><strong className="text-charcoal">Free shipping:</strong> on every order over ₹1,499.</li>
          <li><strong className="text-charcoal">Standard:</strong> 2–4 business days · ₹99 below ₹1,499.</li>
          <li><strong className="text-charcoal">Express:</strong> Next-day across Mumbai, Delhi, Bangalore, Pune, Hyderabad · ₹199.</li>
          <li><strong className="text-charcoal">Scheduled:</strong> Pick a date — we hold and dispatch so it arrives on the day.</li>
          <li><strong className="text-charcoal">International:</strong> coming soon.</li>
        </ul>
        <p>Every Reggals order ships in our signature, plastic-free packaging. Tracking is shared via email and WhatsApp.</p>
      </div>
    </section>
  );
}
