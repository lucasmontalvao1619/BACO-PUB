import { aviso, cardapio, contato } from '../data/baco'
import Reveal from './Reveal'

export default function Cardapio() {
  return (
    <section className="section" id="cardapio">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Cardápio</p>
          <h2 className="section-title">Da brasa ao copo</h2>
          <p className="section-lede">
            Sabores artesanais saindo quentes a noite toda e drinks que mudam com a programação da
            semana.
          </p>
        </Reveal>

        <div className="menu-cols">
          {cardapio.map((secao, i) => (
            <Reveal key={secao.secao} delay={i * 100} className="menu-secao">
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

        <Reveal delay={100}>
          <p className="menu-aviso">
            {aviso} Os drinks da Semana Mística valem enquanto a semana estiver rolando — o cardápio
            completo fica com a casa, então{' '}
            <a href={contato.grupoWhatsapp} target="_blank" rel="noreferrer">
              pergunte no grupo do Baco
            </a>{' '}
            para confirmar valores e disponibilidade.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
