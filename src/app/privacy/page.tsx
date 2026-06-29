export const metadata = { title: 'Privacy policy' };

export default function PrivacyPage() {
  return (
    <section className="container-luxe py-20 max-w-3xl mx-auto prose-luxe">
      <p className="eyebrow mb-3">Privacy</p>
      <h1 className="font-display text-5xl balanced">Privacy policy</h1>
      <p className="mt-3 text-charcoal-soft">Last updated: 1 January 2026</p>
      <div className="mt-10 space-y-8 text-charcoal-muted">
        <p>At Reggals, we hold customer data with the same quiet care as we hold a gift. This policy explains what we collect, why, and how it is protected.</p>

        <Section title="What we collect">
          <ul className="list-disc pl-5 space-y-1">
            <li>Account details (name, email, phone) when you sign up or check out.</li>
            <li>Delivery addresses and order history.</li>
            <li>Payment method tokens (never raw card numbers — stored by our PCI-DSS gateway).</li>
            <li>Anonymous usage analytics to improve the experience.</li>
          </ul>
        </Section>

        <Section title="How we use it">
          <p>To fulfil orders, communicate updates, personalise your experience, and improve the boutique. We never sell your data.</p>
        </Section>

        <Section title="Your rights">
          <p>You can request a copy of your data, export your wishlists, or delete your account at any time by writing to <a className="text-rose-gold underline" href="mailto:privacy@reggals.in">privacy@reggals.in</a>.</p>
        </Section>

        <Section title="Security">
          <p>All data is encrypted in transit (TLS 1.3) and at rest. Payments use 256-bit encryption via Razorpay and Stripe.</p>
        </Section>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-charcoal mb-3">{title}</h2>
      <div className="pretty">{children}</div>
    </div>
  );
}
