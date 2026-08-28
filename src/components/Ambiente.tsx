import { useState } from 'react'
import { espacos, redes, type Espaco } from '../data/baco'
import Reveal from './Reveal'

/**
 * Card de um canto da casa, em dois estados:
 *
 * - com foto em /public/ambiente: vira um tile alto, com a imagem de fundo
 *   e o texto sobre um degrade;
 * - sem foto: vira uma ficha compacta, so com titulo e texto.
 *
 * O estado sem foto nao finge ser uma imagem faltando — ele tem altura
 * propria, senao sobra um vazio no meio do card.
 */
function Card({ espaco, delay }: { espaco: Espaco; delay: number }) {
  const [semFoto, setSemFoto] = useState(!espaco.foto)

  return (
    <Reveal
      delay={delay}
      className={`tile ${espaco.classe} ${semFoto ? 'tile-ficha' : 'tile-foto'}`}
    >
      {!semFoto && (
        <img
          className="tile-bg"
          src={`/ambiente/${espaco.foto}`}
          alt={espaco.titulo}
          loading="lazy"
          decoding="async"
          onError={() => setSemFoto(true)}
        />
      )}

      <div className="tile-txt">
        <h3>{espaco.titulo}</h3>
        <p>{espaco.texto}</p>
      </div>
    </Reveal>
  )
}

export default function Ambiente() {
  const faltamFotos = espacos.some((e) => !e.foto)

  return (
    <section className="section" id="ambiente">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">O ambiente</p>
          <h2 className="section-title">Duas salas, dois climas, uma noite só</h2>
          <p className="section-lede">
            Na frente, o salão principal e o karaokê. Lá no fundo, a sala de drinks, mais escura e
            mais íntima. No meio do caminho, paredes cobertas de achados e um mural de recados —
            dá pra atravessar a noite sem repetir o mesmo canto duas vezes.
          </p>
        </Reveal>

        <div className="ambiente-grid">
          {espacos.map((espaco, i) => (
            <Card key={espaco.titulo} espaco={espaco} delay={i * 70} />
          ))}
        </div>

        {faltamFotos && (
          <Reveal delay={100}>
            <p className="menu-aviso">
              As fotos da casa estão no{' '}
              <a href={redes[0].url} target="_blank" rel="noreferrer">
                Instagram {redes[0].handle}
              </a>
              . Salve os arquivos em <code>public/ambiente/</code> com os nomes indicados no{' '}
              <code>LEIA-ME.txt</code> e cada ficha vira um tile com a foto, sem mexer no código.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
