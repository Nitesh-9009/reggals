export default function PaymentsPage() {
  return (
    <>
      <h2 className="font-display text-2xl mb-6">Saved payments</h2>
      <div className="card p-6 max-w-md">
        <p className="text-eyebrow uppercase tracking-luxe text-rose-gold">VISA · Debit</p>
        <p className="font-display text-2xl mt-2 tabular-nums">•••• •••• •••• 4392</p>
        <p className="text-charcoal-muted mt-1">Expires 09/29 · Aanya M.</p>
      </div>
      <p className="mt-6 text-eyebrow uppercase tracking-luxe text-charcoal-soft">Tokenised securely via Razorpay · Never stored on Reggals servers.</p>
    </>
  );
}
