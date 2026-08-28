import { useEffect, useRef } from 'react'

/**
 * Revela o elemento quando ele entra na viewport.
 * Anima uma unica vez — a pagina deve ficar calma depois de lida.
 */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.style.transitionDelay = `${delay}ms`
        el.classList.add('is-visible')
        observer.disconnect()
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
