import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PAGE_TITLES, profile } from '../data'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const page = PAGE_TITLES[pathname]
    document.title = page ? `${page} — ${profile.name}` : `${profile.name} — Portfolio`
  }, [pathname])

  return null
}
