import React, { useState } from 'react';

const DropdownCard = ({ heading, titles, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="pt-4">
            <a className="hover:text-cyan-600 hover:underline" href="https://hu-my.sharepoint.com/personal/mbarrozo_g_harvard_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch%2Fbarrozo%5Fjmp%2Epdf&parent=%2Fpersonal%2Fmbarrozo%5Fg%5Fharvard%5Fedu%2FDocuments%2FResearch&ga=1">
                {heading}
            </a>
            <div className="my-1 relative">
                <button className="flex items-center justify-between w-full text-left text-md">
                    <span>
                        <span>[</span>
                        <span className="text-cyan-600" onClick={toggleDropdown}>abstract</span>
                        {titles && titles.length > 0 && (
                            <span className="text-black">
                                {' '}
                                {titles.map((title, index) => (
                                    <React.Fragment key={index}>
                                        {index >= 0 && ' | '}
                                        <a href={title.link} className="text-cyan-600 hover:underline">
                                            {title.text}
                                        </a>
                                    </React.Fragment>
                                ))}
                            </span>
                        )}
                        <span>]</span>
                    </span>
                </button>
                {isOpen && (
                    <div className="mt-2 text-left">
                        <div className="border-l-4 border-cyan-600 pl-4">
                            <p>{description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownCard;