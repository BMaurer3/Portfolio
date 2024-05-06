/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import GradientButton from './components/GradientButton';
import Button from './components/Button';
import FAQItem from './components/FAQItem';

function About() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="  margin: auto;
         min-h-[75vh] flex flex-col">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row-reverse self-end gap-8">
                <div className="basis-1/2 h-full">
                    <img src="/assets/about-header.png" alt="" className="h-full object-cover" />
                </div>
                <div className=" lg:pt12 lg:px-32 md:px-16 md:mt-12 sm:mx-2 sm:pt-12 basis-1/2 self-center px-5 sm:pl-12 ">
                    <h6 className=" font-Vollkorn text-4xl lg:text-5xl font-bold gradient-text ">
                        Salut !
                    </h6>
                    <h3 className="font-Vollkorn font-bold text-4xl sm:text-3xl md:text-3xl lg:text-6xl mb-7 justify-center">
                        <nobr>Moi, c’est Bryan !</nobr>
                    </h3>
                    <div className="flex flex-col gap-6">
                        <p className="text-base">Bonjour et bienvenue sur mon portfolio !</p>
                        <p className="text-base leading-6">
                        À 23 ans, ma grande <strong>empathie</strong> est mon atout numéro un en tant qu'<strong>UX Designer</strong>. Mon objectif est de vous comprendre afin de créer le meilleur projet possible&nbsp;.
                        </p>
                        <p className="text-base leading-6 mb-7">
                            Je vous invite à parcourir certains de mes projets et à découvrir qui je suis. N'hésitez pas à me contacter si vous avez des questions, je suis à votre <strong>service</strong>&nbsp;  !   </p>

                        <div className="flex gap-5">
                            <GradientButton
                                to={'/mesprojets'}
                                content={'Découvrir mes projets !'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container lg:px-12 md:px-12 px-5">
                {/* EXPERIENCE */}
                <div className="flex flex-col md:flex-row gap-20 my-20">
                    <div className="basis-1/2 self-top">
                        <img
                            src="/assets/about_tools.png"
                            alt="ExperienceImage"
                        />
                    </div>
                    <div className="basis-1/2 self-center flex flex-col gap-10  ">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-Vollkorn text-5xl font-bold pb-5">
                                Mes outils
                            </h3>
                            <p className="text-base">
                            Je maîtrise un large éventail de logiciels pour mener à bien les projets UX/UI. Étant donné que ce domaine est en constante <strong>évolution</strong>, je reste régulièrement informé des nouveaux outils utilisés dans le secteur. Cette <strong>veille</strong> me permet de mieux les comprendre et d'assimiler rapidement de nouveaux logiciels. <br/><br/>
                            Cela fait maintenant <strong>5 ans</strong> depuis que j'ai conçu mon premier projet web. Depuis, mon objectif n'a jamais changé : perfectionner mes compétences pour concevoir tous les projets avec une précision au <strong>pixel près.</strong>

                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div>
                                <h3 className="text-3xl font-semibold pb-4">Versatilité </h3>
                                <p className="text-sm">
                                    Toujours curieux et avide <strong>d'apprendre</strong>, j'ai exploré plusieurs domaines, allant du web à l'audiovisuel, en passant par le game design et le graphisme.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold pb-3">
                                    Adaptabilité
                                </h3>
                                <p className="text-sm">
                                Mes outils sont un moyen pour créer ensemble un produit qui vous correspond. Je m'adapte donc à votre demande et je ne me limite pas à une solution, cherchant celle qui est <strong>optimale</strong>.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 my-20">
    <div className="flex flex-col gap-5 max-w-xl basis-full md:basis-1/2">
        <h3 className="font-Vollkorn text-5xl font-bold">
            Pourquoi moi&nbsp;?
        </h3>
        <p className="text-sm">
            Dans un marché de plus en plus compétitif où le nombre d'UX Designers ne cesse d'augmenter, je suis conscient de l'importance de se démarquer. Voici pourquoi vous devriez me choisir pour vos projets et/ou votre entreprise
        </p>
        <Button
            to={'https://bento.me/bryanmaurer'}
            content={'Contact'}
            className={'w-24'}
        />
    </div>
    <div className="flex flex-col gap-3 basis-full md:basis-1/2 md:justify-start md:items-end">
        <FAQItem
            question={'Centré sur les résultats'}
            answer={"Opter pour l'UX, c'est aspirer à fournir plus d'efforts pour GARANTIR des résultats. J'oriente ma conception vers des résultats tangibles, les évaluant à l'aide de KPI que nous déterminons ensemble."}
        />
        <FAQItem
            question={'Une approche business'}
            answer={"J'ai conscience des contraintes commerciales liées au coût et au temps, et j'optimise mon travail en conséquence."}
        />
        <FAQItem
            question={'Un travail d’équipe'}
            answer={"Parce que l’aboutissement d’un projet repose sur une équipe, ma vision de la conception se base sur l’échange et la communication. Que ce soit pour des initiatives modestes ou d'envergure, et peu importe les supports, je m’adapte à votre équipe et à vos besoins pour faire la différence."}
        />
        <FAQItem
            question={"UX = Numérique ?"}
            answer={"Bien que mes projets soient majoritairement numériques, l'UX Design représente bien plus. En effet, il fait partie d'une vision globale de création et de gestion de projet que je vous aide à mettre en place à travers des solutions adaptées à vos besoins."}
        />
        <FAQItem
            question={'Ce que je cherche chez vous ?'}
            answer={"Ce que je valorise le plus, c'est votre engagement et votre connaissance de votre projet. Selon moi, l'essentiel en UX est de faire des choix clairs et de s'adapter constamment. L'echec n'est qu'une étape dans le perfectionnement de votre produit/services"}
        />
    </div>
</div>

            </div>
        </div>
    );
}

export default About;
