import './Projects.css';
import project1 from '../../assets/bikelocking.jpg';
import project2 from '../../assets/Raasp.jpeg';
import project3 from '../../assets/BM.jpeg';
import project4 from '../../assets/WCC.png';
import project5 from '../../assets/cerel dryer.jpg';
import project6 from '../../assets/Car.png';
import project7 from '../../assets/bikelocking.jpg';
import project8 from '../../assets/iot home.jpg';

const projects = [
    { id: 1, src: project1, alt: 'Description for 1st project', href: 'https://github.com/sheljin73/bike_lock', text: 'Smart Bike Lock' },
    { id: 2, src: project2, alt: 'Description for 2nd project', href: 'https://github.com/sheljin73/-raspberry_pi_pico_w_Thingspeak_DHT', text: 'IOT Gardening' },
    { id: 3, src: project3, alt: 'Description for 3rd project', href: 'https://github.com/sheljin73/battery_manager', text: 'EV Battery Cooling' },
    { id: 4, src: project4, alt: 'Description for 4th project', href: 'https://github.com/sheljin73/Wifi_Controlled_Car', text: 'WIFI Controlled Car' },
    { id: 5, src: project5, alt: 'Description for 5th project', href: 'https://github.com/sheljin73/Cerel_dryer', text: 'Cerel Dryer' },
    { id: 6, src: project6, alt: 'Description for 6th project', href: 'https://github.com/sheljin73/Turbo', text: 'Bluetooth Racing Car' },
    { id: 7, src: project7, alt: 'Description for 7th project', href: 'https://github.com/sheljin73', text: 'Smart Table' },
    { id: 8, src: project8, alt: 'Description for 8th project', href: 'https://github.com/sheljin73/IOT_home', text: 'IOT Home' },
];

const Projects = () => {
    return (
        <div className="projects" id='projects'>
            <h1>ROBOTICS PROJECTS</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <a key={project.id} href={project.href} className="project-item" target="_blank" rel="noopener noreferrer">
                        <img src={project.src} alt={project.alt}  />
                        <div className='project-title'>{project.text}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
