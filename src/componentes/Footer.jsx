import { BiLogoReact } from 'react-icons/bi'
import { TbCopyrightFilled } from 'react-icons/tb'

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
                    <ul>
                        <li><a href="https://react.dev/">Site desenvolvido em React <BiLogoReact /> </a></li>
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