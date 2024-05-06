/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Button = ({ to, content, className, onClick }) => {
    const handleClick = (event) => {
        if (onClick) {
            event.preventDefault();  // Prevents default link behavior
            onClick();           // Execute custom function
        }
        // If no onClick function is provided, the link will behave as usual
    };

    return (
        <Link
            to={to || "#"} // Fallback to "#" if no navigation is needed
            className={`border border-1 border-solid border-black project-border px-4 py-3 ${className}`}
            onClick={handleClick}
        >
            {content}
        </Link>
    );
};

export default Button;