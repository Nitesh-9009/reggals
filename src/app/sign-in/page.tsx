import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Sign in' };

export default function SignInPage() {
  return (
    <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=85"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-ivory">
          <p className="eyebrow text-rose-dust">Reggals</p>
          <p className="mt-3 font-display text-4xl pretty">
            Gifts that feel quietly extraordinary.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8 md:p-16 bg-offwhite">
        <div className="w-full max-w-md">
          <p className="eyebrow mb-3">Welcome back</p>
          <h1 className="font-display text-4xl md:text-5xl balanced">Step into the boutique.</h1>
          <form className="mt-10 space-y-6">
            <label className="block">
              <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Email</span>
              <input className="field" placeholder="you@somewhere.com" />
            </label>
            <label className="block">
              <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Password</span>
              <input className="field" type="password" placeholder="••••••••" />
            </label>
            <button className="btn-primary w-full">Sign in</button>
            <button type="button" className="btn-ghost w-full">Continue with Google</button>
          </form>
          <p className="mt-8 text-sm text-charcoal-muted">
            New to Reggals? <Link href="/sign-up" className="text-rose-gold underline">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
