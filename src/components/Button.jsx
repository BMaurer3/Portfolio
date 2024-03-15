import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, content, className }) => {
    return (
        <Link
            to={to}
            className={`border border-1 border-solid border-black px-4 py-3 ${className}`}
        >
            {content}
        </Link>
    );
};

export default Button;
