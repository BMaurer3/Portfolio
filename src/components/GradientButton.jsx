import React from 'react';
import { Link } from 'react-router-dom';

const GradientButton = ({ to, content, className }) => {
    return (
        <Link
            to={to}
            className={`bg-black px-5 py-3 gradient-border w-fit rounded-2xl text-white ${className}`}
        >
            {content}
        </Link>
    );
};

export default GradientButton;
