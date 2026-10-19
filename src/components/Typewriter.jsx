import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 55 }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (n >= text.length) return
    const t = setTimeout(() => setN(n + 1), speed)
    return () => clearTimeout(t)
  }, [n, text, speed])
  return (
    <span>
      {text.slice(0, n)}
      <span className="animate-blink text-accent">▌</span>
    </span>
  )
}
