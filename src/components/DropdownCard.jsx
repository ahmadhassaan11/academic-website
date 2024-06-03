import React, { useState } from 'react';

const DropdownCard = ({ heading, titles, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="pt-4">
            <p className="hover:text-maincolor hover:underline">
                {heading}
            </p>
            <div className="my-1 relative">
                <button className="flex items-center justify-between w-full text-left text-md">
                    <span>
                        <span>[</span>
                        <span className="text-maincolor" onClick={toggleDropdown}>abstract</span>
                        {titles && titles.length > 0 && (
                            <span className="text-black">
                                {' '}
                                {titles.map((title, index) => (
                                    <React.Fragment key={index}>
                                        {index >= 0 && ' | '}
                                        <a href={title.link} className="text-maincolor hover:underline">
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
                        <div className="border-l-4 border-maincolor pl-4">
                            <p>{description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownCard;