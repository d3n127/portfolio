import { skills } from '../data'
import Heading from '../components/Heading'
import Chip from '../components/Chip'

export default function Skills() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Heading cmd="ls ./skills" title="Skills" />
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((g, i) => (
          <div
            key={g.group}
            className="rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-accent/30"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{g.group}</h4>
              <span className="font-mono text-xs text-dim">node-0{i + 1}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <Chip key={it} label={it} alt={i % 2 === 1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
