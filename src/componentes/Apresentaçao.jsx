import Dev from "./img/dev..-removebg-preview.png";
import Circulo from './img/circulo.png'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'

import ScrollReveal from "scrollreveal";

ScrollReveal({ reset: true });

ScrollReveal().reveal('.headline', { delay: 350 });
ScrollReveal().reveal('.tagline', { delay: 200 });



function Apresentaçao() {
    return (
        <div className="headline">
            <div className="quadrado" >
                <img src={Dev} alt="Dev" />
                <br />
                <br />


            </div>
            <div className="quadrado" >

                <h1 className="headline" >Paulo Alves</h1>
                <p className="full">Desenvolvedor de Software</p>
                <br />
                <h3 className="headline">Olá, bem-vindo(a) ao meu portifólio; Vou te contar um pouco sobre mim. Sou
                    Desenvolvedor de Software e um amante da tecnologia, tenho atuado nas áres de desenvolvimento web
                    principalmente com backend, mas também possuo conhecimentos em tecnologias de frontend. 
                    As principais stacks que utilizo são .NET(C#) & Django(Python) para backend
                    e para integrações e consumos de API com frontend, utilizo React.js. 
                    <br /><br />
                    Logo abaixo, você terá mais detalhes de algumas outras tecnologias que também utilizo no dia-dia. </h3>
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