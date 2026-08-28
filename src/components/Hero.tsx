import { contato, numeros, redes } from '../data/baco'
import Tridente from './Tridente'

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">Karaokê alternativo • {contato.cidade}</p>

          <h1>
            Todo mundo
            <br />
            canta no <span className="neon-word">Baco</span>
          </h1>

          <p className="hero-lede">
            Um pub de pegada tropical em Aracaju: folhagem por toda parte, luz baixa, espetinhos na
            brasa e o microfone livre a noite inteira. Sem taxa de entrada, de quarta a sábado.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-solid"
              href={contato.grupoWhatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Entrar no grupo do Baco
            </a>
            <a className="btn btn-ghost" href={redes[0].url} target="_blank" rel="noreferrer">
              Ver o ambiente no Instagram
            </a>
          </div>

          <div className="hero-meta">
            {numeros.map((n) => (
              <div key={n.rotulo}>
                <b>{n.valor}</b>
                {n.rotulo}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-orb" aria-hidden="true">
          <i>
            <Tridente size={44} />
          </i>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span />
        role
      </div>
    </section>
  )
}
