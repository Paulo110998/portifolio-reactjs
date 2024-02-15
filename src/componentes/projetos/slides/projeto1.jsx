import Gif from "../projetos-gif/projeto1.gif"
import "../projetos.css";

import { AiFillGithub } from "react-icons/ai"
import { BsGit } from "react-icons/bs"
import { ImHtmlFive} from "react-icons/im"
import { ImCss3 } from "react-icons/im"
import { IoLogoJavascript } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { RxVercelLogo } from "react-icons/rx"
import { GoProjectSymlink } from 'react-icons/go'


export default function Projeto1() {
    return (
        <div className="projeto1" id="projeto1">
            <br />           
            <p className="descriçao1" ><b>Lucas Vieira Jiu-Jitsu Academy  <FaReact /></b></p>
            <p className="descriçao1" >Front-end application developed in React.js..</p>
            <br />
            <a target="blank" href="https://www.lucasvieiracademybjj.com.br/" className="acesse">Access <GoProjectSymlink /></a>
            <p className="descriçao2" >Technologies: <FaReact /> <IoLogoJavascript /> <ImHtmlFive /> <ImCss3 />  <BsGit />  <AiFillGithub />  <RxVercelLogo /> </p>
            <img src={Gif}  alt="" />
            
        </div>
    )
}