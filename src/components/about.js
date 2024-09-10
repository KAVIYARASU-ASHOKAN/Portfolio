import AboutImg from '../assets/about.png';

export default function About() {
    const { line1, line2 } = {
        line1: 'Dedicated Software Development Engineer with a proven track record of excellence in Web and Mobile Application Development. Recognized for successfully designing, developing, and delivering highly available, scalable, and robust software solutions. Adept at driving innovation and efficiency in every project, with a commitment to continuous learning and professional growth.',
        line2: 'A passionate and driven individual deeply immersed in the dynamic realm of software development, fueled by an insatiable appetite for growth and challenge. Recognized as a natural leader, skilled at steering teams toward success by gathering requirements and structuring projects effectively. With a keen interest in research and development, motivated by the desire to pioneer innovative solutions at the forefront of technology. Eager to contribute leadership skills to a progressive organization, fostering collaborative teamwork and advancing R&D initiatives. Actively seeking opportunities that embrace continuous learning and exploration of new frontiers in software development.',
    };

    return (
        <section className="flex flex-col md:flex-row bg-secondary px-5 py-10 items-center" id="about">
            <div className="md:w-1/2 flex justify-center md:justify-start">
                <img src={AboutImg} alt="About Me" className="max-w-full h-auto" />
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
                <div className="flex flex-col justify-center text-white max-w-lg">
                    <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
                        About Me
                    </h1>
                    <p className="pb-5 text-justify">{line1}</p>
                    <p className="pb-5 text-justify">{line2}</p>
                </div>
            </div>
        </section>
    );
}
