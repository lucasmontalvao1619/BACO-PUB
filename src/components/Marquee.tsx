import { manifesto } from '../data/baco'

export default function Marquee() {
  // duas copias lado a lado: a animacao desliza -50% e reinicia sem costura
  const fita = [...manifesto, ...manifesto]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {fita.map((palavra, i) => (
          <i key={`${palavra}-${i}`}>{palavra}</i>
        ))}
      </div>
    </div>
  )
}
