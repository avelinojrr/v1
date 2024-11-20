
import { v4 as uuidv4 } from 'uuid';
import { experience } from '../../data.js';
import '../../stylesheets/sections/Experience.css';

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <h2 className="section-head">Work Experience</h2>
                <div className="timeline">
                    {experience.map((job, index) => (
                        <div
                            key={uuidv4()}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content">
                                <h3 className="job-title">{job.name}</h3>
                                <p className="job-description">{job.description}</p>
                                <div className="job-stack">
                                    {job.stack.map((tech) => (
                                        <span key={uuidv4()} className="tech-item">
                                            <tech.icon className='tech-icon' /> {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;