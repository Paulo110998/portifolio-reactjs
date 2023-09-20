
import Invest from "./img/projetos/logo-360-invest.png"
import React from "./img/stacks/react.png"
import Django from "./img/stacks/django.png"

import {SiDjango} from "react-icons/si"
import {SiPython} from "react-icons/si"
import {CgDigitalocean} from "react-icons/cg"
import {AiFillGithub} from "react-icons/ai"
import {BsGit} from "react-icons/bs"
import {ImHtmlFive, ImOpt} from "react-icons/im"
import {ImCss3} from "react-icons/im"
import {IoLogoJavascript} from "react-icons/io"
import {BsFillBootstrapFill} from "react-icons/bs"
import {GrMysql} from "react-icons/gr"

import {CgBrowser} from "react-icons/cg"
import {FaReact} from "react-icons/fa"

import {GoProjectSymlink} from 'react-icons/go'

import ScrollReveal from "scrollreveal";

ScrollReveal({ reset: true });

ScrollReveal().reveal('.projetos', { delay: 370 });
ScrollReveal().reveal('.tagline', { delay: 200 });

function Projetos(){
    return(
        <div className="projetos">
            <h1 className="h1-projetos">Projetos <GoProjectSymlink/></h1>
            <br />
          <a target="_blank" href="https://brasilportugalinvest360.com/"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              <br />
              <img  className="projetos-img" src={Invest} alt="" />
              <p className="descriçao1" ><b></b></p>
              <br />
              <p className="descriçao2"><b>O Invest360 é uma aplicação web com foco no mercado imobiliário luso-brasileiro.
               Desenvolvida em python com django, e publicada em cloud na DigitalOcean.</b></p>
              <br />
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6"><SiDjango/>  <SiPython/>  <CgDigitalocean/>  <AiFillGithub/>  <BsGit/>  <ImHtmlFive/> <ImCss3/> <IoLogoJavascript/> <BsFillBootstrapFill/>  <GrMysql/> </p>
              <br />
              <a href="https://brasilportugalinvest360.com/" target="_blank">Acesse: Invest360º <CgBrowser/></a>
            </div>
          </li>
        </ul></a>

        <a href="https://github.com/Paulo110998/portifolio-reactjs.git" target="_blank"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              <br />
              <img src={React} height={5} alt="" />
              <br />
              <br />
              <p className="descriçao1" ><b>Esse portifólio é desenvolvido em React. Acesse o repositório demonstrativo no Github. </b></p>
              <p className="descriçao2" ></p>
              <p className="descriçao3" ></p>
              <p className="descriçao4" ></p>
              <br />
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6" ><FaReact/></p>
              <br />
              <a href="https://github.com/Paulo110998/portifolio-reactjs.git" target="_blank">Acesse: Repositório  <AiFillGithub/></a>
            </div>
          </li>
        </ul></a>

        <a href="https://github.com/Paulo110998/yours_projects" target="_blank"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              <br />
              <img src={Django} alt="" />
              <br />
           
              <p className="descriçao1" ><b>Your Projects é um projeto demonstrativo, desenvolvido em python com django. Acesse o repositório para visualizar a estrutura MTV do django.</b></p>
              <p className="descriçao2" ></p>
              <p className="descriçao3" ></p>
              <p className="descriçao4" ></p>
              <br />
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6" ><SiDjango/>  <SiPython/>  <AiFillGithub/>  <BsGit/>  <ImHtmlFive/> <ImCss3/> <IoLogoJavascript/> <BsFillBootstrapFill/>  <GrMysql/></p>
              <br />
              <a href="https://github.com/Paulo110998/yours_projects" target="_blank">Acesse: Repositório <AiFillGithub/></a>
            </div>
          </li>
        </ul></a>

        </div>
    )
}

export default Projetos