import { contato } from '../data/baco'
import Reveal from './Reveal'

/**
 * Faixa de convite para o grupo de WhatsApp onde a casa divulga
 * a programacao da semana.
 */
export default function Grupo() {
  return (
    <section className="section" style={{ paddingBlock: 'clamp(3rem, 8vh, 5rem)' }}>
      <div className="shell">
        <Reveal>
          <div className="cta-grupo">
            <div>
              <p className="eyebrow">Fique por dentro</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.5rem)' }}>
                O grupo do Baco é onde a galera se encontra
              </h2>
              <p className="section-lede">
                É lá que a galera combina a noite, pede música, conhece gente nova e fica sabendo
                da programação antes de todo mundo. Entrada aberta, é só chegar.
              </p>
            </div>

            <a
              className="btn btn-solid"
              href={contato.grupoWhatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Entrar no grupo do WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
