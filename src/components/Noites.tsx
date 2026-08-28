import { noites } from '../data/baco'
import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'

export default function Noites() {
  return (
    <section className="section" id="noites">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Programação</p>
          <h2 className="section-title">Quatro noites, quatro humores</h2>
          <p className="section-lede">
            A casa abre quarta e só fecha no sábado de madrugada. O karaokê nunca sai de cena — o
            que muda é a trilha em volta dele.
          </p>
        </Reveal>

        <div className="noites-grid">
          {noites.map((noite, i) => (
            <Reveal key={noite.dia} delay={i * 90}>
              <SpotlightCard className="noite">
                <p className="noite-dia">{noite.dia}</p>
                <h3>{noite.titulo}</h3>
                <p>{noite.descricao}</p>
                <span className="chip">{noite.tag}</span>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
