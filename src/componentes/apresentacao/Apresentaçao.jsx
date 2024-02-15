import Dev from "../img/dev..-removebg-preview.png";
import Circulo from '../img/circulo.png'
import "./apresentaçao.css"


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
                <h3 className="headline">Welcome to my portfolio; 
                I'll tell you a little about myself. I am a Software Developer
               and a lover of technology, I have worked in the areas of web development
               mainly with backend, but I also have knowledge in frontend technologies. 
               The main stacks I use are .NET(C#) & Django(Python) for backend and for integrations 
               and API consumption with frontend, I use React.js.
                    <br /><br />
                    Below, you will find more details on some other technologies that I also use on a daily basis. </h3>
                <br />
                <br />

            </div>
            <div>
                <img className="circulo" src={Circulo} alt="" />
            </div>



        </div>
    )
}

export default Apresentaçao