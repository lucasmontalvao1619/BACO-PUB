import { cardapio, contato } from '../data/baco'
import Reveal from './Reveal'

export default function Cardapio() {
  return (
    <section className="section" id="cardapio">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Cardápio</p>
          <h2 className="section-title">Da brasa ao copo</h2>
          <p className="section-lede">
            Sabores artesanais, espeto saindo quente a noite toda e drinks que mudam com a estação.
            Consumo médio de R$ 20 a R$ 40 por pessoa.
          </p>
        </Reveal>

        <div className="menu-cols">
          {cardapio.map((secao, i) => (
            <Reveal key={secao.secao} delay={i * 120} className="menu-secao">
              <h3>{secao.secao}</h3>
              {secao.nota && <p className="menu-nota">{secao.nota}</p>}

              <ul className="menu-lista">
                {secao.itens.map((item) => (
                  <li key={item.nome} className="menu-item">
                    <div className="menu-item-txt">
                      <b>{item.nome}</b>
                      <small>{item.descricao}</small>
                    </div>
                    <span />
                    <em>{item.preco}</em>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="menu-aviso">
            Preços de referência coletados em fontes públicas e sujeitos a alteração. O cardápio
            completo da noite fica com a casa —{' '}
            <a
              href={contato.grupoWhatsapp}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--neon-soft)' }}
            >
              pergunte no grupo do Baco
            </a>{' '}
            para confirmar valores e disponibilidade.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
