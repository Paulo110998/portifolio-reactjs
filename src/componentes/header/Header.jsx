import { useState } from "react";
import { CgCloseR } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import "./header.css"


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
          
          <ul className="menu-items">
          <button className="menu-button" onClick={toggleMenu}><CgCloseR className="botao-fechar" /></button>
          {/* <a href="#home" onClick={() => scrollToSection('home')}><li className="navh4">
            Paulo Alves
          </li></a> */}
            <li><a href="#home" onClick={() => scrollToSection('home')} >Home</a></li>
            <li><a href="#stacks" onClick={() => scrollToSection('stacks')}>Tech & Works</a></li>
            <li><a href="#projetos" onClick={() => scrollToSection('projetos')}>Projects</a></li>
            <li><a href="#contato" onClick={() => scrollToSection('contato')}>Socials</a></li>  
            <li><a href="https://www.linkedin.com/in/paulo-alves-76a9b6205/"><IoLogoLinkedin /></a> </li>
            <li><a href="https://github.com/Paulo110998"><FaGithub /></a></li>
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