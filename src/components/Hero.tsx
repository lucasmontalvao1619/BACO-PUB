import { contato, numeros, redes } from '../data/baco'

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">Karaokê livre • {contato.cidade}</p>

          <h1>
            Todo mundo
            <br />
            canta no <em>Baco</em>
          </h1>

          <p className="hero-lede">
            Casa aberta às 19h, karaokê até as 2h e o pub até as 3h, com entrada free de quarta a
            sábado. Sabores artesanais, drinks especiais e duas salas com climas diferentes.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href={contato.grupoWhatsapp} target="_blank" rel="noreferrer">
              Entrar no grupo do Baco
            </a>
            <a className="btn btn-ghost" href={redes[0].url} target="_blank" rel="noreferrer">
              Ver o Instagram
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

        <div className="hero-logo">
          <img
            src="/logo-pub-baco.jpg"
            alt="Logo do Pub Baco: Baco de perfil dentro de um anel de grega"
            width={420}
            height={420}
            fetchPriority="high"
          />
        </div>
      </div>

      <p className="scroll-cue" aria-hidden="true">
        role
      </p>
    </section>
  )
}
