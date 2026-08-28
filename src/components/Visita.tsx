import { contato, horarios, mapaLink, redes } from '../data/baco'
import Mapa from './Mapa'
import Reveal from './Reveal'

export default function Visita() {
  return (
    <section className="section" id="visita">
      <div className="shell">
        <div className="visita">
          <Reveal>
            <p className="eyebrow">Visite-nos</p>
            <h2 className="section-title">Aberto de quarta a sábado</h2>
            <p className="section-lede">
              A casa enche cedo nas noites temáticas. Chegue com fome, o espeto começa a sair assim
              que a porta abre — e entre no grupo pra combinar a noite com a galera.
            </p>

            <ul className="horarios">
              {horarios.map((h) => (
                <li key={h.dia}>
                  <b>{h.dia}</b>
                  <em>{h.hora}</em>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="cartao-contato">
              <dl>
                <div>
                  <dt>Endereço</dt>
                  <dd>
                    <a href={mapaLink} target="_blank" rel="noreferrer">
                      {contato.endereco}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Contato da casa</dt>
                  <dd>
                    <a href={contato.whatsapp} target="_blank" rel="noreferrer">
                      {contato.telefone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Redes sociais</dt>
                  {redes.map((rede) => (
                    <dd key={rede.nome}>
                      <a href={rede.url} target="_blank" rel="noreferrer">
                        {rede.nome} · {rede.handle}
                      </a>
                    </dd>
                  ))}
                </div>
              </dl>

              <a
                className="btn btn-solid"
                href={contato.grupoWhatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Entrar no grupo do Baco
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <Mapa />
        </Reveal>
      </div>
    </section>
  )
}
