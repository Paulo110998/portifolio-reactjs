import {PiContactlessPaymentFill} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import Lets from './img/lets_code.gif'
import Click from './img/click.gif'

function Contato(){
    return(
        <div>
            <div>
            <h1 className="h1-contato" >Contact-Us <PiContactlessPaymentFill/></h1>
            <br />
            <h1 className='redes-sociais'><a href="https://api.whatsapp.com/send?phone=5582993112813"><BsWhatsapp/></a>  <a href="https://www.instagram.com/paulo_works/?igshid=NTdlMDg3MTY%3D"><BsInstagram/></a>  <a href="https://www.linkedin.com/in/paulo-alves-76a9b6205/"><BsLinkedin/></a></h1>
            </div>
            <div>
                <img className='clickme' src={Click} alt="" />
            </div>
            <div>
                <img className='lets_code'  src={Lets} alt="" />

            </div>
        </div>
    )

}

export default Contato