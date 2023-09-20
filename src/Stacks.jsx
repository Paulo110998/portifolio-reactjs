import Html from "./img/stacks/html5.png"
import Css from "./img/stacks/css.png"
import ReactFrame from "./img/stacks/react.png"
import Bootstrap from "./img/stacks/bootstrap.png"
import Git from "./img/stacks/git.png"
import Github from "./img/stacks/github.png"
import Python from "./img/stacks/python.png"
import Django from "./img/stacks/django.png"
import Sql from "./img/stacks/sql-server.png"
import Mysql from "./img/stacks/mysql.png"
import DigitalOcean from "./img/stacks/digitalocean.png"
import Heroku from "./img/stacks/heroku.png"

import {BiCodeBlock} from 'react-icons/bi'

import ScrollReveal from "scrollreveal";

ScrollReveal({ reset: true });

ScrollReveal().reveal('.stacks', { delay: 370 });
ScrollReveal().reveal('.tagline', { delay: 200 });



function Stacks(){
    return(
        <div className="stacks">
          <br />
          <br />
           <h1 className="h1-stacks">Stacks <BiCodeBlock/> </h1>
           <br />
            <ul className="card-list">
              <li className="list-card">
                <img  src={Html} alt="" />
              </li>
              <li className="list-card">
                <img src={Css} alt="" />
              </li>
              <li className="list-card">
                <img src={ReactFrame} alt="" />
              </li>
              <li className="list-card">
                <img src={Bootstrap} alt="" />
              </li>
              <li className="list-card">
                <img src={Git} alt="" />
              </li>
              <li className="list-card">
                <img src={Github} alt="" />
              </li>
              <li className="list-card">
                <img src={Python} alt="" />
              </li>
              <li className="list-card">
                <img src={Django} alt="" />
              </li>
              <li className="list-card">
                <img src={Sql} alt="" />
              </li>
              <li className="list-card">
                <img src={Mysql} alt="" />
              </li>
              <li className="list-card">
                <img src={DigitalOcean} alt="" />
              </li>
              <li className="list-card">
                <img src={Heroku} alt="" />
              </li>
              
           </ul>
           
           

        </div>
    )
}

export default Stacks