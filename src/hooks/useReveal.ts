import { useEffect, useRef, useState } from 'react'

/**
 * Revela o elemento quando ele entra na viewport, uma vez so.
 *
 * O estado fica no React de proposito: se a classe fosse adicionada na
 * mao (classList.add), qualquer re-render do componente reescreveria o
 * atributo class e apagaria a revelacao — foi o que acontecia nos cards
 * do ambiente, que re-renderizam quando a foto falha ao carregar.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisivel(true)
        observer.disconnect()
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visivel }
}
