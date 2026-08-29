import { noites, redes } from '../data/baco'
import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'

export default function Noites() {
  return (
    <section className="section" id="noites">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Semana Mística</p>
          <h2 className="section-title">Quatro noites, quatro experiências</h2>
          <p className="section-lede">
            De quarta a sábado o Baco entra no clima de magia, Lua, astrologia e mistério — e tem
            karaokê todos os dias. Casa aberta às 19h, karaokê até as 2h, o pub fecha às 3h.
          </p>
        </Reveal>

        <div className="noites-grid">
          {noites.map((noite, i) => (
            <Reveal key={noite.dia} delay={i * 80}>
              <SpotlightCard className="noite">
                <p className="noite-dia">
                  {noite.dia}
                  {noite.data && <span>• {noite.data}</span>}
                </p>
                <h3>{noite.titulo}</h3>
                <p>{noite.descricao}</p>
                <span className="chip">{noite.tag}</span>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="menu-aviso">
            Programação da Semana Mística publicada pela casa no{' '}
            <a href={redes[0].url} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            . A cada semana o Baco anuncia uma nova — acompanhe por lá ou pelo grupo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
