import React from 'react';
import GradientButton from './components/GradientButton';
import Button from './components/Button';
import FAQItem from './components/FAQItem';

function About() {
    return (
        <div className="min-h-[75vh] flex flex-col">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row-reverse self-end">
                <div className=" basis-1/2">
                    <img src="/assets/about-header.webp" alt="" />
                </div>
                <div className=" basis-1/2 p-5 self-center flex-col max-w-2xl md:mt-20 lg:mt-0">
                    <h6 className=" font-Vollkorn text-2xl font-medium text-[#AAAAAA] mb-3 ">
                        Salut !
                    </h6>
                    <h3 className=" font-semibold text-4xl mb-3">
                        Moi, c’est Bryan !
                    </h3>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm">Bienvenue sur mon portfolio !</p>
                        <p className="text-sm leading-6">
                            Je suis constamment à la recherche de nouvelles
                            connaissances et je cherche à maîtriser de nouveaux
                            outils. J'ai choisi l'UX Design en raison de ma
                            grande empathie.
                        </p>
                        <p className="text-sm leading-6">
                            Je vous invite à parcourir certains de mes projets
                            et à découvrir qui je suis. N'hésitez pas à me
                            contacter si vous avez des questions, je suis à
                            votre service !
                        </p>

                        <div className="flex gap-5">
                            <GradientButton
                                to={'/'}
                                content={'Découvrir mes projets !'}
                            />
                            <Button
                                to={'/about'}
                                content={'Qui-suis-je ?'}
                                className={'hidden md:block'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-5">
                {/* EXPERIENCE */}
                <div className="flex flex-col md:flex-row gap-10 my-20">
                    <div className="basis-1/2">
                        <img
                            src="/assets/experience-image.webp"
                            alt="ExperienceImage"
                        />
                    </div>
                    <div className="basis-1/2 self-center flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <h3 className=" text-3xl font-semibold">
                                3 ans dédié à l’expérience et l’interface
                                utilisateur.
                            </h3>
                            <p className="text-sm">
                                Une fois ma licence en poche, j’ai fait le choix
                                en 2021 d’intégré un des seuls Master spécialisé
                                en UX-UI en France car je souhaitait en faire ma
                                carrière et ce fut la meilleure décision de ma
                                vie.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div>
                                <h3 className=" text-3xl font-semibold">10+</h3>
                                <p className="text-sm">
                                    Des dizaines de projets versatiles mêlant
                                    graphisme, webdesign, vidéo, photo et ce .
                                    toujours dédié à l’utilisateur.
                                </p>
                            </div>
                            <div>
                                <h3 className=" text-3xl font-semibold">
                                    2 ans
                                </h3>
                                <p className="text-sm">
                                    J'ai accumulé deux années d'expérience
                                    professionnelle, avec un point culminant
                                    lors de mon année en tant qu'alternant en
                                    tant que UX/UI Designer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 my-20">
                    <div className="flex flex-col gap-5 basis-1/2">
                        <h3 className=" text-3xl font-semibold">
                            Pourquoi moi ?
                        </h3>
                        <p className="text-sm">
                            Trouvez les réponses aux questions que vous puirriez
                            vous poser ! Si vous en avez d’autres n’hesitez pas
                        </p>
                        <Button
                            to={'/'}
                            content={'Contact'}
                            className={'w-24'}
                        />
                    </div>
                    <div className="flex flex-col gap-3 basis-1/2">
                        <FAQItem
                            question={'Centré sur les résultats'}
                            answer={'Type Answer Here'}
                        />
                        <FAQItem
                            question={'Mon approche polyvalente'}
                            answer={'Type Answer Here'}
                        />
                        <FAQItem
                            question={'Un travail d’équipe'}
                            answer={'Type Answer Here'}
                        />
                        <FAQItem
                            question={'Ce que je cherche chez vous'}
                            answer={'Type Answer Here'}
                        />
                        <FAQItem
                            question={'Quand pouvons-nous commencer ?'}
                            answer={'Type Answer Here'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
