import "../projetos.css"

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
import {GoProjectSymlink} from "react-icons/go"


import Gif from "../projetos-gif/projeto4.gif"

export default function Projeto4(){
    return(
        <div className="projeto1" id="projeto1">
        <br />
        <p className="descriçao1" ><b>Invest 360º <SiPython /></b></p>
        <p className="descriçao1" >Fullstack application developed in Python with Django.</p>
        <br />
        <a target="blank" href="https://api.whatsapp.com/send?phone=5582993112813&text=No%20momento%20este%20projeto%20est%C3%A1%20sendo%20direcionado%20para%20outra%20cloud,%20posso%20te%20demonstrar%20localmente?%20Se%20sim,%20%C3%A9%20s%C3%B3%20enviar%20essa%20mensagem!%20" className="acesse">Access <GoProjectSymlink /></a>
        <p className="descriçao2">Technologies: <SiDjango />  <SiPython />  <GrMysql /> <CgDigitalocean />  <AiFillGithub />  <BsGit />  <ImHtmlFive /> <ImCss3 /> <IoLogoJavascript /> <BsFillBootstrapFill />   </p>
        <img src={Gif} alt="" />
    </div>
    )
 }