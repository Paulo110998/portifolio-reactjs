import React from "../img/stacks/react.png"
import Django from "../img/stacks/django.png"
import Dotnet from "../img/stacks/dotnet-logo2.png"
import { SiDjango } from "react-icons/si"
import { SiPython } from "react-icons/si"
import { CgDigitalocean } from "react-icons/cg"
import { AiFillGithub } from "react-icons/ai"
import { BsGit } from "react-icons/bs"
import { ImHtmlFive} from "react-icons/im"
import { ImCss3 } from "react-icons/im"
import { IoLogoJavascript } from "react-icons/io"
import { BsFillBootstrapFill } from "react-icons/bs"
import { GrMysql } from "react-icons/gr"
import { FaReact } from "react-icons/fa"
import { SiAxios } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx"
import { TbBrandCSharp } from "react-icons/tb";
import { DiDotnet } from "react-icons/di";
import { GoProjectSymlink } from 'react-icons/go'

import "./projetos.css"

function Projetos() {
  return (
    <div className="projetos">
      <br />
      <h1 className="h1-projetos">Projects <GoProjectSymlink /></h1>
      <br />
      <a href="https://www.lucasvieiracademybjj.com.br/" target="_blank" rel="noreferrer"><ul className="card-list">
        <li className="list-cards" >
          <div className="card">
            <br />
            <img src={React} height={5} alt="" />
            <br />
            <p className="descriçao1" ><b>Lucas Vieira Jiu-Jitsu Academy</b></p>
            <p className="descriçao2" >Desenvolvi este site em React.js, para uma das maiores academias de Jiu-Jitsu de Maceió/AL.</p>

            <br />
            <p className="descriçao5">Stacks:</p>
            <p className="descriçao6" ><FaReact /> <IoLogoJavascript /> <ImHtmlFive /> <ImCss3 />  <BsGit />  <AiFillGithub />  <RxVercelLogo /> </p>
            <br />
            <a href="https://github.com/Paulo110998/portifolio-reactjs.git" target="_blank" rel="noreferrer"></a>
          </div>
        </li>
      </ul></a>

      <a href="https://github.com/Paulo110998/React_API_REST_Consumer" target="_blank" rel="noreferrer"><ul className="card-list">
        <li className="list-cards" >
          <div className="card">
            <br />
            <img src={React} height={5} alt="" />
            <br />
            <p className="descriçao1" ><b>Consumo de API com React</b></p>
            <p className="descriçao2" >O repositório exibe o consumo básico de uma API REST com React.js, utilizando a biblioteca axios.</p>

            <br />
            <p className="descriçao5">Stacks:</p>
            <p className="descriçao6" ><FaReact /> <IoLogoJavascript />  <SiAxios /> <BsGit /> <AiFillGithub /> </p>
            <br />
            <a href="https://github.com/Paulo110998/portifolio-reactjs.git" target="_blank" rel="noreferrer"></a>
          </div>
        </li>
      </ul></a>

      <a target="_blank" rel="noreferrer" href="https://brasilportugalinvest360.com/"><ul className="card-list">
        <li className="list-cards" >
          <div className="card">
            <br />
            <img src={Django} alt="" />
            <p className="descriçao1" ><b>Invest 360º</b></p>
            <p className="descriçao2">O Invest360 é uma aplicação web com foco em investimentos no mercado luso-brasileiro.
              Desenvolvida em python com django, e publicada em cloud na DigitalOcean.</p>
            <br />
            <p className="descriçao5">Stacks:</p>
            <p className="descriçao6"><SiDjango />  <SiPython />  <CgDigitalocean />  <AiFillGithub />  <BsGit />  <ImHtmlFive /> <ImCss3 /> <IoLogoJavascript /> <BsFillBootstrapFill />  <GrMysql /> </p>
            <br />
            <a href="https://brasilportugalinvest360.com/" target="_blank" rel="noreferrer"></a>
          </div>
        </li>
      </ul></a>

      <a href="https://clownfish-app-jitiq.ondigitalocean.app/" target="_blank" rel="noreferrer"><ul className="card-list">
        <li className="list-cards" >
          <div className="card">
            <br />
            <img src={Django} alt="" />
            <br />

            <p className="descriçao1" ><b>Your Projects</b></p>
            <p className="descriçao2" >Your Projects é uma aplicação web demonstrativa, desenvolvida em python com django. Acesse para visualizar a arquitetura MTV do django.</p>

            <br />
            <p className="descriçao5">Stacks:</p>
            <p className="descriçao6" ><SiDjango />  <SiPython />  <CgDigitalocean />  <AiFillGithub />  <BsGit />  <ImHtmlFive /> <ImCss3 /> <IoLogoJavascript /> <BsFillBootstrapFill />  <GrMysql /></p>
            <br />
            <a href="https://clownfish-app-jitiq.ondigitalocean.app/" target="_blank" rel="noreferrer"></a>
          </div>
        </li>
      </ul></a>

      <a href="https://github.com/Paulo110998/Music_api_consumption.git" target="_blank" rel="noreferrer"><ul className="card-list">
        <li className="list-cards" >
          <div className="card">
            <br />
            <img src={Dotnet} alt="" />

            <p className="descriçao1" ><b>Music API consumption</b></p>
            <p className="descriçao3" >O projeto exibe a desserialização e serialização de dados de uma API de música, o uso do HttpClient (.NET) e a criação de arquivos em C#.</p>

            <br />

            <p className="descriçao5">Stacks:</p>
            <p className="descriçao6" ><TbBrandCSharp /> <DiDotnet /> <AiFillGithub />  <BsGit /> </p>
            <br />
            <a href="https://github.com/Paulo110998/Music_api_consumption.git" target="_blank" rel="noreferrer"></a>
          </div>
        </li>
      </ul></a>

      <a href="https://github.com/Paulo110998/Web_API_streaming" target="_blank" rel="noreferrer"><ul className="card-list">
        <li className="list-cards" >
          <div className="card">
            <br />
            <img src={Dotnet} alt="" />
            <p className="descriçao1" ><b>Web API Streaming</b></p>
            <p className="descriçao3" >Um modelo prático de API Rest MVC. Com a utilização do EntityFramework e Mysql, relacionamento de entidades e consultas com LINQ, e também o mapeamento de DTOs.</p>
            <br />
            <p className="descriçao5">Stacks:</p>
            <p className="descriçao6" ><TbBrandCSharp /> <DiDotnet /> <AiFillGithub />  <BsGit /> <GrMysql /> </p>
            <br />
            <a href="https://github.com/Paulo110998/Music_api_consumption.git" target="_blank" rel="noreferrer"></a>
          </div>
        </li>
      </ul></a>


      {/* <a href="https://jadsonbitencourtt.com.br/" target="_blank"><ul className="card-list">
        <li className="list-cards" >
          <div className="card">
            <br />
            <br />
            <h3>Jadson Bittencourt</h3>
            <br />

            <p className="descriçao1" >Site desenvolvido em Html5, Css3 e Javascript e publicado no bohr.io, para o palestrante Jadson Bittencourt.</p>
            <p className="descriçao2" ></p>
            <br />
            <p className="descriçao5">Stacks:</p>
            <p className="descriçao6" > <AiFillGithub />  <BsGit />  <ImHtmlFive /> <ImCss3 /> <IoLogoJavascript /></p>
            <br />
            <a href="https://jadsonbitencourtt.com.br/" target="_blank"></a>
          </div>
        </li>
      </ul></a> */}

    </div>
  )
}

export default Projetos