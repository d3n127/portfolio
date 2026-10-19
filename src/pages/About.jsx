import { Link } from 'react-router-dom'
import { about } from '../data'
import Heading from '../components/Heading'

export default function About() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Heading cmd="cat about.md" title="About Me" />
      <p className="max-w-2xl text-lg leading-relaxed text-dim">{about.intro}</p>

      <h3 className="mt-12 font-mono text-xs tracking-widest text-dim">EDUCATION</h3>
      {about.education.map((e) => (
        <div
          key={e.school}
          className="mt-4 rounded-xl border border-line bg-panel p-6 transition-colors hover:border-accent/30"
        >
          <h4 className="text-lg font-semibold">{e.degree}</h4>
          <p className="mt-1 text-dim">{e.school}</p>
          <p className="mt-2 font-mono text-xs text-accent">{e.years}</p>
        </div>
      ))}

      <h3 className="mt-12 font-mono text-xs tracking-widest text-dim">GOALS</h3>
      <ul className="mt-4 space-y-3">
        {about.goals.map((g, i) => (
          <li key={g} className="flex items-start gap-4">
            <span className="mt-0.5 font-mono text-sm text-accent">0{i + 1}</span>
            <span className="text-dim">{g}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/beyond"
        className="group mt-14 flex items-center justify-between rounded-xl border border-accent/30 bg-accent/5 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60"
      >
        <div>
          <span className="font-mono text-xs text-accent">$ cd ~/life</span>
          <p className="mt-2 font-semibold">Curious what I do outside of code?</p>
          <p className="mt-1 text-sm text-dim">
            Hobbies, interests, and everything that keeps me human.
          </p>
        </div>
        <span className="font-mono text-sm text-dim transition-transform group-hover:translate-x-1 group-hover:text-accent">
          →
        </span>
      </Link>
    </section>
  )
}
