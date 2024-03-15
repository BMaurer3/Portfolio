import { Link } from 'react-router-dom';
import projects from './constants/projects.json';
import heroImage from '/assets/Content.webp';
import passionImage from '/assets/passionImage.webp';
import GradientButton from './components/GradientButton';
import Button from './components/Button';
function App() {
    return (
        <>
            <div className=" container px-5">
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-5">
                    {/* HERO SECTION */}

                    {/* TEXT */}
                    <div className="flex flex-col text-left basis-1/2 gap-5  w-full self-center sm:mt-20 md:mt-0">
                        <h3 className="text-6xl lg:text-9xl md:text-7xl font-Vollkorn">
                            UX/UI <br /> Designer
                        </h3>
                        <p className="max-w-lg text-base">
                            Je crée des produits numériques accessibles et
                            inclusifs, avec une expérience de travail avec des
                            startups et des produits d'entreprise.
                        </p>
                        <GradientButton
                            to="/"
                            content="Découvrir mes projets !"
                        />
                    </div>

                    {/* IMAGE */}
                    <div className="basis-1/2">
                        <img src={heroImage} width={800} alt="" />
                    </div>
                </div>

                {/* USE CASE */}

                <div className="my-14 text-center flex flex-col gap-2 max-w-xlg mx-auto">
                    <p className=" font-Vollkorn">Use Case</p>
                    <h3 className=" text-3xl font-medium">
                        Découvrez mon travail !
                    </h3>
                    <p className="text-sm hidden sm:block">
                        Découvrez plusieurs projets auxquels j'ai apporté ma
                        contribution en tant qu'UX designer, web designer ou
                        même développeur web.
                    </p>
                </div>

                {/* PROJECTS CARDS */}
                <div className="flex flex-wrap gap-14 justify-center">
                    {projects.map((project) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            className="border border-solid border-black"
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

                    <Button to={'/projects'} content={'Voir Plus'} />
                </div>

                {/* MY PASSION, MY JOB */}
                <div className="flex md:flex-row flex-col my-24 gap-4">
                    <div className="basis-1/2 self-center flex-col ">
                        <div className="flex flex-col gap-5">
                            <h3 className=" text-4xl font-semibold">
                                L'UX/UI, ma passion, mon métier.
                            </h3>
                            <p className="text-base mb-4 max-w-xl">
                                Animé par ma passion pour le web, je m'engage à
                                concevoir les interfaces de demain. Je veux que
                                chaque interaction soit une expérience
                                émotionnelle enrichissante.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between md:max-w-lg gap-5 md:gap-0">
                            <div className="flex flex-col gap-3">
                                <img
                                    src="/assets/emotion.webp"
                                    alt="emotion"
                                    width={50}
                                />
                                <h3 className=" font-semibold">
                                    Émotion et intéraction
                                </h3>
                                <p className="text-base">
                                    Connaitre un utilisateur, c'est comprendre
                                    ses émotions.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <img
                                    src="/assets/saas.webp"
                                    alt="saas"
                                    width={50}
                                />
                                <h3 className=" font-semibold">
                                    Saas, Web, App
                                </h3>
                                <p className="text-base">
                                    J'explore tous les domaines pour concrétiser
                                    pleinement les projets.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 hidden md:block">
                        <img src={passionImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
