import Link from 'next/link';

export const metadata = { title: 'Reset your password' };

export default function ForgotPasswordPage() {
  return (
    <section className="container-luxe py-20 max-w-md mx-auto">
      <p className="eyebrow mb-3">Quietly resetting</p>
      <h1 className="font-display text-4xl md:text-5xl balanced">
        Let’s find a way back in.
      </h1>
      <p className="mt-4 text-charcoal-muted pretty">
        Enter the email you signed up with and we’ll send you a soft link to reset your password.
      </p>
      <form className="mt-10 space-y-6">
        <label className="block">
          <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Email</span>
          <input type="email" required placeholder="you@somewhere.com" className="field" />
        </label>
        <button className="btn-primary w-full">Send reset link</button>
      </form>
      <p className="mt-8 text-sm text-charcoal-muted">
        Remembered it? <Link href="/sign-in" className="text-rose-gold underline">Back to sign in</Link>
      </p>
    </section>
  );
}
