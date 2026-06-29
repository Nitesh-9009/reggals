export const metadata = { title: 'Terms of service' };

export default function TermsPage() {
  return (
    <section className="container-luxe py-20 max-w-3xl mx-auto">
      <p className="eyebrow mb-3">Terms</p>
      <h1 className="font-display text-5xl balanced">Terms of service</h1>
      <p className="mt-3 text-charcoal-soft">Last updated: 1 January 2026</p>
      <div className="mt-10 space-y-8 text-charcoal-muted">
        <p>By using Reggals, you agree to these gentle terms. They cover orders, payments, returns, and your account.</p>
        <h2 className="font-display text-2xl text-charcoal">Orders & payments</h2>
        <p>Orders are confirmed once payment clears. Prices include taxes but exclude shipping unless stated. We may cancel orders with suspected fraud, in which case we refund in full.</p>
        <h2 className="font-display text-2xl text-charcoal">Intellectual property</h2>
        <p>All photography, writing, and design on Reggals belongs to Reggals or its partners. Please don’t reproduce without permission.</p>
        <h2 className="font-display text-2xl text-charcoal">Liability</h2>
        <p>We do our best to ensure every gift arrives beautifully. In rare cases of damage in transit, we replace or refund within 14 days.</p>
      </div>
    </section>
  );
}
