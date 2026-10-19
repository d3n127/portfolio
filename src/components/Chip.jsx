export default function Chip({ label, alt }) {
  return (
    <span
      className={
        'inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs transition-colors ' +
        (alt ? 'border-accent/30 bg-accent/5 text-accent' : 'border-line bg-panel-2 text-dim')
      }
    >
      {label}
    </span>
  )
}
