import { resume } from '../data'
import Heading from '../components/Heading'

export default function Resume() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Heading cmd="cat resume.txt" title="Resume" />
      <div className="rounded-xl border border-line bg-panel p-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs tracking-widest text-dim">EDUCATION</h3>
            <p className="mt-3 leading-relaxed text-dim">{resume.education}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-widest text-dim">ACHIEVEMENTS</h3>
            <ul className="mt-3 space-y-2">
              {resume.achievements.map((x) => (
                <li key={x} className="flex items-start gap-2 text-dim">
                  <span className="mt-0.5 text-accent">★</span> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {resume.file ? (
          <a
            className="mt-8 inline-block rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-bold tracking-wide text-bg transition-all hover:bg-accent/85 hover:shadow-[0_0_20px_rgba(61,255,162,0.25)]"
            href={resume.file}
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD PDF ↓
          </a>
        ) : (
          <p className="mt-8 font-mono text-xs text-dim">
            Add your resume PDF link in <span className="text-accent">resume.file</span> to enable
            the download button.
          </p>
        )}
      </div>
    </section>
  )
}
