export default function Loading() {
  return (
    <section className="container-luxe py-20">
      <div className="h-6 w-32 skeleton mb-6" />
      <div className="h-12 w-2/3 max-w-xl skeleton mb-12" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <div className="aspect-[4/5] skeleton rounded-xl2" />
            <div className="h-3 w-20 skeleton mt-5" />
            <div className="h-5 w-3/4 skeleton mt-3" />
            <div className="h-4 w-16 skeleton mt-3" />
          </div>
        ))}
      </div>
    </section>
  );
}
