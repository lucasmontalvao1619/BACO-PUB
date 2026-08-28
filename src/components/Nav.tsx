import { useEffect, useState } from 'react'
import { contato, redes } from '../data/baco'
import Tridente from './Tridente'

const links = [
  { href: '#ambiente', label: 'O ambiente' },
  { href: '#noites', label: 'Noites' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#visita', label: 'Visite' },
]

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const instagram = redes[0]

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${stuck ? 'is-stuck' : ''}`.trim()}>
      <div className="shell nav-inner">
        <a className="brand" href="#topo">
          <Tridente size={18} /> BACO <small>Aracaju</small>
        </a>

        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="btn btn-ghost" href={instagram.url} target="_blank" rel="noreferrer">
            {instagram.handle}
          </a>
          <a className="btn btn-solid" href={contato.grupoWhatsapp} target="_blank" rel="noreferrer">
            Entrar no grupo
          </a>
        </div>
      </div>
    </header>
  )
}
