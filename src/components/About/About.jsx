import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <h1>ABOUT</h1>
            <div className='about-content'>
                <div className='about-description'>
                    I am a technophile and enthusiastic about learning coding.
                    Electronics and coding are my favorite things to do. I always
                    try to think out of the box and be innovative. I'm also
                    passionate about learning new things and growing
                    professionally. I'm always looking for opportunities to expand
                    my knowledge and take on new challenges. I'm a charismatic
                    leader. It is easy for me to adapt to a new environment . Strong
                    creative and analytical skills.
                </div>
                <div className='about-status'>
                    <abbr title="Mechatronics">
                    <div className="about-status-bar">
                        <label htmlFor="arduino" >Arduino</label>
                        <hr style={{ width: "60%" }} />
                    </div>
                    </abbr>

                    <abbr title="Mechatronics">
                    <div className="about-status-bar">
                        <label htmlFor="raspberrypi">Raspberry PI</label>
                        <hr style={{ width: "43%" }} />
                    </div>
                    </abbr>

                    <div className="about-status-bar">
                        <label htmlFor="htmlandcss">HTML and CSS</label>
                        <hr style={{ width: "55%" }} />
                    </div>

                    <div className="about-status-bar">
                        <label htmlFor="django">Django</label>
                        <hr style={{ width: "58%" }} />
                    </div>

                    <div className="about-status-bar">
                        <label htmlFor="reactjs">React JS</label>
                        <hr style={{ width: "40%" }} />
                    </div>

                </div>
            </div>

            <div className="internships">
                <h2><b>INTERNSHIPS:</b> Mechatronics, Full Stack Development</h2>
            </div>

        </div>
    )
}

export default About