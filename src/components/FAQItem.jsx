import { React, useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            className="flex flex-col border border-1 border-solid border-black p-4 w-full"
            onClick={toggleExpanded}
        >
            <div className="flex flex-row justify-between font-semibold ">
                {question}
                <button className=" font-semibold">
                    {expanded ? '-' : '+'}
                </button>
            </div>

            {expanded && <div className=" mt-3">{answer}</div>}
        </div>
    );
};

export default FAQItem;
