import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '/assets/Linkedin.webp';
import GMail from '/assets/Gmail.webp';

function Footer() {
    return (
        <div className="my-20 container py-2 px-5">
            {/* CONTACT */}
            <div className="border border-black border-solid flex flex-col justify-center items-center p-10 gap-5">
                <h3 className="text-3xl font-semibold">Contactez-moi !</h3>
                <p className="text-sm text-center max-w-lg">
                    Si vous souhaitez discuter d'une opportunité ou simplement
                    échanger sur le design, n'hésitez pas à me contacter via les
                    liens ci-dessous.
                </p>
                <div className="flex gap-8">
                    <Link to="">
                        <img
                            src={LinkedIn}
                            width={60}
                            alt=""
                            className="border border-black border-solid border-2 rounded-lg"
                        />
                    </Link>

                    <Link to="">
                        <img
                            src={GMail}
                            width={60}
                            alt=""
                            className="border border-black border-solid border-2 rounded-lg"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between py-5">
                <div>
                    <p>© 2024 Bryan Maurer. All rights reserved.</p>
                </div>

                <div>
                    <ul className="flex flex-col sm:flex-row gap-8">
                        <li className="underline cursor-pointer">
                            Privacy Policy
                        </li>
                        <li className="underline cursor-pointer">
                            Terms of Service
                        </li>
                        <li className="underline cursor-pointer">
                            Cookies Settings
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
