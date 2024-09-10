import heathcare from '../assets/healthcare.png';
import crypto from '../assets/crypto.jpg';
import Portfolio from '../assets/portfolio.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: heathcare,
                description: 'HEALTHCARE APP. Built with JAVA & XML.',
                link: 'https://github.com/KAVIYARASU-ASHOKAN/HealthCare_Android_App.git'
            },
            {
                image: crypto,
                description: 'CRPTO APP, Built with Kotlin & Jetpack Compose',
                link: 'https://github.com/KAVIYARASU-ASHOKAN/CRYPTO-APP.git'
            },
            {
                image: Portfolio,
                description: 'Portfolio Website . Built with React JS',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>Explore some of my standout projects built using React, Java, and Spring Boot.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}