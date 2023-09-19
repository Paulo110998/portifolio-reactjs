import { useState } from "react";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

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
                <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                <ul className={`menu ${isMenuOpen ? 'show-menu' : ''}`}>
                <li><a href="#home" onClick={() => scrollToSection('home')} >Home</a></li>
                <li><a href="#stacks" onClick={() => scrollToSection('stacks')}>Stacks</a></li>
                <li><a href="#projetos" onClick={() => scrollToSection('projetos')}>Projects</a></li>
                <li><a href="#contato" onClick={()=> scrollToSection('contato')}>Contact-Us</a></li>
                </ul>
                <button className="close-menu" onClick={toggleMenu}>Fechar X</button>
                </nav>
            </header>
            
        </div>
        
        
    )
}

export default Header