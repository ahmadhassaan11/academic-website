import React, { useState } from 'react';

const DropdownCard = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-2 text-left">
                JOB MARKET PAPER:
                <a href="https://hu-my.sharepoint.com/personal/mbarrozo_g_harvard_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch%2Fbarrozo%5Fjmp%2Epdf&parent=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch&ga=1"
                    className="underline hover:text-cyan-600"
                >
                    Market Power and Carbon Emissions in the Amazon
                </a>
            </h2>

            <div className="border p-4 my-4 shadow-md bg-gray-100">
                <button onClick={toggleDropdown} className="flex items-center justify-between w-full text-left text-lg font-bold">
                    <span>{isOpen ? '▼' : '▶'} {title}</span>
                </button>
                {isOpen && (
                    <div className="mt-4 p-3 bg-gray-50 text-left">
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownCard;