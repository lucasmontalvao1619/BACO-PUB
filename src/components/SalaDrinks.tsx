import { salaDrinks } from '../data/baco'
import Reveal from './Reveal'

/**
 * O lado alternativo da casa. Unica secao colorida do site: o fundo
 * continua preto, a cor vem das luzes — como na sala de drinks de verdade.
 */
export default function SalaDrinks() {
  return (
    <section className="section neon-section" id="drinks">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Lá no fundo</p>
          <h2 className="section-title">A sala de drinks acende</h2>
          <p className="section-lede">
            Atravesse o salão e o preto e branco da fachada dá lugar ao neon. Som mais denso, luz
            colorida, DJ nas sextas e a carta autoral do bar. É o Baco alternativo.
          </p>
        </Reveal>

        <div className="neon-grid">
          {salaDrinks.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 80}>
              <article
                className="neon-card"
                style={{ ['--c1' as string]: item.cor, ['--c2' as string]: item.cor2 }}
              >
                <span className="neon-dot" aria-hidden="true" />
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
