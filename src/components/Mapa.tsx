import { useState } from 'react'
import { contato, mapaEmbed, mapaLink } from '../data/baco'

/**
 * Mapa sob demanda. O embed do Google carrega uns 2 MB de script e trava
 * a rolagem se vier junto com a pagina, entao ele so monta quando a
 * pessoa pede. Ate la fica um cartao leve com o endereco.
 */
export default function Mapa() {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="mapa">
      {aberto ? (
        <iframe
          title={`Mapa do ${contato.nome} — ${contato.endereco}`}
          src={mapaEmbed}
          loading="lazy"
          referrerPolicy="no-referrer"
          /* O sandbox nega tudo e devolve so o que o embed precisa. O que
             fica de fora e o que importa: sem allow-top-navigation, o
             mapa nao consegue redirecionar a pagina que o hospeda. */
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          allow="fullscreen"
        />
      ) : (
        <button type="button" className="mapa-preview" onClick={() => setAberto(true)}>
          <span className="mapa-grega" aria-hidden="true" />
          <span className="mapa-pin" aria-hidden="true">
            ◉
          </span>
          <strong>{contato.endereco}</strong>
          <em>Toque para abrir o mapa</em>
        </button>
      )}

      <div className="mapa-legenda">
        <span>{contato.cidade} · aberto de quarta a sábado, a partir das 19h</span>
        <a href={mapaLink} target="_blank" rel="noopener noreferrer">
          Abrir rota no Google Maps →
        </a>
      </div>
    </div>
  )
}
