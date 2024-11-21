import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { experience } from '/src/api/experience';
import '../../stylesheets/sections/Experience.css';
import {IoIosArrowDown} from 'react-icons/io';

const Experience = () => {

    const [visibleExperiences, setVisibleExperiences] = useState(4);

    const loadMoreExperiences = () => {
        setVisibleExperiences(experience.length);
    };

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <h2 className="section-head">Experience</h2>
                <div className="timeline">
                    {experience.slice(0, visibleExperiences).map((job, index) => (
                        <div
                            key={uuidv4()}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content">
                                <h3 className="job-title">{job.name}</h3>
                                <p className='job-company'>{job.company}</p>
                                <p className="job-date">{job.startDate} - {job.endDate || 'Present'}</p>
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
                {visibleExperiences < experience.length && (
                    <button className='load-more' onClick={loadMoreExperiences}>
                        Load More <IoIosArrowDown className='arrow-icon' />
                    </button>
                )}
            </div>
        </section>
    );
};

export default Experience;