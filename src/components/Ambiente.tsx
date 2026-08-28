import { espacos, redes } from '../data/baco'
import Reveal from './Reveal'

export default function Ambiente() {
  return (
    <section className="section" id="ambiente">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">O ambiente</p>
          <h2 className="section-title">Uma casa exótica, do portão ao último espeto</h2>
          <p className="section-lede">
            Quem chega pela primeira vez costuma dizer a mesma coisa: parece um pub americano que
            resolveu virar tropical. Madeira, folhagem, neon e luz baixa — cada canto é uma foto
            pronta, e nenhuma delas explica direito como é estar lá dentro.
          </p>
        </Reveal>

        <div className="ambiente-grid">
          {espacos.map((espaco, i) => (
            <Reveal key={espaco.titulo} delay={i * 90} className={`tile ${espaco.classe}`}>
              <div className="tile-bg" style={{ background: espaco.gradiente }} />
              <div>
                <h3>{espaco.titulo}</h3>
                <p>{espaco.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="menu-aviso">
            Fotos reais do salão estão no{' '}
            <a href={redes[0].url} target="_blank" rel="noreferrer" style={{ color: 'var(--neon-soft)' }}>
              Instagram {redes[0].handle}
            </a>
            . Para trocar os fundos coloridos por fotos, salve as imagens em{' '}
            <code>/public/ambiente</code> e aponte o campo <code>gradiente</code> de{' '}
            <code>src/data/baco.ts</code> para o arquivo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
