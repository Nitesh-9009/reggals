export const metadata = { title: 'Contact us' };

export default function ContactPage() {
  return (
    <section className="container-luxe py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="eyebrow mb-3">Say hello</p>
          <h1 className="font-display text-5xl md:text-6xl balanced">Tell us, quietly.</h1>
          <p className="mt-5 text-charcoal-muted text-lg pretty">
            Press, partnerships, wholesale, corporate gifting or just a kind note —
            we read everything, and we reply.
          </p>
          <div className="mt-10 space-y-5 text-charcoal">
            <div>
              <p className="eyebrow mb-1">Care</p>
              <p>care@reggals.in</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Press</p>
              <p>press@reggals.in</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Studio</p>
              <p>3rd Floor, The Atelier, Linking Road, Bandra West, Mumbai 400050</p>
            </div>
          </div>
        </div>
        <form className="card p-8 space-y-5">
          <label className="block">
            <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Name</span>
            <input className="field" placeholder="Your name" />
          </label>
          <label className="block">
            <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Email</span>
            <input className="field" type="email" placeholder="you@somewhere.com" />
          </label>
          <label className="block">
            <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">How can we help?</span>
            <textarea rows={5} className="w-full mt-2 bg-ivory/60 border border-line rounded-md py-3 px-4 outline-none focus:border-rose-gold resize-none" />
          </label>
          <button className="btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}
