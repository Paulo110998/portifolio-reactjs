import { BiLogoReact } from 'react-icons/bi'
import { TbCopyrightFilled } from 'react-icons/tb'
import { MdEmail } from "react-icons/md";
import "./footer.css"

function Footer() {
    return (
        <div>
            <footer>
                <div id="footer_content">
                    <div id="footer_contacts">
                    </div><br />
                    <ul className="footer_list">
                        <li><a href="#">Paulo Alves - Software Developer <TbCopyrightFilled /></a></li>
                    </ul>
                    <br />
                    <ul className="footer_list">
                        <li><a href="#">Email: evertonpaulo1998@gmail.com  <MdEmail/></a></li>
                    </ul>
                    <br />
                    <ul>
                        <li><a href="https://react.dev/">Website developed in React.js<BiLogoReact /> </a></li>
                    </ul>
                    <ul className='footer_list'>
                        <li><a href="#"></a></li>

                    </ul>

                </div>


            </footer>


        </div>
    )
}

export default Footer