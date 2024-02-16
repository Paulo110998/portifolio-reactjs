import Html from "../img/stacks/html5.png"
import Css from "../img/stacks/css.png"
import JS from "../img/stacks/JS.png"
import ReactFrame from "../img/stacks/react.png"
import Bootstrap from "../img/stacks/bootstrap.png"
import Git from "../img/stacks/git.png"
import Github from "../img/stacks/github.png"
import Python from "../img/stacks/python.png"
import Django from "../img/stacks/django.png"
import Csharp from "../img/stacks/csharp.png"
import Dotnet from "../img/stacks/dotnet_logo.png"
import Rest from "../img/stacks/REST.png"
import Sql from "../img/stacks/sql-server.png"
import Mysql from "../img/stacks/mysql.png"
import DigitalOcean from "../img/stacks/digitalocean.png"
import Heroku from "../img/stacks/heroku.png"
import Vscode from "../img/stacks/vscode.png"
import VisualStudio from "../img/stacks/visualstudio.png"
import "./stacks.css"
import { BiCodeBlock } from 'react-icons/bi'
import Codando from "../img/codando.jpg"

import Circulo from '../img/art.png'


function Stacks() {
  return (
    <div className="stacks">
      <h1 className="h1-stacks">Stacks <BiCodeBlock /> </h1>
      <br />
      <ul className="card-list">
        <li className="list-card">
          <img src={Html} alt="" />
          <p>Html5</p>
        </li>
        <li className="list-card">
          <img src={Css} alt="" />
          <p>Css3</p>
        </li>
        <li className="list-card">
          <img src={Bootstrap} alt="" />
          <p>Bootstrap</p>
        </li>
        <li className="list-card">
          <img src={JS} alt="" />
          <p>JavaScript</p>
        </li>
        <li className="list-card">
          <img src={ReactFrame} alt="" />
          <p>React.js</p>
        </li>
        <li className="list-card">
          <img src={Git} alt="" />
          <p>Git</p>
        </li>
        <li className="list-card">
          <img src={Github} alt="" />
          <p>GitHub</p>
        </li>
        <li className="list-card">
          <img src={Python} alt="" />
          <p>Python</p>
        </li>
        <li className="list-card">
          <img src={Django} alt="" />
          <p>Django</p>
        </li>

        <li className="list-card">
          <img src={Csharp} alt="" />
          <p>C#</p>
        </li>
        <li className="list-card">
          <img src={Dotnet} alt="" />
          <p>Dotnet</p>
        </li>
        <li className="list-card">
          <img src={Rest} alt="" />
          <p>REST API</p>
        </li>
        <li className="list-card">
          <img src={Sql} alt="" />
          <p>SQL Language</p>
        </li>
        <li className="list-card">
          <img src={Mysql} alt="" />
          <p>Mysql</p>
        </li>
        <li className="list-card">
          <img src={DigitalOcean} alt="" />
          <p>DigitalOcean</p>
        </li>
        <li className="list-card">
          <img src={Heroku} alt="" />
          <p>Heroku</p>
        </li>

        <li className="list-card">
          <img src={Vscode} alt="" />
          <p>VSCode</p>
        </li>
        <li className="list-card">
          <img src={VisualStudio} alt="" />
          <p>Visual Studio</p>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <h1>Work Experiences</h1>
      <div className="experiencias">
        <h3>* Freelancer - Software Developer <br />Jun 2021 - Dez 2023</h3>

        <p>I worked for the company Next Opinion in the development
          of the “Invest 360” platform, using technologies such as
          Django, MySql, Html5&Css3, Javascript and cloud deployment
          at digitalocean.</p>
        <p>I have undertaken my personal project “Your
          Projects”, which is a web application, developed along the
          fullstack, with Django, MySql, Bootstrap and cloud deployment
          at DigitalOcean.</p>
        <p>Developed and developed websites in React.js for clients
          specific, with deployment on vercel.</p>
        <br />

        <h3>* NextOpinion - Software Developer <br />
          Current</h3>
        <p>I have worked with .NET, React.js and Django, contributing to
          joint development of web applications that use
          REST API, API and database consumption.
        </p>
        <p> I developed and maintained the platform
          “Invest 360º”, using Django, MySql, Html5&Css3 and
          JavaScript</p>

      </div>
      <div className="experiencias">
        <img src={Codando} alt="" />
        <br />
        <br />   
         
      </div>
      <div>
        <img className="circulo"  id="circulo" src={Circulo} alt="" />
      </div>









    </div>
  )
}

export default Stacks