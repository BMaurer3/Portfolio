/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { React } from 'react';
import { useParams } from 'react-router-dom';
import projects from './constants/projects.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

import Button from './components/Button';

function Project() {
    const { id } = useParams();
    const project = projects[id - 1];
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        // If the project is not found, redirect to the home page
        window.location.href = '/';
        return null;
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        adaptiveHeight:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '109%',
                    transform: 'translateY(-50%)',
                    left: '10px',
                    cursor: 'pointer',
                    opacity: '70%',
                    zIndex: '999'
                }}
                color="black"
                fontSize={34}
            >
                <IoIosArrowBack color="black" onClick={onClick} fontSize={24} />
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '109%',
                    transform: 'translateY(-50%)',
                    right: '10px',
                    cursor: 'pointer',
                    opacity: '70%',
                    zIndex: '999'
                }}
                color="black"
                fontSize={34}
            >
                <IoIosArrowForward
                    color="black"
                    onClick={onClick}
                    fontSize={24}
                />
            </div>
        );
    };

    const openLightbox = (index, imageUrl) => {
        setLightboxIndex(index);
        setLightboxImage(imageUrl);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        setLightboxImage(null);
    };

    return (
        <div className="min-h-[75vh]">
            <img
                src={project.headerImage}
                className="hidden md:block"
                alt={project.title}
            />
            <img
                src={project.headerImageMobile}
                className=" md:hidden"
                alt={project.title}
            />
            <div className="container px-5 ">
                {/* TITLE */}
                <div className="flex flex-col items-center my-10 gap-2 lg:pb-12 md:pb-8 sm:pb-6">
                    <h3 className="font-Vollkorn text-4xl font-medium text-center">
                        {project.title}
                    </h3>
                    <p className="text-sm text-center mb-2">
                        {project.keywords}
                    </p>
                    <ul className="flex flex-wrap  gap-2 px-1 justify-center">
                        {project.tags.map((tag) => (
                            <li
                                key={tag}
                                className="gradient-border-tags text-sm font-extralight"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* DETAILS */}
                <div className="hidden md:flex gap-16 mb-10 max-w-6xl  mx-auto  ">
                    <div className=" basis-1/4 flex flex-col gap-8  ">
                   
                     <div>
                            <h3 className=" font-Vollkorn font-bold text-3xl  text-[black]">
                                Overview
                            </h3>
                        </div>
                        <div>
                            <h3 className=" font-Vollkorn font-semibold text-lg text-[black]">
                                Mon rôle
                            </h3>
                            <p className="font-Manrope">{project.myRole}</p>
                        </div>
                        <div>
                            <h3 className=" font-Vollkorn font-semibold text-lg text-[black]">
                                Durée du projet
                            </h3>
                            <p className="font-Manrope">{project.duree}</p>
                        </div>
                        <div>
                            <h3 className=" font-Vollkorn font-semibold text-lg text-[black]">
                                À propos
                            </h3>
                            <p className="font-Manrope">{project.about}</p>
                        </div>
                        
                    </div>
                    <div className=" basis-3/4 flex flex-col gap-8">
                        <div>
                            <h3 className=" font-Vollkorn font-semibold text-[black] text-3xl pb-4">
                                Contexte
                            </h3>
                            <p className="font-Manrope"> {project.context}</p>
                        </div>
                        <div>
                            <h3 className=" font-Vollkorn font-semibold text-lg text-[black]">
                                The Process
                            </h3>
                            {project.realization.benchmark &&
                                project.realization.benchmark.length > 0 && (
                                    <div>
                                        <p className=" font-medium">
                                            Benchmark et User Research
                                        </p>
                                        <ul
                                            style={{
                                                listStyleType: 'disc',
                                                marginLeft: '25px'
                                            }}
                                        >
                                            {project.realization.benchmark.map(
                                                (item, index) => (
                                                    <li key={index}>{item}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}

                            {project.realization.concept &&
                                project.realization.concept.length > 0 && (
                                    <div>
                                        <p className=" font-medium mt-5">
                                            Création du concept
                                        </p>
                                        <ul
                                            style={{
                                                listStyleType: 'disc',
                                                marginLeft: '25px'
                                            }}
                                        >
                                            {project.realization.concept.map(
                                                (item, index) => (
                                                    <li key={index}>{item}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}

                            {project.realization.prototype &&
                                project.realization.prototype.length > 0 && (
                                    <div>
                                        <p className=" font-medium mt-5">
                                            Phase de prototypage du site
                                        </p>
                                        <ul
                                            style={{
                                                listStyleType: 'disc',
                                                marginLeft: '25px'
                                            }}
                                        >
                                            {project.realization.prototype.map(
                                                (item, index) => (
                                                    <li key={index}>{item}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>

                <div className="block md:hidden">
                     <div className="mb-12">
                            <h3 className=" font-Vollkorn font-semibold text-[black] text-lg ">
                                Contexte
                            </h3>
                            <p>{project.context}</p>
                        </div>
                    <Slider
                        {...settings}
                        prevArrow={<CustomPrevArrow />}
                        nextArrow={<CustomNextArrow />}
                    >
                        <div className="mb-8">      
                            <h3 className=" font-Vollkorn font-semibold text-[black] text-lg">
                                Mon rôle
                            </h3>
                            <p>{project.myRole}</p>
                        </div>
                        <div className="mb-8">
                            <h3 className=" font-Vollkorn font-semibold text-[black] text-lg">
                                Durée du projet
                            </h3>
                            <p>{project.duree}</p>
                        </div>
                        <div className="mb-8">
                            <h3 className=" font-Vollkorn font-semibold text-[black] text-lg">
                                À propos
                            </h3>
                            <p>{project.about}</p>
                        </div>
                        
                    </Slider>   
                    <div className="my-16">
                        <h3 className=" font-Vollkorn font-semibold text-lg text-[black]  ">
                            The Process
                        </h3>
                        {project.realization.benchmark &&
                            project.realization.benchmark.length > 0 && (
                                <div>
                                    <p className=" font-medium">
                                        Benchmark et User Research
                                    </p>
                                    <ul
                                        style={{
                                            listStyleType: 'disc',
                                            marginLeft: '25px'
                                        }}
                                    >
                                        {project.realization.benchmark.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                        {project.realization.concept &&
                            project.realization.concept.length > 0 && (
                                <div>
                                    <p className=" font-medium mt-5 ">
                                        Création du concept
                                    </p>
                                    <ul
                                        style={{
                                            listStyleType: 'disc',
                                            marginLeft: '25px'
                                        }}
                                    >
                                        {project.realization.concept.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                            
                        {project.realization.prototype &&
                            project.realization.prototype.length > 0 && (
                                <div>
                                    <p className=" font-medium mt-5">
                                        Phase de prototypage du site
                                    </p>    
                                    <ul
                                        style={{
                                            listStyleType: 'disc',
                                            marginLeft: '25px'
                                        }}
                                    >
                                        {project.realization.prototype.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                        
                    </div>
                </div>

                {/* IDENTITY VISUALS */}
                <div className="flex flex-col  md:flex-row gap-5 lg:my-32 my-12 ">
                    <h3 className="text-3xl font-semibold basis-1/2">
                        {project.identityVisualText}
                    </h3>
                    <p className="text-base basis-1/2 ">{project.visualIdentity}</p>
                </div>
                <div>
                    <img className='mb-8'
                        src={project.visualImage}
                        alt=""
                        onClick={() => openLightbox(null, project.visualImage)}
                        style={{ cursor: 'pointer' }}
                    />
                </div>

                {/* EMPATHY */}
                <div className="flex flex-col md:flex-row lg:my-16 lg:gap-40 gap-20 lg:px-12">
                    <div className=" basis-1/2 flex flex-col self-center">
                        <h3 className=" hidden font-medium  text-lg opacity-60 ">
                            {project.sectionSubtitle}
                        </h3>
                        <h2 className="text-4xl font-Vollkorn  font-bold mb-6">
                            {project.sectionTitle}
                        </h2>
                        <p className="text-sm">{project.Empathy.body}</p>
                        <div className="flex gap-5 mt-5 flex-col md:flex-row mt-8">
                            <div className="basis-1/2">
                                <h3 className="font-bold mb-2">
                                    {project.sectionUnder1}
                                </h3>
                                <p className="text-sm">
                                    {project.Empathy.benchmark}
                                </p>
                            </div>
                            <div className="basis-1/2">
                                <h3 className="font-bold mb-2">
                                    {project.sectionUnder2}
                                </h3>
                                <p className="text-sm">
                                    {project.Empathy.userMaintenance}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" basis-1/2">
                        <img
                            src={project.Empathy.Image}
                            alt="Empathy Image"
                            onClick={() =>
                                openLightbox(null, project.Empathy.Image)
                            }
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>

                {/* PROTOTYPE */}
                <div className="flex flex-col my-16 gap-10">
                    <div className="flex flex-col my-5  gap-4 items-center">
                        <h3 className="text-4xl font-bold font-Vollkorn">
                            {project.titlegallery}
                        </h3>
                        <p className="text-sm max-w-2xl lg:text-center md:text-center sm:text-left">
                            {project.prototypeHighFi}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className=" basis-1/2 flex flex-col gap-5">
                            {project.galleryLeftSide.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt={`Image ${index}`}
                                    onClick={() => openLightbox(index)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </div>
                        <div className=" basis-1/2 flex flex-col gap-5">
                            {project.galleryRightSide.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt={`Image ${index}`}
                                    onClick={() =>
                                        openLightbox(
                                            index +
                                                project.galleryLeftSide.length
                                        )
                                    }
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {lightboxImage && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
                        onClick={closeLightbox}
                    >
                        <div
                            className="max-w-4xl w-full bg-white p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                            >
                                <IoClose />
                            </button>
                            <img src={lightboxImage} alt="Lightbox Image" />
                        </div>
                    </div>
                )}

                {lightboxIndex !== null && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
                        onClick={closeLightbox}
                    >
                        <div
                            className="max-w-4xl w-full bg-white p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                            >
                                <IoClose />
                            </button>
                            <img
                                src={
                                    project.galleryLeftSide[lightboxIndex] ||
                                    project.galleryRightSide[
                                        lightboxIndex -
                                            project.galleryLeftSide.length
                                    ]
                                }
                                alt={`Image ${lightboxIndex}`}
                            />
                        </div>
                    </div>
                )}

                {/* RESUTLS */}
                <div className="flex flex-col md:flex-row my-20 gap-5">
                    <div className=" basis-1/2 flex flex-col gap-7">
                        <div className="flex flex-col gap-2">
                            <h3 className="  hidden font-medium opacity-60 text-lg ">
                                Résultats
                            </h3>
                            <h3 className="text-4xl  font-Vollkorn font-bold pb-4">
                                Ce que je retiens du projet 
                            </h3>
                            <p>{project.result.remember}</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                            <Link
                                to="/mesprojets"
                                className="hover:underline self-center flex align-middle gap-1 justify-center py-3 px-4 border border-solid border-black "
                            >
                                Voir mes autres projets
                                <MdKeyboardArrowRight
                                    className=" self-center"
                                    fontSize={20}
                                />
                            </Link>
                            <Link
                                to="/about"
                                className="hover:underline self-center flex align-middle gap-1 justify-center"
                            >
                                Me découvrir
                                <MdKeyboardArrowRight
                                    className=" self-center"
                                    fontSize={20}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className=" basis-1/2 flex flex-col gap-7 mx-auto mx-4">
                    <div className="md:block max-w-md mx-auto">
                        <a href={project.result.link} target="_blank" rel="noopener noreferrer">
                                   <img 
                                    src={project.result.image}
                                    alt="resultImage"
                                   style={{ cursor: 'pointer' }}
                              />
                          </a>
                        </div>  
                        <div className="flex flex-col md:flex-row gap-5 md:p-6 ">
                            <div className="flex flex-col gap-3 basis-1/2">
                                <h5 className="text-lg font-semibold">
                                    {project.result.conclusiontitle1}
                                </h5>
                                <p className="text-sm">
                                    {project.result.feedback}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 basis-1/2">
                                <h5 className="text-lg font-semibold">
                                    {project.result.conclusiontitle2}
                                </h5>
                                <p className="text-sm">
                                    {project.result.userTestimonial}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
