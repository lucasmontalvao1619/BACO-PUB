import Ambiente from './components/Ambiente'
import Cardapio from './components/Cardapio'
import Depoimentos from './components/Depoimentos'
import Footer from './components/Footer'
import Grega from './components/Grega'
import Grupo from './components/Grupo'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import Noites from './components/Noites'
import SalaDrinks from './components/SalaDrinks'
import Visita from './components/Visita'

/**
 * A regra dos divisores: toda troca de secao ganha uma faixa de grega,
 * menos onde a secao ja traz a propria borda de ponta a ponta — a fita
 * do manifesto e a sala de drinks. Ali a grega sobraria em cima do fio.
 */
export default function App() {
  return (
    <>
      {/* luz baixa do salao — degrade estatico, sem custo de render */}
      <div className="ambience" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Ambiente />
        <Grega />
        <Noites />
        <SalaDrinks />
        <Cardapio />
        <Grega />
        <Depoimentos />
        <Grega />
        <Grupo />
        <Grega />
        <Visita />
      </main>

      <Footer />
    </>
  )
}
