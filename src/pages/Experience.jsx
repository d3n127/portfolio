import { experience } from '../data'
import Heading from '../components/Heading'

export default function Experience() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Heading cmd="git log --oneline" title="Experience" />
      <div className="space-y-12">
        {experience.map((g) => (
          <div key={g.kind}>
            <h3 className="font-mono text-xs tracking-widest text-dim">
              {g.kind.toUpperCase()}
            </h3>
            <ul className="relative mt-5 space-y-6 border-l border-line pl-8">
              {g.items.map((it) => (
                <li key={it} className="relative">
                  <span className="absolute -left-[36.5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />
                  <span className="text-dim">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
