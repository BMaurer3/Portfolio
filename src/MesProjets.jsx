import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from './constants/projects.json';

function MesProjets() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container px-5 pt-10">
            
            {/* USE CASE */}
            <div className="my-14 text-center flex flex-col gap-2 max-w-xlg mx-auto pt-10 max-w-4xl">
                    <h3 className="font-Vollkorn lg:text-5xl text-3xl font-bold pb-2 lg:pb-1 ">
                        Tous mes projets
                    </h3>
                    <p className="lg:text-body text-sm sm:block ">
                    Découvrez ici plusieurs de mes projets en détail. Pour en voir davantage, je mets régulièrement à jour ma page <a href="https://dribbble.com/BryanDesign" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Dribbble</a>. Vous pouvez également me contacter via les liens du footer ou le menu de navigation pour en savoir plus.
                    </p>
                </div>
            {/* PROJECTS CARDS */}
            <div className="flex flex-wrap gap-14 justify-center  lg:mx-24 pb-16 ">
                {projects.map((project) => (
                    <Link
                        to={`/project/${project.id}`}
                        key={project.id}
                        className="border project-border"
                    >
                        <img
                            src={`assets/${project.imageUrl}`}
                            alt={project.title}
                        />
                        <div className="p-4 flex flex-col gap-5 md:flex-row justify-between">
                            <div className=" flex flex-col basis-1/2 gap-3">
                                <h2 className="text-2xl font-medium ">
                                    {project.cardTitle}
                                </h2>
                                <ul className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="gradient-border-tags text-sm cursor-defaul font-extralight"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="basis-1/2 flex">
                                <p className="text-sm self-center">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MesProjets;
