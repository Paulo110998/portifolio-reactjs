import Header from "./componentes/header/Header"
import Apresentaçao from "./componentes//apresentacao/Apresentaçao"
import Stacks from "./componentes/stacks/Stacks"
//import Projetos from "./componentes/projetos/Projetos"
import SlideProjetoss from "./componentes/projetos/SlideProjetos"
import Contato from "./componentes/contato/Contato"
import Footer from "./componentes/footer/Footer"



function App() {
  return (
    <div>
      <Header />

      <div id="home" >
        <Apresentaçao />
      </div>

      <div id="stacks" >
        <Stacks />
      </div>


      <div id="projetos" >
        <br />
        <br />
        <SlideProjetoss />
      </div>

      <div id="contato">
        <br />
        <br />
        <Contato />
      </div>

      <Footer />
    </div>

  )
}

export default App