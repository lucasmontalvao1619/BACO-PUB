import { contato, redes } from '../data/baco'
import Tridente from './Tridente'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p className="footer-marca">
          <Tridente size={14} /> {contato.nome} — {contato.cidade}. {contato.bio}.
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
