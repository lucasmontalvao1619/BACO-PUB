import { useState } from 'react'
import { espacos, redes, type Espaco } from '../data/baco'
import Reveal from './Reveal'

/**
 * Card de um canto da casa. Se a foto existir em /public/ambiente ela entra;
 * se faltar, o card cai no padrao de grega em vez de ficar vazio.
 */
function Tile({ espaco, delay }: { espaco: Espaco; delay: number }) {
  const [semFoto, setSemFoto] = useState(!espaco.foto)

  return (
    <Reveal delay={delay} className={`tile ${espaco.classe}`}>
      {semFoto ? (
        <div className="tile-padrao" aria-hidden="true" />
      ) : (
        <img
          className="tile-bg"
          src={`/ambiente/${espaco.foto}`}
          alt={espaco.titulo}
          loading="lazy"
          decoding="async"
          onError={() => setSemFoto(true)}
        />
      )}
      <div>
        <h3>{espaco.titulo}</h3>
        <p>{espaco.texto}</p>
      </div>
    </Reveal>
  )
}

export default function Ambiente() {
  return (
    <section className="section" id="ambiente">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">O ambiente</p>
          <h2 className="section-title">Duas salas, dois climas, uma noite só</h2>
          <p className="section-lede">
            Na frente, o salão principal e o karaokê. Lá no fundo, a sala de drinks, mais escura e
            mais íntima. Entre uma e outra, a área externa e o lounge — dá pra atravessar a noite
            sem repetir o mesmo canto duas vezes.
          </p>
        </Reveal>

        <div className="ambiente-grid">
          {espacos.map((espaco, i) => (
            <Tile key={espaco.titulo} espaco={espaco} delay={i * 80} />
          ))}
        </div>

        <Reveal delay={100}>
          <p className="menu-aviso">
            As fotos da casa estão no{' '}
            <a href={redes[0].url} target="_blank" rel="noreferrer">
              Instagram {redes[0].handle}
            </a>
            . Para usá-las aqui, salve os arquivos em <code>public/ambiente/</code> com os nomes
            <code> salao.jpg</code>, <code>sala-de-drinks.jpg</code>, <code>area-externa.jpg</code>,{' '}
            <code>lounge.jpg</code> e <code>brasa.jpg</code> — cada card troca o padrão pela foto
            sozinho.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
