import './Hero.css'
import shelj from '../../assets/shelj.jpg'
import resume from '../../assets/SHELJIN.pdf'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <img src={shelj} alt="lorem pic" />
            <h1> Hello, <span>I am SHELJIN</span></h1>
            <p></p>
            <a href={resume} download>
                <div className='hero-resume'>Resume</div>
            </a>
        </div>
    )
}

export default Hero