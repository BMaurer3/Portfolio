// import { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from './constants/projects.json';
import GradientButton from './components/GradientButton';
import Button from './components/Button';
import heroImage from '/assets/Image_header.png';
import passionImage from '/assets/home_tools.png';

function App() {
    const limitedProjects = projects.slice(0, 2);
    // const [isOpen, setIsOpen] = useState(false); // State for menu visibility. Seems to be unused, can be removed if not needed
    // const toggleMenu = () => setIsOpen(!isOpen); // Seems to be unused, can be removed if not needed
    const scrollToProjects = () => {
        const section = document.getElementById('projects');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };

    return (
        <>
            <div className="container px-5">
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-5 "> 
                    <div className=" lg:gap-8 gap-4 flex flex-col text-left basis-1/2  w-full self-center  ml-0 lg:ml-0 md:ml-5 sm:ml-5 ">
                        <h3
                            className="text-6xl lg:text-9xl md:text-7xl md:pt-32 lg:pt-12 font-Vollkorn"
                            style={{ lineHeight: '80%' }}
                        >
                            UX/UI <br /> Designer
                        </h3>
                        <p className="max-w-lg text-base pb-4">
                        Ce que j’aime, c’est imaginer et concevoir des solutions sur mesure pour les <strong>utilisateurs</strong>, tout en prenant en compte les objectifs <strong>business</strong> des clients. Je mets mon <strong>empathie</strong> et mes compétences à votre service.                        </p>
                        <GradientButton
                            onClick={scrollToProjects}
                            content="Découvrir mes projets ↓ "
                        />
                    </div>
                    <div className="basis-1/2">
                        <img src={heroImage} width={800} alt="" />
                    </div>
                </div>
                <div  id="projects" className="my-10 lg:my-14 text-center flex flex-col pt-16 gap-2 max-w-xlg mx-auto">
                    <h3 id="projects" className="font-Vollkorn text-3xl lg:text-5xl  font-bold ">
                        Mes derniers projets 
                    </h3>
                    <p className="text-sm hidden sm:block ">
                        Découvrez plusieurs projets auxquels j&apos;ai apporté ma
                        contribution en tant que <strong>Product Manager/Designer</strong>, <strong>UX/UI Designer</strong> ou
                        même Développeur <strong>Web</strong>.
                    </p>
                </div>
                <div className="flex flex-wrap gap-16 lg:gap-24 justify-center max-h-md lg:mx-24 ">
                    {limitedProjects.map((project) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            className="border border-solid border-black project-border"
                        >   
                            <img
                                src={`assets/${project.imageUrl}`}
                                alt={project.title}
                            />
                            <div className="p-4 flex flex-col gap- md:flex-row justify-between gap-4">
                                <div className="flex flex-col basis-1/2 gap-3">
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
                    <Link className=''>
                        <Button 
                            to="/mesprojets"
                            content={'Voir plus de projets'}
                        />
                    </Link>
                </div>
                <div className="flex md:flex-row flex-col my-24 gap-8 smlg:mx-16">
                    <div className="basis-1/2 self-top flex-col ">
                        <div className="flex flex-col gap-5 max-w-lg">
                            <h3 className="font-Vollkorn text-5xl font-bold pb-6">
                                Polyvalence et adaptation
                            </h3>
                            <p className="text-base mb-4 max-w-xl">
                                Avec une solide maîtrise du design d&apos;expérience utilisateur, je combine une compréhension approfondie des <strong>méthodes</strong> <strong>UX</strong> avec des <strong>compétences techniques avancées</strong>.
                                <br />
                                <br />
                                Mon objectif est de concevoir des produits à la fois intuitifs et captivants, garantissant des expériences utilisateur <strong>optimales</strong>.            
                            </p>
                        </div>
                        <div className="flex flex-col mb-8 md:flex-row justify-between md:max-w-lg  md:gap-0"></div>
                    </div>
                    <div className="basis-1/2  md:block">
                        <img src={passionImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
