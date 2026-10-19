import { projects } from '../data'
import Heading from '../components/Heading'

export default function Projects() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Heading cmd="ls ./projects" title="Projects" />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="flex flex-col rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-wider text-accent">
                {p.type.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-dim">#0{i + 1}</span>
            </div>
            <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-dim">{p.description}</p>
            <p className="mt-4 break-words font-mono text-xs text-dim">{p.tech.join(' • ')}</p>
            <ul className="mt-4 grid grid-cols-1 gap-1.5 break-words font-mono text-xs text-dim sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-1.5">
                  <span className="text-accent">✓</span> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {p.demo && (
                <a
                  className="rounded-lg bg-accent px-4 py-2 font-mono text-xs font-bold text-bg transition-colors hover:bg-accent/85"
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW PROJECT
                </a>
              )}
              <a
                className={
                  'rounded-lg px-4 py-2 font-mono text-xs font-bold transition-colors ' +
                  (p.demo
                    ? 'border border-line text-ink hover:border-accent/50 hover:text-accent'
                    : 'bg-accent text-bg hover:bg-accent/85')
                }
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
