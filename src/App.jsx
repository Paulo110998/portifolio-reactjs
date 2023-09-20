import Header from "./header"
import Apresentaçao from "./Apresentaçao"
import Stacks from "./Stacks"
import Projetos from "./Projetos"
import Contato from "./contato"
import Footer from "./Footer"



function App(){
    
  return (
    <div>
      <Header />
      

      <div id="home" >
      <Apresentaçao/>
      </div>

      <div id="stacks" >
        <br />
      <Stacks/>
      </div>

      <div id="projetos" >
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