import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { NAV, profile } from '../data'
import Chip from './Chip'

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        'group flex min-h-11 items-center gap-2 rounded-lg px-3.5 py-3 font-mono text-sm transition-colors lg:min-h-0 lg:py-2 ' +
        (isActive ? 'bg-accent/10 text-accent' : 'text-dim hover:bg-panel-2 hover:text-ink')
      }
    >
      {({ isActive }) => (
        <>
          <span className="w-3 transition-transform group-hover:translate-x-0.5">
            {isActive ? '→' : ''}
          </span>
          {label}
        </>
      )}
    </NavLink>
  )
}

function SocialChips() {
  const link =
    'rounded-full border border-line bg-panel-2 px-3 py-1.5 font-mono text-xs text-dim transition-colors hover:border-accent/30 hover:text-accent'
  return (
    <>
      <a className={link} href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      <a className={link} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
    </>
  )
}

export default function Layout() {
  const [menu, setMenu] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes (e.g. browser back)
  useEffect(() => {
    setMenu(false)
  }, [pathname])

  return (
    <div className="min-h-svh bg-bg pb-[env(safe-area-inset-bottom)] text-ink antialiased">
      {/* ───── SIDEBAR (desktop) ───── */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] flex-col border-r border-line bg-panel/60 px-5 py-7 backdrop-blur lg:flex">
        <Link to="/" className="font-mono text-sm font-bold text-ink">
          <span className="text-accent">&gt;_</span> {profile.handle}.dev
        </Link>

        <nav className="mt-10 flex flex-col gap-1">
          {NAV.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        <div className="mt-auto space-y-5">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-dim">FULL-STACK DEVELOPER</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Chip label="React" alt />
              <Chip label="Flask" />
              <Chip label="MySQL" alt />
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-dim">CONNECT</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <SocialChips />
            </div>
          </div>
          <a
            href={'mailto:' + profile.email}
            className="block rounded-lg bg-accent px-4 py-2.5 text-center font-mono text-xs font-bold tracking-wide text-bg transition-all hover:bg-accent/85 hover:shadow-[0_0_20px_rgba(61,255,162,0.25)]"
          >
            HIRE ME ↗
          </a>
        </div>
      </aside>

      {/* ───── HEADER (mobile) ───── */}
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-4 py-2 sm:px-8">
          <Link to="/" className="font-mono text-sm font-bold" onClick={() => setMenu(false)}>
            <span className="text-accent">&gt;_</span> {profile.handle}.dev
          </Link>
          <button
            onClick={() => setMenu(!menu)}
            aria-label="menu"
            aria-expanded={menu}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line px-3 font-mono text-base text-dim transition-colors hover:border-accent/40 hover:text-accent"
          >
            {menu ? '✕' : '☰'}
          </button>
        </div>
        {menu && (
          <nav className="flex max-h-[65dvh] flex-col gap-1 overflow-y-auto overscroll-contain border-t border-line px-4 pb-5 pt-4 sm:px-8">
            {NAV.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={() => setMenu(false)}
              />
            ))}
            <div className="mt-3 flex flex-wrap gap-1.5">
              <SocialChips />
            </div>
          </nav>
        )}
      </header>

      {/* ───── CONTENT ───── */}
      <main className="lg:pl-[260px]">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
