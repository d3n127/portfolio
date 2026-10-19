import { Link } from 'react-router-dom'
import Heading from '../components/Heading'

export default function NotFound() {
  return (
    <section className="flex min-h-[60svh] flex-col justify-center py-14 sm:py-20 lg:py-24">
      <Heading cmd="grep -r ./page" title="404 — Not Found" />
      <p className="max-w-xl text-lg leading-relaxed text-dim">
        That route doesn&apos;t exist. Maybe the link is broken, or the page moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block w-fit rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-bold tracking-wide text-bg transition-all hover:bg-accent/85 hover:shadow-[0_0_20px_rgba(61,255,162,0.25)]"
      >
        ← BACK HOME
      </Link>
    </section>
  )
}
