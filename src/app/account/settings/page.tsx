export default function SettingsPage() {
  return (
    <>
      <h2 className="font-display text-2xl mb-6">Account settings</h2>
      <div className="space-y-6 max-w-xl">
        <label className="block">
          <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Display name</span>
          <input className="field" defaultValue="Aanya Mehta" />
        </label>
        <label className="block">
          <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Email</span>
          <input className="field" defaultValue="aanya@reggals.in" />
        </label>
        <label className="block">
          <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">Phone</span>
          <input className="field" defaultValue="+91 98xx xxx 421" />
        </label>
        <fieldset className="border-t border-line pt-6">
          <legend className="eyebrow mb-3">Preferences</legend>
          <label className="flex items-center gap-3 py-2">
            <input type="checkbox" defaultChecked className="accent-rose-gold" /> Email me about new edits and seasonal stories
          </label>
          <label className="flex items-center gap-3 py-2">
            <input type="checkbox" defaultChecked className="accent-rose-gold" /> WhatsApp order updates
          </label>
          <label className="flex items-center gap-3 py-2">
            <input type="checkbox" className="accent-rose-gold" /> Reduced motion
          </label>
        </fieldset>
        <button className="btn-primary">Save changes</button>
      </div>
    </>
  );
}
