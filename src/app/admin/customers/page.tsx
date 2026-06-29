export default function AdminPlaceholder({ params }: { params?: any }) {
  return (
    <section>
      <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">Atelier</p>
      <h1 className="font-display text-4xl mt-1">Coming soon</h1>
      <p className="mt-3 text-charcoal-muted">This admin area is part of the V2 roadmap — see <a className="text-rose-gold underline" href="/docs/ARCHITECTURE.md">docs/ARCHITECTURE.md</a>.</p>
    </section>
  );
}
