import { contato, redes } from '../data/baco'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p className="footer-marca">
          <img src="/logo-pub-baco.jpg" alt="" width={26} height={26} loading="lazy" />
          {contato.nome} — {contato.cidade}
        </p>

        <nav className="footer-social">
          {redes.map((rede) => (
            <a key={rede.nome} href={rede.url} target="_blank" rel="noreferrer">
              {rede.nome}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
