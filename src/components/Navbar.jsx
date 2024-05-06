import  { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Logo from '/assets/LogoBM.webp';
import { IoClose } from 'react-icons/io5';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State for menu visibility

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="fixed top-5 xs:top-10 left-1/2 transform -translate-x-1/2 lg:w-2/3 w-[93vw] bg-primary border border-solid border-black z-50">
            <div className="px-4 flex justify-between items-center h-16 ">
                <div className="flex items-center">
                    <Link to="/" onClick={scrollToTop}> {/* Ajout de l'événement onClick */}
                        <img src={Logo} alt="BM" width="80px" height="80px" />
                    </Link>
                </div>
                <div className="md:flex md:items-center md:space-x-8">
                    <ul className="hidden md:flex space-x-8">
                        {/* Hide on mobile */}
                        <li className="hover:underline self-center">
                            <Link to="/mesprojets" onClick={scrollToTop}> {/* Ajout de l'événement onClick */}
                                Mes projets
                            </Link>
                        </li>
                        <li className="hover:underline self-center">
                            <Link to="/about" onClick={scrollToTop}> {/* Ajout de l'événement onClick */}
                                À propos
                            </Link>
                        </li>
                        <li className="bg-gradient-blue-pink py-2 px-6  rounded-lg text-primary  hover:cursor-pointer flex items-center">
                            <Link to="https://bento.me/bryanmaurer" onClick={scrollToTop}> {/* Ajout de l'événement onClick */}
                                Me contacter
                            </Link>
                        </li>
                    </ul>
                    <button onClick={toggleMenu} className="md:hidden block ">
                        {!isOpen ? (
                            <IoMenuSharp fontSize={24} />
                        ) : (
                            <IoClose fontSize={24} />
                        )}
                    </button>
                </div>
            </div>
            <div className={isOpen ? 'block md:hidden' : 'hidden'}>
    {/* Mobile menu */}
    <hr className="border-black" />
    <ul className="px-4 py-5 text-center flex flex-col border-solid">
        <li className="hover:underline self-center border-solid border-gray-900 py-3">
            <Link to="/mesprojets" onClick={() => { toggleMenu(); scrollToTop(); }}>
                Mes projets
            </Link>
        </li>
        <li className="hover:underline self-center py-3 elf-center">
            <Link to="/about" onClick={() => { toggleMenu(); scrollToTop(); }}>
                À propos
            </Link>
        </li>
        <li className="bg-gradient-blue-pink py-3 text-white hover:cursor-pointer items-center text-center">
            <Link to="/contact" onClick={() => { toggleMenu(); scrollToTop(); }}>
                Me contacter
            </Link>
        </li>
    </ul>
</div>

        </nav>
    );
}

export default Navbar;

