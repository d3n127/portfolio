import { profile } from '../data'
import Heading from '../components/Heading'

export default function Contact() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Heading cmd="ping me" title="Contact" />
      <p className="max-w-xl text-lg leading-relaxed text-dim">
        Have a project, internship or idea? Send a packet my way.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          className="group rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          href={'mailto:' + profile.email}
        >
          <span className="font-mono text-xs tracking-wider text-accent">EMAIL</span>
          <h4 className="mt-2 break-all font-semibold group-hover:text-accent">{profile.email.replace('mailto:', '')}</h4>
        </a>
        <a
          className="group rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-mono text-xs tracking-wider text-accent">GITHUB</span>
          <h4 className="mt-2 break-all font-semibold group-hover:text-accent">
            {profile.github.replace(' https://', '')}
          </h4>
        </a>
        <a
          className="group rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-mono text-xs tracking-wider text-accent">LINKEDIN</span>
          <h4 className="mt-2 break-all font-semibold group-hover:text-accent">
            {profile.linkedin.replace('https://', '')}
          </h4>
        </a>
      </div>
      <p className="mt-24 text-center font-mono text-xs tracking-widest text-dim">
        — END OF TRANSMISSION —
      </p>
    </section>
  )
}
