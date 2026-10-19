import { Link } from 'react-router-dom'
import { profile, projects, skills } from '../data'
import Heading from '../components/Heading'
import Typewriter from '../components/Typewriter'

/* Photo: put a file named me.png / me.jpg / me.webp in src/assets. No file = initials show instead. */
const photos = import.meta.glob('../assets/me.*', { eager: true, import: 'default' })
const photo = Object.values(photos)[0]

const explore = [
  { to: '/about', cmd: 'cat about.md', title: 'About Me', desc: 'My background, education, and goals.' },
  { to: '/skills', cmd: 'ls ./skills', title: 'Skills', desc: 'Languages, frameworks, and tools I work with.' },
  { to: '/projects', cmd: 'ls ./projects', title: 'Projects', desc: 'Systems and apps I have designed and built.' },
  { to: '/experience', cmd: 'git log', title: 'Experience', desc: 'Projects, activities, and certifications.' },
  { to: '/beyond', cmd: 'cd ~/life', title: 'Beyond Code', desc: 'Hobbies, interests, and life off the keyboard.', feature: true },
  { to: '/contact', cmd: 'ping me', title: 'Contact', desc: "Let's build something together." },
]

export default function Home() {
  const initials = profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <>
      {/* HERO */}
      <section className="grid min-h-[calc(100svh_-_60px_-_env(safe-area-inset-top))] content-center items-center gap-8 py-14 sm:gap-12 sm:py-20 lg:min-h-screen lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" />
            <span className="font-mono text-xs text-dim">{profile.status}</span>
          </div>

          <p className="mt-8 font-mono text-sm tracking-wider text-dim">HELLO, WORLD. I'M</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight break-words hyphens-auto sm:text-5xl md:text-6xl">{profile.name}</h1>
          <p className="mt-3 font-mono text-lg text-accent sm:text-xl">
            <Typewriter text={profile.role} />
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-dim">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-bold tracking-wide text-bg transition-all hover:bg-accent/85 hover:shadow-[0_0_20px_rgba(61,255,162,0.25)]"
            >
              VIEW PROJECTS →
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-line px-5 py-2.5 font-mono text-sm tracking-wide text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              CONTACT
            </Link>
          </div>

          <div className="mt-10 w-full max-w-sm rounded-xl border border-line bg-panel p-4 sm:p-5">
            <p className="font-mono text-xs text-dim">~/status</p>
            <pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-ink">
{`> projects : ${projects.length}
> stack    : ${skills[1].items.slice(0, 3).join(', ')}
> based    : ${profile.location}`}
            </pre>
          </div>
        </div>

        {/* Avatar */}
        <div
          className="animate-fade-up justify-self-center sm:justify-self-start lg:justify-self-end"
          style={{ animationDelay: '150ms' }}
        >
          {photo ? (
            <img
              src={photo}
              alt={profile.name}
              width={1536}
              height={2048}
              decoding="async"
              className="h-44 w-44 rounded-2xl border border-line object-cover shadow-[0_0_40px_rgba(61,255,162,0.12)] sm:h-auto sm:w-56 lg:w-100"
            />
          ) : (
            <div className="inline-block rounded-full bg-gradient-to-br from-accent/70 to-accent-2/40 p-1 shadow-[0_0_50px_rgba(61,255,162,0.15)]">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-bg bg-panel sm:h-44 sm:w-44">
                <span className="font-mono text-4xl font-bold text-accent sm:text-5xl">
                  {initials}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* EXPLORE */}
      <section className="pb-28">
        <Heading cmd="cd ~" title="Explore" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {explore.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                'group flex flex-col rounded-xl border p-6 transition-all hover:-translate-y-1 ' +
                (item.feature
                  ? 'border-accent/40 bg-accent/5 hover:border-accent/70 hover:shadow-[0_0_30px_rgba(61,255,162,0.1)]'
                  : 'border-line bg-panel hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]')
              }
            >
              <span className="font-mono text-xs text-accent">$ {item.cmd}</span>
              <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-dim">{item.desc}</p>
              <span className="mt-4 font-mono text-xs text-dim transition-colors group-hover:text-accent">
                read more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
