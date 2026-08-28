import { depoimentos } from '../data/baco'
import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'

export default function Depoimentos() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Dizem por aí</p>
          <h2 className="section-title">Difícil de explicar, fácil de voltar</h2>
        </Reveal>

        <div className="depoimentos">
          {depoimentos.map((d, i) => (
            <Reveal key={d.autor} delay={i * 90}>
              <SpotlightCard className="depoimento">
                <p>“{d.texto}”</p>
                <footer>{d.autor}</footer>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
