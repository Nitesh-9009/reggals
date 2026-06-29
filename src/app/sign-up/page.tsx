import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Create an account' };

export default function SignUpPage() {
  return (
    <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center p-8 md:p-16 bg-offwhite order-2 lg:order-1">
        <div className="w-full max-w-md">
          <p className="eyebrow mb-3">Welcome to Reggals</p>
          <h1 className="font-display text-4xl md:text-5xl balanced">Create your boutique account.</h1>
          <p className="mt-3 text-charcoal-muted pretty">
            Wishlists, order tracking, and a soft rewards programme — all in one quiet place.
          </p>
          <form className="mt-10 space-y-6">
            <label className="block">
              <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Full name</span>
              <input className="field" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Email</span>
              <input className="field" placeholder="you@somewhere.com" type="email" />
            </label>
            <label className="block">
              <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Password</span>
              <input className="field" type="password" placeholder="At least 8 characters" />
            </label>
            <button className="btn-primary w-full">Create account</button>
          </form>
          <p className="mt-8 text-sm text-charcoal-muted">
            Already have an account? <Link href="/sign-in" className="text-rose-gold underline">Sign in</Link>
          </p>
        </div>
      </div>
      <div className="relative hidden lg:block order-1 lg:order-2">
        <Image
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=85"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40" />
      </div>
    </section>
  );
}
