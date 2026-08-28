import Ambiente from './components/Ambiente'
import Cardapio from './components/Cardapio'
import Depoimentos from './components/Depoimentos'
import Footer from './components/Footer'
import Grupo from './components/Grupo'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import Noites from './components/Noites'
import Visita from './components/Visita'

export default function App() {
  return (
    <>
      {/* luz baixa do salao + silhueta de folhagem, em preto e branco */}
      <div className="ambience" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Ambiente />
        <Noites />
        <Cardapio />
        <Depoimentos />
        <Grupo />
        <Visita />
      </main>

      <Footer />
    </>
  )
}
