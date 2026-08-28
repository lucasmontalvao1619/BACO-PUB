import type { MouseEvent, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

/**
 * Card com um facho de luz que segue o cursor — a luz baixa do salao
 * acompanhando quem passa pela mesa.
 */
export default function SpotlightCard({ children, className = '' }: Props) {
  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <div className={`spot ${className}`.trim()} onMouseMove={handleMove}>
      {children}
    </div>
  )
}
