import { manifesto } from '../data/baco'

/**
 * A fita que nao para.
 *
 * Dois grupos identicos lado a lado e uma animacao que desliza exatamente
 * -50% — a largura de um grupo. Duas coisas sustentam a costura:
 *
 * - o vao entre as palavras vem do `padding-right` de cada grupo, nao de um
 *   `gap` no track. Com `gap` falta meio vao na emenda e a fita da um salto
 *   a cada volta;
 * - cada grupo repete o manifesto duas vezes, pra que uma volta inteira
 *   ainda cubra telas largas sem abrir um buraco no meio da fita.
 */
export default function Marquee() {
  const grupo = [...manifesto, ...manifesto]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copia) => (
          <div className="marquee-grupo" key={copia}>
            {grupo.map((palavra, i) => (
              <i key={`${palavra}-${i}`}>{palavra}</i>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
