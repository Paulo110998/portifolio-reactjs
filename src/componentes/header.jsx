import { useState } from "react";
import { CgCloseR } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id); //Buscando o id
    // Se o "element" for verdadeiro
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div >
      <header>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <button className="menu-button" onClick={toggleMenu}><CgCloseR className="botao-fechar" /></button>
          <ul className="menu-items">
            <li><a href="#home" onClick={() => scrollToSection('home')} >Home</a></li>
            <li><a href="#stacks" onClick={() => scrollToSection('stacks')}>Stacks</a></li>
            <li><a href="#projetos" onClick={() => scrollToSection('projetos')}>Projects</a></li>
            <li><a href="#contato" onClick={() => scrollToSection('contato')}>Contact-Us</a></li>
          </ul>
        </nav>
        <button className="menu-button" onClick={toggleMenu}>
          <AiOutlineMenu className="menu-burg" />
        </button>
      </header>

    </div>


  )
}

export default Header