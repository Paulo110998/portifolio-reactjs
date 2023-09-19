import { useState } from "react";

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
    const element = document.getElementById(id); //Buscando o id
    // Se o "element" for verdadeiro
    if (element) {
        element.scrollIntoView({behavior:'smooth'});
        
    }
   }


    return(
        <div>
            <header>
                <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                <ul className="menu">
                <li><a href="#home" onClick={() => scrollToSection('home')} >Home</a></li>
                <li><a href="#stacks" onClick={() => scrollToSection('stacks')}>Stacks</a></li>
                <li><a href="#projetos" onClick={() => scrollToSection('projetos')}>Projects</a></li>
                <li><a href="#contato" onClick={()=> scrollToSection('contato')}>Contact-Us</a></li>
                </ul>
               </nav>
            </header>
            
        </div>
        
        
    )
}

export default Header