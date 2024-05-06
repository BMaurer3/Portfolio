/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const GradientButton = ({ to, content, className, onClick }) => {
    const handleClick = (e) => {
        if (onClick) {
            e.preventDefault();  // Prevents default link behavior
            onClick();           // Execute custom function
        }
    };

    return (
        <Link
            to={to || "#"} // Fallback to "#" if no navigation is needed
            className={`bg-black px-5 py-3 gradient-border w-fit rounded-2xl text-white ${className}`}
            onClick={handleClick}
        >
            {content}
        </Link>
    );
};

export default GradientButton;
