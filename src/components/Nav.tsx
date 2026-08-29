import { useCallback, useEffect, useRef, useState } from 'react'
import { contato, redes } from '../data/baco'

const links = [
  { href: '#ambiente', label: 'O ambiente' },
  { href: '#noites', label: 'Noites' },
  { href: '#drinks', label: 'Sala de drinks' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#visita', label: 'Visite-nos' },
]

/** acima disso a navegacao inteira cabe na barra e a gaveta nao existe */
const DESKTOP = '(min-width: 62em)'

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [aberto, setAberto] = useState(false)
  const header = useRef<HTMLElement>(null)
  const instagram = redes[0]

  const fechar = useCallback(() => setAberto(false), [])

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /**
   * A altura real do header vira --nav-h. E dela que saem o scroll-margin
   * das ancoras e o topo da gaveta, entao nada precisa chutar um numero
   * que muda com o breakpoint, com o header encolhendo na rolagem ou com
   * a fonte que a pessoa escolheu no navegador.
   */
  useEffect(() => {
    const el = header.current
    if (!el) return
    const medir = () =>
      document.documentElement.style.setProperty('--nav-h', `${el.offsetHeight}px`)
    medir()
    const ro = new ResizeObserver(medir)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /* gaveta aberta: trava a rolagem do fundo e fecha no Esc */
  useEffect(() => {
    if (!aberto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false)
    }
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = anterior
      window.removeEventListener('keydown', onKey)
    }
  }, [aberto])

  /* girou o aparelho e virou desktop com a gaveta aberta: fecha */
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP)
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setAberto(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      ref={header}
      className={`nav ${stuck ? 'is-stuck' : ''} ${aberto ? 'is-open' : ''}`.trim()}
    >
      <div className="shell nav-inner">
        <a className="brand" href="#topo" onClick={fechar}>
          <img src="/logo-pub-baco.jpg" alt="" width={34} height={34} />
          BACO <small>Aracaju</small>
        </a>

        <nav className="nav-links" aria-label="Seções do site">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="btn btn-ghost" href={instagram.url} target="_blank" rel="noopener noreferrer">
            {instagram.handle}
          </a>
          <a className="btn btn-solid" href={contato.grupoWhatsapp} target="_blank" rel="noopener noreferrer">
            Entrar no grupo
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={aberto}
          aria-controls="menu-baco"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* a gaveta e o mesmo menu, so que empilhado — nada some no mobile */}
      <div id="menu-baco" className="nav-drawer" inert={!aberto}>
        <nav className="nav-drawer-links" aria-label="Seções do site">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={fechar}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-drawer-cta">
          <a
            className="btn btn-solid"
            href={contato.grupoWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={fechar}
          >
            Entrar no grupo do Baco
          </a>
          <a
            className="btn btn-ghost"
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={fechar}
          >
            Instagram {instagram.handle}
          </a>
        </div>
      </div>
    </header>
  )
}
