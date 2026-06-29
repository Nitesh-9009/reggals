export function Newsletter() {
  return (
    <section className="py-24 border-t border-line bg-blush/40">
      <div className="container-luxe">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4">The Reggals Letter</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal balanced">
            Soft notes on quietly beautiful things.
          </h2>
          <p className="mt-5 text-charcoal-muted text-lg pretty">
            Monthly. Considered. Never noisy. Get first access to new edits,
            seasonal stories and gentle gifting reminders.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="you@somewhere.com"
              className="flex-1 bg-ivory border border-line rounded-full px-6 py-4 text-charcoal placeholder:text-charcoal-soft outline-none focus:border-rose-gold"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
          <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-5">
            We respect your inbox. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  );
}
