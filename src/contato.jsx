import {PiContactlessPaymentFill} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Contato(){
    return(
        <div>
            <h1 className="h1-contato" >Contato <PiContactlessPaymentFill/></h1>
            <br />
            <h1 className='redes-sociais'><a href="https://api.whatsapp.com/send?phone=5582993112813"><BsWhatsapp/></a>  <a href="https://www.instagram.com/paulo_works/?igshid=NTdlMDg3MTY%3D"><BsInstagram/></a>  <a href="https://www.linkedin.com/in/paulo-alves-76a9b6205/"><BsLinkedin/></a></h1>
        </div>
    )

}

export default Contato