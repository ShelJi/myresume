import './FS.css';
import project1 from '../../assets/OIP.jpg';
import project2 from '../../assets/check this.png';
import project3 from '../../assets/OIP.jpg';
import project4 from '../../assets/OIP.jpg';
import project5 from '../../assets/OIP.jpg';
import project6 from '../../assets/OIP.jpg';

const FSprojects = [
    { id: 1, src: project1, alt: 'Description for 1st project', href: 'https://github.com/shelji', text: 'TODO App' },
    { id: 2, src: project2, alt: 'Description for 2nd project', href: 'https://shelj.pythonanywhere.com', text: 'Mobile Shop Website' },
    { id: 3, src: project3, alt: 'Description for 3rd project', href: 'https://github.com/shelji', text: 'BackEnd TODO App' },
    { id: 4, src: project4, alt: 'Description for 4th project', href: 'https://github.com/shelji', text: 'Hotel Web Application' },
    { id: 5, src: project5, alt: 'Description for 5th project', href: 'https://github.com/shelji', text: 'Elegant Login Page' },
    { id: 6, src: project6, alt: 'Description for 6th project', href: 'https://github.com/shelji', text: 'Weather Web Application' },
];

const FSproject = () => {
    return (
        <div className="FSproject" id='FSproject'>
            <h1>WEB PROJECTS</h1>
            <div className="FSproject-grid">
                {FSprojects.map(project => (
                    <a key={project.id} href={project.href} className="FSproject-item" target="_blank" rel="noopener noreferrer">
                        <img src={project.src} alt={project.alt}  />
                        <div className='FSproject-title'>{project.text}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FSproject;
