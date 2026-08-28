import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: Props) {
  const { ref, visivel } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${visivel ? 'is-visible' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
