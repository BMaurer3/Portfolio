import { useEffect } from 'react';

function PrivacyPolicy() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []); //lg: md: sm:

    return (
        <div className="text-base sm:mt-28 md:pt-24 lg:pt-24 "> 
            <h3 className="    ">
                Politique de Confidentialité
            </h3>
            <p className="      ">
                Votre confidentialité est importante pour moi, Bryan Maurer. J'ai réalisé ce site seul, et tous les projets présentés sont ma propriété. Ils ne doivent en aucun cas être volés ou utilisés sans mon consentement.
            </p>
            <div className="     ">
                <h3 className="    ">
                    Protection des données
                </h3>
                <p className="       ">
                    Je ne collecte aucune donnée personnelle, la sécurité et le respect de votre vie privée sont ma priorité.
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
