import Html from "./img/stacks/html5.png"
import Css from "./img/stacks/css.png"
import JS from "./img/stacks/JS.png"
import ReactFrame from "./img/stacks/react.png"
import Bootstrap from "./img/stacks/bootstrap.png"
import Git from "./img/stacks/git.png"
import Github from "./img/stacks/github.png"
import Python from "./img/stacks/python.png"
import Django from "./img/stacks/django.png"
import Csharp from "./img/stacks/csharp.png"
import Dotnet from "./img/stacks/dotnet-logo2.png"
import Sql from "./img/stacks/sql-server.png"
import Mysql from "./img/stacks/mysql.png"
import DigitalOcean from "./img/stacks/digitalocean.png"
import Heroku from "./img/stacks/heroku.png"
import Vscode from "./img/stacks/vscode.png"
import VisualStudio from "./img/stacks/visualstudio.png"

import { BiCodeBlock } from 'react-icons/bi'

import ScrollReveal from "scrollreveal";

ScrollReveal({ reset: true });

ScrollReveal().reveal('.stacks', { delay: 370 });
ScrollReveal().reveal('.tagline', { delay: 200 });



function Stacks() {
  return (
    <div className="stacks">
      <br />
      <br />
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
          <img src={JS} alt="" />
          <p>JavaScript</p>
        </li>
        <li className="list-card">
          <img src={ReactFrame} alt="" />
          <p>React.js</p>
        </li>
        <li className="list-card">
          <img src={Bootstrap} alt="" />
          <p>Bootstrap</p>
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
          <img src={Sql} alt="" />
          <p>SQL</p>
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
        <br />
        <li className="list-card">
          <img src={Vscode} alt="" />
          <p>VSCode</p>
        </li>
        <li className="list-card">
          <img src={VisualStudio} alt="" />
          <p>Visual Studio</p>
        </li>

      </ul>



    </div>
  )
}

export default Stacks