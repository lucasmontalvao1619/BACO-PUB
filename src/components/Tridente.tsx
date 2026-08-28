type Props = {
  size?: number
  className?: string
}

/**
 * Marca do Baco: tridente em traco, sempre em preto e branco.
 * Herda a cor do texto (currentColor) — nunca usar emoji aqui,
 * emoji entra colorido e quebra a identidade da casa.
 */
export default function Tridente({ size = 22, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={(size * 64) / 48}
      viewBox="0 0 48 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 8v14c0 10 6 14 14 14" />
      <path d="M38 8v14c0 10-6 14-14 14" />
      <path d="M24 4v56" />
      <path d="M16 48h16" />
    </svg>
  )
}
