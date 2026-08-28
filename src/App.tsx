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
        <Grupo />
        <Visita />
      </main>

      <Footer />
    </>
  )
}
