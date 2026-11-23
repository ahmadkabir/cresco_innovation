import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the hash target after navigation, or to the top on a fresh page.
 * Page transitions mount the destination after a short exit animation, so the
 * target element is looked up repeatedly for a brief window before giving up.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return undefined
    }

    const id = decodeURIComponent(hash.replace('#', ''))
    let cancelled = false
    let attempts = 0
    let timer: ReturnType<typeof setTimeout> | undefined

    const scrollToTarget = () => {
      if (cancelled) return
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempts < 25) {
        attempts += 1
        timer = setTimeout(scrollToTarget, 60)
      } else {
        window.scrollTo({ top: 0 })
      }
    }

    scrollToTarget()

    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [pathname, hash])

  return null
}
