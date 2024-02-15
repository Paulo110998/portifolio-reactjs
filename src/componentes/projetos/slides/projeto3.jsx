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


import Gif from "../projetos-gif/projeto3.gif"

export default function Projeto3(){
    return(
        <div className="projeto1" id="projeto1">
        <br />
        <p className="descriçao1" ><b>Your Projects <SiPython /></b></p>
        <p className="descriçao1" >Fullstack application developed in Python with Django.</p>
        <br />
        <a target="blank" href="https://clownfish-app-jitiq.ondigitalocean.app/" className="acesse">Access <GoProjectSymlink /></a>
        <p className="descriçao2">Technologies: <SiDjango />  <SiPython />  <GrMysql /> <CgDigitalocean />  <AiFillGithub />  <BsGit />  <ImHtmlFive /> <ImCss3 /> <IoLogoJavascript /> <BsFillBootstrapFill />   </p>
        <img src={Gif} alt="" />
    </div>
    )
 }