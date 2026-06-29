export const metadata = { title: 'Refer & earn' };

export default function ReferPage() {
  return (
    <section className="container-luxe py-20 max-w-2xl mx-auto text-center">
      <p className="eyebrow mb-3">Refer a friend</p>
      <h1 className="font-display text-5xl md:text-6xl balanced">Give ₹500. Get ₹500.</h1>
      <p className="mt-5 text-charcoal-muted text-lg pretty">
        Share Reggals with someone who appreciates quietly beautiful things. They get ₹500 off
        their first order, and you earn ₹500 in Reggals coins.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto">
        <input
          readOnly
          value="reggals.in/r/aanya-mehta"
          className="flex-1 bg-ivory border border-line rounded-full px-6 py-3 text-charcoal text-center"
        />
        <button className="btn-primary">Copy link</button>
      </div>
    </section>
  );
}
