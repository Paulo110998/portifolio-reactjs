import "../projetos.css"


import { AiFillGithub } from "react-icons/ai"
import { BsGit } from "react-icons/bs"
import { ImHtmlFive} from "react-icons/im"
import { ImCss3 } from "react-icons/im"
import { IoLogoJavascript } from "react-icons/io"
import { GrMysql } from "react-icons/gr"
import { FaReact } from "react-icons/fa"
import { SiAxios } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiDotnet } from "react-icons/di";
import { GoProjectSymlink } from 'react-icons/go'


import Gif from "../projetos-gif/projeto5.gif"

export default function Projeto4(){
    return(
        <div className="projeto1" id="projeto1">
        <br />
        <p className="descriçao1" ><b>REST API Aplication  <DiDotnet /> + <FaReact/></b></p>
        <p className="descriçao1" >REST API that is in the process of fullstack development with .NET and consumption with React.js.</p>
        <br />
        <a target="blank" href="https://github.com/Paulo110998/.NET-React_aplication" className="acesse">Access <GoProjectSymlink /></a>
        <p className="descriçao2">Technologies: <TbBrandCSharp/> <DiDotnet />  <FaReact /> <SiAxios/> <GrMysql />  <AiFillGithub />  <BsGit />  <ImHtmlFive /> <ImCss3 /> <IoLogoJavascript /> </p>
        <img src={Gif} alt="" />
    </div>
    )
 }