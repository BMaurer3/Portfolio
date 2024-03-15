import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Logo from '/assets/LogoBM.webp';
import { IoClose } from 'react-icons/io5';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State for menu visibility

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className=" fixed top-5 xs:top-10 left-1/2 transform -translate-x-1/2 xlg:w-full w-[93vw] bg-primary border border-solid border-black z-50">
            <div className="px-4 flex justify-between items-center h-16 ">
                <div className="flex items-center">
                    <Link to="/">
                        <img src={Logo} alt="BM" width="80px" height="80px" />
                    </Link>
                </div>
                <div className="md:flex md:items-center md:space-x-8">
                    <ul className="hidden md:flex space-x-8">
                        {/* Hide on mobile */}
                        <li className="hover:underline self-center">
                            <Link to="/">Mes projets</Link>
                        </li>
                        <li className="hover:underline self-center">
                            <Link to="/about">À propos</Link>
                        </li>
                        <li className="bg-black py-2 px-6  rounded-lg text-white hover:cursor-pointer flex items-center">
                            <Link to="/">Me contacter</Link>
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
                {' '}
                {/* Mobile menu */}
                <hr className="border-black " />
                <ul className="bg-primary space-y-2 px-4 py-7 text-center flex flex-col gap-2">
                    <li className="hover:underline self-center">
                        <Link to="/projects" onClick={toggleMenu}>
                            Mes projets
                        </Link>
                    </li>
                    <li className="hover:underline self-center">
                        <Link to="/about" onClick={toggleMenu}>
                            À propos
                        </Link>
                    </li>
                    <li className="bg-black py-2 px-6 text-white hover:cursor-pointer items-center text-center">
                        <Link to="/contact" onClick={toggleMenu}>
                            Me contacter
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
