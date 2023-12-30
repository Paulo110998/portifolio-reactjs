import Invest from "./img/projetos/logo-360-invest.png"
import React from "./img/stacks/react.png"
import Django from "./img/stacks/django.png"
import Csharp from "./img/stacks/csharp.png"
import Dotnet from "./img/stacks/dotnet_logo.png"

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
import {RxVercelLogo} from "react-icons/rx"
import { TbBrandCSharp } from "react-icons/tb";
import { DiDotnet } from "react-icons/di";

import {GoProjectSymlink} from 'react-icons/go'

import ScrollReveal from "scrollreveal";

import { PiCursorClickBold } from "react-icons/pi";

ScrollReveal({ reset: true });

ScrollReveal().reveal('.projetos', { delay: 370 });
ScrollReveal().reveal('.tagline', { delay: 200 });

function Projetos(){
    return(
        <div className="projetos">
            <h1 className="h1-projetos">Projects <GoProjectSymlink/></h1>
            <br />
         <a href="https://github.com/Paulo110998/portifolio-reactjs.git" target="_blank"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              <br />
              <img src={React} height={5} alt="" />
              <br />
              <br />
              <p className="descriçao1" >Esse portifólio é desenvolvido em React e publicado na Vercel. Acesse o repositório demonstrativo no Github.</p>
              <p className="descriçao2" ></p>
              
              <br />
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6" ><IoLogoJavascript/> <FaReact/> <RxVercelLogo/> </p>
              <br />
              <a href="https://github.com/Paulo110998/portifolio-reactjs.git" target="_blank"></a>
            </div>
          </li>
        </ul></a>

        <a target="_blank" href="https://brasilportugalinvest360.com/"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              <br />
              <img  src={Django} alt="" />
              <p className="descriçao1" ><b></b></p>
              <p className="descriçao2">O Invest360 é uma aplicação web com foco em investimentos no mercado luso-brasileiro.
               Desenvolvida em python com django, e publicada em cloud na DigitalOcean.</p>
              <br />
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6"><SiDjango/>  <SiPython/>  <CgDigitalocean/>  <AiFillGithub/>  <BsGit/>  <ImHtmlFive/> <ImCss3/> <IoLogoJavascript/> <BsFillBootstrapFill/>  <GrMysql/> </p>
              <br />
              <a href="https://brasilportugalinvest360.com/" target="_blank"></a>
            </div>
          </li>
        </ul></a>

        <a href="https://clownfish-app-jitiq.ondigitalocean.app/" target="_blank"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              <br />
              <img src={Django} alt="" />
              <br />
           
              <p className="descriçao1" >Your Projects é uma aplicação web demonstrativa, desenvolvida em python com django. Acesse para visualizar a arquitetura MTV do django.</p>
              <p className="descriçao2" ></p>
              
              <br />
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6" ><SiDjango/>  <SiPython/>  <CgDigitalocean/>  <AiFillGithub/>  <BsGit/>  <ImHtmlFive/> <ImCss3/> <IoLogoJavascript/> <BsFillBootstrapFill/>  <GrMysql/></p>
              <br />
              <a href="https://clownfish-app-jitiq.ondigitalocean.app/" target="_blank"></a>
            </div>
          </li>
        </ul></a>

        <a href="https://github.com/Paulo110998/Music_api_consumption.git" target="_blank"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              
              <img src={Dotnet} alt="" />
                       
              <p className="descriçao1" ><b>Music API consumption</b></p>
              <p className="descriçao3" >O projeto exibe a desserialização e serialização de dados de uma API de música, o uso do HttpClient (.NET) e a criação de arquivos em C#.</p>
              
              <br />
             
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6" ><TbBrandCSharp/> <DiDotnet /> <AiFillGithub/>  <BsGit/> </p>
              <br />
              <a href="https://github.com/Paulo110998/Music_api_consumption.git" target="_blank"></a>
            </div>
          </li>
        </ul></a>

        <a href="https://github.com/Paulo110998/Web_API_streaming" target="_blank"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              <img src={Dotnet} alt="" />
              <p className="descriçao1" ><b>Web API Streaming</b></p>
              <p className="descriçao3" >Um modelo prático de API Rest MVC. Com a utilização do EntityFramework e Mysql, relacionamento de entidades e consultas com LINQ, e também o mapeamento de DTOs.</p>
              <br />
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6" ><TbBrandCSharp/> <DiDotnet /> <AiFillGithub/>  <BsGit/> <GrMysql/> </p>
              <br />
              <a href="https://github.com/Paulo110998/Music_api_consumption.git" target="_blank"></a>
            </div>
          </li>
        </ul></a>


        <a href="https://jadsonbitencourtt.com.br/" target="_blank"><ul className="card-list">
          <li className="list-cards" >
            <div class="card">
              <br />
              <br />
              <h3>Jadson Bittencourt</h3>
              <br />
           
              <p className="descriçao1" >Site desenvolvido em Html5, Css3 e Javascript e publicado no bohr.io, para o palestrante Jadson Bittencourt.</p>
              <p className="descriçao2" ></p>
              <br />
              <p className="descriçao5">Stacks:</p>
              <p className="descriçao6" > <AiFillGithub/>  <BsGit/>  <ImHtmlFive/> <ImCss3/> <IoLogoJavascript/></p>
              <br />
              <a href="https://jadsonbitencourtt.com.br/"  target="_blank"></a>
            </div>
          </li>
        </ul></a>

        </div>
    )
}

export default Projetos