export default function Heading({ cmd, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs tracking-wider text-accent">$ {cmd}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
    </div>
  )
}
