import Header from "./header"
import Apresentaçao from "./Apresentaçao"
import Stacks from "./Stacks"
import Projetos from "./Projetos"
import Contato from "./contato"
import Footer from "./Footer"



import ScrollReveal from "scrollreveal"

ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });

function App(){
 
  
  return (
    <div>
      <Header/>

      <div id="home" className="headline">
      <Apresentaçao/>
      </div>

      <div id="stacks" className="tagline" >
        <br />
      <Stacks/>
      </div>

      <div id="projetos" className="tagline">
        <br />
        <Projetos/>
      </div>
      
      <div id="contato" className="headline">
        <br />
        <br />
        <Contato/>
      </div>

      <Footer/>
      
    
     

      
      
     
     
    </div>
    
  )
}

export default App