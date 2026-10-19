import { beyond } from '../data'
import Heading from '../components/Heading'

export default function Beyond() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Heading cmd="cd ~/life" title="Beyond Code" />
      <p className="max-w-2xl text-lg leading-relaxed text-dim">{beyond.intro}</p>

      {/* HOBBIES & INTERESTS */}
      <h3 className="mt-12 font-mono text-xs tracking-widest text-dim">
        HOBBIES &amp; INTERESTS
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {beyond.interests.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
          >
            <span className="text-2xl">{it.icon}</span>
            <h4 className="mt-3 font-semibold">{it.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-dim">{it.note}</p>
          </div>
        ))}
      </div>

      {/* CURRENTLY */}
      <h3 className="mt-14 font-mono text-xs tracking-widest text-dim">CURRENTLY INTO</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {beyond.currently.map((c) => (
          <div key={c.kind} className="rounded-xl border border-line bg-panel p-6">
            <h4 className="font-mono text-xs tracking-wider text-accent">{c.kind.toUpperCase()}</h4>
            <ul className="mt-3 space-y-2">
              {c.items.map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm text-dim">
                  <span className="mt-0.5 text-accent">›</span> {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* COMMUNITY */}
      <h3 className="mt-14 font-mono text-xs tracking-widest text-dim">
        COMMUNITY &amp; ACTIVITIES
      </h3>
      <ul className="mt-4 space-y-3">
        {beyond.community.map((c) => (
          <li key={c} className="flex items-start gap-3 text-dim">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {c}
          </li>
        ))}
      </ul>

      {/* VALUES */}
      <h3 className="mt-14 font-mono text-xs tracking-widest text-dim">WHAT I VALUE</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {beyond.values.map((v) => (
          <div
            key={v.title}
            className="rounded-xl border border-line bg-panel p-6 transition-colors hover:border-accent/30"
          >
            <h4 className="font-semibold text-accent">{v.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-dim">{v.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
