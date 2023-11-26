import Header from "./componentes/header"
import Apresentaçao from "./componentes/Apresentaçao"
import Stacks from "./componentes/Stacks"
import Projetos from "./componentes/Projetos"
import Contato from "./componentes/contato"
import Footer from "./componentes/Footer"



function App(){
    
  return (
    <div>
      <Header />
      
      <div id="home" >
      <Apresentaçao/>
      </div>
       
      <div id="stacks" >
         <Stacks/>
      </div>
      
     
      <div id="projetos" >
        <br />
        <br />
        <Projetos/>
      </div>
      
      <div id="contato">
        <br />
        <br />
        <Contato/>
      </div>

      <Footer/>
    </div>
    
  )
}

export default App