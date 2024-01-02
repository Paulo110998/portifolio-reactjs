import Dev from "./img/dev..-removebg-preview.png";
import Circulo from './img/circulo.png'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'

import ScrollReveal from "scrollreveal";

ScrollReveal({ reset: true });

ScrollReveal().reveal('.headline', { delay: 350 });
ScrollReveal().reveal('.tagline', { delay: 200 });



function Apresentaçao (){
    return(
        <div className="headline">
            <div className="quadrado" >
            <img  src={Dev} alt="Dev" />
            <br />
            <br />
               

            </div>
            <div className="quadrado" >
                
            <h1 className="headline" >Paulo Alves</h1>
                <p className="full">Desenvolvedor Back-end</p>
                <br />
                <h3 className="headline">Olá, bem-vindo ao meu portifólio! Irei te contar um pouco sobre mim. Sou desenvolvedor web e atuo principalmente com backend, minha stack principal é Python/Django e C#/.NET para backend. 
                Para integrações com frontend utilizo React.js & Bootstrap. <br /><br /> 
                Sou um cara apaixonado por tecnologia e além dessas tecnologias citadas, também possuo algumas outras stacks que você verá logo abaixo. </h3>
                <br />
                <br />
                <br />
                <br />
                <br />
                
                

            </div>
            <div className="box-load">
            <img className="circulo" src={Circulo} alt="" />
            </div>
           
            
            
        </div>
    )
}

export default Apresentaçao