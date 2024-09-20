import './Footer.css'
import { RxInstagramLogo } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-icon'><RxInstagramLogo /></div>
            <div className='footer-icon' ><FiGithub /></div>
            <div className='footer-icon'><TfiEmail /></div>
        </div>
    )
}

export default Footer